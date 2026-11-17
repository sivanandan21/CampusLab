import { useEffect, useRef, useState, useCallback } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { useSettings } from '../app/SettingsContext';
import { Course, Experiment } from '../types/lab';
import { createInitialShellState, runLinuxCommand, ShellState } from '../utils/linuxShellSimulator';

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

  const shellStateRef = useRef<ShellState>(createInitialShellState(course, experiment));

  useEffect(() => {
    shellStateRef.current = createInitialShellState(course, experiment);
  }, [course, experiment]);

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
      const result = runLinuxCommand(cmd, shellStateRef.current, experiment);

      if (result.clear) {
        term.clear();
        term.write(promptStr);
        return;
      }

      result.output.forEach((line) => {
        term.writeln(line);
      });

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
