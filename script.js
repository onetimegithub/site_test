function redirectAfterDelay() {
    setTimeout(function () {
        window.location.href = "https://pysols.ru"; // Замените на URL вашего сайта
    }, 5000); // 5000 миллисекунд = 5 секунд
}
// Запускаем функцию при загрузке страницы
window.onload = redirectAfterDelay;
