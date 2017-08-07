<template>
    <div class="list-wrapper">
      <CardSection></CardSection>
    </div>
</template>
<script type = text/babel>
  import CardSection from './components/CardSection.vue';
  export default {
    components: {
      CardSection
    }
  }
</script>
<style scoped>
  .list-wrapper {
    width: 270px;
    margin: 0 5px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
  }
</style>
