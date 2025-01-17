const textContainer = document.querySelector('.main__text_info')
const textElement = document.createElement('h2');

textElement.classList.add('main__timer');
textContainer.appendChild(textElement);

document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.querySelector('.main__timer');
    const textNewYearElement = document.querySelector('.main__text_info_h1');
    function updateTimer() {
        const now = new Date();
        const targetDate = new Date('2025-01-01T00:00:00');
        
        // Разница в миллисекундах
        const diffInMs = targetDate - now;

        if (diffInMs <= 0) {
            timerElement.textContent = "";
            textNewYearElement.textContent="С новым 2025 годом!";

            return;
        }

        // Переводим разницу в дни, часы, минуты и секунды
        const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

        // Отображаем отсчёт
        timerElement.innerHTML = `
        <span>${days}</span> дней <br>
        <span>${hours}</span> часов <br>
        <span>${minutes}</span> минут <br>
        <span>${seconds}</span> секунд
    `;
    }

    // Запускаем обновление каждую секунду
    setInterval(updateTimer, 1000);

    // Вызываем сразу, чтобы не ждать первую секунду
    updateTimer();
});
document.addEventListener('DOMContentLoaded', () => {
    // Список изображений
    const images = [
        'memes/cristmas_cat.jpg',
        'memes/image1.png',
        'memes/image2.jpeg',
        'memes/image3.jpeg',
        'memes/image4.jpg',
        'memes/image5.jpg',
        'memes/image6.jpg',
        'memes/image7.jpg',
        'memes/image8.jpg',
        'memes/image9.jpg',
        'memes/image10.jpg',
        'memes/image11.jpg',
        'memes/image12.jpg',
    ];

    // Получаем текущий день года
    function getDayOfYear() {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    // Определяем индекс изображения
    const dayOfYear = getDayOfYear();
    const imageIndex = dayOfYear % images.length;

    // Устанавливаем изображение на страницу
    const dailyImage = document.getElementById('dailyImage');
    dailyImage.src = images[imageIndex];
});
