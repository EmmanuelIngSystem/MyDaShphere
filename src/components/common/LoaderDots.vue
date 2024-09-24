<template>
  <div class="mainCss" v-if="isLoading">
    <div class="dotsCss">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoaderDots',
  props: {
    isLoading: {
      type: Boolean
    }
  }
}
</script>
