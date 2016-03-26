document.addEventListener('DOMContentLoaded', function() {
  var list = document.getElementById('fizz-buzz-list');

  // i = 1;
  // while (i <= 100) {
  //   if (i % 3 === 0 && i % 5 === 0) {
  //     list.innerHTML += "<li>FizzBuzz</li>";
  //   } else if (i % 3 === 0) {
  //     list.innerHTML += "<li>Fizz</li>";
  //   } else if (i % 5 === 0) {
  //     list.innerHTML += "<li>Buzz</li>";
  //   } else {
  //     list.innerHTML += "<li>" + i + "</li>";
  //   }
  //   i++
  // }

  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      list.innerHTML += '<li class="red">Fizz Buzz</li>';
    } else if (i % 3 === 0) {
      list.innerHTML += '<li class="green">Fizz</li>';
    } else if (i % 5 === 0) {
      list.innerHTML += '<li class="blue">Buzz</li>';
    } else {
      list.innerHTML += "<li>" + i + "</li>";
    }
  }
});