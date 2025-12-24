import { BUTTON_VARIANTS } from '@/common/enums';

export const getButtonClassNameByVariant = (variant: BUTTON_VARIANTS) => {
  switch (variant) {
    case BUTTON_VARIANTS.LIGHT:
      return 'bg-amber-500 text-white hover:bg-amber-600 active:scale-95';
    case BUTTON_VARIANTS.DARK:
      return 'bg-neutral-700 text-white hover:bg-neutral-700 active:scale-95 shadow-lg shadow-black/20';
    case BUTTON_VARIANTS.GREY:
      return 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300 active:scale-95';
    default:
      return 'bg-neutral-500 text-white';
  }
};
