const express = require('express');
const router = express.Router();

const Film = require('./../models/film');

router.get('/', async (request, response) => {
    let films = []
    // response.render('films', {listFilms: 'HERE list films', films});
    console.log('Someone is connect to films');
    try {
        let films = await Film.find();
        // console.log(films);

        if(!films){
            films = []
        }

        response.render('films', {listFilms: 'List films', films});
    } catch (e) {
        console.log(e);
        response.render('films', {listFilms: 'List films', films});
    }
});

router.post('/', async (request, response)=> {
    const body = request.body;

    console.log('Petition Add new item');
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

router.get('/create-film', async (request, response)=> {
    try{
        console.log('Create film')
        response.render('create-film', {
            title : 'Create Film'});
    }catch (e){
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
            title : 'Edit film',
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
});


router.put('/:id', async (request, response) =>{
    try{
        console.log('Let\'s update item');

        const id = request.params.id;
        const body = request.body;

        // console.log('log - id', id)
        // console.log('log - body', body);

        // const film = new Film(body);

        try{
            const filmDB = await Film.findByIdAndUpdate(
                id,
                body,
                {useFindAndModify: false
                });

            console.log('Film is updated with: ', filmDB);

            response.json({
                status: true,
                message: 'Film was updated'
            });

        }catch (e) {
            console.error(e);

            response.json({
                status: false,
                message: 'Film can not update'
            });
        }
    }catch (e) {
        console.error(e);
    }
});



module.exports = router;
