function fibs(num){
  let arr = [0,1]
  if(num < 2)
    return arr
  else {
    fibs(num-1) + fibs(num-2)
  }
}
console.log(fibs(20))