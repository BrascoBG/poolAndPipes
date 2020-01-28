function poolAndPipes([a,b,c,d]){
  let poolVolume = parseInt(a);
  let pipe1 = parseInt(b);
  let pipe2 = parseInt(c);
  let hoursBreak = parseFloat(d);
  let water = (pipe1 + pipe2) * hoursBreak;

  if(water <= poolVolume){
    console.log('The pool is ' + Math.trunc((water / poolVolume) * 100) + '% full');
    console.log('The 1st pipe ' + Math.trunc((pipe1 * hoursBreak) / water * 100) + '%');
    console.log('The 2nd pipe ' + Math.trunc((pipe2 * hoursBreak) / water * 100) + '%');
  }
  else{
    console.log('For ' + hoursBreak + ' hours the pool overflowes with ' + (water-poolVolume) + ' liters.')
  }


}

poolAndPipes([1000, 50, 140, 4]);
