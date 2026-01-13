const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
    console.log('App is listening on port ' + port);
});