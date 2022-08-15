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
console.log(dataA + 1);
let age;
//# sourceMappingURL=index3.js.map