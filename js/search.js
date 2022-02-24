const search = function() {
  const input = document.querySelector('.search-block > input')
  const searchBtn = document.querySelector('.search-block > button')
  const btnOutlineSecondary = document.querySelector('.btn-outline-secondary');
   
  // input.addEventListener('input', (event) => {
  //   //Стрелочная функция () => - заменяет function()
  //   console.log(event.target.value);
  // })

  btnOutlineSecondary.addEventListener('click', () => { 
    console.log(input.value);
    //УСЛОЖНЕННОЕ ЗАДАНИЕ - в консоль вроде выводит))
  })
}

search()