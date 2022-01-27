const btn = document.getElementById("botao-troca");
const lnk = document.querySelector("link[href='style.css']");
const stlcss = new URL("./style.css", window.location)

btn.addEventListener("click", function () {
  if (lnk.href == stlcss.href){
    lnk.href = "style02.css";
    btn.innerText = "Modo Claro"
  } else {
    lnk.href = "style.css";
    btn.innerText = "Modo Escuro"
  }
})