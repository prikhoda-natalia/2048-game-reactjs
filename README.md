# Game 2048 with React.js

This is a test task I was given during my job search in September 2022.

## Instructions

Implement a frontend application allowing you to play game 2048 with the following specifications:

- The grid consists of 6x6 tiles
- At the beginning of a game the grid is empty, except for one tile of value 2 placed at random.
- The user can slide the tiles either up, down, left or right
- After each slide a new tile with value 1 will appear in a random free space.
- If there is no free space to put the new tile the game is lost
- During the slide, tiles of equal values pushed into each other will merge into a new tile with the combined value. 2 + 2 = 4
- If there are 3 values next to each other, e.g. 2 2 2, and the player slides right, the values closest to the wall should merge first resulting in 2 4.
- If any tile reaches the value 2048 the game is won.

## Getting started

1. Clone the repository https://github.com/prikhoda-natalia/2048-game-reactjs
2. Install dependecies `yarn install`
3. Start the project `yarn start`

## Articles to help to understand the logic and UI

https://github.com/prikhoda-natalia/2048-game-reactjs - UI for tile animations

https://medium.com/tinyso/how-to-create-game-2048-in-javascript-reactjs-react-native-4588bfd136c9 - logic for compess and merge functions
