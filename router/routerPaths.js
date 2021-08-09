const express = require('express');
const router = express.Router();

router.get('/', async (request, response) => {
   /*response.render('index', {title : 'Title Home'});
    console.log('Someone is connect to Home');*/
    try {
        const films = await Film.find();
        console.log(films);
        response.render('films', {
            listFilms: ' List films' , films
        });
    }catch (e){
        console.log(e);
    }
});

router.get('/nosotros', (req, res) => {
    res.render('about', {title: 'Nosotros EJS'});
    console.log('Someone is connect to about');
});

router.get('/contacto', (req, res) => {

    res.render('contact', {title: 'Contacto EJS'});
    // console.log('Someone is connect to Contact');

});

router.use((req, res, next) => {
    res.status(404).render( '404',{title: 'Page not found 404'});
});


module.exports = router;
