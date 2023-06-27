# 프로젝트 개요

redux를 ducks패턴으로만 사용했는데 기존 createStore가 deprecated 되며  
redux toolkit configureStore 사용을 권장하여 사전 연습하기 위함.
[ducks pattern?]: https://ahnanne.tistory.com/34

## redux toolkit 등장

redux toolkit은 기존 redux사용시 적용하기 어려운 보일러플레이트가 존재했다.  
액션 타입, 액션 함수, 리듀서를 구현하는 과정이 개발자 생산성에 악영향을 주며 개발되었다.

## 기능

1. createAction: 기존 액션타입, 액션 함수를 하나로 합쳐주는 간편함을 제공<br/>
2. createReducer: createAction으로 생성한 함수를 넣어 해당 액션을 dispatch하면 정의한 함수를 실행시킨다.<br/>
   또한 다른하나의 특성은 불변성을 지키지 않아도 된다는점이다. <br/>
   기존 redux는 상태를 불변하게 유지시켜야했는데 <br/>
   (상태 변화를 감지하기 위해 이전 상태와 현재 상태를 비교했는데 만약 직접 변경되면 일관성이 없어질 수 있고 추적하기 어려운 문제가 발생)<br/>
   redux toolkit immer라는 라이브러리 아래에서 동작하게 설계되어 불변성 유지를 대신 관리해준다.
3. createSlice: 위 두가지 기능도 여전히 불편함이 존재해 두 기능을 하나의 함수로 합치는 기능이다.<br/>
   액션의 경우 createSlice로 생성한 함수의 actions 메서드를 내보내 외부에서 사용합니다.
