# 박상원 201830213


## 4월 17일 강의 내용
7. 훅
7-1. 훅이란 무엇인가?
1. 클래스형 컴포넌트에서는 생성자에서 state를 정의하고, setState() 함수를 통해 state를 업데이트합니다.
2. 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 훅
3. 클래스형 컴포넌트의 기능을 훅을 통해 모두 동일하게 구현할 수 있게됨
4. state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수
5. 훅의 이름은 모두 'use'로 시작
6. 사용자 정의 훅(custom hook)을 만들 수 있으며, 이 경우에 이름은 자유롭게 할 수 있으나 'use' 시작할 것을 권장

7-2. useState
1. 함수형 컴포넌트에서 state를 사용하기 위한 Hook
2. Counter 예제) 버튼을 클릭할 때마다 카운트가 증가하는 함수형 컴포넌트에서 증가는 하지만 재 랜더링은 일어나지 않음 -> 훅이 그걸 가능하게 함

7-3. useEffect
1. 사이드 이펙트를 수행하기 위한 것
2. side effect, 개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것
3. side effect 원래의 용도 혹은 목적의 효과외에 부수적으로 다른 효과가 있는 것
4. 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미
5. 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없기 때문, 렌더링이 끝난 이후에 실행되어야 하는 작업들
6. 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공
7. 결국 sideEffect는 렌더링 외에 실행해야 하는 부수적인 코드를 말함
8. Ex) 네트워크 리퀘스트, DOM 수동 조작, 로깅 등 정리가 필요 없는 경우들
9. useEffect(이펙트 함수, 의존성 배열), 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을때 실행
10. 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후, 재 렌더링 이후에 실행
11. 만약 이펙트 함수가 마운트와 언마운트 될 때만 한번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됨. 이 경우 props나 state에 있는 어떤 값에도 의존하기 않기때문에 여러 번 실행되지 않는다.

7-4. useMemo
1. useMemo() 훅은 Memoizde value를 리런하는 훅
2. 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 있다.
3. 렌더링이 일어나는 동안 실행, 따라서 렌더링이 일어나는 동안 실행되서는 안될 작업을 넣으면 안됨
4. 예를 들면 useEffect에서 실행되어야 할 사이드 이팩트 같은 것
Ex) const memoizedValue = useMemo(() => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
        return computeExpensiveValue(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
);
5. 의존성 배열을 넣지 않을 경우, 매번 함수가 실행
6. 의존성 배열을 넣지 않는 것은 의미가 없음, 빈배열을 넣어주면 됨

7.5 useCallback
1. useMemo()와 유사한 역할을 한다.
2. 차이점은 값이 아닌 함수를 반환
3. 의존성 배열을 파라미터로 받는 것은 useMemo와 동일함
4. 파라미터로 받은 함수를 콜백이라고 부름
5. useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환

7-6 useRef
1. 레퍼런스를 사용하기 위한 훅
2. 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미
3. useRef()훅은 바로 이 레퍼런스 객체를 반환
4. 레퍼런스 객체는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미 (const refContainer = useRef(초깃값);)
5. 반환된 객체는 컴포넌트의 라이프 타임 전체에 걸쳐서 유지, 즉 컴포넌트가 마운트 해제 전까지는 계속 유지된다

7-7 훅의 규칙
1. 무조건 최상의 레벨에서만 호출해야 한다. 컴포넌트의 최상위 레벨
2. 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 됨
3. 이 규칙에 따라 훅은 컴포넌트가 렌더링 될때마다 같은 순서로 호출되어야 함
4. 두번째 규칙은 리액트 함수형 컴포넌트에서만 훅을 호출해야 한다.
5. 일반 자바스크립트 함수에서 훅을 호출하면 안됨


## 4월 3일 강의 내용
5-1. 컴포넌트 구조란
1. 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 더 나아가 전체 페이지를 구성한다는 것을 의미
2. 컴포넌트는 재사용이 가능하므로 전체 코드 양을 줄여 개발시간과 보수 비용 줄일수 있음
3. 자바스크립트 함수처럼 입출력이 있다는 면에서 유사
4. 다만 입력은 Props가 담당, 출력은 리액트 엘리먼트의 형태로 출력
5. 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서 객체 지향의 개념과 비슷

5-2-1. Props의 개념
1. prop의 준말
2. 컴포넌트의 속성
3. 어떤 props를 넣느냐에 따라 속성이 다른 엘리먼트 출력
4. props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체

5-2-2. Props의 특징
1. 읽기 전용, 변경 할 수 없음
2. 속성이 다른 엘리먼트 생성시 새로운 props를 컴포넌트에 전달

5-2-3. Pure 함수 vs Impure 함수
Pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수
Impure함수는 인수로 받은 정보가 함수 내부에서 변하는 함수

5-2-4. Props 사용법
1. JSX에서는 key-value쌍으로 구성
2. JSX를 사용하지 않는 경우 createElement()함수로 전달
React.createElement(
    type,
    [props],
    [...children]
)

5-3. 컴포넌트 만들기
5-3-1. 컴포넌트의 종류
1. 리액트 초기버전에선 클래스형 컴포넌트를 주로 사용
2. 이후 Hook이 강화되어 최근에는 함수형 컴포넌트를 주로 사용
3. 클래스형 컴포넌트를 사용하고 있는 이전에 작성된 코드나 문서들이 있기에 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해 알아야함

5-3-2. 함수형 컴포넌트
Ex) function Welcome(props) {
    return <h1> 안녕, {props.name}</h1>
}

