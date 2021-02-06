import 'dotenv/config';
import http from 'http';
import app from './modules/express';
import { PORT } from './config';

const server = http.createServer(app);

server.on('listening', () => console.log(`Server listening on port ${PORT}.`));
server.on('error', error => console.error(`Server error ${error}. Exiting...`));

server.listen(PORT);
