///<reference path="../typings/tsd.d.ts"/>

import * as express from 'express';

let app = express();

export class ExpressFactory {
    static setPath(method: string, path: string, thisContext: Object, handler: any) {
        app[method].call(null, path, (req, res) => {
            handler.call(thisContext, req, res);
        });
    }

    static start() {
        let port = process.env.PORT || 3000;
        app.listen(port);
    }
}