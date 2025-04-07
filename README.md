# 2048 Game ReactJS

A web-based implementation of the classic **2048 game**, built with **React**, **TypeScript**, and **Vite**. The game is responsive, interactive, and provides a smooth user experience.

The project is deployed via GitHub Pages and is accessible at **[https://prikhoda-natalia.github.io/2048-game-reactjs](https://prikhoda-natalia.github.io/2048-game-reactjs)**.

![React](https://img.shields.io/badge/React-v19.1.0-blue) ![React Router](https://img.shields.io/badge/React%20Router-v7.4.1-red) ![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-v2.6.1-purple) ![TypeScript](https://img.shields.io/badge/TypeScript-v5.7.3-blue) ![Vite](https://img.shields.io/badge/Vite-v6.2.4-purple) ![Sass Embedded](https://img.shields.io/badge/Sass%20Embedded-v1.86.1-pink)

## 📖 Table of Contents

- [🕹️ How to Play](#️-how-to-play)
- [🚀 Features](#-features)
- [🛠️ Technologies](#️-technologies)
- [📂 Project Structure](#-project-structure)
- [📂 Build Folder Structure](#-build-folder-structure)
- [⚙️ Local Setup and Development](#️-local-setup-and-development)
- [🌐 Deployment to GitHub Pages](#-deployment-to-github-pages)
- [📧 Contact](#-contact)

## 🕹️ How to Play

- Use the **arrow keys** to move the tiles.
- When two tiles with the same number collide, they **merge into one** with their values added together.
- The goal is to create a tile with the value **2048**.
- The game ends when there are no valid moves left.

## 🚀 Features

- **Responsive Design**: The game adjusts dynamically to different screen sizes.
- **Smooth Animations**: Tiles move and merge with smooth transitions.
- **Keyboard and Touch Support**: Play using arrow keys or by clicking controls.
- **Dynamic Tile Sizing**: Tile sizes and grid gaps are calculated dynamically based on the screen size, with a maximum tile size of 75px.
- **Throttled Input**: User inputs are throttled to prevent overlapping moves.
- **Game State Management**: The game state is managed using Redux Toolkit, ensuring predictable behavior.
- **GitHub Pages Deployment**: The game is deployed and accessible via [GitHub Pages](https://prikhoda-natalia.github.io/2048-game-reactjs).

## 🛠️ Technologies

- **Framework**: [React.js](https://reactjs.org/) (leveraging [React + TypeScript + Vite template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts))
- **Languages**: TypeScript, HTML5, SCSS
- **Build Tools**: [Vite](https://vitejs.dev/)
- **Hosting**: [GitHub Pages](https://pages.github.com/) (deployed via `gh-pages` branch)
- **Package Manager**: [Yarn](https://yarnpkg.com/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Version Control**: [Git](https://git-scm.com/)
- **Node.js Version Manager**: [NVM](https://github.com/nvm-sh/nvm) (for managing Node.js versions)

## 📂 Project Structure

The project is organized as follows:

```
2048-game-reactjs/
├── .github/                # GitHub-specific files (e.g., workflows)
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/             # Static assets (e.g., images)
│   ├── components/         # Reusable UI components
│   ├── data/               # Static data (e.g., menu items)
│   ├── features/           # Feature-specific logic and state management (e.g., store, hooks)
│   ├── utils/              # Utility functions and styles
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # Vite environment types
├── .editorconfig           # Editor configuration
├── .gitattributes          # Git attributes configuration
├── .gitignore              # Git ignore rules
├── .yarnrc.yml             # Yarn configuration
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point for the application
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
├── tsconfig.app.json       # TypeScript configuration for the app
├── tsconfig.json           # Base TypeScript configuration
├── tsconfig.node.json      # TypeScript configuration for Node.js
└── vite.config.ts          # Vite build configuration
```

## 📂 Build Folder Structure

After running `yarn build`, the `dist` folder is generated with the following structure:

```
dist/
├── assets/         # JavaScript, CSS, and other bundled assets
├── favicon.ico     # Favicon for the site
└── index.html      # Entry point for the application
```

### Notes:

- The `index.html` file is the entry point for the application and references the bundled assets in the `assets/` folder.
- The `dist` folder is deployed to the `gh-pages` branch of this repository.
- The deployed files can be viewed live at [https://prikhoda-natalia.github.io/2048-game-reactjs](https://prikhoda-natalia.github.io/2048-game-reactjs).
- You can also view the deployed files directly in the `gh-pages` branch of this repository.

## ⚙️ Local Setup and Development

### Prerequisites

In order to run the game locally, the following packages should be pre-installed on your local machine:

- [Git](https://git-scm.com/)
- [Node.js (v20)](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

> **Note 1**: If you need to switch between different Node.js versions, you can use [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm). Install NVM and run the following command to use Node.js v20:
>
> ```bash
> nvm install 20
> nvm use 20
> ```

> **Note 2**: This project uses Yarn as the package manager. To ensure compatibility, enable Corepack (included with Node.js) and install the correct version of Yarn:
>
> ```bash
> corepack enable
> corepack prepare yarn@4.8.1 --activate
> ```
>
> If you already have Yarn installed but need to switch to the correct version, run:
>
> ```bash
> yarn set version 4.8.1
> ```

### Setup and Development

1. Clone the repository:

   ```bash
   git clone https://github.com/prikhoda-natalia/2048-game-reactjs.git
   cd 2048-game-reactjs
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open the game in your browser at `http://localhost:5173`.

## 🌐 Deployment to GitHub Pages

### Automatic Deployment

This project is configured for **automatic deployment** to GitHub Pages using GitHub Actions.

#### How it works:

1. Every push to the `main` branch triggers the deployment workflow.
2. The workflow:
   - Builds the project using `yarn build`.
   - Deploys the build output from the `dist` folder to the `gh-pages` branch.
   - Updates the live site at **[https://prikhoda-natalia.github.io/2048-game-reactjs](https://prikhoda-natalia.github.io/2048-game-reactjs)**.

### Manual Deployment

If you need to deploy manually, follow these steps:

1. Build the project:

   ```bash
   yarn build
   ```

2. Deploy to GitHub Pages:

   ```bash
   yarn deploy
   ```

## 📧 Contact

Feel free to reach out if you have any questions or feedback:

- **Email**: [prikhoda.natalia.webdev@gmail.com](mailto:prikhoda.natalia.webdev@gmail.com)
- **LinkedIn**: [Natalia Prikhoda](https://www.linkedin.com/in/prikhoda-natalia/)
- **GitHub**: [prikhoda-natalia](https://github.com/prikhoda-natalia)
