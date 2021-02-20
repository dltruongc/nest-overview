import { Catch } from '@nestjs/common';
import {
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Response, Request } from 'express';

/**
 * @description For HttpExceptions, ArgumensHosts including [req, res, next] which avaiables from express (default used by NestJs)
 * @description If you have GraphQL, something differences, ArgumentsHosts can be imagined as array of [root, args, context, info]
 * @description **Note**: if the exception annotated, you will only get exceptions of the same type
 */
@Catch(HttpException)
export class InternalServerErrorFilter implements ExceptionFilter {
  private _logger: Logger = new Logger('HttpExceptionFilter');

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    this._logger.verbose(host.switchToHttp());

    const response = ctx.getResponse<Response>();

    if (exception instanceof InternalServerErrorException) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'You will never know what happened to this Server',
        status: 501,
      });
    } else return exception;
  }
}
