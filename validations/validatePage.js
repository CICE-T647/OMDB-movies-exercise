module.exports = (page) =>{
    if (!page) throw("Por favor pon la página que quieres"); 
    if (!Number(page)) throw("La página tiene que ser un número")
}