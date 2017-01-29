function display(index)
{
  var x = document.getElementsByTagName("div");
  for(var i=0; i<x.length; ++i)
  {
    if(x[i].className=="poolteam")
    {
      x[i].style.visibility="hidden";
    }
  }
  document.getElementById(index).style.visibility="visible";
}
