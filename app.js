const para = document.getElementById("demo");
const para2 = document.getElementById("demo2");
const img = document.querySelector("img");
const content = document.querySelector(".content");

function changeImage(name) {
  const image = document.getElementById("image");
  let src;

  switch (name) {
    case "Walter White":
      src = "./images/Walt.webp";
      break;

    case "Jesse Pinkman":
      src = "./images/jesse.webp";
      break;

    case "The fly":
      src = "./images/fly.webp";
      break;

    case "Skyler White":
      src = "./images/Skyler.webp";
      break;

    case "Gustavo Fring":
      src = "./images/GusFringe.webp";
      break;

    case "Mike Ehrmantraut":
      src = "./images/Mike.webp";
      break;

    case "Saul Goodman":
      src = "./images/Jimmy.webp";
      break;

    case "Hank Schrader":
      src = "./images/HankS5.webp";
      break;

    case "Badger":
      src = "./images/Badger.jpeg";
      break;

    case "Walter White Jr":
      src = "./images/WaltJr.jpeg";
      break;

    default:
      src = "./images/loading.gif";
      break;
  }

  image.setAttribute("src", src);
}

function breakBad() {
  fetch("https://api.breakingbadquotes.xyz/v1/quotes", { mode: "cors" })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      para.innerText = response[0].quote;
      para2.innerText = response[0].author;
      changeImage(response[0].author);

      return response[0].author.split(" ");
    })
    .catch((error) => {
      console.log(error);
    });
}

document.addEventListener("DOMContentLoaded", breakBad);
content.addEventListener("click", breakBad);
