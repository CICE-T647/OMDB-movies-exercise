
const titleValidate = require("./titleValidation")
const yearValidate = require("./yearValidation")
const pageValidate = require("./pageValidation")
const typeValidate = require("./typeValidation")
const fullRequestValidate = require("./fullRequestValidation")


const searchValidate = ( search ) => {

    titleValidate(search.title)
    if (search.year) yearValidate(search.year)
    if (search.page) pageValidate(search.page)
    if (search.type) typeValidate(search.type)
    if (search.full_request) fullRequestValidate(search.full_request)
}

module.exports = { searchValidate }