import express from 'express';
import indexRoutes from './routes/index';

const app = express();
const port = Number(process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

app.listen(port, () => {
  console.log('Server start on port', port);
});
