function tocaSom(e) {
  const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
  audio.play();
  this.classList.add('ativado');
  setTimeout(() => {
    this.classList.remove('ativado');
  }, 200);
}

const animaisCirculo = Array.from(document.getElementsByClassName('animal-circulo'));
console.log(animaisCirculo[0]);
animaisCirculo.forEach(key => key.addEventListener('click', tocaSom));