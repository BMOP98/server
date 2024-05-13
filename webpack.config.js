const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "http": require.resolve("stream-http")
    }
  },
  module: {
    rules: [
      // Aquí puedes agregar reglas de carga de archivos si es necesario
    ],
  },
};
