const express = require("express");
const router = express.Router();
const axios = require("axios");
const URL = process.env.URL;
const APIKEY = process.env.API_KEY;
const URL_ENDPOINT = `${URL}/?apikey=${APIKEY}`;
console.log(URL_ENDPOINT);

//Busqueda por cualquier parametro y combinaciones excepto por ID
router.get("/titulo", async (request,response) => {
    try{
        console.log(request);
        const {title,type,page,year} = request.query;

        const types = ['movies','series','episode'];
        
        if(!title || title.length <3)
            response.status(404).json({message : "Titulo con al menos 3 cararteres"});

        //agregar paginación
        const paginate = page && page > 0 && page <= 100 ? `&page=${page}` : `&page=1`;

        //agregar año
        const y = year && !isNaN(year) ? `&y=${year}` : '';

        if(type){
                if (types.includes(type)) {
                    let queryp = `${URL_ENDPOINT}&s=${title}&type=${type}${paginate}${y}`;
                    console.log(queryp);
                    const resp =  await axios.get(queryp);
                    response.status(200).json(resp.data);
                } 
                else{
                    response.status(404).json({message : "Tipo no existe"});
                }
        }else{
            let queryp = `${URL_ENDPOINT}&s=${title}${paginate}${y}`;
            console.log(queryp);
            const resp =  await axios.get(queryp);
            response.status(200).json(resp.data);
        }
        
    }catch(error){
        console.log(error);
        response.status(400).json({message : "Error"});
    }
    
});

//Busqueda por ID
router.get("/imdbID/:id", async (request,response) => {
    const { id } = request.params;
    if(id){
        try{
            let queryp = `${URL_ENDPOINT}&i=${id}`;
            console.log(queryp);
            const resp =  await axios.get(queryp);
            response.status(200).json(resp.data);
        }catch(error){
            console.log(error);
            response.status(400).json({message : "Error"});
        }
        
    }
    else{
        console.log(error);
        response.status(400).json({message : "No ha ingresado el ID de busqueda"});
    }

});



module.exports = router;
