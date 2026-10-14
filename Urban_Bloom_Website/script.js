// Simple JavaScript feature 1: filter flowers by category
const category = document.getElementById('category');
if (category) {
  category.addEventListener('change', function () {
    const products = document.querySelectorAll('.product');
    products.forEach(function (product) {
      if (category.value === 'All' || product.dataset.category === category.value) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
}

// Simple JavaScript feature 2: show a form demonstration message
const form = document.getElementById('enquiry');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('formMessage').textContent =
      'Thank you! Your details are valid. This demo does not send an email.';
    form.reset();
  });
}
