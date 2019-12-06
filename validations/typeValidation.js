const typeValidation = type => {
  if (type != "movie" && type != "series" && type != "episode")
    throw {
      status: 422,
      message: "El tipo de busqueda debe ser movie, series o episode"
    };
};

module.exports = typeValidation;
