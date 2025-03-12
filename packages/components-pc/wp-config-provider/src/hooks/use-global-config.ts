import { type Ref, computed, inject, provide } from 'vue';
import { localeContextKey, useLocale } from '@whale-plus/hooks';
import type { ConfigProviderProps } from './../config-provider-props';

export function provideGlobalConfig(props: ConfigProviderProps) {
  const locale = useLocale(computed(() => props?.locale));
  provide(localeContextKey, locale.locale);
  return {
    locale,
  };
}

export function useGlobalConfig() {
  const globalLanguage = inject<Ref<string>>('globalLanguage');
  if (!globalLanguage) {
    throw new Error(
      '全局语言状态未提供，请确保在 App.vue 中调用 provideGlobalLanguage'
    );
  }
  return globalLanguage;
}
