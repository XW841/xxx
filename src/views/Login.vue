<template>
  <div>
    <div class="main">
      <img src="/static/img/logo.jpg"
           alt="">
      <div class="form">
        <van-form @submit="onSubmit">
          <van-field v-model="username"
                     name="username"
                     label="用户名"
                     placeholder="用户名"
                     :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password"
                     type="password"
                     name="password"
                     label="密码"
                     placeholder="密码"
                     :rules="[{ required: true, message: '请填写密码' }]" />
          <div style="margin: 16px;">
            <van-button round
                        block
                        type="info"
                        native-type="submit">提交</van-button>
          </div>
        </van-form>
      </div>
    </div>
    {{hahaha}}
  </div>
</template>

<script>

import Vue from 'vue';
import { Form } from 'vant';
import { Field } from 'vant';
import { Toast } from 'vant';
import Bus from '@/bus/index.js'


Vue.use(Toast);
Vue.use(Form);
Vue.use(Field);
Vue.use(Toast);
export default {
  data () {
    return {
      username: 'user1',
      password: 'user123456',
      userinfo: [],
      hahaha: ''
    };
  },
  beforeMount () {
    this.$store.commit('hidenTabbar', false)
  },
  mounted () {
    Bus.$on('passInfo', value => {
      console.log('接收数据')
      // console.log(111)
      // console.log(value)
      Bus.sendData = value
      localStorage.setItem('username', Bus.sendData)

    })

  },

  components: {

  },

  computed: {},

  methods: {
    onSubmit () {
      Toast.loading({
        message: '登录中....',
        forbidClick: true,
      });

      setTimeout(() => {
        Toast.success('登录成功');
        this.$router.push("/center")
      }, 2000);
      Bus.$emit('passInfo', this.username)
      console.log('传递数据···')



    }
  },
  beforeDestroy () {
    Bus.$off('passInfo')
  },
}
</script>
<style lang='css' scoped>
.main {
  margin-top: 100px;
  position: relative;
}
.main img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  left: 40%;
}
.main .form {
  position: absolute;
  width: 100%;
  top: 100px;
}
.van-button--info {
  background-color: #ff5f16;
  border: 1px solid #ff5f16;
}
Center {
}
</style>