// 1. null & undefined를 쉽게 Narrowing 하여 거를 수 있음 &&
export let a = function(a :string | undefined) {
  if(a && typeof a === 'string') {

  }
}


// 2. in 키워드 이용 : 서로 다른 속성명을 가지고 있다면 in 키워드를 쓸 수도 있다.
type Fish = { swim :string }
type Bird = { fly :string }
function 함수(animal :Fish | Bird) {
  if('swim' in animal) { // Fish 타입인지 아닌지 검사하는 문법
    animal.swim
  }
}


// 3. instanceof 키워드 : 오브젝트 instanceof 부모class
let date = new Date()
if(date instanceof Date) console.log('Date Type')


// 4. literal type 이용
type Car = {
  wheel :'4개',
  color :string
}
type Bike = {
  wheel :'2개',
  color :string
}

function 함수우(x :Car | Bike) {
  if(x.wheel === '4개') {
    console.log('Car type');
  }
}
함수우({ wheel: '4개', color: 'blue'})


// -----------------------------------------------------------------------------------------------------

/* function return 값에 붙일 수 있는 never 타입 */
// 조건 1. return 값이 없어야 한다.
// 조건 2. endpoint가 없어야 한다. 즉, 함수 실행시, 끝나지 않아야 한다.
export function 함수1212() :never {
  // (1) 중간에 코드실행을 중단하여 함수를 끝내지 않게 한다.
  // throw new Error()
  
  // (2) 무한루프일 때 함수가 끝나지 않는다.
  while(true) {
    
  }
}

// never 타입은 생각보다 쓸 데가 없다.
// 하지만 알아야 하는 이유? 코드 이상하게 짜면 등장한다.

// never 타입이 등장하는 경우 1. 뭔가 이상한 Narrowing
function 함수2(param :string) {
  if(typeof param === 'string') {
    console.log(param);
  } else { // else문이 필요 없을 때 강제로 never를 부여한다.
    console.log(param)
  }
}

// never 타입이 등장하는 경우 2. 
// 어떤 함수 표현식은 return타입이 자동으로 never타입
let fn = function() {
  throw new Error()
}
// -----------------------------------------------------------------------------------------------------

/** public, private */
class User {
  public name // public 붙이면 자식 객체들이 접근 가능하다
  private age // private 붙이면 User 클래스 안에서만 사용 가능
  
  constructor(a :string) { // constructor 존재 이유
    this.name = 'kim'      // - 새 객체 생성시 파라미터를 통해 값 설정이 가능하다.
    this.age = 0
  }
  
  public funcT() {  }
}

let 유저1 = new User('park')
유저1.name


class Persion {
  constructor(public name :string) { // 파라미터는 자식의 name속성에 기입해주세요
    
  }
}

console.log(new Persion('kim'))

// -----------------------------------------------------------------------------------------------------

// class를 복사하고 싶을 때 - protected
// protected : extends된 class는 사용가능, 자식들은 사용 불가능
// private : extends된 class는 사용 불가능, 자식들도 사용 불가능
class Userr {
  // private와 유사함, class 안에서만 사용 가능
  protected x = 10
}

class NewUserr extends Userr {
  // protected 선언하면 상속하는 class에서도 사용 가능
  doThis() {
    this.x = 20
  }
}


// static - 부모 class에 직접 부여된다 (자식에게는 안 물려줌)
class UUU {
  static x = 10 // 부모만 가져다가 쓸 수 있다.
  y = 20
}

let nnn = new UUU()
console.log(UUU.x) // 부모를 직접 호출해야 static 변수 사용이 가능하다.

// (private | protected | public) + static 사용이 가능하다
class 섞어서사용가능 {
  private static x = 10
}

// 주로 언제 사용할까?
class UUUu {
  static skill = 'js'
  intro = UUUu.skill + '전문가입니다.'
}

let 철수 = new UUUu()
console.log(철수)

UUUu.skill = 'ts' // 중간에 중요한 정보를 안전하게 수정할 수 있다.

let 철수2 = new UUUu()
console.log(철수2)


// 숙제
class A {
  private static x = 10
  public static y = 10

  constructor(x :number, y :number) {
    A.x = x
    A.y = y
  }

  static printX() {
    console.log("-----" + A.x + "-----")
  }

  static addOne(num :number) {
    A.x + num
  }
}

A.addOne(3)
A.addOne(10)
A.printX()


// -------------------------------------------------------------------------

// import - 확장자는 작성하지 않도록 강요된다.
import { 이름, 나이, Namee } from './a'
let 변수 :Namee = 'park'
console.log(변수)

// import 가 없던 시절은 이렇게 썼어요
///<reference path="./a.ts"/>

// 숙제1
import {Car1, Bike2} from './a'
let car1 :Car1 = {
  wheel: 10,
  model: 'abc'
}
let bike2 :Bike2 = {
  wheel: 2,
  model: 'eee'
}


// 숙제2 : 자주 사용하는 함수 import
import { fnABC } from './a'
let fnabc :fnABC = function() {
  console.log('ㅎㅅㅎ')
}
fnabc()


// 숙제3 : 중복제거
namespace DogNm {
  export type Dog = string
}
interface Dog { name : string };

let dog1 :DogNm.Dog = 'bark';
let dog2 :Dog = { name : 'paw' }


// ------------------------------------------------------------------------------------------------

// generic : 파라미터로 타입을 입력하는 함수
// 함수의 반환타입을 유추할 수 있는 어려움이 있다. 이럴 땐 generic을 이용한다.
// 장점 : Narrowing 확장성이 있음
function fnG<Type1>(x :Type1[]) :Type1 {
  return x[0]
}
let aa = fnG<number>([4,2])
console.log(aa);

// 2. 커스텀 타입으로도 타입파라미터 제한이 가능하다
interface LengthCheck {
  length: number
}

// 1. 타입 파라미터 제한두기 : extends
// function minusOne<Minus extends number>(x :Minus) {
function minusOne<Minus extends LengthCheck>(x :Minus) {
  // return x - 1
  return x.length
}
// let minus = minusOne<number>(100)
let minus = minusOne<string[]>(['100'])

console.log('---------------------------------------')

// 숙제 1
function 숙제0001<Str extends string|string[]>(str :Str) :void {
  console.log(str.length)
}
숙제0001<string>('hello')
숙제0001<string[]>(['kim','park'])


// 숙제2
interface Animal0001 {
  name :string,
  age :number
}

let data = '{"name" : "dog", "age" : 1}'
function ConversionJson<Animal0001Type extends Animal0001>(data :string) :Animal0001Type {
  return JSON.parse(data)
}
let conJson = ConversionJson<Animal0001>(data)
console.log(conJson)


// 숙제3 class 수정
class P<T> {
  name 

  constructor(a :T) {
    this.name = a
  }
}
let abcde = new P<string>('문자열 삽입')
abcde.name