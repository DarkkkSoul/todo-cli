# Todo CLI

A fast, minimal command‑line To‑Do manager written in TypeScript, compiled to Node.js. It lets you add, view, mark, and reset todos directly from your terminal. Todos are stored locally on your machine and automatically cleaned up after 24 hours.

## Features

* **View help panel** — `-h, --help`
* **Add tasks quickly** — `-a, --add <title>`
* **List tasks** — `-v, --view` shows ID, status, and title
* **Mark done by ID** — `-m, --mark <id>`
* **Reset all todos** — `-r, --reset`
* **Guidelines** — `-g, --guidelines`
* **Auto-expiry** — tasks older than 24 hours are removed on view
* **Local storage** — data saved under your home directory

## How it works

Core CLI entrypoint: `src/index.ts` (compiled to `dist/index.js`). Options are defined using `commander`. The todo manager in `src/utils/manager.ts`:

* **Storage path**: `${HOME}/.my-todo-cli/todos.json` (created on first use)
* **IDs**: auto-incremented, persisted across runs
* **Auto-cleanup**: when you run `--view`, todos older than 24 hours are filtered out (`clearOldTodos()`), then saved back to disk
* **Data model**: `Todo` interface in `src/utils/todo.ts` with `id`, `title`, `createdOn`, `done`
* **Guidelines**: `src/utils/guidelines.ts` prints usage notes

---

### Examples:

```bash
# Add tasks
todo -a "Read docs"
todo --add "Ship release"

# List tasks (applies 24h auto-cleanup)
todo -v

# Mark a task as done by ID
todo -m 2

# Reset (danger: clears all tasks and resets IDs)
todo -r

# Show guidelines
todo -g
```

Output:

```
YOUR TODOS:
ID 	 Status 	 Title

1 	   		 Read docs
2 	 ✔ 		 Ship release
```

## Data and persistence

* **File**: `${HOME}/.my-todo-cli/todos.json`
* **Lifecycle**: items older than 24 hours are removed when viewing (`--view`)
* **Reset**: `--reset` empties the file and resets the in-memory ID counter to 1

## Troubleshooting

* **No todos listed** — items older than 24h are auto-removed on `--view`.
* **Where are my todos stored?** — see `${HOME}/.my-todo-cli/todos.json`.

## License

MIT — see `LICENSE`.

## Acknowledgements

Built with `commander` and Node.js. Feedback: `https://x.com/drcsoul`.