/*

- Eine Komponente Task bauen, die als "Parent" fungiert.
  - Hierin die Liste an Task statisch definieren
  - Unterhalb der Liste der Task eine Art Navigation bauen.
    - Diese besteht aus 3 Buttons: "Show all", "Show done", "Show open/undone"
    - Die Funktionalität der Buttons erarbeiten wir uns heute 😉
- Eine weitere Komponente bauen: `TaskList`
  - Dieser weisen wir, über Properties, die Liste an Task zu
  - Diese iterariert über die Task und ruft `TaskDetail` detail pro Task auf.
- Eine 3. Komponente bauen: `TaskDetail`
  - Diese zeigt die Details des jeweiligen Task an


- Darin ist alles enthalten was wir bis jetzt gemacht haben:
  - Komponenten bauen
  - Interfaces für Properties bauen
  - Properties verwenden
  - "Multiple Children" oder eine Liste von TSX ausgeben
  - Das komponieren von meherer Komponenten.

*/

interface Task {
  name: string;
  done: boolean;
}

const allTasks: Task[] = [
  { name: "1. Task", done: false },
  { name: "2. Task", done: true },
  { name: "3. Task", done: false },
  { name: "4. Task", done: true },
  { name: "5. Task", done: false }
];
