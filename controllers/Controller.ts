///<reference path="../node_modules/typescript/lib/lib.es6.d.ts"/>

import {ExpressFactory} from "../core/ExpressFactory";
export class Controller {
    protected _pathMap: Map<string, string>;
    protected _methodMap: Map<string, string>;

    constructor() {
        this._pathMap = new Map<string, string>();
        this._methodMap = new Map<string, string>();
    }

    registerRoutes(): void {
        for (let key in this._pathMap) {
            let method = this._methodMap[key] || 'GET';
            let path = this._pathMap[key];
            ExpressFactory.setPath(method, path, this, this[key]);
        }
    }

    setPath(key: string, path: string) {
        this._pathMap[key] = path;
    }

    setMethod(key: string, method: string) {
        this._methodMap[key] = method;
    }
}