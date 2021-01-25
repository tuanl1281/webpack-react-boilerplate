const path = require('path')

module.exports = {
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),

  devEnv: path.resolve(__dirname, '../env/.env.dev'),
  prodEnv: path.resolve(__dirname, '../env/.env.prod'),
}
