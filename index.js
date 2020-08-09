// Ищем все кнопки
const button = document.getElementsByClassName('btn'),
      cat = document.getElementsByClassName('cat'),
      html = document.getElementsByTagName('html'),
      headingText = document.getElementsByClassName('heading'),
      cancelLink = document.getElementsByClassName('cancel'),
      defaultClassNames = {
        html: '',
        button: 'btn btn-default',
        heading: 'heading',
        cancel: 'cancel'
      }

let darkState = false;

button[0].addEventListener('click', function (e) {
  // При нажатии на кнопку, внутри создаем элемент span, который и будет волной
  const wave = document.createElement('span'),
    // Получаем размеры и координаты элемента в месте клика относительно viewport
    waveOffset = this.getBoundingClientRect();

  // Вычисляем координаты вычитанием координат элемента из координат документа
  const waveY = e.pageY - waveOffset.top,
    waveX = e.pageX - waveOffset.left;

  // Полученные координаты записываем в стили тегу span
  wave.style.top = waveY + 'px',
    wave.style.left = waveX + 'px',
    wave.style.background = this.getAttribute('data-button-background');

  // Внутри кнопки по клику создаем span с координатами, которые формируются в зависимости от того, куда кликнем
  this.appendChild(wave);

  // Удаляем созданный тег span после 1.5 секунд
  setTimeout(function () {
    wave.parentNode.removeChild(wave);
  }, 1500);
});

cat[0].addEventListener('click', function() {
  // console.log('JHGSDJHKGFKDSHF', e)
  darkState = !darkState
  if (darkState) {
    darkThemeOn()
  } else {
    darkThemeOff()
  }
  // console.log(darkState)
})

function darkThemeOn() {
  html[0].className += 'dark'
  button[0].className += ' btn-dark'
  headingText[0].className += ' heading-dark'
  cancelLink[0].className += ' cancel-dark'
}

function darkThemeOff() {
  html[0].className = defaultClassNames.html
  button[0].className = defaultClassNames.button
  headingText[0].className = defaultClassNames.heading
  cancelLink[0].className = defaultClassNames.cancel
}

