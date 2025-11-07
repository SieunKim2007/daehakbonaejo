const btn = document.getElementById('cloverBtn');
const region = document.getElementById('messages');

btn.addEventListener('click', () => {
  spawnToast("합격운 1% 상승");
});

function spawnToast(text) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = text;

  // iPad Safari 세로 깨짐 방지 (인라인 보정)
  el.style.whiteSpace = 'nowrap';
  el.style.display = 'inline-block';
  el.style.minWidth = '160px';
  el.style.textAlign = 'center';
  el.style.writingMode = 'horizontal-tb';
  el.style.wordBreak = 'keep-all';

  // 살짝 랜덤 Y 위치
  const y = 20 + Math.floor(Math.random() * 40);
  el.style.top = y + 'px';

  region.appendChild(el);
  setTimeout(() => el.remove(), 1200);
}
