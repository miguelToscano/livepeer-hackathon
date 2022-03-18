import app from './app';

Promise.resolve()
    .then(() => {
        app.listen(8080);
        console.log('app listening on port 8080');
    });