import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

/** ==Class style== */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly _logger: Logger;

  constructor() {
    this._logger = new Logger('Logger');
  }

  use(req: Request, res: Response, next: () => void) {
    const toLog = '@' + req.method.toUpperCase() + '  -  ' + req.url;
    this._logger.verbose(toLog);    
    next();
  }
}

/** ==Functional style== */
export function LoggerMiddleware1 (req: Request, res: Response, next: NextFunction) {
  console.log('@' + req.method.toUpperCase() + '  -  ' + req.url);
  next();
}