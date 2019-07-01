<template>
  <!-- 아래 v- 두문자를 사용하는 태그는 Vuetify에서 제공하는 커스텀 컴포넌트 -->
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <!-- router-view는 해당 주소에 매칭될 컴포넌트가 렌더링 될 자리-->
      <!-- router-view에 해당하는 주소로 이동하게 되면 아래 부분만 갱신되므로 위의 v-toolbar는 그대로 유지됨-->
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
/*
  - App.vue는 Vue Single File Component 파일
  - 크게 세 부분으로 나뉨
    1. 화면을 구성할 마크업을 담고 있는 Template
    2. 화면을 구성할 데이터와 그 데이터를 제어하는 메서드들을 담는 Script
    3. 스타일 시트를 정의하는 Style
 */
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
