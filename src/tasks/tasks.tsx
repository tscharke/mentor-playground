/*

- Eine Komponente Task bauen, die als "Parent" fungiert.
  - Hierin die Liste an Tasks statisch definieren.
  - Unterhalb der Liste der Tasks eine Art Navigation bauen.
    - Diese besteht aus 3 Buttons: "Show all", "Show done", "Show open/undone"
    - Die Funktionalität der Buttons erarbeiten wir uns heute 😉
- Eine weitere Komponente bauen: `TaskList`
  - Dieser weisen wir, über Properties, die Liste an Task zu.
  - Diese iteriert über die Tasks und ruft `TaskDetail`-Details pro Task auf.
- Eine 3. Komponente bauen: `TaskDetail`
  - Diese zeigt die Details des jeweiligen Tasks an.


- Darin ist alles enthalten, was wir bis jetzt gemacht haben:
  - Komponenten bauen
  - Interfaces für Properties bauen
  - Properties verwenden
  - "Multiple Children" oder eine Liste von TSX ausgeben
  - Das Komponieren von mehrerer Komponenten (Components).

*/

interface Task {
	name: string;
	done: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const allTasks: Task[] = [
	{ name: '1. Task', done: false },
	{ name: '2. Task', done: true },
	{ name: '3. Task', done: false },
	{ name: '4. Task', done: true },
	{ name: '5. Task', done: false },
];
