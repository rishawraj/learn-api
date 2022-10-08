const para = document.getElementById("demo");
const para2 = document.getElementById("demo2");
const img = document.querySelector("img");

fetch("https://api.breakingbadquotes.xyz/v1/quotes", { mode: "cors" })
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    para.innerText = response[0].quote;
    para2.innerText = response[0].author;
    return response[0].author.split(" ");
  })
  .then((name) => {
    return fetch(
      `https://www.breakingbadapi.com/api/characters?name=${name[0]}+${name[1]}`
    );
  })
  .then((response) => {
    return response.json();
  })
  .then((image) => {
    img.src = image[0].img;
  })
  .catch((error) => {
    console.log(error);
  });
