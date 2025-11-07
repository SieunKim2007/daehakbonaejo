const btn = document.getElementById('cloverBtn');
const region = document.getElementById('messages');

btn.addEventListener('click', () => {
  spawnToast("합격운 1% 상승");
});

function spawnToast(text){
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = text;

  // 살짝 랜덤한 수직 위치(겹치기 방지)
  const y = 20 + Math.floor(Math.random()*40); // 20~60px
  el.style.top = y + 'px';

  region.appendChild(el);

  // 애니메이션 끝나면 제거
  setTimeout(() => {
    el.remove();
  }, 1200);
}
