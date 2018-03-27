<template>
  <div id="app">
    <ChessBoard/>
    <SideNav/>
  </div>
</template>

<script>
import ChessBoard from './components/ChessBoard';
import SideNav from './components/SideNav';

export default {
  name: 'App',
  components: {
    ChessBoard,
    SideNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
