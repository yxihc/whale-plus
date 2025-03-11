import { computed, inject, isRef, ref, unref } from 'vue';
import zhCn from '@whale-plus/locale/lang/zh-cn';
import { get } from 'lodash-unified';
import type { InjectionKey, Ref } from 'vue';
import type { Language } from '@whale/locale';
import type { MaybeRef } from '@vueuse/core';

export type TranslatorOption = Record<string, string | number>;
export type Translator = (path: string, option?: TranslatorOption) => string;
export type LocaleContext = {
  locale: Ref<Language>;
  lang: Ref<string>;
  t: Translator;
};

export const useLocale = (localeOverrides?: Ref<Language | undefined>) => {
  const locale = localeOverrides || inject(localeContextKey, ref())!;
  console.log(inject(localeContextKey, ref()).value);
  return buildLocaleContext(computed(() => locale.value || zhCn));
};
export const buildLocaleContext = (
  locale: MaybeRef<Language>
): LocaleContext => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale),
  };
};

// 设置vue3 provide key
export const localeContextKey: InjectionKey<Ref<Language | undefined>> =
  Symbol('localeContextKey');

export const buildTranslator = (locale: MaybeRef<Language>): Translator => {
  return (path, option) => {
    return translate(path, option, unref(locale));
  };
};

export const translate = (
  path: string,
  option: undefined | TranslatorOption,
  locale: Language
): string =>
  (get(locale, path, path) as string).replace(
    /\{(\w+)\}/g,
    (_, key) => `${option?.[key] ?? `{${key}}`}`
  );
