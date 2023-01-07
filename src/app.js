import express from 'express';
import cors from 'cors';
import languagesRoutes from './routes/langs.routes';

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/languages",languagesRoutes)


export default app;