function sum(arr, n) {
    // Only change code below this line
  if (n<=0){
    return 0
  } else {
    return sum(arr, n - 1) + arr[n-1]
  }
    // Only change code above this line
  }
  /*

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }

  En recursividad:

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

  */