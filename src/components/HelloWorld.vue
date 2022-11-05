<template>
  <h1>getters -- {{ c.double }}</h1>
  <h1>state -- {{ c.count }}</h1>
  <button @click="add">actions</button>
</template>
<script setup>
import { useCounterStore } from "../store";
const c = useCounterStore();
const add = () => {
  c.increment();
};
</script>
