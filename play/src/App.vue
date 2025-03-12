<template>
  <wp-config-provider :locale="locale">
    <router-view></router-view>
  </wp-config-provider>
</template>
<script setup lang="ts">
import { WpConfigProvider } from '@whale-plus/components-pc';
import { computed, onMounted, ref } from 'vue';
import { zhCn, en } from '@whale-plus/locale';

const language = ref('zh-cn');
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en));
onMounted(() => {
  language.value = 'zh-cn';
});
</script>

<style scoped></style>
