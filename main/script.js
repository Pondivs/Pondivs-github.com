document.addEventListener('DOMContentLoaded', function() {
  var addToCartButtons = document.getElementsByClassName('add-to-cart');
  var cartItems = document.getElementById('cart-items');
  var orderForm = document.getElementById('order-form');

  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function() {
      var item = this.getAttribute('data-item');
      var price = parseFloat(this.getAttribute('data-price'));
      
      var li = document.createElement('li');
      li.innerText = item + ' - $' + price;
      cartItems.appendChild(li);
    });
  }
  
  orderForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    
    // Send order details to the server for processing
    // You'll need server-side code to handle the order placement
    
    // Reset form values
    orderForm.reset();
    cartItems.innerHTML = '';
    
    alert('Order placed successfully!'); // Modify this to fit your requirements
  });
});
