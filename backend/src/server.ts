import app from './app';
import cors from 'cors';
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

