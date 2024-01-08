# Practice-Express-JS Basic Installation

Welcome to the "Basic Express Installation" repository! This quick guide will walk you through the essentials of setting up Express.js and creating your first "Hello World" program.

Installation Steps:

Clone this repository to your local machine.
Navigate to the project directory using your terminal.
Run npm install to install the necessary dependencies.
Creating Your First Express App:

Open the index.js file in your preferred code editor.
install Express by running the following command on your terminal (npm install express )
We can use ES6 method so Add "type":"module" in your package.json file
Import Express by adding import express from 'express'; at the top.
Create an instance of the Express application with const app = express();.
Define a route for the root path ('/') by adding app.get('/', (req, res) => res.send('Hello World!'));.
Start the server by adding app.listen(8080, () => console.log('Server running on port 8080'));.
Run Your Program:

Save your changes in the index.js file.
In the terminal, run node index.js.
Open your web browser and navigate to http://localhost:8080.
Congratulations! You've successfully set up Express and created a simple "Hello World" program. Feel free to explore and modify the code to deepen your understanding. Happy coding! 🚀
