// Текст для эффектов:
const mainText = "Добро пожаловать. Мы делаем сайты с идеей, смыслом и внятным интерфейсом.";
const typingSpeed = 28; // скорость печати (мс)

// Печатаем основной текст
const typingTarget = document.getElementById('typing-text');
let mainIdx = 0;

function typeMainText() {
  if (mainIdx < mainText.length) {
    typingTarget.textContent += mainText[mainIdx++];
    setTimeout(typeMainText, typingSpeed);
  }
}
typeMainText();

// Анимируем "инициализация..." (циклические точки)
const dotsTarget = document.getElementById('init-dots');
let dotCount = 0;
setInterval(() => {
  dotCount = (dotCount % 3) + 1;
  dotsTarget.textContent = '.'.repeat(dotCount);
}, 460);

// Кнопка (если нужна логика при нажатии)
document.getElementById('next-btn').onclick = function() {
  // здесь можно добавить переход, скрытие окна и т.п.
};