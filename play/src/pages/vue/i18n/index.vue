<script setup lang="ts">
import { localeContextKey, translate, useLocale } from '@whale-plus/hooks';
import { computed, inject, onMounted, provide, ref } from 'vue';

const { t } = useLocale();
let xx = 'asdasds';
const dd = ref('/2222222222');
const aa = computed(() => {
  return xx + '11111' + dd.value;
});
onMounted(() => {
  dd.value='00000000000'
});
</script>

<template>
  <div>{{ aa }}</div>
  <div>
    {{
      t('wp.select.loading', {
        name: '牛逼aaaaaa',
      })
    }}
  </div>
</template>

<style scoped></style>
