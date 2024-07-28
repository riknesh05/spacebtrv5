// ! jQuery to insert other html pages
const popopen = document.getElementById('pop_up');
$(function() {
    $("#About").load("htmls/members.html");
 });
 
$(function() {
    $("#Explore").load("htmls/explore.html");
 });

 function open_popup(){
  popopen.style.display = "block";
 }
