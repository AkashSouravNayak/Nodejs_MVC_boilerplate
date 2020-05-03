const {createLogger,transports,format} = require('winston');

const myFormat = format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${JSON.stringify({"message": message})}`;
  });

const logger = createLogger({
    transports: [
        new transports.File({
            level: 'info',
            filename: 'logs/info.log',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            level: 'error',
            filename: 'logs/error.log',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})

if (process.env.NODE_ENV !== 'production' ){
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            format.timestamp(),
            myFormat
          )
    }))
}

module.exports = logger