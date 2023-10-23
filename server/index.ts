import express from 'express';
import cors from 'cors';
import UserController from './controllers/users';

const app = express();
const port = 4000;

app.use(cors())
app.use(express.json({ limit: 1024102420, type: "application/json" }));

app.get('/users', UserController.search)

const run = async () => {
    app.listen(port, () => {
        console.log(`Server running at: http://localhost:${port}`);
    });
}
run()