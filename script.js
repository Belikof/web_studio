const text = "Добро пожаловать. Мы делаем сайты с идеей, смыслом и внятным интерфейсом.";

// Ждём загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById('typingText');
    const nextButton = document.getElementById('nextButton');
    const typingCursor = document.getElementById('typingCursor');

    if (!typingElement || !nextButton || !typingCursor) {
        console.error('Элементы не найдены!');
        return;
    }

    let charIndex = 0;
    let isTyping = true;

    // Функция печати текста
    function typeText() {
        if (charIndex < text.length) {
            typingElement.textContent = text.substring(0, charIndex + 1);
            charIndex++;
            typingCursor.style.visibility = 'hidden'; // скрывать во время печати
            
            // Случайная задержка для более реалистичного эффекта печати
            const delay = Math.random() * 50 + 30;
            setTimeout(typeText, delay);
        } else {
            isTyping = false;
            typingCursor.style.display = 'none'; // полностью убрать палочку после печати
            // Показываем кнопку после завершения печати
            nextButton.style.opacity = '1';
            nextButton.style.transform = 'scale(1)';
        }
    }

    // Инициализация
    nextButton.style.opacity = '0';
    nextButton.style.transform = 'scale(0.8)';
    nextButton.style.transition = 'all 0.5s ease';
    typingCursor.style.visibility = 'hidden'; // прятать курсор в начале

    // Начинаем печать через небольшую задержку
    setTimeout(() => {
        typeText();
    }, 500);

    // Обработчик кнопки
    nextButton.addEventListener('click', () => {
        // Эффект при нажатии
        nextButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            nextButton.style.transform = 'scale(1)';
            // Здесь можно добавить переход на следующую страницу
            console.log('Переход на следующий экран...');
        }, 150);
    });

    // Добавляем эффект мерцания для хакерского стиля
    setInterval(() => {
        if (Math.random() > 0.95) {
            typingElement.style.textShadow = '0 0 15px rgba(0, 255, 65, 0.8)';
            setTimeout(() => {
                typingElement.style.textShadow = '0 0 10px rgba(0, 255, 65, 0.5)';
            }, 100);
        }
    }, 2000);
});