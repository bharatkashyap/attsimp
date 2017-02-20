var hamburger = document.getElementById("hamburger");
var plate = document.getElementById("ham-container");
var list = document.getElementById("alt-nav");
var text = document.getElementById("text");

function bringGrid()
{
  list.style.width = "35%";
  text.style.opacity = 0.4;
}

function hideGrid()
{
  list.style.width = "0";
  text.style.opacity = 1;
}

function callMenu()
{


  if(hamburger.classList.contains("fa-bars"))
  {
    hamburger.className = "fa fa-arrow-left";
    bringGrid();
  }
  else
  {
    hamburger.className = "fa fa-bars";
    hideGrid();
  }

}


hamburger.addEventListener("click", callMenu);
