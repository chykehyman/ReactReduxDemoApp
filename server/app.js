import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

const app = express(),
    port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/public')));

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicpath: webpackConfig.output.publicPath,
    stats: { colors: true },
    noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});


app.listen(port, () => console.log(`Application started on port ${port}`));

export default app;