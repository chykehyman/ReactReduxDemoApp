import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/*', (req, res) => {
    res.status(200)
        .send('Welcome To My React and Redux Demo App');
});

app.listen(port, () => console.log(`Application started on port ${port}`));

export default app;