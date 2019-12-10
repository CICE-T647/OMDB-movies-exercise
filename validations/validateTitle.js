module.exports = (title) =>{
    if (!title) throw("Por favor busca un título, no hay título"); 
    if (title.length<4) throw("El título es muy pequeño, por favor pon más de 3 letras")
}