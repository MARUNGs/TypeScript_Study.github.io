export let 여기보세요 = '';
// ----------------------------------------------------------------------------
// array 자료에 붙일 수 있는 tuple type
// -> 위치까지 고려한 타입을 지정할 수 있다.
let 멍멍 = ['dog'];
// 함수에서 쓰는 tuple type
function 함수(...x) {
    console.log(x);
}
function 함수2(a, b) {
    console.log([a, b]);
}
함수(1, '2');
// array 합칠 때도 타입은 이렇게 설정이 가능하다
let arr = [1, 2, 3];
let arr2 = [4, 5, ...arr]; // sread operator
let 오늘내가먹은음식 = ['컵라면', 1500, true];
let 이런자료는어떤타입 = ['컵라면', 1500, true, true, true, false, true];
let age;
let user = {
    name: 'kim',
    age: 20,
    location: 'seoul'
};
let indexKey = {
    0: 'a',
    1: '20',
    2: 'seoul'
};
indexKey[0];
// 이런 object의 타입은 위의 CssType처럼 수정 가능!
let css = {
    'font-size': {
        'font-size': {
            'font-size': 14
        }
    }
};
let obj = {
    model: 'k5',
    brand: 'kia',
    price: 6000,
    year: 2030,
    date: '6월',
    percent: '5%',
    dealer: '김차장',
};
let object = {
    'font-size': 10,
    'secondary': {
        'font-size': 12,
        'third': {
            'font-size': 14
        }
    }
};
// -------------------------------------------------------------------------
// object의 key값들을 출력할 땐 자바스크립트 내장함수를 이용한다.
let objData = { name: 'kim' };
Object.keys(objData);
let a = 'name';
let b = 1;
let aaaaa; // aaaaa : string
let aaaaa2; // aaaaa2 : unknown -> string이 아니기 때문
let firstArr = ['abc', 'eee', 'aaa'];
let firstArr2 = 'string';
console.log(firstArr[0]);
//# sourceMappingURL=index3.js.map