<template>
  <CodePlayer :options="options" class="codeplayer-container">
  </CodePlayer>
</template>

<script setup lang="ts">
// import CodePlayer, { CodePlayerOptions } from '../../core/src/index';
import CodePlayer, { CodePlayerOptions } from '../../core';
import { JsTemplate } from './templates/javascript'

const options: CodePlayerOptions = {
  appType: 'js',
  initFiles: JsTemplate
}

</script>

<style scoped lang="less">
.codeplayer-container {
  max-height: 100vh;
  height: 100vh;
}
</style>
