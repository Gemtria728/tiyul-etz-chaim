function initScrollObserver() {
  const blocks = document.querySelectorAll('.section-block');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold: 0.12});
  blocks.forEach(b => observer.observe(b));
}

function toggleMusic(audioId, btnId) {
  const audio = document.getElementById(audioId);
  const btn = document.getElementById(btnId);
  if(audio.paused) {
    audio.play();
    btn.innerHTML = '♪';
    btn.style.color = '#c9a84c';
  } else {
    audio.pause();
    btn.innerHTML = '♩';
    btn.style.color = 'rgba(143,170,179,0.5)';
  }
}

function toggleSection(toggleId, contentId) {
  const t = document.getElementById(toggleId);
  const c = document.getElementById(contentId);
  t.classList.toggle('open');
  c.classList.toggle('open');
}

window.addEventListener('load', () => {
  initScrollObserver();
  // 음악 자동재생
  const audio = document.getElementById('page-audio');
  if(audio) {
    audio.volume = 0.5;
    audio.play().catch(() => {});
  }
});
