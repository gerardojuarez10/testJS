function sequentialSizes(val) {
    let answer = 0;
  
    // Only change code below this line
  switch (val) {
    case 1 :
    answer += 1 ;
    case 2 :
    answer =+ 2;
    case 3 :
    answer =+ 3;
    
    case 4 :
    answer += 4;
    case 5 :
    answer += 5;
    case 6 :
    answer += 6;
    
    case 7 :
    answer += 7;
    case 8 :
    answer += 8;
    case 9 :
    answer += 9;
    break;
    case 10 :
    answer += 10 ;
    
    case 11 :
    answer =+ 11;
    case 12 :
    answer =+ 12;
    
    case 13 :
    answer += 13;
    case 14 :
    answer += 14;
    case 15 :
    answer += 15;
    
    case 16 :
    answer += 16;
    case 17 :
    answer += 17;
    case 18 :
    answer += 18;
    case 19 :
    answer += 19;
    break;
    case 20 :
    answer += 20;
    default :
    answer = "error"
    
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  console.log(sequentialSizes(15));