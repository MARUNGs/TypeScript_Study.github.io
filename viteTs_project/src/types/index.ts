/**** 문법 정리 ****/

import { callWithErrorHandling } from "vue"


export let name:string = 'kim' // string만 가능
// number, boolean, null, undefined, bigint, [], {}


export let nameList:string[] = ['가나다', '라마바'] // 문자열 배열만 가능


// Optional Properties(물음표)는 불확실할때 사용한다. 
// --> name이 들어올 수도 있고 안 들어올 수도 있다.
export let nameObject:{ name? : string } = { name : '사아자' } // key:문자열만 가능


// 변수명이 너무 길다? type alias 설정 가능
type StrOrNum = string | number
// Optional Chaning : 다양한 타입이 들어올 수 있다.
export let nameStrNum: StrOrNum = 'kim'


// 함수 선언시 파라미터로 number, return값으로 number 타입 선언을 해줘야 엄격관리가 가능하다.
function func(x:number) :number {
  return x * 2
}
func(1234)


// tuple type : array에서 쓸수있는 타입. 해당 자리에는 무조건 지정된 타입만 삽입가능하다.
type Member = [number, boolean]
let john :Member = [123, true]


// object에 타입지정할 속성이 너무 많으면 한번에 처리가능하다.
type Members = {
  [key : string] : string // 글자로 된 모든 object 속성 타입은 string
}
let jenny :Members = { name : 'jenny' }


// class 타입지정 가능
class User {
  name : string

  constructor(name : string) {
    this.name = name;
  }
}

// ------------------------------------------------------------------------------------------------------
let abc :string = 'kim' // 타입이 실수로 변경되면 에러를 잡아줌.
let age :number = 50
let qwe :boolean = true
let what :null = null
let un :undefined = undefined

let project :{member :string[], days :number, started :boolean} = {
  member: ['가나다', '라마바사'],
  days: 10,
  started: true
}



let hey :(number | string)[] = [123, '456', 789]
let hey2 :number | string[] = 1 // 위에거랑 문법이 다름 
hey // 값이 할당되어 버리면 타입이 1개로 할당된다.
hey2

let obj : {a :string | number} = { a : 123}
obj

//  any: 모든 자료 허용 - 타입실드 해제문법(타입 관련 에러가 발생해도 잡아주지 않는 단점이 있다.)
let any :any 
any = 123
any = true

// unknown : 모든 자료 허용 - any보다 안전하다.
let unk :unknown
unk = 123
// let vari1 :string = unk // 에러를 잡아줌
let vari2 :string = any // 에러를 못 잡아줌
// unk - 1 // unknown 타입이어서 에러가 발생하는 것...

// 이런 에러가 잦다.
let agee :string | number
// 자바스크립트는 string형에도 +1이 가능하고, number형에도 +1이 가능하다.
// 하지만 타입스크립트는 string | number 로 선언했고
// 그 상태에서 +1은 허용하지 않는다.
// agee + 1 // 안돼!

// 숙제 1
let user :string = 'kim'
let ageee :undefined | number = undefined
let married :boolean = false
// let choeulsu :[user :string, ageee :undefined|number, married :boolean] = [user, ageee, married] 이거아님
let cheoulsu :(string | number | undefined | boolean)[] = [user, ageee, married]

// 숙제 2
let school :{ 
  score :(number | boolean)[], 
  teacher :string, 
  friend :string | string[]
} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
school.score[4] = false
school.friend = ['Lee', school.teacher]


// ------------------------------------------------------------------------------------------------------
function funcc(x :number) :number {
  return x * 2
}
funcc(30)

// 일반 타입과 다른 점 : 함수의 타입지정된 파라미터는 필수다!
function funcx(z :number) :void {
  1 + 1 // return 이 없을 때는 void 이용
}
funcx(123)

// 파라미터가 옵션일 경우에는 "파라미터변수? :타입"
function ABC(a? :number) :void { // a? :number ---> a :number|undefined 와 동일한 맥락이다.
  
}
ABC(123)


// 숙제1
function doNotExist(paramName :string) :void {
  if(typeof paramName === 'string') {
    console.log('안녕하세요 ' + paramName)
  } else {
    console.log('이름이 없습니다')
  }
}
doNotExist('홍길동')


// 숙제2
function lenCheck(paramStrNum :string|number) :number {
  return (String(paramStrNum).length)
}
lenCheck('abcdefg')
lenCheck(12345)


// 숙제3
function canMarryPer(월소득 :number, 집보유여부 :boolean, 매력점수 :string) :string | null {
  let returnMsg :string = '결혼가능'
  let marryScore :number = 월소득
                         + ((집보유여부) ? 500 : 0)
                         + ((매력점수 == '상')? 100 : 0)

  if(marryScore) {
    return returnMsg
  } else {
    return null
  }
}
canMarryPer(700, false, '중')


// ------------------------------------------------------------------------------------------------------

