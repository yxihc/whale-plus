<script setup lang="ts">
import { computed, provide } from 'vue';
import { localeContextKey, useLocale } from '@whale-plus/hooks';
import { configProviderProps } from './config-provider-props';
import { provideGlobalConfig } from './hooks/use-global-config';

defineOptions({
  name: 'WpConfigProvider',
});

const props = defineProps(configProviderProps);

provideGlobalConfig(props);
</script>

<template>
  <slot />
</template>
