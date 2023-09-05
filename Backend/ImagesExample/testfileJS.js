const btnsubir = document.querySelector("#btnSubir");
const file = document.querySelector("#archivo");
//local
//let url="http://localhost:8084/files/upload";
//deploy
let url="https://s10-15-ft-java-react-production.up.railway.app/files/upload";

//Se le da el nombre al archivo


btnsubir.addEventListener("click", (e) => {
  e.preventDefault();
  let nombre=document.getElementById("nombre").value;
  const formData = new FormData();
  formData.append("file", file.files[0], nombre);
  fetch(url, {
    method: "POST",
    body: formData
  })
    .then((res) => res.text())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

    //redireccionar a url+/images+/nombre
    window.location.href = "https://s10-15-ft-java-react-production.up.railway.app/images/"+nombre;
});

