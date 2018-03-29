<template>
  <div id="app">
    <div class="w-50">
      <ChessBoard/>
    </div>
    <div class="w-50">
      <SideNav/>
    </div>
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
    width: 90%;
    margin: 0 auto;
  }

  .w-50 {
    width: 50%;
    float: left;
  }

  @media all and (max-width: 870px){
    #app {
      width: 100%;
    }

    .w-50 {
      width: 100vw;
    }
  }
</style>
