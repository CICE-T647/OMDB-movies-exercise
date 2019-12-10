module.exports = fullRequest => {

    if (fullRequest !== "y" && fullRequest !== "n") {
        throw ( {
            status: 422,
            message: "Be careful! 'fullRequest' parameter only accept 'y' (yes) or 'n' (no).",
            ok: false
        })    
    }            
}