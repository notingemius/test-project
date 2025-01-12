const button = document.getElementById('alertButton');

button.addEventListener('click', () => {
    alert('Привет! Это тестовый сайт.');
});
// Получаем форму по ID
const form = document.getElementById('registrationForm');

// Обработка отправки формы
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем стандартное действие отправки

    // Получаем данные из полей формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Выводим данные в консоль (можно заменить на обработку, например, отправку на сервер)
    console.log(`Имя: ${name}, Email: ${email}, Пароль: ${password}`);

    // Показываем сообщение пользователю
    alert(`Спасибо за регистрацию, ${name}!`);
});
