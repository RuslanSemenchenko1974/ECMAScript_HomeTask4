/**
 * Задание 1. Получение данных о пользователе.

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/
 */
async function getUserData(id) {
  url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    if (response.ok) {
      const arr = await response.json();
      let user = arr.find((item) => item.id === id);
      if(user === undefined){
        throw new Error('Error id');
        //console.log('Error id');
        return undefined;
      }else { console.log(arr);
        console.log(`id = ${user.id}, name = ${user.name}`);
        return user;
    }     
    } else {
      console.log(await response.text());
      return undefined;
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
console.log(getUserData(4)); 


