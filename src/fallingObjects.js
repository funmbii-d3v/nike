const heartEmojis = ['🎊', '🎂', '✨', '🫦', '🧜‍♀️', '🥹', '💞'];
export default function spawnHeart() {
const el = document.createElement('div');
el.className   = 'rain-heart';
el.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

const size = 12 + Math.random() * 24;
const dur  = 4  + Math.random() * 6;

el.style.left              = Math.random() * 100 + 'vw';
el.style.fontSize          = size + 'px';
el.style.animationDuration = dur + 's';
el.style.animationDelay    = Math.random() * 2 + 's';
el.style.filter            = `drop-shadow(0 0 ${size * 0.5}px rgba(96, 6, 206, 0.95))`;
el.style.opacity           = '0';

document.body.appendChild(el);
setTimeout(() => el.remove(), (dur + 3) * 1000);
}