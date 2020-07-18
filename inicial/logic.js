function tocaSom() {
  const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
  audio.currentTime = 0;
  audio.play();
  this.classList.add('ativado');
  setTimeout(() => {
    this.classList.remove('ativado');
  }, 200);
}


const animaisCirculo = Array.from(document.getElementsByClassName('animal-circulo'));
animaisCirculo.forEach(key => key.addEventListener('click', tocaSom));