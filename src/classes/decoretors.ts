export function sealed(p: string) {
    return function (target: Function): void {
        console.log(`Sealing the constructor w/ param ${p}`);
        console.log(target);

        Object.seal(target);
        console.log(target.prototype);
        Object.seal(target.prototype);
    }
}


export function logger<TFunction extends Function>(target: TFunction): TFunction {
    const newConstructor: Function = function () {
        console.log('Creating new instance');
        console.log(target.name);
        this.age = 30;


    }

    newConstructor.prototype = Object.create(target.prototype);

    newConstructor.prototype.printLibrarian = function (): void {
        console.log(`Librarian name: ${this.name}, Librarian age ${this.age}`);
    };

    return newConstructor as TFunction;
}

export function writable(isWritavble: boolean) {
    return function (target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        console.log(`Decorator writable is running with parameter ${isWritavble}`);
        descriptor.writable = isWritavble;
        return descriptor;
    }
}

export function timeout(ms: number) {
    return function (target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]): any {
            if (window.confirm('Are U sure?')) {
                setTimeout(() => {
                    return originalMethod.apply(this, args);
                }, ms);
            }
        }

        return descriptor;
    }
}

export function logParameter(target: Object, methodName: string, index: number): void {
    const key = `${methodName}_decor_params_indexes`;

    if (Array.isArray(target[key])) {
        target[key].push(index);
    } else {
        target[key] = [index]
    }
}

export function logMethod(target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;


    descriptor.value = function (...args: any[]): any {
        const key = `${methodName}_decor_params_indexes`;
        const indexes = target[key];

        if (Array.isArray(indexes)) {
            args.forEach((arg: any, index: number) => {
                if (indexes.includes(index)) {
                    console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`);
                }
            })
        }

        return originalMethod.apply(this, args);
    }

    return descriptor;
}

function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T
) {
    const values = new Map<any, T>();
    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}

export function format(pref: string = 'Mr./Mrs.') {
    return function (target: object, propertyName: string): void {
        makeProperty(target, propertyName, value => `${pref} ${value}`, value => `${target}`);
    }
}

export function positiveInteger(target: object, propertyName: string, descriptor: PropertyDescriptor): void {
    const originalSet = descriptor.set;

    descriptor.set = function (value: number) {
        if (value < 1 || !Number.isInteger(value)) {
            throw new Error('Invalid value')
        }

        originalSet.call(this, value);
    }
}