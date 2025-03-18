#React JS Fundamentals

# React Checkpoint 02

What You're Aiming For

In this checkpoint, you are going to build FIFA player cards.


Instructions

Create a project using create-react-app.
 
Create a file called players.js, which is going to have an array of JSON Objects containing the player’s details (At least four players)
·        Be creative with your chosen players; you can choose whomever you like!

·        The attributes for each player are name, team, nationality, jerseyNumber, age, and an Image URL for the player.

·        Create a file called Player.js which contains the player component.

·        The Player component must render a react-bootstrap card. The card will display all attributes for each player defined in the players.js.

·        De-structure all the attributes for the Player component.

·        Create a component called PlayersList.js

·        Import inside the PlayerList.js, the Player component and the players’ data from players.js

·        Display all players inside the PlayerList.js, by mapping through all the elements in the array of players (check the .map function)

·        While mapping through the players pass in the props to the Player component (Search for the spread operator if you would like to use it)

·        Don’t forget to define default props for each attribute (Feel free to define any default props)

·        Use some inline styling for the Player component.

·        Import the PlayerList.js into the App.js (root component), and render the PlayerList. 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
