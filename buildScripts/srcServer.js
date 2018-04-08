/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackHotMiddleware(compiler));
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }),
);

app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, '../src/index.html')),
);

app.listen(port, err => {
  if (err) {
    return console.log(err);
  }
  return open(`http://localhost:${port}`);
});
