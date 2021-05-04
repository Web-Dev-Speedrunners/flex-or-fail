// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LogMessageFN = (tag: string, message: any) => void;

type LogFN = LogMessageFN;

export interface ILogger {
  local: LogFN
  info: LogFN
  warn: LogFN
  error: LogFN
}

class LoggerImpl implements ILogger {
  local : LogMessageFN = (tag, message) => {
    console.log(tag, message);
  };

  info : LogMessageFN = (tag, message) => {
    console.log(tag, message);
  };

  warn: LogMessageFN = (tag, message) => {
    console.log(tag, message);
  };

  error : LogMessageFN = (tag, message) => {
    console.log(tag, message);
  };
}

function getLogger() : ILogger {
  return new LoggerImpl();
}

const logger = getLogger();

export default logger;
