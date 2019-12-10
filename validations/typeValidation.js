module.exports = type => {

    if (type !== "movie" && type !== "series" && type !== "episode") {
        throw ( {
            status: 422,
            message: "Be careful! Type parameter only accept 'movie', 'series' or 'episode'.",
            ok: false
        })    
    }            
}