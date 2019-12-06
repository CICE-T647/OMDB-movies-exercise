const yearValidation = year => {
  if (year < 1900 || year > 2020)
    throw {
      status: 422,
      message: "El año de buqueda no es valido"
    };
};

module.exports = yearValidation;
