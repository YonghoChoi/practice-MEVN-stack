# practice-MEVN-stack
MongoDB, Express, Vue.js, Node.js 실습 입니다.

## 준비
1. Node.js 설치
2. Express 설치
```
 npm install express-generator -g
```
3. express 백엔드 구성
```
express --view=pug be
```
4. change directory
```
cd be
```
5. install dependencies
```
npm install
```
6. run the app
```
npm start
```
7. localhost:3000 으로 접속 확인
8. vue cli 설치
```
npm install -g @vue/cli
```
9. Vuetify가 포함된 SPA 기본 구조 생성
```
vue create fe
```
10. 다음과 같이 옵션 선택
```
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, Linter
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Standard
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N)
```
  * Manual로 선택
  * Router와 Vuex 선택
  * ESLint + Stadard 선택
  * Lint on save 선택
  * In dedicated config files 선택
11. vue 실행
```
cd fe
yarn serve (or npm run serve)
```
12. localhost:8080으로 접속해서 확인
13. Ctrl + C로 yarn serve 종료
14. Vuetify 추가
```
vue add vuetify
```
  * Default로 생성
15. 다시 실행
```
yarn serve
```
16. localhost:8080으로 접속해서 확인

## 디렉토리 구조
- node_modules : 프론트엔드단에 사용되는 노드 패키지들이 저장됨
- public : html 파일
- src : 개발에 필요한 소스들
- asset : .css나 그밖에 image등 정적인 요소들
- components : 페이지를 구성할때 사용될 .vue(Vue single file component) 파일들
- plugin : Vue 플러그인 파일들
- views : 페이지들
  - 페이지는 Vue single file component 파일
  - components와 views 의 차이점은 부품과 그것을 사용해 만드는 완성품 정도로 이해
- app.vue : Single Page Application (이하 SPA)의 최상위 계층
  - 이 app.vue 내부에 다른 모든것들을 렌더링해서 화면을 표시
- main.js : Vue project의 설정 파일이라고 생각하면 됨
- router.js : AJAX요청을 통해 페이지 로드 없이 화면을 갱신해줄때, Vue Router를 이용해 주소에 맞는 view 컴포넌트를 렌더링 해주는 역할
- store.js : 앱의 전역 상태를 관리해주는 Vuex Store가 저장되는 곳

## Flow
1. 여러 컴포넌트들을 Vue Router에 등록
2. Web Pack이 이 컴포넌트들을 하나로 취합
  - vue-cli를 사용하여 프로젝트를 구성하면 Web Pack 설정이 자동으로 되기 때문에 따로 설정할 필요 없음
3. Vue Router가 주소에 맞는 컴포넌트들을 자동으로 렌더링

## 참고
* https://okky.kr/article/517781
* https://vuetifyjs.com/ko/getting-started/quick-start 