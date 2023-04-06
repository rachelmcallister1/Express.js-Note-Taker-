const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({extended:true})) //created an object called extended true to send the deep opjects
app.use(express.json()) //allows the application to send a response through json
app.use(express.static('public'));
app.use('/api',apiRoutes);
app.use('/', htmlRoutes); // we put HTML routes last so that we match everything "/"
// GET Route for homepage

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
