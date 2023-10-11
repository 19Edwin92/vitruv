# 비트루브 : 프론트엔드 기술 문제 
## 제출자 : 박영찬
[배포(AWS)](http://vitruv.s3-website.ap-northeast-2.amazonaws.com/)

### 1. 라이브러리 

  |라이브러리|선택이유|
  |:--|:--|
  |@reduxjs/toolkit|네트워크 상태 관리를 위한 라이브러리|
  |axios|비동기 통신을 위한 라이브러리|
  |msw|MockingServer를 위한 라이브러리, 데브상태가 아니라 현재 배포 상태에서도 동작하도록 설정함|
  |styled-components|CSS in JS를 위한 라이브러리|
  |react-icons|아이콘 사용을 위한 라이브러리|
  |dayjs|날짜의 간편한 포메팅을 위한 라이브러리|

### 2. 언어 : typescript

  데이터의 타입 안정성을 위해서 도입

### 3. 디렉토리 구조

  ```bash
  src
  └ components ## 컴포넌트 파일 및 CSS 파일 관리
  └ hooks ## 커스텀훅을 관리
  └ mock ## msw를 통한 모킹서버 및, api(네트워크상태관리)를 관리
  └ pages ## 라우팅 단위의 컴포넌트 관리
  └ types ## 타입설정에 대한 관리
  ```

### 4. 프로젝트 설계 및 작성

첫째, 중첩라우트를 활용한 컴포넌트 리렌더링 제어
  - `Home컴포넌트` 하위에 Outlet 메소드를 사용하여, 전체학급과 개별학급의 라우트를 관리

둘째, 간결한 코드작성을 위한 공헌
  - `리액트 모듈 인덱스` 를 도입하여, import 구분의 간소화 및 코드 가독성 증진
  - `네트워크상태관리`와 관련하여, 가독성이 좋은 reduxToolkitQuery(이하, RTKQ) 도입 
    - RTKQ 의 특징으로 네트워크 상태관리만 할 때
    - store를 생성하지 않고 `ApiProvider` 만으로 간편한 사용을 지원(데이터 캐싱 지원)
  - `styled-components`를 활용하여 모듈화 될 수 있는 스타일들을 동적으로 제어함

