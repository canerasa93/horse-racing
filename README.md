# 🏇 One Case - Horse Racing Simulation

![Vue 3](https://img.shields.io/badge/Vue.js-3.5+-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

---

## 🛠️ Tech Stack

- **Core**: [Vue 3](https://vuejs.org/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [FontAwesome 6](https://fontawesome.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Project expects Node 20.x or higher)
- [Yarn](https://yarnpkg.com/) (Recommended)

### Installation

1. **Clone the repository** (or navigate to the project folder):

   ```sh
   cd one-case
   ```

2. **Install dependencies**:

   ```sh
   yarn install
   ```

3. **Run development server**:
   ```sh
   yarn dev
   ```
   The application will be available at `http://localhost:5173/`.

### Build for Production

```sh
yarn build
```

---

## 📁 Project Structure

- `src/common`: Types, enums, constants, and utility functions (randomization logic, etc.).
- `src/components/shared`: Major business components (RaceTrack, HorseList, ProgramTable, ResultsTable).
- `src/components/ui`: Reusable UI components (Buttons, Boxes, Tables).
- `src/stores`: Pinia store for managing the race state.
- `src/assets`: Global CSS and static assets.

---

## 🏎️ How to Play

1. Click **"Generate Program"** in the top right to create a new set of racing rounds.
2. Observe the **"Horse List"** to see participating horses and their conditions.
3. Click the big **"Play"** button on the track or the **"Start"** button in the header to begin.
4. Once a round ends, the results are automatically saved, and you can click **"Next Round"** to continue.
5. You can **Pause** or **Reset** the simulation at any time.

---

Developed for One Case. Enjoy the race! 🏁
