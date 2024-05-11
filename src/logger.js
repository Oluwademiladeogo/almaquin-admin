import { createLogger, transports, format } from 'winston';
import { MongoDB } from 'winston-mongodb';
import 'dotenv/config';

const dbUri = process.env.DATABASE_URL;

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new MongoDB({
      db: dbUri,
      options: { useUnifiedTopology: true },
      collection: 'log',
      level: 'error',
    }),
  ],
});

export default logger;
