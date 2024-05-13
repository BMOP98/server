module.exports = {
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "net": require.resolve("net-browserify"),
      "tls": require.resolve("tls-browserify"),
    },
    alias: {
      'http': 'stream-http',
      'https': 'https-browserify',
      'net': 'net-browserify',
      'tls': 'tls-browserify',
    },
  },
  module: {
    rules: [
      // Aquí puedes agregar reglas de carga de archivos si es necesario
    ],
  },
};
