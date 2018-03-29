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
    width: 53vw;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    border-radius: 3px;
    margin: 0 auto;
  }

  @media all and (max-width: 870px){
    .chessboard {
      width: 80vw;
    }
  }

  @media all and (max-width: 600px){
    .chessboard {
      width: 100vw;
    }
  }
</style>
