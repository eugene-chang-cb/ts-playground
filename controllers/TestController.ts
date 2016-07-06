///<reference path="../decorators/path.ts"/>

import {path} from "../decorators/path";
import {GET} from "../decorators/verb";
import {Request} from "express";
import {Response} from "express";
import {Controller} from "./Controller";

@path('member')
export class TestController extends Controller {
    @GET
    @path('test')
    test(req: Request, res: Response) {
        res.end('Hello world');
    }
}