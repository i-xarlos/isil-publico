(function () {
  "use strict";

  if (document.getElementById("isil-public-back")) return;

  var partes = window.location.pathname.split("/").filter(Boolean);
  var indiceCohorte = partes.findIndex(function (parte) {
    return /^20\d{2}-\d+$/.test(parte) || parte === "proyecto";
  });
  var prefijo = indiceCohorte >= 0 ? partes.slice(0, indiceCohorte) : [];
  var destino = "/" + (prefijo.length ? prefijo.join("/") + "/" : "");

  var estilo = document.createElement("style");
  estilo.textContent = [
    "#isil-public-back{position:fixed;left:16px;bottom:16px;z-index:10000;",
    "display:inline-flex;align-items:center;justify-content:center;",
    "padding:10px 15px;border:1px solid #6aa7ff;border-radius:999px;",
    "background:rgba(10,17,32,.96);color:#e9eff8;",
    "font:600 14px/1.2 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;",
    "text-decoration:none;box-shadow:0 6px 20px rgba(0,0,0,.32);",
    "transition:transform .12s ease,background .12s ease}",
    "#isil-public-back:hover{transform:translateY(-2px);background:#152238;color:#fff}",
    "#isil-public-back:focus-visible{outline:2px solid #3ed2b2;outline-offset:3px}",
    "@media(max-width:600px){#isil-public-back{left:12px;bottom:12px;padding:9px 13px;font-size:13px}}",
    "@media print{#isil-public-back{display:none!important}}"
  ].join("");

  var boton = document.createElement("a");
  boton.id = "isil-public-back";
  boton.href = destino;
  boton.textContent = "← Volver al índice";
  boton.setAttribute("aria-label", "Volver al índice de infografías ISIL");
  boton.setAttribute("title", "Volver al índice de infografías ISIL");

  document.head.appendChild(estilo);
  document.body.appendChild(boton);
})();
