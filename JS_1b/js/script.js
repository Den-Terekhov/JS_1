var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = prompt('Введите имя', '');
}

var userName = prompt('А теперь введите имя пользователя', '');
var searchResult = arr.indexOf(userName);

/*в случае введенных пустых значений или null, а также ненайденного имени пользователя выводим ошибку*/
if ( isNaN( parseFloat(userName) ) || searchResult < 0 ) { 
  alert('Ошибка! Пользователь не найден');
} else {
  alert(userName + ', вы успешно вошли');
}