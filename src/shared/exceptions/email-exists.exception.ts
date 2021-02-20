import { HttpException, HttpStatus } from "@nestjs/common";

export class EmailExisted extends HttpException {
    constructor() {
        super('Email existed', HttpStatus.CONFLICT);
    }
}