//const img = document.getElementById("api");
//const img = document.createElement("img");
/*
fetch("https://api.thecatapi.com/v1/images/search")
.then(response => response.json())                  // convierte la info y la transforma a json()
.then(([{url}]) => {
  console.dir(img.src = url);                       // src, le cambio el src a la imagen
  document.body.appendChild(img);
})
 */

/* const fetchGatos = async() => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const [{url}] = await response.json()
  console.log(url);
}

fetchGatos();
 */
const button = document.getElementById("gatos");
const div = document.createElement("div");

const muchosGatos = async() => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
  const data = await response.json();
  data.forEach(element => {
    const img = document.createElement("img");                             // Crea la etiqueta
    img.src = element.url;                                                 // Define URL
    div.appendChild(img);
    document.body.appendChild(div);                                        //Inserta en el body
    console.log(img);
  });

};

button.addEventListener("click", () => {
  muchosGatos();
})
