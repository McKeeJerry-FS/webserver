const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


const app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', function(req, res) {
    let users = [
        { first_name: 'John', last_name: 'Doe', age: 30 , gender: "male"},
        { first_name: 'Jane', last_name: 'Smith', age: 25, gender: "female" },
        { first_name: 'Mike', last_name: 'Johnson', age: 40, gender: "male" }
    ];
    res.json(users);
});

app.post('/subscribe', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    console.log(`New subscription: Name - ${name}, Email - ${email}`);
    res.send(`
        <h2>Thank you for subscribing, ${name}!</h2>
        <p>Redirecting back to home page in 3 seconds...</p>
        <script>
            setTimeout(function() {
                window.location.href = '/index.html';
            }, 3000);
        </script>
    `);

});

app.listen(port, function() {
    console.log('App is listening on port ' + port);
});