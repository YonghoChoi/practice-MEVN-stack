<!-- template 아래에는 하나의 태그만 사용 가능. 아래 예제에서는 최상위 레벨에 v-container 태그 하나만 존재 -->
<template>
    <!-- 
        vuetify의 그리드 시스템은 가로로 총 12개의 칸을 사용
        v-container는 그리드 리스트의 가장 큰 부분을 담당하는 태그. v-layout과 v-flex를 포함함 
        grid-list-xl 옵션은 큰화면에 어울리는 간격의 그리드 리스트를 만듦
    -->
    <v-container grid-list-xl>
        <!-- 
            v-layout은 row 옵션을 사용하여 컴포넌트들을 왼쪽에서 오른쪽으로 정렬 
            v-flex를 포함하여 공간을 만듦
        -->
        <v-layout row wrap>
            <!-- 
                아래에서는 3개의 v-flex로 3개의 공간을 만들고 있음
                xs12 sm4는 flex 박스 크기를 의미 (extra-small 사이즈의 화면에서는 12를 차지하고, small 사이즈의 화면에서는 4를 차지)
                휴대폰에서는 한 줄에 하나의 식당이 보이고, 큰 화면에서는 한줄에 4,4,4 크기를 갖는 3개의 식당이 보이게됨
            -->
            <v-flex 
                xs12
                sm4
                v-for="(restaurant, index) in restaurants"
                :key="index">   
                <!-- 
                    for문 사용시 유니크한 키를 부여해야함. 이 키를 바탕으로 데이터가 변화했을 때 화면을 어떤식으로 재 렌더링 할지를 결정
                    :key는 index라는 변수를 key에 바인딩하겠다는 의미
                -->


                <!-- 
                    v-card는 정보를 표현하는 자리를 만듦 
                    내부에는 제목을 표시할 v-card-title, 내용이 될 v-card-text, 기타 버튼등이 들어갈 v-card-actions로 나뉠 수 있음
                -->
                <v-card>
                    <!-- v-img로 이미지 표시 -->
                    <v-img
                        aspect-ratio="2"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    >
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline white--text">{{ restaurant.name }}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    </v-img>
                    <v-card-text>
                        {{ restaurant.type }}
                        주소 : {{ restaurant.address }}
                    </v-card-text>
                    <!-- v-divider는 구획을 나눠주는 컴포넌트 -->
                    <v-divider/>
                    <v-card-actions>
                        <!-- v-spacer는 여백을 만드는 컴포넌트(가로 길이 전체를 차지하기 때문에 다른 컴포넌트들을 한쪽으로 밀어줄 때 사용) -->
                        <v-spacer/>
                        <!-- 
                            v-icon으로 아이콘 표시  px-2는 아이콘에 padding을 2만큼 주겠다는 의미 (2px는 아니고 vuetify 내부의 비율)
                            p-2는 전체 패딩, px-2는 가로 패딩, py-2는 세로 패딩, pt는 위, pb는 아래, pr은 오른쪽, pl은 왼쪽
                            m2로 마진도 줄 수 있음
                        -->
                        <v-icon small class="px-2">favorite</v-icon><span>0</span>
                        <v-icon small class="px-2">comment</v-icon><span>0</span>
                        <v-icon small class="px-2">visibility</v-icon><span>0</span>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            restaurants: [
                {
                    name: '장모님 식당',
                    type: '한식',
                    address: '경기도 안양시'
                },
                {
                    name: '아저씨 초밥',
                    type: '일식',
                    address: '경기도 안양시'
                },
                {
                    name: '매운 짬뽕집',
                    type: '중식',
                    address: '경기도 안양시'
                }
            ]

        }
    }
}
</script>
