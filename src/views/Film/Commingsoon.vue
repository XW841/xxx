<template>
  <div>
    <ul>
      <li v-for="data in this.$store.state.commingsoonList"
          :key="data.name"
          @click="handleClick(data.isPresale,data.filmId)">
        <img :src="data.poster"
             alt="">
        <span class="filmname">{{data.name}}</span><span class="filmtype">{{data.item.name}}</span>
        <br /> <br />

        <p class="act">主演：{{data.actors | actorsfilter}}</p>
        <p>上映时间：</p>
        <div class="buy"
             @click.stop="onClick"
             v-if="data.isPresale">预购</div>
      </li>

    </ul>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import Vue from 'vue'

export default {
  data () {
    return {

    };
  },
  mounted () {
    if (this.$store.state.commingsoonList.length == 0) {
      this.$store.dispatch("getCommingsoonList")
    } else {
      // consolo.log("使0用缓存数据")  默认自动使用缓存数据
    }
  },
  components: {},

  computed: {},

  methods: {
    handleClick (data, id) {
      if (!data) {
        // console.log('fashoule')
        MessageBox({
          title: '提示',
          message: '该电影还没有排期，看看其他电影吧',
          showCancelButton: true
        }).then(res => {
          if (res === 'confirm') {
            this.$router.push('/Film/Commingsoon')
          }


        })
      }
      this.$router.push({ name: "detailpage", params: { id: id } })
    },
    onClick () {
      alert(11)
    }
  }
}
</script>
<style lang='css' scoped>
/* 为了包保证底部导航栏不遮住内容 */
ul::after {
  content: "";
  height: 20px;
  display: block;
}
ul li {
  overflow: hidden;
  padding: 7px 10px;
  /* margin-bottom: 10px; */
  /* border-bottom: solid 2px rgb(226, 223, 223); */
}

ul li img {
  width: 75px;
  height: 100px;
  float: left;
  margin-right: 5px;
}
p {
  font-size: 0.9em;

  color: #797d82;
}

.filmname {
  font-weight: 400;
}
.filmtype {
  font-size: 0.5em;
  /*  */
  margin-left: 10px;
  padding: 0.5px 2px;
  border: solid 1px gray;
  border-radius: 3px;
  background: #c5c8ce;
  opacity: 0.8;
}
.act {
  width: 260px;
  height: 20px;
  text-overflow: ellipsis;

  white-space: nowrap;

  overflow: hidden;
}
.buy {
  float: right;
  transform: translateY(-55px);
  color: #ffb232;
  padding: 3px 8px;

  border: 1px solid #ffb232;

  border-radius: 5px;
}
</style>