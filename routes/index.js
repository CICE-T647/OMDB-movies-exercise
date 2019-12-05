const express = require("express");
const router = express.Router(); 
const axios = require("axios");  //Librería para apis

const URL = process.env.URL_OMDB; 
const validateQueries = require("../validations"); 
const createAxios = axios.create({
    baseURL: URL,
    timeout: 3000
})




router.get("/", async(req,res)=>{
   try{
    const {t} = req.query; 
    validateQueries.validateTitle(t); 
    URLTitulo = `${URL}&s=${t}`
    const response = await createAxios.get(URLTitulo); 
res.status(200).json(response.data);
   }catch(err){
       res.status(400).json({message: err}); 
   }
})

router.get("/serie", async(req,res)=>{
    try{
     const {t} = req.query; 
     validateQueries.validateTitle(t); 
     URLTitulo = `${URL}&type=series&s=${t}`
     const response = await createAxios.get(URLTitulo); 
 res.status(200).json(response.data);
    }catch(err){
        console.log(err); 
        res.status(400).json({message: "Hubo un problema"}); 
    }
 })

 router.get("/paged", async(req,res)=>{
    try{
     const {t, page} = req.query; 
     validateQueries.validateTitle(t); 
     URLTitulo = `${URL}&page=${page}&s=${t}`
     const response = await createAxios.get(URLTitulo); 
 res.status(200).json(response.data);
    }catch(err){
        console.log(err); 
        res.status(400).json({message: err}); 
    }
 })

 router.get("/paged3", async(req,res)=>{
    try{
     const {t, page} = req.query; 
     validateQueries.validateTitle(t); 
     validateQueries.validatePage(page); 
     URLTitulo = `${URL}&page=${page}&s=${t}`
     const response = await createAxios.get(URLTitulo); 
 res.status(200).json(response.data);
    }catch(err){
        console.log(err); 
        res.status(400).json({message: err}); 
    }
 })

 router.get("/year", async(req,res)=>{
    try{
     const {t, year} = req.query; 
     validateQueries.validateTitle(t); 
     validateQueries.validateYear(year); 
     URLTitulo = `${URL}&y=${year}&s=${t}`
     const response = await createAxios.get(URLTitulo); 
 res.status(200).json(response.data);
    }catch(err){
        console.log(err); 
        res.status(400).json({message: err}); 
    }
 })

 router.get("/ById", async(req,res)=>{
    try{
     const {id} = req.query; 
     URLTitulo = `${URL}&i=${id}`
     const response = await createAxios.get(URLTitulo); 
 res.status(200).json(response.data);
    }catch(err){
        console.log(err); 
        res.status(400).json({message: 'Ha habido un problema'}); 
    }
 })
 


 




module.exports = router; 