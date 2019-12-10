// Packages
const express = require("express")
const router = express.Router()
const axios = require("axios")

// URL
API_KEY = process.env.API_KEY
const URL_base = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`

// Methods
const { searchValidate } = require ("../validations/index")





    //////////////
   //          //
  //   CODE   //
 //          //
//////////////


router.get( "/search/", async ( req,res ) => {

    try {
        // Read query elements
        const { title, type, page, year, full_request } = req.query
        
        // 
        searchValidate( { title, type, page, year, full_request } )

        const title_q = `&s=${title}`
        const type_q = type ? `&type=${type}` : ""
        const page_q = page ? `&page=${page}` : ""
        const year_q = year ? `&y=${year}` : ""
        const full_q = full_request ? full_request : "n"


        // Create URL based on query elements
        const query_search = title_q+type_q+page_q+year_q
        const URL = URL_base+query_search

        // Request and response
        const response = await axios.get(URL)
        let data_response = response.data.Search

        console.log(full_q === "y")
        
       // Full request by ID
       if ( full_q === "y" ){
        // const full_response = await data_response.map(async movie => {
        //     const id_q = `&i=${movie.imdbID}`
        //     const URL_id = URL_base+id_q
        //     const full_movie = await axios.get(URL_id)
        //     return full_movie.data
        // })
        // let data_response = full_response
       }

        
        // console.log(full_response)
        
        
        res.status(200).json(data_response)


    } catch(err){

        // console.log(err)
        res.status(err.status).json( err.message )
    }

} )

module.exports = router