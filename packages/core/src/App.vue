<template>
    <div class="container">
        <CodePlayer class="code-player"> </CodePlayer>
    </div>
</template>

<script setup lang="ts">
import CodePlayer from "./index";
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
