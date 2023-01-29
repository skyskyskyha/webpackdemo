export const hi = "hello"
class mother{
    constructor(props) {
        this.age = props.age;
    }

    age:number;
}
class test extends mother{
    constructor(props) {
        super(props);

    }

    static readonly a:number = 10;
    static sayHello(){
        console.log("hello!")
    }
}
test.sayHello()
console.log(test.a)
let mom = new mother({age:18})
console.log(mom.age)
let testson = new test(mom)
console.log(testson.age)
