const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Main Templates - EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
// Routing
// The order is important.
app.use('/', require('./router/routerPaths'));

app.listen(PORT, ()=> console.log(`Express is listening at http://localhost:${PORT}`));


