

function century(year) {
    // Finish this :)
    const century = Math.floor(year / 100)
    const decade = year % 100;
    
    if ( decade > 0){
      return century +1
    }
    return century
  }
  console.log(century(1982))