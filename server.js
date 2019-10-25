import express from 'express';
import News from './controller/news';
import bodyParser from 'body-parser';

const port = 9000;

const app = express();

app.use(bodyParser.json());
app.use('/user', News);

app.listen(port, '0.0.0.0', () => {
    console.log(`Listening to port ${port}`);
});
