# iNotebook (MERN)

This project is split into two clear apps:

- `Backend/` -> Express + MongoDB API
- `Client/` -> React + Vite frontend

## Folder Structure

```text
INoteBook/
|-- Backend/
|   |-- index.js
|   |-- db.js
|   |-- models/
|   |-- routes/
|   `-- package.json
|-- Client/
|   |-- src/
|   |-- public/
|   |-- index.html
|   |-- vite.config.js
|   `-- package.json
`-- package.json
```

## Setup

Install dependencies for workspace and apps:

```bash
npm install
npm install --prefix Backend
npm install --prefix Client
```

## Run

From repo root:

```bash
npm run dev
```

This starts:

- Backend API on `http://localhost:5000`
- Frontend app on `http://localhost:5173`

## Useful Scripts (root)

- `npm run dev` -> run backend + frontend together
- `npm run dev:backend` -> run backend only
- `npm run dev:client` -> run frontend only
- `npm run build` -> build frontend
- `npm run lint` -> lint frontend
