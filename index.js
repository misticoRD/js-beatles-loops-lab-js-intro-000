// add solution here
function theBeatlesPlay(musician, instruments){
  let music = [];

  for(let i = 0; i < musician.length; i++){
     music.push(`${musician[i]} plays ${instruments[i]}`)
  }
  return music;
}

function johnLennonFacts(facts){
let factsArray = [];
 while(facts){
    factsArray.push(`${facts}!!!`);
  }
  return factsArray;
}
