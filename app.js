var allProducts = [];
// array of items
var productNames = [
  'bag (1)','banana (1)',
  'bathroom (1)',
  'boots (1)',
  'breakfast (1)',
  'bubblegum (1)',
  'chair (2)',
  'cthulhu (1)',
  'dog-duck (1)',
  'dragon (1)',
  'pen (1)',
  'pet-sweep (1)',
  'scissors (1)',
  'shark (1)',
  'sweepers',
  'sweep',
  'tauntaun (1)',
  'unicorn (1)',
  'usb',
  'water-can (1)',
  'wine-glass (1)'
];



// var img = new Array(21);
// for(var i=0;i<21;i++){
// img[i] = new Image();
// img[i].src = 'img/' + imageName[i] + '.jpg'; }

function Product(name, path) {
  this.name = name;
  this.path = path;
  allProducts.push(this);
  this.shown = 0;
  this.click = 0;
// TODO: Build your constructor and necessary properties.
}

// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?
for (var i = 0; i < productNames.length; i++) {
  new Product(productNames[i], 'img/' + productNames[i] + '.jpg');
}

var productRank = {
  getRandomIndex: function() {
    return Math.floor(Math.random() * allProducts.length);
    // console.log(getRandomIndex);


  },
    //TODO: Hmm... what's going to happen here?


  displayImages: function() {
    // TODO: Hmm... what's going to happen here?
    var getEl = document.getElementsByClassName('img');
    for (var j = 0; j < 3; j++) {
      getEl[j].src = allProducts[productRank.getRandomIndex()].path;
    }
  },


//THIS IS NOT WORKING!!  CLICK IS NOT WORKING
//I will bring my counter over from my about me assignment//
  tallyClicks: function onClick() {
    this.click += 1;
    document.getElementById('click').innerHTML = this.click;
    console.log;
  },
  //   // TODO: Hmm... what's going to happen here?
  // },
  //
  // displayResults: function() {
  //   // TODO: Hmm... what's going to happen here?
  // },
  //
  // showButton: function() {
  //   // TODO: Hmm... what's going to happen here?
  // },
  //
  // onClick: function() {
  //   // TODO: Hmm... what's going to happen here?
  // },
};
//
// productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();
// Add Comment Collapse
