
import {Controller} from "../controllers/Controller";

function http(verb:string) {
    return function (target:Controller, key:string, value:any) {
        return {
            value: function (...args:any[]) {
                target.setMethod(key, verb);
                return value.value.apply(target, args);
            }
        };
    }
}

export let GET:Function = http('GET');
export let POST:Function = http('POST');
export let PUT:Function = http('PUT');
export let UPDATE:Function = http('UPDATE');
export let DELETE:Function = http('DELETE');
