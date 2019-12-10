const { APIError, ParameterError } = require('../errors');
const Validator = require('validator');

module.exports.validateSearch = (search) => {
    if(Validator.isEmpty(search)) throw new ParameterError("Search query cannot be empty")
    if(search.length < 3) throw new ParameterError("Search query must have at least 3 characters")
}

module.exports.validateYear = (year) => {
    if(!Validator.isInt(year, {min: 1950, max: 2020})) throw new ParameterError("Year must be an integer between 1950 and 2020")
}

module.exports.validateType = (type) => {
    const validTypes = ["movie", "series", "episode"];
    if(!Validator.isIn(type, validTypes)) throw new ParameterError("Type must be one of the following: 'movie', 'series, 'episode'")
}

module.exports.validateResponseMulti = (response) =>{
    if(!Array.isArray(response)) throw new APIError("API Error")
}

module.exports.validateId = (id) => {
    if(Validator.isEmpty(id)) throw new ParameterError("ID cannot be empty");
    
}