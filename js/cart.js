const cart = function () {
    const cartBtn = document.querySelector('.button-cart');
    const cart = document.getElementById('modal-cart');
    const closeBtn = cart.querySelector('.modal-close');

    console.log(cart);

    cartBtn.addEventListener('click', function () { 
      //Перехватили с помощью addEventListener событие click по кнопки корзина(cartBtn)
      cart.style.display = 'flex'
      //Добавили дисплэй флекс, чтобы модальное окно не расплывалось
    })

    closeBtn.addEventListener('click', function () {
      cart.style.display = ''
      // Можно поставить cart.style.display = 'flex'; но очистить атрибут у style лучше
    })  
}
//Объявили функцию и сразу ее вызвали, все переменные внутри функции имееют область видимости,
//они доступны только в рамках этой функции - инкапсуляция кода. Теперь в других функциях можно создавать
//переменные с теми же названиями

cart()