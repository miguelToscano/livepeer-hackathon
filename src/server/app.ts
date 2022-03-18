import express from 'express';
import bindRoutes from './routes';

const app = express();

bindRoutes(app);

export default app;