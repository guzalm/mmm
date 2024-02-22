// basket.js
document.addEventListener("DOMContentLoaded", function () {
    function updateBasket(productTitle, productPrice) {
      const basketContent = document.getElementById("basket-content");
      const productInfo = document.createElement("p");
      productInfo.textContent = `${productTitle} - $${productPrice.toFixed(2)}`;
      basketContent.appendChild(productInfo);
    }
  
    // Example usage:
    // Call updateBasket function with product details
    // updateBasket("Product 1", 25.99);
    // updateBasket("Product 2", 19.99);
  
    // Implement further basket functionalities as needed
  });
  