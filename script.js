const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu-mobile");
const overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
  overlay.classList.add("ativo");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
  overlay.classList.remove("ativo");
});

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "obrigado.html";
        } else {
          alert("Erro ao enviar formulário.");
        }
      })
      .catch(() => {
        alert("Erro de conexão.");
      });
  });
}
