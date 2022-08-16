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
import indexA from './index2.js' 
// .js 를 쓰는 이유 : 터미널에서 tsc -w 명령어를 씀으로써 자동 컴파일이 되도록 취하였는데,
// 자바스크립트 입장에서는 .ts인지 .js인지 알 수 없어서 불러올 수 없는 오류가 있었다.
// 이 명령어를 쓸 때는 명확하게 확장자까지 작성해야 한다.
console.log(indexA)


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


// -------------------------------------------------------------------------

// index signture : Object 타입 지정시 한번에 가능한 문법
interface StringOnlyType {
  [key :string] :string | number // 모든 string 타입의 속성은 string 타입을 가진다.
  // age :number // ---> index signature와 중복되는 속성은 에러다. 
  // (이미 모든 string타입의 속성에 대해서 타입을 지정해두었기 때문이다.)
}

let user :StringOnlyType = {
  name: 'kim',
  age: 20,
  location: 'seoul'
}


// 속성명이 숫자인 경우에도 index signature 사용이 가능하다.
interface IndexOnlyType {
  [key :string] :string // object에서는 숫자 속성명도 string 취급 가능
}

let indexKey :IndexOnlyType = {
  0: 'a',
  1: '20',
  2: 'seoul'
}
indexKey[0]


// 해결 1
// interface CssType {
//   'font-size': {
//     'font-size': {
//       'font-size' :number
//     }
//   }
// }

// 해결 2 - 위와 동일함
// 위처럼 반복화(recursive)되는 타입지정을 간략화하려면?
interface CssType {
  'font-size' :CssType | number
}

// 이런 object의 타입은 위의 CssType처럼 수정 가능!
let css :CssType = {
  'font-size': {
    'font-size': {
      'font-size': 14
    }
  }
}


// 숙제 1. obj 타입 지정해보기
interface ObjType {
  [key :string] :string | number
}

let obj = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}


// 숙제 2. interface를 이용한 obj 타입 설정
interface OObbjjType {
  'font-size' :number,
  [key :string] :number | OObbjjType
}

let object = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}


// -------------------------------------------------------------------------

// object의 key값들을 출력할 땐 자바스크립트 내장함수를 이용한다.
let objData = {name: 'kim'}
Object.keys(objData)

// 그렇다면, 타입스크립트에서는 어떻게 key값들을 가져올까?
// keyof : Object key값을 전부 가져온다.
interface Person {
  age :number,
  name :string
}

type PersonKeys = keyof Person // union type으로 반환된다 : 'age' | 'name'
let a :PersonKeys = 'name'


// index signature를 사용하면?
interface PersonIdx {
  [key :string] :number
}

type PersonIdxKeys = keyof PersonIdx
let b :PersonIdxKeys = 1



// 이미 지정된 타입을 변환하려면?
type Car = {
  color :boolean,
  model :boolean,
  price :boolean | number
}

// mapping 변환기!
type TypeChanger<Object작명> = { // 파라미터로 Object 타입
  // object의 key값들을 돌면서 모두 string으로 선언하라. color | model | price
  // Q. 특정 속성에서만 string | number를 지정하려면?
  [key in keyof Object작명] :string
}

type 새로운타입 = TypeChanger<Car>



// 숙제 1. 타입 변환기 생성
type Bus = {
  color : string,
  model : boolean,
  price : number
}

type TypeChanger2<Change> = {
  [key in keyof Change] :string | number
}

type AfterBus = TypeChanger2<Bus>


// 숙제 2. 
type AllChanger<Change, T> = {
  [key in keyof Change] :T
}


// -----------------------------------------------------------------------------------------------

// 삼항연산자를 이용한 type 동적 설정
// 조건식은 무조건 extends가 들어간다.
type Age<T> = T extends string ? string : unknown
let aaaaa :Age<string> // aaaaa : string
let aaaaa2 :Age<number> // aaaaa2 : unknown -> string이 아니기 때문

// Q. 
type FirstItem<T> = T extends string[] ? string[] : any
let firstArr :FirstItem<string[]> = ['abc', 'eee', 'aaa']
let firstArr2 :FirstItem<string> = 'string'
console.log(firstArr[0])


// infer - 타입만 왼쪽에서 추출한다.
// 왼쪽(T)에서 타입을 추출하여 변수 R에 담는다

// Q. 타입을 추출하는 이유?
// A. 그래야 하는 작업이 있을 때가 있음.
// ex 1. array 내부의 타입만 뽑을 때
type TypeExport<T> = T extends (infer R)[] ? R : unknown
type abcde = TypeExport<string[]> // string[] -> string 추출가능

// ex 2. 함수를 넣으면 함수의 return 타입만 뽑고 싶다.
type TypeExport2<T> = T extends ( () => infer R ) ? R : unknown
type abcde2 = TypeExport<() => void>
// abcde2 의 타입은? void

// 사실 크게 쓸 일이 없다.
// 이런 걸 쓰려면 차라리 ReturnType 기본 함수를 쓰면 된다.
type 결론 = ReturnType<() => void> // 결론의 타입? void