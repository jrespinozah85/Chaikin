function chaikin(inPoints){
  let tmp = [];
  for (let i=0; i<inPoints.length-1; i++){
    let p0 = inPoints[i];
    let p1 = inPoints[i+1];
    let q = [0.75*p0[0]+0.25*p1[0], 0.75*p0[1]+0.25*p1[1]];
    let r = [0.25*p0[0]+0.75*p1[0], 0.25*p0[1]+0.75*p1[1]];
    tmp.push(q);
    tmp.push(r);
  }
  return tmp;
}
