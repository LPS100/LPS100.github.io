var birth = new Date('1999-12-28');
var now = new Date();
var difference = now - birth;
var age = new Date(difference).getFullYear() - 1999

var span = document.getElementById('age');
span.innerHTML = age;