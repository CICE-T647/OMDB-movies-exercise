const paramsLenghtValidation = searchParam => {
  if (searchParam.length < 3)
    throw {
      status: 422,
      message: "El termino de busqueda debe tener al menos 3 caracteres"
    };
};

module.exports = paramsLenghtValidation;
