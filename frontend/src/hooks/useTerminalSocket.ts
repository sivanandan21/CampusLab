import { useEffect, useRef, useState, useCallback } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { useSettings } from '../app/SettingsContext';

interface UseTerminalSocketOptions {
  sessionId: string;
  onCommandRun?: (cmd: string) => void;
}

export function useTerminalSocket({ sessionId, onCommandRun }: UseTerminalSocketOptions) {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const termInstance = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'CONNECTED' | 'RECONNECTING' | 'EXPIRED'>('CONNECTED');
  const [currentLine, setCurrentLine] = useState('');
  const { preferences, terminalThemeColors } = useSettings();

  const prompt = '\r\n\x1b[1;32mstudent@ktu-s4-oslab\x1b[0m:\x1b[1;34m~\x1b[0m$ ';

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
    termInstance.current.writeln('Environment: Ubuntu 24.04 LTS (Containerized non-root workspace)');
    termInstance.current.writeln('Type \x1b[1;33mhelp\x1b[0m to view laboratory commands, or run gcc / python3 / psql directly.\r\n');
    termInstance.current.write('student@ktu-s4-oslab:~$ ');
  }, []);

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

    // Print Initial Banner and simulated existing execution (matches Image 5)
    term.writeln('student@ktu-s4-oslab:~$ gcc process_tree.c -o process_tree && ./process_tree');
    term.writeln('Parent Process PID: 12450');
    term.writeln('Child 1 Process PID: 12451 (parent: 12450)');
    term.writeln('Child 2 Process PID: 12452 (parent: 12450)');
    term.write('student@ktu-s4-oslab:~$ ');

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
          term.write('student@ktu-s4-oslab:~$ ');
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
        term.write('^C\r\nstudent@ktu-s4-oslab:~$ ');
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
      const main = parts[0];

      if (cmd === 'clear') {
        term.clear();
        term.write('student@ktu-s4-oslab:~$ ');
        return;
      }

      if (cmd === 'help') {
        term.writeln('\r\n\x1b[1;33mAvailable Commands:\x1b[0m');
        term.writeln('  ls, pwd, cat, gcc, ./<binary>, ps, clear, whoami, help');
        term.writeln('  Example: \x1b[32mgcc process_tree.c -o process_tree && ./process_tree\x1b[0m');
      } else if (cmd === 'ls' || cmd.startsWith('ls ')) {
        term.writeln('process_tree.c  Makefile  output.log  process_tree*');
      } else if (cmd === 'pwd') {
        term.writeln('/home/student/ktu-s4-oslab');
      } else if (cmd === 'whoami') {
        term.writeln('student');
      } else if (cmd.includes('process_tree') && (cmd.includes('gcc') || cmd.startsWith('./'))) {
        if (cmd.includes('gcc')) {
          term.writeln('\x1b[32m[Compiling process_tree.c... Done]\x1b[0m');
        }
        term.writeln('Parent Process PID: 12450');
        term.writeln('Child 1 Process PID: 12451 (parent: 12450)');
        term.writeln('Child 2 Process PID: 12452 (parent: 12450)');
      } else if (cmd === 'ps' || cmd.startsWith('ps ')) {
        term.writeln('  PID TTY          TIME CMD');
        term.writeln('12440 pts/0    00:00:00 bash');
        term.writeln('12450 pts/0    00:00:00 process_tree');
        term.writeln('12451 pts/0    00:00:00 process_tree <defunct>');
        term.writeln('12452 pts/0    00:00:00 process_tree <defunct>');
        term.writeln('12490 pts/0    00:00:00 ps');
      } else if (main === 'cat') {
        term.writeln('#include <stdio.h>');
        term.writeln('#include <unistd.h>');
        term.writeln('int main() { printf("Parent PID: %d\\n", getpid()); fork(); return 0; }');
      } else {
        term.writeln(`bash: ${main}: command not found (simulated lab sandbox)`);
      }

      term.write('student@ktu-s4-oslab:~$ ');
    };

    const disposable = term.onData(handleKeyData);

    const handleResize = () => fitTerminal();
    window.addEventListener('resize', handleResize);

    return () => {
      disposable.dispose();
      window.removeEventListener('resize', handleResize);
      term.dispose();
    };
  }, [sessionId, terminalThemeColors, preferences.fontSize, fitTerminal]);

  return {
    terminalRef,
    connectionStatus,
    fitTerminal,
    resetTerminal,
  };
}
