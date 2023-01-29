"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hi = void 0;
exports.hi = "hello";
class mother {
    constructor(props) {
        this.age = props.age;
    }
}
class test extends mother {
    constructor(props) {
        super(props);
    }
    static sayHello() {
        console.log("hello!");
    }
}
test.a = 10;
test.sayHello();
console.log(test.a);
let mom = new mother({ age: 18 });
console.log(mom.age);
let testson = new test(mom);
console.log(testson.age);
//# sourceMappingURL=m1.js.map