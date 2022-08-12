// 1. null & undefined를 쉽게 Narrowing 하여 거를 수 있음 &&
export let a = function (a) {
    if (a && typeof a === 'string') {
    }
};
function 함수(animal) {
    if ('swim' in animal) { // Fish 타입인지 아닌지 검사하는 문법
        animal.swim;
    }
}
// 3. instanceof 키워드 : 오브젝트 instanceof 부모class
let date = new Date();
if (date instanceof Date)
    console.log('Date Type');
function 함수우(x) {
    if (x.wheel === '4개') {
        console.log('Car type');
    }
}
함수우({ wheel: '4개', color: 'blue' });
// -----------------------------------------------------------------------------------------------------
/* function return 값에 붙일 수 있는 never 타입 */
// 조건 1. return 값이 없어야 한다.
// 조건 2. endpoint가 없어야 한다. 즉, 함수 실행시, 끝나지 않아야 한다.
export function 함수1212() {
    // (1) 중간에 코드실행을 중단하여 함수를 끝내지 않게 한다.
    // throw new Error()
    // (2) 무한루프일 때 함수가 끝나지 않는다.
    while (true) {
    }
}
// never 타입은 생각보다 쓸 데가 없다.
// 하지만 알아야 하는 이유? 코드 이상하게 짜면 등장한다.
// never 타입이 등장하는 경우 1. 뭔가 이상한 Narrowing
function 함수2(param) {
    if (typeof param === 'string') {
        console.log(param);
    }
    else { // else문이 필요 없을 때 강제로 never를 부여한다.
        console.log(param);
    }
}
// never 타입이 등장하는 경우 2. 
// 어떤 함수 표현식은 return타입이 자동으로 never타입
let fn = function () {
    throw new Error();
};
// -----------------------------------------------------------------------------------------------------
/** public, private */
class User {
    name; // public 붙이면 자식 객체들이 접근 가능하다
    age; // private 붙이면 User 클래스 안에서만 사용 가능
    constructor(a) {
        this.name = 'kim'; // - 새 객체 생성시 파라미터를 통해 값 설정이 가능하다.
        this.age = 0;
    }
    funcT() { }
}
let 유저1 = new User('park');
유저1.name;
class Persion {
    name;
    constructor(name) {
        this.name = name;
    }
}
console.log(new Persion('kim'));
// -----------------------------------------------------------------------------------------------------
// class를 복사하고 싶을 때 - protected
// protected : extends된 class는 사용가능, 자식들은 사용 불가능
// private : extends된 class는 사용 불가능, 자식들도 사용 불가능
class Userr {
    // private와 유사함, class 안에서만 사용 가능
    x = 10;
}
class NewUserr extends Userr {
    // protected 선언하면 상속하는 class에서도 사용 가능
    doThis() {
        this.x = 20;
    }
}
// static - 부모 class에 직접 부여된다 (자식에게는 안 물려줌)
class UUU {
    static x = 10;
    y = 20;
}
let nnn = new UUU();
console.log(nnn);
//# sourceMappingURL=index2.js.map