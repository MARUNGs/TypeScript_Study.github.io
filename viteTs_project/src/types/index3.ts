export let 여기보세요 = ''

// ----------------------------------------------------------------------------

// array 자료에 붙일 수 있는 tuple type
// -> 위치까지 고려한 타입을 지정할 수 있다.
let 멍멍 :[string, boolean?] = ['dog']

// 함수에서 쓰는 tuple type
function 함수(...x :[number, string]) {
    console.log(x)
}
function 함수2(a :number, b :string) { // 위와 같은 함수를 의미함
    console.log([a, b])
}
함수(1, '2')


// array 합칠 때도 타입은 이렇게 설정이 가능하다
let arr = [1,2,3]
let arr2 :[number, number, ...number[]] = [4,5, ...arr] // sread operator


// 숙제 1
type Foods = [string, number, boolean]
let 오늘내가먹은음식 :Foods = ['컵라면', 1500, true]

// 숙제2
type FoodType = [string, number, ...boolean[]]
let 이런자료는어떤타입 :FoodType = ['컵라면', 1500, true, true, true, false, true]



// ---------------------------------------------------------------------------------------------

// declare : js에 있는 변수를 ts에서 이용할 때 사용(재정의 해야한다!)
declare let dataA :string
console.log(dataA + 1)

// ts 파일끼리 변수를 가져다가 쓰고 싶다면?
import { indexA } from './index2'
// console.log(indexA)


// ts 파일의 이상한 특징 : ambient module (글로벌 모듈)
// 모든 ts파일은 글로벌 모듈 - 다른 파일에서 변수 사용시 모두 적용돼서 변수명이 중복되기 쉽다
// 로컬모듈을 만들자!
export {} // 로컬모듈 생성!

// 로컬모듈 상태에서 글로벌 변수를 생성하고 싶다면?
declare global {
    type Dog = string
}


// -------------------------------------------------------------------------

// d.ts 파일 이용하기!
import {AgeType} from './test.d'
let age :AgeType