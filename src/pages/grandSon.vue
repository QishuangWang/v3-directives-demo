<template>
  <div>这是孙子组件{{count}}</div>

</template>

<script setup>
import { inject } from "@vue/runtime-core";

const count = inject('count')
</script>

<style>

</style>