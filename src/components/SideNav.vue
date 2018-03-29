<template>
  <div class="sidenav">
    <div class="header">
      <h3>Squares Clicked</h3>
    </div>
    <div class="results">
      <div class="selected-square" v-for="square in squaresClicked" v-text="square"></div>
    </div>
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
  width: 70%;
  margin: 0 auto;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 3px;
}

.sidenav .header {
  background: #f1f1f1;
  color: #666463;
}

.sidenav .selected-square {
  width: 50px;
  height: auto;
  box-sizing: border-box;
}

.sidenav .results {
  height: 400px;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-flow: column wrap;
  padding: 15px;
  box-sizing: border-box;
}




@media all and (max-width: 870px){
  .sidenav {
    width: 100vw;
    min-height: 50vh;
    height: auto;
  }
}
</style>
