# Light Out

This React exercise, originally from Springboard, is a logic and puzzle game implemented using React. It was migrated from Create React App (CRA) to Vite for faster development and leverages Vite and Vitest for building and testing.

## Technologies

- React
- Vite
- Vitest

## The Game

**Lights Out** is a challenging logic puzzle played on a grid of individual lights, each capable of being toggled on or off. The objective of the game is to turn off all the lights to win.

You can click on any cell in the grid to toggle its light, but this action also toggles the lights directly above, below, left, and right of the selected cell. However, cells located at the edges or corners will not toggle as many lights, as they have fewer neighboring cells.

## Getting Started

### Installation

```bash
npm install
```

### Starting the App

```bash
npm run dev
```

This command launches the application in development mode.

### Testing the App

```bash
npm run test
```

This command runs the test suite for the application.
