'use strict'

var allProducts = [];
var productNames = ['bag', 'banana', 'bathroom', 'boots','breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen','scissors','shark','sweep','sweepers','tauntaun','unicorn', 'usb', 'water-can', 'wine-glass'];

// TODO: Build your constructor and necessary properties.

function Product(name, path) {
  this.name = name;
  this.path = path;
  allProducts.push(this);
  this.votes = 0;
}

for (var i = 0; i < productNames.length; i++) {
  new Product (productNames[i], 'img/' + productNames[i] + '.jpg');
}

var productRank = {
  imagesEl: document.getElementById('images'),
  resultsEl: document.getElementById('results'),
  clickCount: 0,

  image1: new Image(),
  image2: new Image(),
  image3: new Image(),

  getRandomIndex: function() {
    return Math.floor(Math.random() * allProducts.length);
    // console.log(getRandomIndex);
  },

  localStorageSet: function() {
    localStorage.clear ();
    var encodeAllProducts = JSON.stringify(allProducts);
    localStorage.setItem('AllProducts', encodeAllProducts);
  },

  localStorageGet: function () {
    var obj = JSON.parse(localStorage.getItem('AllProducts'));
    if (obj !== null){
      allProducts = obj;
    }
  },

  displayImages: function() {
    var img1 = this.getRandomIndex();
    var img2 = this.getRandomIndex();
    var img3 = this.getRandomIndex();

    if(img1 === img2 || img1 === img3 || img2 === img3) {
      this.displayImages();
      return;

    }
    this.image1.src = allProducts[img1].path;
    this.image2.src = allProducts[img2].path;
    this.image3.src = allProducts[img3].path;

    this.image1.id = allProducts[img1].name;
    this.image2.id = allProducts[img2].name;
    this.image3.id = allProducts[img3].name;


    this.imagesEl.appendChild(this.image1);
    this.imagesEl.appendChild(this.image2);
    this.imagesEl.appendChild(this.image3);
  },
  onClick: function(event) {
    console.log(event.target.id);
    if(event.target.id === 'images') {
      return;
    } else {
      productRank.clickCount++;
      console.log(productRank.clickCount);
      for(var i in allProducts) {
        if(event.target.id === allProducts[i].name) {
          allProducts[i].votes++;
        }
      }
      productRank.displayImages();
    }
    if (productRank.clickCount === 25) {
      productRank.localStorageSet();
      var ctx = document.getElementById('myChart').getContext('2d');
      var options = {
        type: 'bar',
        data: {
          labels: allProducts.map(function(x) {return x.name;}),
          datasets: [{
            label: '# of Votes',
            data: allProducts.map(function(x) {return x.votes;}),
            backgroundColor: [
              'gray'
            ],
            borderColor: [
              'black'
            ],
            borderWidth: 1
          },
          ]
        },
        options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
        }
      };
      var myChart = new Chart(ctx, options);
      console.log('stuff',myChart);
      productRank.imagesEl.removeEventListener('click', productRank.onClick);
    }
  }
};

productRank.imagesEl.addEventListener('click', productRank.onClick);
productRank.displayImages();
productRank.localStorageGet();





//
// **displayImages: function() {
//   // TODO: Hmm... what's going to happen here?
//   var getEl = document.getElementsByClassName('img');
//   for (var j = 0; j < 3; j++) {
//     getEl[j].src = allProducts[productRank.getRandomIndex()].path;
//   }
// },


//THIS IS NOT WORKING!!  CLICK IS NOT WORKING
//I will bring my counter over from my about me assignment//
// tallyClicks: function onClick() {
//   this.click += 1;
//   document.getElementById('click').innerHTML = this.click;
//   console.log;
// },
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
//};
//
// productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();
// Add Comment Collapse
