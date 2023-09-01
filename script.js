function heartSwitch(){
  let heartFull = document.getElementById("heartFull");
  let heartEmpty = document.getElementById("heartEmpty");
  let info = document.querySelector("#info");

  if (heartFull.classList.contains("opacity-0")){
    heartFull.classList.add("opacity-100")
    heartFull.classList.remove("opacity-0")

    heartEmpty.classList.add("opacity-0")
    heartEmpty.classList.remove("opacity-100")
  }
  else{
    heartEmpty.classList.add("opacity-100")
    heartEmpty.classList.remove("opacity-0")

    heartFull.classList.add("opacity-0")
    heartFull.classList.remove("opacity-100")
  }
}


function modalPop(){
    info.classList.remove("h-0")
    info.classList.remove("top-full")
    info.classList.remove("overflow-hidden")

    info.classList.add("h-full")
    info.classList.add("top-10")


}

function modalCiao(){
  info.classList.add("h-0")
  info.classList.add("top-full")
  info.classList.add("overflow-hidden")

  info.classList.remove("h-full")
  info.classList.remove("top-0")
}

