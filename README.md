<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://yolo.com/wp-content/themes/CoinGaming/img/coingaming.svg" alt="Yolo logo"></a>
</p>

<h3 align="center">yolo-leaderboard</h3>

---

<p align="center"> Frontend Test Task with WebSocket
    <br>
    <br>
    <strong>Keeping .env files in repository is security danger. Keeping it here for ease of testing for reviewer</strong>
</p>
## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)

## 🧐 About <a name = "about"></a>

Welcome to the yolo-leaderboard app. Built using React, Typescript and Feature Slice Design pattern variaton. Maintaining code quality with Prettier for formatting and ESLint for code standards. Testing with React Testing Library and Vitest, creating a sleek UI with Material UI, and ensuring real-time communication with Socket.io.
## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Before you begin, ensure you have the following tools installed:

- **Node.js 18:** You can download and install Node.js 18 from [https://nodejs.org/](https://nodejs.org/) or via [nvm](https://github.com/nvm-sh/nvm).

- **Yarn:** Yarn is a fast and reliable package manager. If you haven't installed Yarn, you can do so by following the instructions at [https://classic.yarnpkg.com/en/docs/install](https://classic.yarnpkg.com/en/docs/install).

#### To run the backend, clone the backend repository:
Clone repository
```
git clone https://github.com/coingaming/fe-test-task-ws
```
**NB: Follow instructions from cloned repository**  

### Installing


Install packages via yarn

```
yarn
```
if required Update .env file `VITE_BACKEND_URL` variable to backend URL

**NB: Keeping .env files in repository is security danger. Keeping it here for ease of testing for reviewer**

### Running Project
Run project
```
yarn start
```

### Building project

Build project
```
yarn build
```

## 🔧 Running the tests <a name = "tests"></a>

Run tests 
```
yarn test
```

## Coding style validation with autofix

Scan project for coding style issues and apply fixes on them

```
yarn lint:fix
```

## ⛏️ Built Using <a name = "built_using"></a>

- [Vite](https://vitejs.dev) - Frontend Tooling
- [Vitest](https://vitest.dev/) - Unit Test Framework
- [React](https://react.dev) - Web library
- [Mobx](https://mobx.js.org/react-integration.html) - State management
- [Material UI 5](https://mui.com/material-ui/getting-started/) - Library of React UI components
- [React Router 6](https://reactrouter.com/en/6.16.0) - Declarative routing for React
- [Feature-Sliced Design](https://feature-sliced.design) - Architectural methodology for frontend 

