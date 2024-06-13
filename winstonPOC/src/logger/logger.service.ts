import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import * as path from 'path';

@Injectable()
export class LoggerService {
    private logger: winston.Logger;

    constructor() {
        this.logger = winston.createLogger({
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.Console(),

            ]

        });
    }
    debug(message:string ) {
        console.log('debug',message)
        this.createLogFile('debug', message);
        this.logger.debug('This is an debug message');
    }


    info(message: string) {
        console.log(message)
        this.createLogFile('info', message);
        this.logger.info('This is an info message');

    }

    error(message: string) {
         this.createLogFile('error', message);
        this.logger.error('This is an error message');


    }




    private createLogFile(logType: string, message: string) {
        console.log(`createLogFile :${logType} ${message}`);
        const fileName = `${logType}_${new Date().toISOString().split('T')[0]}.log`;
        const filePath = path.join(__dirname, '..', 'logs', fileName);

        const fileTransport = new winston.transports.File({
            filename: filePath,
            level:logType,
            format: winston.format.combine(
                winston.format.timestamp(),
            winston.format.printf(info => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`)

        )
        });


        // Add file transport only if it's not already added
        if (!this.logger.transports.some(transport => transport instanceof winston.transports.File && transport.filename === filePath)) {
            try {
                this.logger.add(fileTransport);
                console.log(`Log file ${filePath} created successfully.`);
            } catch (error) {
                console.error(`Error creating log file ${filePath}:`, error);
            }
        }
    }


}

