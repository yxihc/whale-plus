<script setup lang="ts">
import { localeContextKey, translate, useLocale } from '@whale-plus/hooks';
import { computed, onMounted, provide, ref } from 'vue';
import { zhCn, en } from '@whale-plus/locale';

const language = ref('zh-cn');
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en));
provide(localeContextKey, locale);

const { t } = useLocale();
onMounted(() => {
  console.log(
    t('wp.select.loading', {
      name: '牛逼aaaaaa',
    })
  );
  language.value = 'en';
});
</script>

<template>
  <div>
    {{
      t('wp.select.loading', {
        name: '牛逼aaaaaa',
      })
    }}
  </div>
</template>

<style scoped></style>
