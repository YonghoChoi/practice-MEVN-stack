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

## 참고
* https://okky.kr/article/517781
* https://vuetifyjs.com/ko/getting-started/quick-start 