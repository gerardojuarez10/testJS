function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp]
  }else{  return "Not Found";}
  // Only change code above this line
}

//.hasOwnProperty(propname) para determinar si ese objeto
// tiene el nombre de propiedad dado