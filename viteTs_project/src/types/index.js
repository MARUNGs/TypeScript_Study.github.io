/**** 문법 정리 ****/
export let name = 'kim'; // string만 가능
// number, boolean, null, undefined, bigint, [], {}
export let nameList = ['가나다', '라마바']; // 문자열 배열만 가능
// Optional Properties(물음표)는 불확실할때 사용한다. 
// --> name이 들어올 수도 있고 안 들어올 수도 있다.
export let nameObject = { name: '사아자' }; // key:문자열만 가능
// Optional Chaning : 다양한 타입이 들어올 수 있다.
export let nameStrNum = 'kim';
// 함수 선언시 파라미터로 number, return값으로 number 타입 선언을 해줘야 엄격관리가 가능하다.
function func(x) {
    return x * 2;
}
func(1234);
let john = [123, true];
let jenny = { name: 'jenny' };
// class 타입지정 가능
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
// ------------------------------------------------------------------------------------------------------
let abc = 'kim'; // 타입이 실수로 변경되면 에러를 잡아줌.
let age = 50;
let qwe = true;
let what = null;
let un = undefined;
let project = {
    member: ['가나다', '라마바사'],
    days: 10,
    started: true
};
let hey = [123, '456', 789];
let hey2 = 1; // 위에거랑 문법이 다름 
hey; // 값이 할당되어 버리면 타입이 1개로 할당된다.
hey2;
let obj = { a: 123 };
obj;
//  any: 모든 자료 허용 - 타입실드 해제문법(타입 관련 에러가 발생해도 잡아주지 않는 단점이 있다.)
let any;
any = 123;
any = true;
// unknown : 모든 자료 허용 - any보다 안전하다.
let unk;
unk = 123;
// let vari1 :string = unk // 에러를 잡아줌
let vari2 = any; // 에러를 못 잡아줌
// unk - 1 // unknown 타입이어서 에러가 발생하는 것...
// 이런 에러가 잦다.
let agee;
// 자바스크립트는 string형에도 +1이 가능하고, number형에도 +1이 가능하다.
// 하지만 타입스크립트는 string | number 로 선언했고
// 그 상태에서 +1은 허용하지 않는다.
// agee + 1 // 안돼!
// 숙제 1
let user = 'kim';
let ageee = undefined;
let married = false;
// let choeulsu :[user :string, ageee :undefined|number, married :boolean] = [user, ageee, married] 이거아님
let cheoulsu = [user, ageee, married];
// 숙제 2
let school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
// ------------------------------------------------------------------------------------------------------
function funcc(x) {
    return x * 2;
}
funcc(30);
// 일반 타입과 다른 점 : 함수의 타입지정된 파라미터는 필수다!
function funcx(z) {
    1 + 1; // return 이 없을 때는 void 이용
}
funcx(123);
// 파라미터가 옵션일 경우에는 "파라미터변수? :타입"
function ABC(a) {
}
ABC(123);
// 숙제1
function doNotExist(paramName) {
    if (typeof paramName === 'string') {
        console.log('안녕하세요 ' + paramName);
    }
    else {
        console.log('이름이 없습니다');
    }
}
doNotExist('홍길동');
// 숙제2
function lenCheck(paramStrNum) {
    return (String(paramStrNum).length);
}
lenCheck('abcdefg');
lenCheck(12345);
// 숙제3
function canMarryPer(월소득, 집보유여부, 매력점수) {
    let returnMsg = '결혼가능';
    let marryScore = 월소득
        + ((집보유여부) ? 500 : 0)
        + ((매력점수 == '상') ? 100 : 0);
    if (marryScore) {
        return returnMsg;
    }
    else {
        return null;
    }
}
canMarryPer(700, false, '중');
// ------------------------------------------------------------------------------------------------------
// Narrowing : 타입을 확정시킨다.
// 
function test(a) {
    if (typeof a === 'string') {
        return a + '1';
    }
    else {
        return a + 1;
    }
}
test(123);
function test2(a) {
    let array = [];
    if (typeof a === 'number') {
        array[0] = a;
    }
    else {
        console.log('number가 아님!');
    }
}
test2(1234);
function test3(x) {
    let array = [];
    array[0] = x; // assertion !!
}
test3('hey');
// 숙제1
function cleaning(paramList) {
    let numberList = [];
    // for(let i=0; i<paramList.length; i++) {
    //   if(typeof paramList[i] === 'number') {
    //     numberList.push(paramList[i] as number)
    //   } else {
    //     // string일 땐 number로 변경
    //     numberList.push(Number(paramList[i]))
    //   }
    // }
    paramList.forEach((param) => {
        if (typeof param === 'string') {
            numberList.push(Number(param));
        }
        else {
            numberList.push(param);
        }
    });
    return numberList;
}
cleaning(['1', 2, '3']);
// 숙제2
let teacher1 = { subject: 'math' };
let teacher2 = { subject: ['science', 'english'] };
let teacher3 = { subject: ['science', 'art', 'korean'] };
function teacherBackObj(a) {
    if (typeof a.subject === 'string') {
        return a.subject;
    }
    else {
        return a.subject[a.subject.length - 1];
    }
}
teacherBackObj(teacher3);
let animal;
let test002 = { name: 'kim', age: 20 };
const girl = {
    name: 'hey'
};
let position = {
    x: 10,
    y: 10
};
let testObj = { obj1: 'ㅎㅇ', obj2: 'hello', obj3: '곰방와' }; // 중복 속성 삽입불가
console.log('중복 가능? ' + testObj.obj1, testObj.obj2, testObj.obj3);
let style = {
    size: 10,
    position: [30, 20]
};
let info = { name: 'kim', phone: 123, email: 'abc@naver.com' };
let childrenCheck = {
    name: 'Yoo',
    phone: 12345656,
    // email : '123567qwe@naver.com',
    childrenYn: true
};
// ------------------------------------------------------------------------------------------------------
// Literal type - 더 엄격한 타입 지정 가능
let 변수;
// 변수 = 123 // 에러!
let literal001;
literal001 = "솔로"; // 변수에 어떤 값이 들어올지 더 엄격한 관리가 가능
// 자동완성 기능 이용 가능
// literal type func
function ABCD(a) {
    return 0;
}
ABCD("hello");
// 연습
function game(param) {
    return [param];
}
game('가위');
var 자료 = {
    name: 'kim' // 해결 : 타입 먼저 지정하던가
}; // 해결 : as const 쓰던가
// as const 효과 1 : object value값을 그대로 타입으로 지정해줌. (name :'kim')
// as const 효과 2 : object 속성들에 모두 readonly 선언한다.
// object 타입을 완전히 잠궈버리고 싶으면 as const 사용하기
function myFunc(a) {
}
myFunc(자료.name); // 얜 string이라서 오류난다. // 해결 : as문법으로 타입 변경하던가
let aaa = function (a) {
    return 10;
};
let memberInfo = {
    name: 'hey',
    age: 20,
    plusOne(a) {
        return a;
    },
    changeName() {
        console.log('gg');
    },
};
memberInfo.plusOne(1);
memberInfo.changeName();
let cutZero = function (param1) {
    return param1.replace(/^0+/, "");
};
let removeDash = function (param2) {
    return Number(param2.replaceAll('-', ''));
};
function 만들함수(str, fn1, fn2) {
    console.log(fn2(fn1(str)));
}
만들함수('010-1111-2222', cutZero, removeDash);
// ------------------------------------------------------------------------------------------------------
/*
// id를 잘못 찾았을 때 null이 들어오고 잘 찾아오면 element가 들어오니
// 타입스크립트 입장에서는 확실치 않아서 에러를 나타낸다. Narrowing 작업할 것
let title = document.querySelector('#title')

// [Narowwing 방법 1] - not null
if(title != null) {
  title.innerHTML = '하이루'
}

// [Narowwing 방법 2] - instanceof
if(title instanceof Element) {
  title.innerHTML = '하이루'
}

// [Narowwing 방법 3] - as 키워드 이용 : 왼쪽의 요소를 오른쪽 타입으로 바꾸기
let title2 = document.querySelector('#title') as Element // 비상 키워드..
title2.innerHTML = '하이루'

// [Narowwing 방법 4] - Optional Chaning(?)
if(title2?.innerHTML != undefined) { // title2에 innerHTML이 있으면 출력, 업승면 undefined
  title2.innerHTML = '하이루'
}

// [Narowwing 방법 5] - tsconfig.json 파일의 strict: false 설정하면 가능


let link = document.querySelector('.link')
if(link instanceof HTMLAnchorElement) {
  link.href='https://kakao.com'
}

// 타입스크립트에서 eventListener 부착하기
let btn = document.querySelector('#button')
btn?.addEventListener('click', function() {
  // 코드실행...
})
*/
// ------------------------------------------------------------------------------------------------------
// JS의 class 문법을 배워보자
// 옛 문법
function 기계(q) {
    // this.q = q;
    // this.w = 'snowball';
}
// var nono = new 기계('consume')
// ES6 문법
// class Hero {
//   constroctor(q, w) {
//     this.q = '구멍'
//     this.w = 'snowball'
//   }
// }
// ------------------------------------------------------------------------------------------------------
// 타입스크립트는 필드값이 설정되어야 property 설정이 가능하다.
class Persoon {
    // 1. 필드에서도 타입지정 가능
    name;
    age;
    // 2. property 설정 가능
    // return 타입은 지정하지 않는다. : 복제되는 것이 항상 object이기 때문이다.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // prototype 넣는 자리는 여기
    함수(a) {
        console.log('hey' + a);
    }
}
let person1 = new Persoon('Yoo', 20);
let person2 = new Persoon('Kim', 30);
person1.함수('하하하하하');
// 숙제 1
class Car {
    model;
    price;
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        return this.price * 0.1;
    }
}
let car = new Car('소나타', 3000);
console.log(car.tax());
// 숙제 2
class Word {
    num;
    str;
    constructor(...param) {
        let nums = [];
        let strs = [];
        param.forEach((pro) => {
            if (typeof pro === 'number') {
                nums.push(pro);
            }
            else {
                strs.push(pro);
            }
        });
        this.num = nums;
        this.str = strs;
    }
}
let word = new Word('123', 3, 5, 'ABC');
console.log(word.num);
let nemo = { color: 'red', width: 100 };
let 학생 = {
    name: 'kim'
};
let 선생 = {
    name: 'kim',
    age: 20
};
// interface로 중복선언하면 항목을 누적으로 갖게 된다 
// -> abcde { name :string, age? :number, score :number }
// interface는 주로 외부 라이브러리에서 많이 사용한다.
// -> 다른 이용자가 많이 사용할 것 같다 싶으면 object 타입 정할 때 interface로 선언하는 것이 편하다.
// (1) extends 쓸 때 중복 속성이 발생하면 에러로 잡아준다.
// (2) & extends를 쓸 땐 미리 에러가 나지 않아서 주의해야 한다.
//    --> &는 합치는 것이 아닌, 왼쪽과 오른쪽 둘다 만족하는 타입을 의미한다.
// ------------------------------------------------------------------------------------------------------
// [ rest parameter ] ? 몇개의 파라미터가 들어올지 아직 모를 때 ...파라미터명 이라고 작성한다.
// 다른 파라미터가 있으면 맨 뒤에 사용해야 한다.
// rest parameter에 들어온 데이터는 전부 array에 담아준다.
// 그럼 rest parameter 타입은 어떻게 지정해주나?
function 하암수(...a) {
    console.log(a);
}
하암수(1, 5, 3, 5, 6, 7);
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2]; // spread operator 문법: 괄호 벗겨주세요
// destructuring 문법을 이용한 함수 파라미터 설정
let { student, aaggee } = { student: true, aaggee: 20 };
let 오브젝트 = { student: true, aaggee: 20 };
function Test10({ student, aaggee }) {
    console.log(student, aaggee);
}
Test10({ student: true, aaggee: 20 });
// Test10(오브젝트)
// 숙제 1
function 최대값반환(...num) {
    let maxNum = 0;
    num.forEach((i) => {
        if (i > 0) {
            (!maxNum) && (maxNum = i);
            if (maxNum < i) {
                maxNum = i;
            }
        }
        else {
            return; // 다음 값으로 넘어가기
        }
    });
    return maxNum;
}
console.log(최대값반환(6, 3, 7, 2));
function Object파라미터({ user, comment, admin }) {
    console.log(user, comment, admin);
}
Object파라미터({ user: 'kim', comment: [3, 5, 4], admin: false });
console.log('--------------------------------------------------');
// 숙제 3 -- 이거 내 풀이
function 숙제하암수(...array) {
    array.forEach((i) => {
        console.log(i);
    });
}
숙제하암수([40, 'wine', false]);
function 숙제3정답([a, b, c]) {
    console.log(a, b, c);
}
숙제3정답([40, 'wine', false]);
//# sourceMappingURL=index.js.map