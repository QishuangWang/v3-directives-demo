<template>
  <div id="father" v-waterMarker="{text:'wqs版权所有',textColor:'rgba(180, 180, 180, 0.4)'}">
    父组件入口
    <p><input type="text" v-model="msg" v-input:customize data-rule="/[^a-z0-9]/"/></p>
    <p v-longpress="longpress">{{ msg }}123</p>
    <childern
      :count="count"
      @increment="increment"
      @decrement="decrement"
    ></childern>
    <button v-debounce="debounceClick">防抖</button>
    <p v-ellipsis:100>需要省略的文字是阿萨的副本阿萨的副本阿萨的副本阿萨的副本需要省略的文字是阿萨的副本阿萨的副本阿萨的副本阿萨的副本</p>
    <p v-hide-text.name>王其爽</p>
    <p v-format-text>1000000000</p>
    <div v-draggable:father style="width:100px;height:100px;background:red"></div>
    <div v-collapse="{open:'200px',close:'43px',icon:'iconfont icon_global_ArrowDown'}" style="width:200px;margin:0 auto">
      <div class="box"></div>
    </div>
    <!-- <i class="iconfont">&#xebbc;</i> -->
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <button v-backTop style="position:fixed;bottom:20px;right:20px">top</button>

  </div>
</template>

<script setup>
import { reactive, ref, provide } from "vue";
import childern from "./children.vue";
const msg = ref("测试测试");
const count = ref(0);
const obj = reactive({
  name: "wqs",
  age: "30",
});
provide("count", count);
const copyText = ref("这是copy文字");
const tootipParams = ref("这是tootipParams文字");

const decrement = () => count.value--;
const increment = () => count.value++;
const debounceClick = () => {
  console.log("只触发一次");
};
const longpress = () => {
  alert("长按指令生效");
};
</script>

<style scoped>
.box{
  height: 100%;
  background: yellow;
}
</style>