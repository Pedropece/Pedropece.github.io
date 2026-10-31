/* ===== Menu mobile: abre/fecha e fecha ao clicar em um link ===== */
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  const aberto = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', aberto);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

/* ===== Ano automático no rodapé ===== */
document.getElementById('ano').textContent = new Date().getFullYear();

/* ===== Formulário de contato (mailto:) =====
   Valida os campos e abre o e-mail do visitante já endereçado
   para o contato cadastrado, com assunto e corpo preenchidos. */
const EMAIL_DESTINO = 'pedronexva@gmail.com';
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const texto = form.mensagem.value.trim();

  // Validação simples
  if (!nome || !texto) { msg.textContent = 'Preencha seu nome e a mensagem.'; return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent = 'Informe um e-mail válido.'; return; }

  // Monta e dispara o mailto: (encodeURIComponent protege acentos e quebras de linha)
  const assunto = encodeURIComponent('Contato pelo portfólio: ' + nome);
  const corpo = encodeURIComponent(texto + '\n\nDe: ' + nome + ' (' + email + ')');
  window.location.href = `mailto:${EMAIL_DESTINO}?subject=${assunto}&body=${corpo}`;

  msg.textContent = 'Abrindo seu aplicativo de e-mail para enviar a mensagem.';
  form.reset();
});
