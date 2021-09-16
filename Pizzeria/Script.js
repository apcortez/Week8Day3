function checkoutForm() {
    var margherita = parseInt(document.getElementById("margherita").value);
    var stagioni = parseInt(document.getElementById("4stagioni").value);
    var diavola = parseInt(document.getElementById("diavola").value);
    var bufalina = parseInt(document.getElementById("bufalina").value);
    var web = parseInt(document.getElementById("web").value);
    var totalepizze = margherita + stagioni + diavola + bufalina + web;
    if (totalepizze != 0) {
        localStorage.setItem('TotaleOrdine', totalepizze);
    }
    else {
        alert("Non hai selezionato nessuna pizza");
    }
}

function getTotale() {
    let storedTotale = localStorage.getItem('TotaleOrdine');
    if (storedTotale != null) {
        alert("Il totale da pagare è " + storedTotale + " Euro.\nInserisci le informazioni richieste per procedere all'ordinazione.");

    }
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
