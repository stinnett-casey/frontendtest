<template>
  <div :class="computedColor()" @click="squareclick(fullposition())" v-html="letterOrNumber()"></div>
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
          string = 'lighttan'
        } else {
          string = 'peagreen'
        }
      } else {
        if (position % 2 == 0) {
          string = 'peagreen'
        } else {
          string = 'lighttan'
        }
      }
      return 'square ' + string;
    },
    fullposition(){
      let { position } = this;
      let row = Math.floor(position/8);
      return String.fromCharCode(97+(104-(97+(position%8)))) + (row+1);
      // return (String.fromCharCode(97 + (position%8))) + (row+1);
    },
    letterOrNumber(){
      let { position } = this;
      let row = Math.floor(position/8);
      let col = (position%8);
      if (row === 7 && col === 0) {
        return `<span class="row-number">${(row+1)}</span><span class="column-letter">${String.fromCharCode(97+(104-(97+(position%8))))}</span>`
      } else if (row === 7) {
        return `<span class="column-letter">${String.fromCharCode(97+(104-(97+(position%8))))}</span>`;
      } else if (col === 0) {
        return `<span class="row-number">${(row+1)}</span>`;
      }
    }
  }
}
</script>

<style>

  .square {
    min-height: 6vw;
    width: 6vw;
    cursor: pointer;
    position: relative;
  }

  .square .row-number, .square .column-letter {
    position: absolute;
    font-size: 1.5vw;
  }

  .square span.row-number {
    top: 5px;
    left: .9vw;
  }

  .square span.column-letter {
    bottom: 5px;
    right: .9vw;
  }

  .square:active {
    background: white !important;
  }

  .square.peagreen {
    background: #779559;
    color: #eeeed3;
  }

  .square.lighttan {
    background-color: #eeeed3;
    color: #779559;
  }

  .square:first-child {
    border-top-left-radius: 3px;
  }

  .square:nth-child(8) {
    border-top-right-radius: 3px;
  }

  .square:nth-child(57) {
    border-bottom-left-radius: 3px;
  }

  .square:nth-child(64) {
    border-bottom-right-radius: 3px;
  }

  @media all and (max-width: 870px){
    .square {
      min-height: 9vw;
      width: 9vw;
    }

    .square .row-number, .square .column-letter {
      font-size: 2.3vw;
    }
  }

  @media all and (max-width: 600px){
    .square {
      min-height: 12vw;
      width: 12vw;
    }
  }
</style>