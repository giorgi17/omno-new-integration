import express from 'express';
require('dotenv').config({ path: './config.env' });

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

// Routes
import generalRoutes from './routes/general';

// Allowing headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTION'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );

    next();
});

// Applying routes
app.use(generalRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
