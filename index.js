const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 2022;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

//api routes


//Error Handling
app.use((req, res) => {
  res.status(404).json('Resource Not Found');
});

app.use((req, res) => {
  res.status(400).json('Bad request sent');
});

//serves the page if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
    });
  }

app.listen(PORT, () =>{ console.log(`Server is Listening on port ${PORT}`)});