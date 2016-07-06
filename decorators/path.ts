export function path(path: string) {
    path = padPath(path);
    return function(target: any, key?: string, value?: any): any {
        if (target instanceof Function) {
            // a utility function to generate instances of a class
            function construct(constructor, args) {
                let c : any = function () {
                    return constructor.apply(this, args);
                };
                c.prototype = constructor.prototype;
                return new c();
            }
            
            let newCtor = function(...args) {
                let object = construct(target, args);
                object._resourceBasePath = path;

                return object;
            };

            newCtor.prototype = target.prototype;

            return newCtor;
        } else {
            if (target._resourceBasePath) {
                path = target._resourceBasePath + path;
            }

            target.setPath(key, path);

            return value;
        }
    }
}

function padPath(path:string): string {
    if (path.charAt(0) !== '/') {
        return '/' + path;
    }
    return path;
}