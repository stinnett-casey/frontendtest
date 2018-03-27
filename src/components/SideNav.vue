<template>
  <div class="sidenav">
    <h3>Squares Clicked</h3>
    <div class="selected-square" v-for="square in squaresClicked" v-text="square"></div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'SideNav',
  data() {
    return  { squaresClicked: store.state.squaresClicked }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidenav {
  float: left;
}

.sidenav {
  width: 27vw;
  height: 70vw;
  background: gray;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: column;
}

.sidenav .selected-square {
  width: 50px;
  color: white;
  float: left;
  box-sizing: border-box;
}

.sidenav .selected-square:nth-child(16) {
  break-before: always;
}


@media all and (max-width: 870px){
  .sidenav {
    width: 100vw;
    min-height: 50vh;
    height: auto;
  }
}
</style>
