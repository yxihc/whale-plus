<script setup lang="ts">
import { localeContextKey, translate, useLocale } from '@whale-plus/hooks';
import { computed, inject, onMounted, provide, ref } from 'vue';

const { t } = useLocale();
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
