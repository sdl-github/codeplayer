<template>
  <div class="container">
    <CodePlayer :options="options" class="code-player">
      <template #toolbar>
        <div>
          <button @click="reload">reload</button>
        </div>
      </template>
    </CodePlayer>
  </div>
</template>

<script setup lang="ts">
import CodePlayer, { CodePlayerOptions } from "./index";

const options: CodePlayerOptions = {
  appType: "typescript",
};

function reload() {
//   window.location.replace(window.location.host);
  window.location.href = window.location.origin + window.location.pathname;

}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  .code-player {
    width: 100%;
    height: 100%;
  }
}
</style>
