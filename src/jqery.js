/* eslint-disable no-undef */
var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function getQuotes() {
  return $.ajax();
}

function getQuote() {
  
  $('.quote-text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    
  });

  $('.quote-author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
  
  });

  var idColor = Math.floor(Math.random() * colors.length);
  $('html body').animate(
    {
      backgroundColor: colors[idColor],
      color: colors[idColor]
    },
    1000
  );
  $('.button').animate(
    {
      backgroundColor: colors[idColor]
    },
    1000
  );

}

$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });

  $('#new-quote').on('click', getQuote);
});
