document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the mock API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(productData => {
            // Populate product details dynamically
            // const productContainer = document.getElementById('product-container');
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <h2>${productData.title}</h2>
                <p>${productData.body}</p>
            `;
            productContainer.appendChild(productCard);
        })
        .catch(error => console.error('Error fetching product data:', error));
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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