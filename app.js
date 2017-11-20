var allProducts = [];
var productNames = ['bag(1)', 'banana(1)', 'bathroom(1)', 'boots(1)', 'breakfast(1)', 'bubblegum(1)', 'chair(2)', 'cthulhu(1)', 'dog-duck(1)', 'dragon(1)', 'pen(1)', 'pet-sweep(1)', 'scissors(1)', 'shark(1)', 'sweepers', 'sweep', 'tauntaun(1)', 'unicorn(1)', 'usb', 'water-can(1)', 'wine-glass(1)']; // array of items


var img = new Array(21);
for(var i=0;i<21;i++){
img[i] = new Image();
img[i].src = 'img/' + imageName[i] + '.jpg'; }

function Product(name, path) {
  this.name = name
  this.path = path
  allProducts.push(this);
  this.shown = 0;
  this.click = 0;


  // TODO: Build your constructor and necessary properties.
}

// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?
for (var i = 0; i < productNames.length; i++) {
  new Product(productNames[i], 'img/' + productNames + '.jpg');
}

var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function() {
return Math.floor(Math.random() * (max - min)) + min;
    // TODO: Hmm... what's going to happen here?
  },

  displayImages: function() {
    // TODO: Hmm... what's going to happen here?
  },

  tallyClicks: function(elementId) {
    // TODO: Hmm... what's going to happen here?
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
  },

  onClick: function() {
    // TODO: Hmm... what's going to happen here?
};

productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();
Add Comment Collapse
