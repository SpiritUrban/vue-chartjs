<template>
  <div id="nev">
    <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <h2>Linechart</h2>
            <h1>{{ msg }}</h1>
          <!--line-example></line-example-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nev',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
