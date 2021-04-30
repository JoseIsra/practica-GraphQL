function errorHandler(error){
    console.log(error);
    throw  new Error("Ups!😓algo salío mal,el servidor no pudo procesar lo que pidió")
}

module.exports = errorHandler