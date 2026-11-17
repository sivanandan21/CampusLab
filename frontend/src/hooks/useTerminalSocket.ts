import { useEffect, useRef, useState, useCallback } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { useSettings } from '../app/SettingsContext';
import { Course, Experiment } from '../types/lab';

interface UseTerminalSocketOptions {
  sessionId: string;
  course?: Course;
  experiment?: Experiment;
  onCommandRun?: (cmd: string) => void;
}

export function useTerminalSocket({ sessionId, course, experiment, onCommandRun }: UseTerminalSocketOptions) {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const termInstance = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'CONNECTED' | 'RECONNECTING' | 'EXPIRED'>('CONNECTED');
  const { preferences, terminalThemeColors } = useSettings();

  const semTag = (course?.semester || 's4').toLowerCase();
  const codeTag = (course?.code || 'oslab').toLowerCase();
  const hostName = `ktu-${semTag}-${codeTag}`;
  const promptStr = `student@${hostName}:~$ `;

  const fitTerminal = useCallback(() => {
    if (fitAddonRef.current && termInstance.current) {
      try {
        fitAddonRef.current.fit();
      } catch (e) {
        // ignore layout resize during transition
      }
    }
  }, []);

  const resetTerminal = useCallback(() => {
    if (!termInstance.current) return;
    termInstance.current.reset();
    termInstance.current.writeln('\x1b[1;36m=== CampusLab Isolated Linux Sandbox (KTU 2024 Scheme) ===\x1b[0m');
    termInstance.current.writeln(`Environment: ${experiment?.environment || 'Ubuntu 24.04 LTS Container'}`);
    termInstance.current.writeln(`Course: ${course?.code || 'PCCSL407'} ${course?.title || 'Lab'} • Exp ${experiment?.expNumber || 1}`);
    termInstance.current.writeln('Type \x1b[1;33mhelp\x1b[0m to view commands, or run code directly.\r\n');
    termInstance.current.write(promptStr);
  }, [course, experiment, promptStr]);

  useEffect(() => {
    if (!terminalRef.current) return;

    // Create Terminal
    const term = new Terminal({
      cursorBlink: true,
      cursorStyle: 'block',
      fontSize: preferences.fontSize || 14,
      fontFamily: 'JetBrains Mono, Fira Code, monospace',
      theme: terminalThemeColors,
      scrollback: 1000,
      convertEol: true,
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    fitAddon.fit();

    termInstance.current = term;
    fitAddonRef.current = fitAddon;

    // Initial output
    const initialCmd = experiment?.initialExecutionCmd || 'gcc process_tree.c -o process_tree && ./process_tree';
    const initialOut = experiment?.initialExecutionOutput || 'Parent Process PID: 12450\nChild 1 Process PID: 12451 (parent: 12450)\nChild 2 Process PID: 12452 (parent: 12450)';

    term.writeln(`${promptStr}${initialCmd}`);
    initialOut.split('\n').forEach((line) => {
      term.writeln(line);
    });
    term.write(promptStr);

    let cmdBuffer = '';

    const handleKeyData = (data: string) => {
      const code = data.charCodeAt(0);

      // Enter key
      if (code === 13) {
        term.write('\r\n');
        const trimmed = cmdBuffer.trim();
        if (trimmed) {
          executeSimulatedCommand(trimmed);
          onCommandRun?.(trimmed);
        } else {
          term.write(promptStr);
        }
        cmdBuffer = '';
      }
      // Backspace key
      else if (code === 127 || code === 8) {
        if (cmdBuffer.length > 0) {
          cmdBuffer = cmdBuffer.slice(0, -1);
          term.write('\b \b');
        }
      }
      // Ctrl+C
      else if (code === 3) {
        term.write(`^C\r\n${promptStr}`);
        cmdBuffer = '';
      }
      // Regular printable input
      else if (code >= 32 && code <= 126) {
        cmdBuffer += data;
        term.write(data);
      }
    };

    const executeSimulatedCommand = (cmd: string) => {
      const parts = cmd.split(' ');
      const main = parts[0].toLowerCase();

      if (cmd === 'clear') {
        term.clear();
        term.write(promptStr);
        return;
      }

      if (cmd === 'help') {
        term.writeln('\r\n\x1b[1;33mAvailable Commands:\x1b[0m');
        term.writeln('  ls, pwd, cat, gcc, python3, psql, ps, clear, whoami, help');
        if (experiment?.initialExecutionCmd) {
          term.writeln(`  Suggested: \x1b[32m${experiment.initialExecutionCmd}\x1b[0m`);
        }
      } else if (cmd === 'ls' || cmd.startsWith('ls ')) {
        const ext = experiment?.submissionRequirements?.acceptedFormats?.split(',')[0] || '.c';
        term.writeln(`main${ext}  solution${ext}  Makefile  output.log  README.md`);
      } else if (cmd === 'pwd') {
        term.writeln(`/home/student/${hostName}`);
      } else if (cmd === 'whoami') {
        term.writeln('student');
      } else if (cmd.includes('python') || main === 'python3') {
        term.writeln('\x1b[32m[Python 3.12 Sandbox Execution: OK]\x1b[0m');
        if (experiment?.initialExecutionOutput) {
          experiment.initialExecutionOutput.split('\n').forEach(l => term.writeln(l));
        } else {
          term.writeln('Python script executed successfully. 0 errors.');
        }
      } else if (cmd.includes('gcc') || cmd.startsWith('./') || cmd.includes('make')) {
        term.writeln('\x1b[32m[GCC C17 Compilation: OK]\x1b[0m');
        if (experiment?.initialExecutionOutput) {
          experiment.initialExecutionOutput.split('\n').forEach(l => term.writeln(l));
        } else {
          term.writeln('Binary executed. Return code: 0.');
        }
      } else if (cmd.includes('psql') || cmd.includes('sql')) {
        term.writeln('psql (PostgreSQL 16.2)');
        term.writeln('Connected to campuslab_db.');
        if (experiment?.initialExecutionOutput) {
          experiment.initialExecutionOutput.split('\n').forEach(l => term.writeln(l));
        }
      } else if (cmd === 'ps' || cmd.startsWith('ps ')) {
        term.writeln('  PID TTY          TIME CMD');
        term.writeln('12440 pts/0    00:00:00 bash');
        term.writeln('12450 pts/0    00:00:00 container-runtime');
        term.writeln('12490 pts/0    00:00:00 ps');
      } else if (main === 'cat') {
        if (experiment?.sampleStarterCode) {
          experiment.sampleStarterCode.split('\\n').forEach(l => term.writeln(l));
        } else {
          term.writeln('// Starter code initialized.');
        }
      } else if (experiment?.initialExecutionCmd && cmd.includes(experiment.initialExecutionCmd.split(' ')[0])) {
        if (experiment?.initialExecutionOutput) {
          experiment.initialExecutionOutput.split('\n').forEach(l => term.writeln(l));
        }
      } else {
        term.writeln(`bash: ${main}: command completed in sandbox`);
      }

      term.write(promptStr);
    };

    const disposable = term.onData(handleKeyData);

    const handleResize = () => fitTerminal();
    window.addEventListener('resize', handleResize);

    return () => {
      disposable.dispose();
      window.removeEventListener('resize', handleResize);
      term.dispose();
    };
  }, [sessionId, course, experiment, terminalThemeColors, preferences.fontSize, fitTerminal, promptStr]);

  return {
    terminalRef,
    connectionStatus,
    fitTerminal,
    resetTerminal,
  };
}
