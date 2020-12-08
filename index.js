const path = require('path')
const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
})

app.get('/contact-me', (req, res) => {
  res.sendFile(path.resolve(__dirname, "contact-me.html"));
})

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"));
})

app.use(function (req, res, next){
        const error = new Error("Not Found");
        error.status = 404;
        throw error;
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).sendFile(path.resolve(__dirname, "404.html"));
})

app.listen(PORT, () => console.log('The server has been published'));