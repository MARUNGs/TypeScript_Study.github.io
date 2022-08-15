// 타입들을 정리하는 파일
// ts파일에 타입정의가 너무 길면 d.ts 파일을 만들기도 한다.
// 주로 import | export, interface, namespace 등을 정의해둔다.
export type AgeType = number
export interface Person { name :string }

// 가끔 레퍼런스용으로 d.ts를 이용하기도 한다.


// d.ts 파일은 자동으로 글로벌 모듈이 되는 것이 아니다.
// 다른 파일에서 함부로 사용할 수 없어서 export를 꼭 사용해줘야 한다.
// tsconfig.json 파일을 설정해줘야 하는데 난 굳이 하지 않겠다