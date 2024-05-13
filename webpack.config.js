const path = require('path');

module.exports = {
  resolve: {
  fallback: {
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "net": require.resolve("net-browserify"),
    "tls": require.resolve("tls-browserify"),
  }
},
  module: {
    rules: [
      // Aquí puedes agregar reglas de carga de archivos si es necesario
    ],
  },
};
