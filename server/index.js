import express from 'express';
// import webpack from 'webpack';
// import webpackMiddleware from 'webpack-dev-middleware';
// import webpackConfig from '../webpack.config.js';

const app = express(),
    port = process.env.PORT || 3000;


app.use('/*', (req, res) => {
    res.status(200).send('Welcome To My React and Redux Demo App');
});

app.listen(port, () => console.log(`Application started on port ${port}`));

export default app;