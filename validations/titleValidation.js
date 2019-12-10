module.exports = title => {
    if (!title) {
        throw ( {
            status: 422,
            message: "Oops! Title is mising.",
            ok: false
        })
    } else if (title.length < 3) {
        throw ( {
            status: 422,
            message: "Sorry... but title should have 3 letters or more.",
            ok: false
        })
    }
  
}