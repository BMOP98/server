const path = require('path');

module.exports = {
  entry: './src/index.js', // Punto de entrada de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Directorio de salida para los archivos construidos
    filename: 'bundle.js' // Nombre del archivo de salida
  },
  target: 'node',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/, // Regla para archivos JavaScript
        exclude: /node_modules/, // Excluir archivos dentro de node_modules
        use: {
          loader: 'babel-loader', // Usa Babel para transpilar JavaScript
          options: {
            presets: ['@babel/preset-env'] // Utiliza el preset de env para compatibilidad con navegadores
          }
        }
      }
      // Aquí puedes agregar más reglas para procesar otros tipos de archivos, como CSS, imágenes, etc.
    ]
  },
  /*polyfill:{
    fallback:({
      "url": require.resolve("url/")
    })
  }*/
  // Otras configuraciones de Webpack, como plugins, optimizaciones, etc., pueden ir aquí
};