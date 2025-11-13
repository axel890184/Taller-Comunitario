
// ✅ Botón para volver arriba
const btnTop = document.createElement("button");
btnTop.id = "btnTop";
btnTop.textContent = "⬆";
btnTop.title = "Volver arriba";
document.body.appendChild(btnTop);

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

// ✅ Al hacer clic, subir con desplazamiento suave
btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ✅ Efecto de aparición suave (fade-in)
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
faders.forEach(el => observer.observe(el));
