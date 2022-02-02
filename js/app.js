addEventListener('DOMContentLoaded', () => {
  const btn_menu = document.querySelector('.btn_menu')
  if (btn_menu) {
    btn_menu.addEventListener('click', () => {
      const menu_items = document.querySelector('.menu_items')
      menu_items.classList.toggle('show')
    })
  }
})


// SLIDE SHOW

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n) {
  muestraSlides(indice += n);
}

function posicionSlide(n) {
  muestraSlides(indice = n)
}

setInterval(function tiempo() {
  muestraSlides(indice += 1)
}, 5000)

function muestraSlides(n) {
  let i;
  let slides = document.getElementsByClassName('miSlider');
  let barras = document.getElementsByClassName('barra');

  if (n > slides.length) {
    indice = 1;
  }

  if (n < 1) {
    indice = slides.length();
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < barras.length; i++) {
    barras[i].className = barras[i].className.replace(" active", "");
  }

  slides[indice - 1].style.display = 'block';
  barras[indice - 1].className += ' active';
}

//BOX MODEL

var modal = document.getElementById("modal1");

var img = document.getElementById("img1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close1")[0];

span.onclick = function () {
  modal.style.display = "none";
}

//Box modal 2
var modal = document.getElementById("modal2");

var img = document.getElementById("img2");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close2")[0];

span.onclick = function () {
  modal.style.display = "none";
}


//Box modal 3
var modal = document.getElementById("modal3");

var img = document.getElementById("img3");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption3");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close3")[0];

span.onclick = function () {
  modal.style.display = "none";
}


//Bo modal 4
var modal = document.getElementById("modal4");

var img = document.getElementById("img4");
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption4");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close4")[0];

span.onclick = function () {
  modal.style.display = "none";
}


//Box modal 5
var modal = document.getElementById("modal5");

var img = document.getElementById("img5");
var modalImg = document.getElementById("img05");
var captionText = document.getElementById("caption5");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close5")[0];

span.onclick = function () {
  modal.style.display = "none";
}


//Box modal 6
var modal = document.getElementById("modal6");

var img = document.getElementById("img6");
var modalImg = document.getElementById("img06");
var captionText = document.getElementById("caption6");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close6")[0];

span.onclick = function () {
  modal.style.display = "none";
}


// CARRUSEL DE IMAGENES

window.addEventListener('load', function () {
  new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.carousel__indicadores',
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente'
    },

    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: '2',
          slidesToScroll: '2',
      
        }
      }, {
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      }
    ]
  });
});