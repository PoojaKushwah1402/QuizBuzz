

function shuffle () {
    let input = this;  
    //console.log(input)
    for (let i = input.length - 1; i >= 0; i--) {
  
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let itemAtIndex = input[randomIndex];
  
      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    console.log(input)

    return input;
  }

  export default shuffle;