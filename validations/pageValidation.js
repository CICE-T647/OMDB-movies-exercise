module.exports = page => {
    
    if (isNaN(page)) {
        throw ( {
            status: 422,
            message: "So close... but page parameter should be a number!",
            ok: false
        })    
    } else if ( page < 1 && page > 100){
        throw ( {
            status: 422,
            message: "Remember: page parameter should be between 1 and 100.",
            ok: false
        })
    }
           
}