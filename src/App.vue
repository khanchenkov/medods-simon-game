<template>
  <div id="app">
    <Header/>
    <Board/>
  </div>
</template>

<script>
import Header from './components/Header'
import Board from './components/Board'

export default {
  name: 'App',
  components: {
    Header,
    Board
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@500&family=Open+Sans:wght@300;400&display=swap')
@import './sass/_reset.sass'

#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
