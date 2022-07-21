function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum){
        console.log(endNum); 
      return [endNum];
    } else { //4, 5  // 5, 5 = [5, 5]
        console.log(startNum);
      return rangeOfNumbers(startNum +1, endNum);   
    }
  };
  
  rangeOfNumbers(20,50)
  //21, 22, 23