// Narrowing : 타입을 확정시킨다.
// 
function test(a :number | string) {
  if(typeof a === 'string') {
    return a + '1'
  } else {
    return a + 1
  }
}
test(123)


function test2(a :number | string) {
  let array :number[] = []

  if(typeof a === 'number') {
    array[0] = a
  } else {
    console.log('number가 아님!')
  }
}
test2(1234)


function test3(x :number | string) {
  let array :number[] = []
  array[0] = x as number // assertion !!
}
test3('hey')


// 숙제1
function cleaning(paramList :(string | number)[]) :number[] {
  let numberList :number[] = []

  // for(let i=0; i<paramList.length; i++) {
  //   if(typeof paramList[i] === 'number') {
  //     numberList.push(paramList[i] as number)
  //   } else {
  //     // string일 땐 number로 변경
  //     numberList.push(Number(paramList[i]))
  //   }
  // }

  paramList.forEach((param) => {
    if(typeof param === 'string') {
      numberList.push(Number(param))
    } else {
      numberList.push(param)
    }
  })

  return numberList
}
cleaning(['1', 2, '3'])


// 숙제2
let teacher1 = { subject : 'math' }
let teacher2 = { subject : ['science', 'english'] }
let teacher3 = { subject : ['science', 'art', 'korean'] }
function teacherBackObj(a :{subject :string | string[]}) :string {
  if(typeof a.subject === 'string') {
    return a.subject
  } else {
    return a.subject[a.subject.length-1]
  }
}
teacherBackObj(teacher3)



// ------------------------------------------------------------------------------------------------------

// type alias
type Test1 = string | number | undefined
let animal :Test1

// object도 변수에 담아보자
type Test002 = {name :string, age :number}
let test002 :Test002 = {name:'kim', age:20}

// 자료 수정을 막아보자 - readonly
type Girlfriend = { readonly name :string } // 수정하면 에러남
const girl :Girlfriend = {
  name: 'hey'
}
// girl.name = 'aaa' // 이러면 에러가 남 !



// type 변수를 union type으로 합칠 수 있다.
// (1)
type Name = string
type Age = number
type Person = Name | Age

// (2) &연산자로 object extend
type PositionX = { x :number }
type PositionY = { y :number }
type NewType = PositionX & PositionY // { x :number, y :number }
let position :NewType = {
  x : 10,
  y : 10
}


// 숙제 1
type Object1 = { obj1 :string, obj2 :string }
type Object2 = { obj3 :string, obj2 :string }
type NewObj = Object1 & Object2
let testObj :NewObj = { obj1 : 'ㅎㅇ', obj2 : 'hello' , obj3 : '곰방와'} // 중복 속성 삽입불가
console.log('중복 가능? ' + testObj.obj1, testObj.obj2, testObj.obj3)

// 숙제 2
type StyleType = {
  color? :string
  size :number
  readonly position :number[]
}
let style :StyleType = {
  size : 10,
  position : [30, 20]
}

// 숙제 3
type InfoType = { name :string, phone :number, email? :string } 
let info :InfoType = { name :'kim', phone :123, email :'abc@naver.com' }

// 숙제 4
type CheckType = {
  name : string,
  phone : number,
  email? : string,
  childrenYn : boolean
}
let childrenCheck :CheckType = {
  name : 'Yoo',
  phone : 12345656,
  // email : '123567qwe@naver.com',
  childrenYn : true
}


// ------------------------------------------------------------------------------------------------------

// Literal type - 더 엄격한 타입 지정 가능
let 변수 :'kim'
// 변수 = 123 // 에러!

let literal001 :'가나다' | '솔로'
literal001 = "솔로" // 변수에 어떤 값이 들어올지 더 엄격한 관리가 가능
                    // 자동완성 기능 이용 가능

// literal type func
function ABCD(a :'hello') :1 | 0 {
  return 0
}
ABCD("hello")

// 연습
function game(param :'가위' | '바위' | '보') :('가위' | '바위' | '보')[] {
  return [param]
}
game('가위')


var 자료 = {
  name: 'kim' // 해결 : 타입 먼저 지정하던가
} as const // 해결 : as const 쓰던가

// as const 효과 1 : object value값을 그대로 타입으로 지정해줌. (name :'kim')
// as const 효과 2 : object 속성들에 모두 readonly 선언한다.
// object 타입을 완전히 잠궈버리고 싶으면 as const 사용하기

function myFunc(a :'kim') { // 'kim'이라는 타입만 들어올 수 있다.

}
myFunc(자료.name) // 얜 string이라서 오류난다. // 해결 : as문법으로 타입 변경하던가


// ------------------------------------------------------------------------------------------------------

// type alias에 함수 type 저장해서 사용해보자!
type funcType = (a :string) => number // 화살표 함수로 써야한다. { return } 생략가능
let aaa :funcType = function(a) {
  return 10
}

