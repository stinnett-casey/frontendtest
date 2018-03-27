<template>
  <div :class="computedColor()" @click="squareclick(fullposition())">{{ fullposition() }}</div>
</template>

<script>
import store from '../store';

export default {
  name: 'Square',
  props: ['position'],
  methods: {
    squareclick(value){
      return store.addToSquaresClicked(value);
    },
    computedColor(){
      let { position } = this;
      let row = Math.floor(position/8);
      let row_even = row % 2 == 0;
      let string = '';
      if (row_even) {
        if (position % 2 == 0) {
          string = 'wood'
        } else {
          string = 'black'
        }
      } else {
        if (position % 2 == 0) {
          string = 'black'
        } else {
          string = 'wood'
        }
      }
      return 'square ' + string;
    },
    fullposition(){
      let { position } = this;
      let row = Math.floor(position/8);
      return (row+1) + (String.fromCharCode(97 + (position%8)))
    }
  }   
}
</script>

<style scoped>

  .square {
    min-height: 8.70vw;
    width: 8.70vw;
    cursor: pointer;
  }

  .square:active {
    background: white !important;
  }

  .square.black {
    background: black;
    color: white;
  }

  .square.wood {
    /*background-color: transparent;*/
    background-image: url("http://www.backgroundsy.com/file/large/wood-grain.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: black;
  }

  @media all and (max-width: 870px){
    .square {
      min-height: 12vw;
      width: 12vw;
    }
  }
</style>