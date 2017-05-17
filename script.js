var hamburger = document.getElementById("hamburger");
var plate = document.getElementById("ham-container");
var list = document.getElementById("alt-nav");
var text = document.getElementById("text");
var image = document.getElementById("img");

function bringGrid()
{
  hamburger.className = "fa fa-arrow-left";
  list.style.width = "35%";
  text.style.opacity = 0.4;
  image.style.opacity = 0.4;
}

function hideGrid()
{
  hamburger.className = "fa fa-bars";
  list.style.width = "0";
  text.style.opacity = 1;
  image.style.opacity = 1;
}

function callMenu()
{


  if(hamburger.classList.contains("fa-bars"))
  {
    bringGrid();
    text.addEventListener("click", hideGrid);
  }
  else
  {
    hideGrid();
  }

}


hamburger.addEventListener("click", callMenu);
