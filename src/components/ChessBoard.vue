<template>
  <div class="chessboard">
    <square v-for="(square, i) in squares" :position="i" :key="i"></square>
  </div>
</template>

<script>
import Square from './Square'

export default {
  name: 'ChessBoard',
  data() {
    return {squares: new Array(64)}
  },
  components: {
    Square
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chessboard {
    width: 70vw;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    /*background: url('http://www.backgroundsy.com/file/large/wood-grain.jpg') no-repeat center center fixed;*/
  }

  .chessboard {
    float: left;
  }

  @media all and (max-width: 870px){
    .chessboard {
      width: 100vw;
    }
  }
</style>
