import express from 'express';
import cors from 'cors';
import UserController from './controllers/users';
import morgan from 'morgan'

const app = express();
const port = 4000;

app.use(morgan('common'))
app.use(cors())
app.use(express.json({ limit: 1024102420, type: "application/json" }));

app.use( (req, res, next)=>{setTimeout(()=> { next() }, 5000 )}) // 5s delay before every request

app.get('/users', UserController.search)

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
});