// 숙제1
// object 안에 함수 생성 가능
type MemberInfo = {
  name :string,
  age :number,
  plusOne :(a :number) => number,
  changeName :() => void
}
let memberInfo :MemberInfo = {
  name: 'hey',
  age: 20,
  plusOne(a) {
    return a
  },
  changeName() {
    console.log('gg')
  },
}
memberInfo.plusOne(1)
memberInfo.changeName()


// 숙제 2
type CutZero = (param1 :string) => string
type RemoveDash = (param2 :string) => number

let cutZero :CutZero = function(param1) {
  return param1.replace(/^0+/, "")
}
let removeDash :RemoveDash = function(param2) {
  return Number(param2.replaceAll('-', ''))
}

function 만들함수(
  str :string, 
  fn1 :CutZero, 
  fn2 :RemoveDash
) :void {
  console.log(fn2(fn1(str)))
}

만들함수('010-1111-2222', cutZero, removeDash)



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
function 기계(q :string) {
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
  name
  age

  // 2. property 설정 가능
  // return 타입은 지정하지 않는다. : 복제되는 것이 항상 object이기 때문이다.
  constructor(name :string, age :number) {
    this.name = name
    this.age = age
  }

  // prototype 넣는 자리는 여기
  함수(a :string) :void {
    console.log('hey' + a)
  }
}

let person1 = new Persoon('Yoo', 20)
let person2 = new Persoon('Kim', 30)
person1.함수('하하하하하')


// 숙제 1
class Car {
  model
  price

  constructor(model :string, price :number) {
    this.model = model
    this.price = price
  }

  tax() :number {
    return this.price * 0.1
  }
}

let car = new Car('소나타', 3000)
console.log(car.tax())



// 숙제 2
class Word {
  num 
  str

  constructor(...param :(string|number)[]) {
    let nums :number[] = []
    let strs :string[] = []

    param.forEach((pro) => {
      if(typeof pro === 'number') {
        nums.push(pro)
      } else {
        strs.push(pro)
      }
    })

    this.num = nums
    this.str = strs
  }
}
let word = new Word('123', 3, 5, 'ABC')
console.log(word.num)


// ------------------------------------------------------------------------------------------------------

type Square = { color :string, width :number }
let nemo :Square = { color : 'red', width : 100 }

// object 타입 설정시 type 대신 interface 사용이 가능하다
interface Square2{ 
  color :string, 
  width :number 
}

// interface 장점 : extends 복사 가능!
// 그냥 구현했을 땐 optional chaning 사용하면 된다.
interface StuTeaType {
  name :string
  age? :number
}

// extends로도 구현해보자
interface Student {
  name :string
}

interface Teacher extends Student {
  age :number
}

let 학생 :StuTeaType = {
  name : 'kim'
}

let 선생 :Teacher = {
  name : 'kim',
  age : 20
}



// &기호를 이용한 extends 다른 방법 : intersection type
// 왼쪽 타입도 만족하고, 오른쪽 타입도 만족하겠다.
type Animal001 = {
  name :string
}

type Cat = {
  age :number
} & Animal001 


// interface는 중복선언 가능, type는 중복선언 불가능
interface abcde {
  name :string
  age? :number
}
interface abcde {
  score :number
}
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
function 하암수(...a :number[]) {
  console.log(a)
}
하암수(1,5,3,5,6,7)

let arr = [1,2,3]
let arr2 = [4,5]
let arr3 = [...arr, ...arr2] // spread operator 문법: 괄호 벗겨주세요

// destructuring 문법을 이용한 함수 파라미터 설정
let { student, aaggee } = {student: true, aaggee: 20}
let 오브젝트 = { student: true, aaggee: 20 }
function Test10({ student, aaggee } : { student:boolean, aaggee:number }) :void {
  console.log(student, aaggee)
}
Test10({ student: true, aaggee: 20 } )
// Test10(오브젝트)


// 숙제 1
function 최대값반환(...num :number[]) :number {
  let maxNum :number = 0

  num.forEach((i) => {
    if(i > 0) {
      (!maxNum) && (maxNum = i)

      if(maxNum < i) {
        maxNum = i
      }
    } else {
      return // 다음 값으로 넘어가기
    }
  })

  return maxNum
}
console.log(최대값반환(6, 3, 7, 2))


// 숙제 2
interface 파라미터객체 {
  user :string
  comment :number[]
  admin :boolean
}

function Object파라미터({user, comment, admin} :파라미터객체) :void {
  console.log(user, comment, admin)
}

Object파라미터({ user: 'kim', comment: [3, 5, 4], admin: false })

console.log('--------------------------------------------------')

// 숙제 3 -- 이거 내 풀이
function 숙제하암수(...array :[(string | number | boolean)[]]) :void {
  array.forEach((i) => {
    console.log(i)
  })
}
숙제하암수( [40, 'wine', false] )


// 숙제 3 --- 이건 쌤 풀어
type 정답객체 = (number|string|boolean)[]
function 숙제3정답([a,b,c] :정답객체) :void {
  console.log(a, b, c)
}
숙제3정답([40, 'wine', false])
