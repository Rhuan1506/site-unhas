// horários disponíveis (17h às 22h, de 30 em 30 min)
let hora = document.getElementById("hora");
for (let h = 17; h <= 22; h++) {
  for (let m = 0; m < 60; m += 30) {
    if (h === 22 && m > 0) continue;
    let opt = document.createElement("option");
    opt.value = `${h}:${m === 0 ? '00' : m}`;
    opt.textContent = `${h}:${m === 0 ? '00' : m}`;
    hora.appendChild(opt);
  }
}

// data mínima = hoje
document.getElementById("data").min = new Date().toISOString().split("T")[0];

// selecionar serviço a partir dos cards
function setServico(valor) {
  document.getElementById("servico").value = valor;
  document.getElementById("agendamento").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// enviar formulário pelo WhatsApp
function enviar(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let servico = document.getElementById("servico").value;
  let data = document.getElementById("data").value;
  let hora = document.getElementById("hora").value;

  let dataFormatada = data ? data.split("-").reverse().join("/") : "";

  let msg = `Olá, me chamo ${nome}. Quero agendar ${servico} no dia ${dataFormatada} às ${hora}.`;

  window.open(`https://wa.me/5511958561282?text=${encodeURIComponent(msg)}`, "_blank");
}

// menu mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("aberto");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("aberto");
  });
});