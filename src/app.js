import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

import { version } from '../package.json';
import './v1/config/mongo';


import userAdmin from './v1/services/admin/user';

const port = process.eventNames.PORT || 3000;
const app = express();

const dateOfBirth = new Date();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/health', (req, res) => res.status(200).json({ version, dateOfBirth }));

// Routes Import
app.use('/v1/admin/user', userAdmin);

app.listen(port, () => console.log(`[#] Server on port: ${port}`));

export default app;
