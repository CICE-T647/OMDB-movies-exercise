const router = require('express').Router()
const axios = require('axios');
const { APIError, ParameterError } = require('../errors');
const { validateSearch, validateYear, validateType, validateResponseMulti, validateId } = require('../validators')

const baseUrl =  `http://www.omdbapi.com/?apikey=${process.env.APIKEY}`;

router.get('/search/:search', async (req, res)=>{
    try{
        const { search } = req.params;
        validateSearch(search);

        const { data } = await axios.get(`${baseUrl}&&s=${search}`)
        validateResponseMulti(data.Search)

        res.status(200).json(data.Search)
    }catch(error){
        if(error instanceof APIError) res.status(503).json({error: error.message})
        else if(error instanceof ParameterError) res.status(422).json({error: error.message})
        else res.status(500).json({error: error.message})
    }
});

router.get('/search/:search/type/:type', async (req, res)=>{
    try{
        const { type, search } = req.params;
        validateSearch(search);
        validateType(type);

        const { data } = await axios.get(`${baseUrl}&&s=${search}&&type=${type}`)
        validateResponseMulti(data.Search)

        res.status(200).json(data.Search)
    }catch(error){
        if(error instanceof APIError) res.status(503).json({error: error.message})
        else if(error instanceof ParameterError) res.status(422).json({error: error.message})
        else res.status(500).json({error: error.message})
    }
    
});

router.get('/search/:search/year/:year', async (req, res)=>{
    try{
        const { search, year } = req.params;
        validateSearch(search);
        validateYear(year)

        const { data } = await axios.get(`${baseUrl}&&s=${search}&&y=${year}`)
        validateResponseMulti(data.Search)

        res.status(200).json(data.Search)
    }catch(error){
        if(error instanceof APIError) res.status(503).json({error: error.message})
        else if(error instanceof ParameterError) res.status(422).json({error: error.message})
        else res.status(500).json({error: error.message})
    }
});

router.get('/id/:id', async (req, res)=>{
    try{
        const { id } = req.params;
        validateId(id);

        const { data } = await axios.get(`${baseUrl}&&i=${id}`)

        res.status(200).json(data)
    }catch(error){
        if(error instanceof APIError) res.status(503).json({error: error.message})
        else if(error instanceof ParameterError) res.status(422).json({error: error.message})
        else res.status(500).json({error: error.message})
    }
});

module.exports = router;