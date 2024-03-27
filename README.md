# 박상원 201830213

## 3월 27일 강의 내용
3-1. JSX(JavaScript XML)란?
    Javascript에 XML을 추가한 확장 문법입니다.

3-2. JSX의 역할
1. JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 반환
2. React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환
3. JS작업할 경우 직접 createElement함수를 사용해야 함
4. JSX는 가독성을 높여 주는 역할을 함

3-3. JSX의 장점
1. 코드가 간결해짐
2. 가독성 향상

3-4. JSX 사용법
1. 모든 자바스크립트 문법 지원
2. 자바스크립트 문법에 XML과 HTML을 섞어서 사용
3. html이나 xml에 자바스크립트 코드를 사용하고 싶다면 {}괄호 사용
4. Ex) const element = <h1>안녕, {name}</h1> <- 이와 같이 섞어서 사용 가능
5. 태그의 속성값을 넣고 싶을때
// const element = <div tabIndex="0"></div>; 큰 따옴표 사이에 문자열을 넣거나
// const element - <img src={user.avatarUrl}></img>; 중괄호 사이에 자바스크립트 코드를 넣으면 됨

## 3월 20일 강의 내용
### Chapter 1. 리액트는 무엇인가?

1-1. 리액트의 정의
사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리  
-> 웹 및 앱 유저 인터페이스를 위한 라이브러리

1-2. 다양한 자바스크리트 UI 프레임워크 : Stack Overflow trends

1-3. 리액트 개념 정리  
1. 복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 것이 바로 리액트  
2. 다른 표현으로는 SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구

2-1. 리액트의 장점
1. 빠른 업데이트와 렌더링 속도(Virtual DOM이 이것을 가능케 함)
2. DOM이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스(W3C의 표준)
3. DOM 조작이 비효율적으로 속도가 느리기에 V DOM이 고안(DOM은 동기식, V DOM은 비동기식 방법 렌더링)

2-2. 컴포넌트 기반 구조
1. 리액트의 모든 페이지는 컴포넌트로 구성
2. 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있다.
3. 그래서 리액트로 개발을 하면 레고 블록을 조립하는 것처럼 컴포넌트를 조합해서 웹사이트를 개발

2-3. 재사용성
1. 반복적인 작업을 줄여주기에 생산성을 높임
2. 유지보수가 용이
3. 재사용이 가능 하려면 해당 모듈의 의존성이 없어야 함

2-4. 메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전 중  
2-5. 활발한 지식 공유 & 커뮤니티  
2-6. 모바일 앱 개발가능: 리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼 개발 가능
  
3-1. 리액트의 단점
1. 방대한 학습량 : 자바스크립트를 공부한 경우 빠르게 학습 가능
2. 높은 상태 관리 복잡도 : state, component life cycle 등의 개념이 있지만 어렵진 않다.
### Chapter 2. 리액트 시작하기
npm 업데이트 : -npm install -g npm@10.5.0 or latest  
npx create-react-app

## 3월 13일 강의 내용
### GitHub 사용법

초기화
git init

개인 PC
git config --global user.name ""

공용 PC
git config user.name ""

노드 버전 확인
node -v
npm -v
npx -v

패키지 버전 확인
-v, --version


1. 자바스크립트란 무엇인가?
2. ES6(ECMAScript6) - 표준 ECMA-262
3. 자바스크립트의 자료형

var : 중복 선언 가능, 재할당 가능
let : 중복 선언 불가능, 재할당 가능
const : 중복 선언 불가능, 재할당 불가능
Array type : 배열
Object type

function statement 형: 일반적 함수의 형태
Arrow function expression 형 : 화살표 함수

Ex)


//function statement를 사용
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20));
// 출력 결과 : 30

//arrow function expression 사용
const multiply = (a, b) => {
    return a + b;
}

console.log(multiply(10, 20));
//출력 결과 : 200

https://extbrain.tistory.com/155(참고용)
https://github.com/soaple/first-met-react-practice(참고용)