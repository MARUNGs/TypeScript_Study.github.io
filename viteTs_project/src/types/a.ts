// export : 내보내겠다!

export var 이름 = 'kim'
export var 나이 = 20

// 타입도 import | export 사용 가능
export type Namee = string



// namespace도 쓰기 훨씬 전에는 module을 썼었죠
module 모듈작명 {

}

// typescript 타입변수 숨기기 문법 : namespace - import | export가 없었을 때 사용했었음
namespace 스페이스작명 {
    export type NameTypes = string | number
} // 하나의 오브젝트 자료임, 그 안에 포장해뒀다.

// namespace 사용법?
let 변수 :스페이스작명.NameTypes = 'kim'


// interface 이런것도 export가 가능해요
export interface 인터페이스 {

}



// 숙제1 : type을 만들어 index2.ts 파일로 export하기
export type Car1 = {
    wheel :number,
    model :string
}

export interface Bike2 {
    wheel :2
    model :string
}


// 숙제2 : 자주 사용하는 함수 export
export type fnABC = (param? :{}) => void