5-3-3. 클래스형 컴포넌트

5-3-4. 컴포넌트 이름 짓기
1. 항상 대문자로 이름 시작하기(소문자로 시작하면 DOM태그로 인식함)

5-4. 컴포넌트 합성
1. 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것
2. 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있다.
3. 다음 코드에서는 props의 값을 다르게 해서 Welcome 컴포넌트를 여러 번 사용

5-5. 컴포넌트 추출
1. 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있음
2. 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋음

6-1. state란?
1. 리액트 컴포넌트의 상태
2. 상태의 의미는 정상인지 비정상인지가 아닌 컴포넌트의 데이터를 의미
3. 컴포넌트의 변경가능한 데이터
4. State가 변하면 다시 렌더링이 되기 떄문에 렌더링과 관련된 값만 state에 포함

6-2. state의 특징
1. 리액트 만의 특별한 형태가 아닌 단지 자바스크립트 객체
2. 함수형에서는 useState()라는 함수 사용

6-3. 생명주기에 대해 알아보기
1. 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타냄
2. constructor가 실행 되면서 컴포넌트가 생성
3. 생성 직후 componentDidMount() 함수가 호출
4. 컴포넌트 소멸 전까지 여러번 랜더링
5. 렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어짐
6. 렌더링이 끝나면 compo~~ 함수 호출

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
1. 모든 자바스크립트 문법 지원g
2. 자바스크립트 문법에 XML과 HTML을 섞어서 사용
3. html이나 xml에 자바스크립트 코드를 사용하고 싶다면 {}괄호 사용
4. Ex) const element = <h1>안녕, {name}</h1> <- 이와 같이 섞어서 사용 가능
5. 태그의 속성값을 넣고 싶을때
// const element = <div tabIndex="0"></div>; 큰 따옴표 사이에 문자열을 넣거나
// const element - <img src={user.avatarUrl}></img>; 중괄호 사이에 자바스크립트 코드를 넣으면 됨

4-1. 엘리먼트의 정의
1. 엘리먼트는 리액트 앱을 구성하는 요소
2. 엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들
3. DOM 엘리먼트이며 HTML요소를 의미함

4-1-1. 리액트 엘리먼트와 DOM엘리먼트의 차이
1. 리액트 엘리먼트는 Virtual DOM의 형태를 취함
2. DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁다.
3. 반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가볍다.

4-2. 엘리먼트의 생김새
1. 자바스크립트 객체의 형태로 존재
2. 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체
3. 이 객체는 마음대로 변경할 수 없는 불변성을 가짐

4-3. 엘리먼트의 특징
1. 가장 큰 특징은 불변성, 한번 생성된 엘리먼트의 children이나 속성을 바꿀 수 없다.
2. 만약 내용이 바뀌면 컴포넌트를 통해 새로운 엘리먼트를 생성하면 됨
3. 그 다음 이전 엘리먼트와 교체 하는 방법으로 내용을 바꿈
4. 이렇게 교체하는 작업을 하기 위해 Virtual DOM을 사용

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