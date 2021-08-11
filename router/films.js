const express = require('express');
const router = express.Router();

const Film = require('./../models/film');
const {request, response} = require("express");

router.get('/', async (request, response) => {
    let films = []
    // response.render('films', {listFilms: 'HERE list films', films});
    console.log('Someone is connect to films');
    try {
        const films = await Film.find();
        // console.log(films);

        response.render('films', {listFilms: 'HERE list films', films});
    } catch (e) {
        console.log(e);
        response.render('films', {listFilms: 'HERE list films', films});
    }
});

/*router.put('/update' , async (request, response) => {
    // const id = request.params.id;
    console.log('Update item');

    try {

    } catch (e) {
        console.log(e);
    }
});*/

router.get('/create-film', async (request, response)=> {
    try{
        console.log('Create film')
        response.render('create-film', {
            title : 'Create Film'});
    }catch (e){
        console.error(e);
    }
});

router.post('/create-film', async (request, response)=> {
    // response.render('create-film', {title : 'Create Film'});
    const body = request.body;

    console.log('Petition FORM')
    console.log(body);

    try{
        const film = new Film(body);

        console.log('film new', film);
        /**
         *  Film.create(body) is possible because we create the schema Film with mongoose
         */
        await Film.create(body);

        response.redirect('/films');
    }catch (e) {
        console.error(e);
    }
});



router.get('/:id' , async (request, response) => {
    const id = request.params.id;
    console.log('Going to edit with ', id);

    try {
        const filmDB = await Film.findOne({_id: id});
        // console.log('FIND = ', filmDB);
        response.render('edit-film', {
            title : 'Edit film easy',
            film: filmDB,

            // error: false
        });
    } catch (e) {
        console.log(e);
    }
});

router.delete('/:id', async (request, response) => {
    const id = request.params.id;
    console.log(' ID from backend', id);

    try {
        const filmBD = await Film.findByIdAndDelete({_id: id});
        console.log('deleted', filmBD);

        if(!filmBD){
            response.json({
                status: false,
                message: 'can not delete'
            })
        }else{
            response.json({
                status: true,
                message: 'Film eliminated'
            })
        }
    }catch (e) {
        console.error(e)
    }
})



module.exports = router;
