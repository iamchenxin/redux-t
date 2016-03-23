var path = require('path');

module.exports = {
  entry:'./src/client/web.jsx',
  output:{
    path:path.join(__dirname, 'dst/client'),
    filename:'web.js'
  },
  devtool:'source-map',
  module:{
    loaders:[
      {
        loader:'babel-loader',
        test: /\.jsx?$/,  //!!! must be .jsx? to test js and jsx
        exclude:/node_modules/,
        query:{
          presets: ['es2015', 'react']
        }
      }
    ]
  }
  /*
  externals: {
      "react-relay": "Relay"
  }
  */
};
