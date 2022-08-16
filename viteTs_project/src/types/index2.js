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
    static x = 10; // 부모만 가져다가 쓸 수 있다.
    y = 20;
}
let nnn = new UUU();
console.log(UUU.x); // 부모를 직접 호출해야 static 변수 사용이 가능하다.
// (private | protected | public) + static 사용이 가능하다
class 섞어서사용가능 {
    static x = 10;
}
// 주로 언제 사용할까?
class UUUu {
    static skill = 'js';
    intro = UUUu.skill + '전문가입니다.';
}
let 철수 = new UUUu();
console.log(철수);
UUUu.skill = 'ts'; // 중간에 중요한 정보를 안전하게 수정할 수 있다.
let 철수2 = new UUUu();
console.log(철수2);
// 숙제
class A {
    static x = 10;
    static y = 10;
    constructor(x, y) {
        A.x = x;
        A.y = y;
    }
    static printX() {
        console.log("-----" + A.x + "-----");
    }
    static addOne(num) {
        A.x + num;
    }
}
A.addOne(3);
A.addOne(10);
A.printX();
let 변수 = 'park';
console.log(변수);
let car1 = {
    wheel: 10,
    model: 'abc'
};
let bike2 = {
    wheel: 2,
    model: 'eee'
};
let fnabc = function () {
    console.log('ㅎㅅㅎ');
};
fnabc();
;
let dog1 = 'bark';
let dog2 = { name: 'paw' };
// ------------------------------------------------------------------------------------------------
// generic : 파라미터로 타입을 입력하는 함수
// 함수의 반환타입을 유추할 수 있는 어려움이 있다. 이럴 땐 generic을 이용한다.
// 장점 : Narrowing 확장성이 있음
function fnG(x) {
    return x[0];
}
let aa = fnG([4, 2]);
console.log(aa);
// 1. 타입 파라미터 제한두기 : extends
// function minusOne<Minus extends number>(x :Minus) {
function minusOne(x) {
    // return x - 1
    return x.length;
}
// let minus = minusOne<number>(100)
let minus = minusOne(['100']);
console.log('---------------------------------------');
// 숙제 1
function 숙제0001(str) {
    console.log(str.length);
}
숙제0001('hello');
숙제0001(['kim', 'park']);
let data = '{"name" : "dog", "age" : 1}';
function ConversionJson(data) {
    return JSON.parse(data);
}
let conJson = ConversionJson(data);
console.log(conJson);
// 숙제3 class 수정
class P {
    name;
    constructor(a) {
        this.name = a;
    }
}
let abcde = new P('문자열 삽입');
abcde.name;
// --------------------------------------------------------------
let indexA = 10;
export default indexA;
//# sourceMappingURL=index2.js.map