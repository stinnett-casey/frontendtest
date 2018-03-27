var store = {
  state: {
    squaresClicked: []
  },
  addToSquaresClicked(value){
    this.state.squaresClicked.push(value);
  }
}

export default store;