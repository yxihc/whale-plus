<script setup lang="ts">
import { defineOptions, onMounted, ref } from 'vue';
defineOptions({
  name: 'WlScaleScreen',
});

const x = ref(0);
function test() {
  console.log('test');
}

onMounted(() => {
  console.log('mounted');
  test();
});
</script>

<template>
  <div>
    <solt />
  </div>
</template>

<style scoped></style>
