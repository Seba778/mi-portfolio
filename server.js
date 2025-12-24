const express = require('express');
const app = express();
const path = require('path');

// Esto servirá los archivos que pongamos en 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});