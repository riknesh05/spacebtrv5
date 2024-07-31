// ! jQuery to insert other html pages
const popopen = document.getElementById('pop_up');
const abt =document.getElementById('abt-container');
const exp = document.getElementById('exp-container');

 function open_popup(){
  popopen.style.display = "block";
 }
function open_abt(){
    abt.style.display = "block";
}
function close_abt(){
    abt.style.display = "none";
}
function open_exp(){
    exp.style.display = "block";
}
function close_exp(){
    exp.style.display = "none";
}