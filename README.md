# 2048 Game ReactJS

A web-based implementation of the classic **2048 game**, built with **React**, **TypeScript**, and **Vite**. The game is responsive, interactive, and provides a smooth user experience.

## 📖 Table of Contents

- [🕹️ How to Play](#️-how-to-play)
- [🚀 Features](#-features)
- [🛠️ Technologies](#️-technologies)
- [📂 Project Structure](#-project-structure)
- [⚙️ Local Setup and Development](#️-local-setup-and-development)
- [🌐 Deployment to GitHub Pages](#-deployment-to-github-pages)
- [📧 Contact](#-contact)

## 🕹️ How to Play

- Use the **arrow keys** (or swipe gestures on touch devices) to move the tiles.
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

- **`src/components`**: Contains React components like `Board`, `Tile`, and `Controls`.
- **`src/features`**: Contains Redux slices and thunks for managing game logic.
- **`src/utils`**: Contains helper functions and SCSS variables and mixins.

## ⚙️ Local Setup and Development

### Prerequisites

In order to run the game locally, the following packages should be pre-installed on your local machine:

- [Git](https://git-scm.com/)
- [Node.js (v20)](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

> **Note**: If you need to switch between different Node.js versions, you can use [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm). Install NVM and run the following command to use Node.js v20:
>
> ```bash
> nvm install 20
> nvm use 20
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
   - Builds the project
   - Deploys the build output to the `gh-pages` branch
   - Updates the live site at **[https://prikhoda-natalia.github.io/2048-game-reactjs](https://prikhoda-natalia.github.io/2048-game-reactjs)**

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
