// express setup
const express = require('express');

// app setup
const app = express();
const ceoList = require('./ceo_list');

// set the template with exoress
app.set('view engine', 'ejs');

// requests
app.get('/api', (req, res) => {
    res.render('index');
});
// why do i not do href="api/ceo-list<%=ceo.slug%>" here?
app.get('/api/ceo-list', (req, res) => {
    res.render('ceo_list', { ceo_list: ceoList });
});

app.get('/api/ceo-list/:slug', (req, res) => {
    let foundCeo = ceoList.find((ceo) => ceo.slug == req.params.slug);
    res.render('ceos_year', { displayCeo: foundCeo });
});

// server 
app.listen(3000, () => {
    console.log('App is now listening on port 3000 . . .')
});

// app.get('/api/media/:Title', (req, res) => {
//     let foundMedia = mediaList.filter((media) => media.Title == req.params.Title);
//     res.render('media_list', { displayMedia: foundMedia });
// });
