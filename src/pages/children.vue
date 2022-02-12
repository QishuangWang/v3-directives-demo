<template>
  <div>这是子组件count===> {{count}}</div>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <GrandSonVue />
</template>

<script setup>
import { ref } from '@vue/reactivity';
import GrandSonVue from './grandSon.vue';
const props = defineProps({
  count:{
    type:Number,
    default:0
  },
})
const emit = defineEmits(['increment','decrement'])
const increment = ()=>emit('increment')
const decrement = ()=>emit('decrement')
</script>

<style>
</style>