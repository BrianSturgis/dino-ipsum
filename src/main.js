import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dino from './dino-ipsum.js';


$(document).ready(function() {
  $('#dino').click(function() {
    let promise = Dino.getDino();
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showDino').text(`Your dino is: ${body[[0]]}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});