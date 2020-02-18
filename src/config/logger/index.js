const winston = require('winston');
const fs = require('fs');
require('winston-daily-rotate-file');
require('winston-mongodb');
require('winston-mail');

let logDirectory = './logs/'; //change this with your path

winston.setLevels(winston.config.npm.levels);
winston.addColors(winston.config.npm.colors);

//create directory if it is not present
if (!fs.existsSync(logDirectory)) {
  // Create the directory if it does not exist
  fs.mkdirSync(logDirectory);
}

//winston options for various logging type
let options = {
  file: {
    level: process.env.ENV === 'development' ? 'debug' : 'info',
    filename: logDirectory + '/%DATE%-logsDemo.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    timestamp: true,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    prettyPrint: true,
    json: true,
    maxsize: 5242880, // 5MB
    colorize: true
  },
  database: {
    db: 'app_logs',
    level: process.env.ENV === 'development' ? 'debug' : 'info'
  },
  mail: {
    level: 'error',
    to: 'developers_team_email',
    from: 'sender_email',
    subject: 'An Error Occured On Server. Please Check IT ASAP',
    host: 'email_host',
    username: 'username',
    password: 'password'
  }
};

const logger = new winston.Logger({
  transports: [
    new winston.transports.DailyRotateFile(options.file),
    new winston.transports.MongoDB(options.database),
    new winston.transports.Mail(options.mail)
  ],
  exceptionHandlers: [
    new winston.transports.DailyRotateFile(options.file),
    new winston.transports.MongoDB(options.database),
    new winston.transports.Mail(options.mail)
  ],
  exitOnError: false // do not exit on handled exceptions
});

export default logger;
