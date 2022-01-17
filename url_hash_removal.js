function removehash(){
   setTimeout(function(){
      history.replaceState("", document.title, window.location.pathname);
  }, 1);
}

function myFunction1() {
    var x = document.getElementById("myInput1").value;
    document.getElementById("demo1").innerHTML = '<a href = "#myInput1" onclick="removehash()">' + x + '</a>';
}
