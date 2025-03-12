import type { ExtractPropTypes, PropType } from 'vue';
import type { Language } from '@whale-plus/locale';

export const definePropType = <T>(val: any): PropType<T> => val;
export const configProviderProps = {
  /**
   * @description Locale Object
   */
  locale: {
    type: Object as PropType<Language | undefined>,
  },
};
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
