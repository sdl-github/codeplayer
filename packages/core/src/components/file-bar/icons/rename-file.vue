<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import tippy from 'tippy.js';
import type { Instance, Props } from 'tippy.js';
import { TooltipText } from '@/constant';
import { store } from '@/store';

const reference = ref();
let tippyDOM: Instance<Props> | undefined;

onMounted(() => {
  watch(
    () => store.theme,
    () => {
      if (tippyDOM) {
        tippyDOM.destroy();
      }
      tippyDOM = tippy(reference.value, {
        content: TooltipText.RenameFile,
        placement: 'bottom',
        arrow: false,
        theme: store.theme === 'dark' ? '' : 'light',
      }) as unknown as Instance<Props>;
    },
    { immediate: true }
  );
});
</script>
<template>
  <div data-toggle="tooltip" class="operate-btn" ref="reference">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="16px"
      width="16px"
      class="file-option-button"
    >
      <path
        fill="currentColor"
        d="M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z"
      />
    </svg>
  </div>
</template>
