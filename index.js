function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n){
  n = parseInt(n);
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i=0; i<list.length; i++){
    list[i].innerHTML = (parseInt(list[i].textContent)+n).toString();
  }
}

function deepestChild(){
  var seek = document.querySelectorAll('#grand-node div');
  if(!seek.length) return false;
  return seek[seek.length-1];
}
