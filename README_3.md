# Что таоке методы в Java script

### Метод — это функция, которая является свойством объекта в языке программирования JavaScript (и в других языках тоже). Методы выполняют действия с данными, которые принадлежат объекту, или могут изменять состояние объекта.

- Объяснение:
Методы как функции: Метод — это просто функция, которая является частью объекта. Как и обычные функции, методы могут принимать параметры и возвращать значения.

- Связь с объектами: Метод всегда связан с объектом, и его можно вызвать через этот объект, используя точку (.) после имени объекта.

### Список методов
1. cgarAt()
2. at()
3. toString()
4. concet()
5. trim()
6. incledes()
7. indexOf()
8. lastindexOf()
9. replace()
10. replaceAll()
11. substring()
12. slice()
13. split()
14. toLowerCase()
15. toUpperCase()
16. Math.floor()
17. Math.ceil()
18. Math.round()
19. Math.abs()
20. Math.max()
21. Math.min()
22. Math.pow()
23. Math.sqrt()
24. Math.random()
25. isNaN()
 
### Методы JavaScript
### 1. charAt()
- Метод charAt() возвращает символ строки по указанному индексу. Если индекс выходит за пределы строки, метод вернет пустую строку.

Пример:
```javascript
let text = "Привет";
console.log(text.charAt(0)); // "П"
console.log(text.charAt(10)); // "" (пустая строка)
```
- Примечание:
Если индекс отрицательный или превышает длину строки, возвращается пустая строка.
### 2. at()
- Метод at() позволяет получить символ строки по указанному индексу, поддерживает отрицательные индексы (считается с конца строки).

Пример:
```javascript
let text = "Привет";
console.log(text.at(1)); // "р"
console.log(text.at(-1)); // "т"
```
- Примечание:
Это новый метод, доступный с ES2022.
Поддерживает отрицательные индексы для доступа к символам с конца строки.
### 3. toString()
- Метод toString() преобразует объект в строку. Применим ко всем объектам JavaScript, включая числа, массивы и другие объекты.

Пример:
```javascript
let num = 123;
console.log(num.toString()); // "123"
```
- Примечание:
Если объект не может быть преобразован в строку, выбрасывается исключение.
### 4. concat()
- Метод concat() объединяет две или более строки в одну строку. Принимает любое количество строк в качестве аргументов.

Пример:
```javascript
let text = "Привет";
console.log(text.concat(", мир!")); // "Привет, мир!"
console.log("Здравствуй".concat(", мир!")); // "Здравствуй, мир!"
```
- Примечание:
concat() не изменяет оригинальную строку, а возвращает новую.
### 5. trim()
Метод trim() удаляет все пробелы с начала и конца строки. Он не изменяет строку внутри.

- Пример:
```javascript
let text = "  Привет!  ";
console.log(text.trim()); // "Привет!"
```
#### Метод trim в JavaScript используется для удаления пробелов (и других пустых символов) с начала и конца строки. Это особенно полезно для обработки пользовательского ввода или других данных, где могут быть лишние пробелы.


- Примечание:
Только пробелы, табуляции и другие пробельные символы удаляются с обеих сторон строки.

### 6. includes()
Метод includes() проверяет, содержится ли подстрока в строке. Возвращает true, если подстрока найдена, и false, если не найдена.

Пример:
``` javascript
let text = "Привет, мир!";
console.log(text.includes("мир")); // true
console.log(text.includes("небо")); // false
```
Пример:
```javascript
const text = "Привет, мир!";
console.log(text.includes("мир"));       // true
console.log(text.includes("здравствуй")); // false
console.log(text.includes("Привет", 1)); // false (поиск начинается с индекса 1)
```
- Почему "Привет" не найдено?
Метод includes начинает поиск строго с указанного индекса. В примере поиск начинается с индекса 1. Давай посмотрим, как это влияет:

Строка "Привет, мир!":
```makefile
Копировать код
Индекс:  0   1   2   3   4   5   6   7   8   9   10
Символ:  П   р   и   в   е   т   ,       м   и   р   !
```
Когда поиск начинается с индекса 1, метод includes будет искать подстроку "Привет" начиная с символа р (индекс 1).
Но "Привет" начинается с первого символа строки (индекс 0), поэтому он не найден в позиции, начиная с 1.

- Для массивов:
Метод includes проверяет, содержится ли элемент в массиве.

Пример:
```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3));       // true потому что ищет значение 3 во всём массиве ( индекс не указан, поиск начинается с 0) и элемент 3 находится на позиции 2, значит результат true.
console.log(numbers.includes(6));       // false Метод ищет значение 6. Элемента 6 в массиве нет. false.
console.log(numbers.includes(3, 3));    // false  Метод ищет значение 3, начиная с индекса 3 (т.е. с элемента 4). Массив с индекса 3 выглядит так: [4, 5]. Элемента 3 в этой части массива нет. Результат: false, потому что метод начинает поиск с индекса 3, и в оставшейся части массива элемента 3 нет.

```

- Примечание:
Поиск чувствителен к регистру.

### 7. indexOf()
Метод indexOf() возвращает индекс первого вхождения подстроки в строку, или -1, если подстрока не найдена. Индексация начинается с 0.
- Если в массиве несколько одинаковых элементов, первым вхождением будет тот элемент, который встречается первым.

Пример:
```javascript
let text = "Привет, мир!";
console.log(text.indexOf("мир")); // 8
console.log(text.indexOf("небо")); // -1
```
- Поиск в строке
```javascript
const text = "Hello, world!";
console.log(text.indexOf("o"));     // 4 (первое вхождение буквы "o")
console.log(text.indexOf("z"));     // -1 (буква "z" не найдена)
```
- Поиск в массиве
``` javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(3));    // 2 (индекс элемента 3)
console.log(numbers.indexOf(6));    // -1 (элемент не 
```
Поиск с указанием начального индекса
```javascript
const numbers = [1, 2, 3, 4, 5, 3];
console.log(numbers.indexOf(3, 3));  // 5 (поиск начинается с индекса 3)
```
- Примечание:
Если строка не найдена, метод возвращает -1.

### 8. lastIndexOf()
Метод lastIndexOf() работает аналогично indexOf(), но возвращает индекс последнего вхождения подстроки.

Пример:
```javascript
let text = "Привет, мир! Привет!";
console.log(text.lastIndexOf("Привет")); // 14
console.log(text.lastIndexOf("мир")); // 8
```
- Примечание:
Поиск начинается с конца строки.

### 9. replace()
Метод replace() заменяет первое вхождение подстроки на заданное значение.

Пример:
``` javascript
let text = "Привет, мир!";
console.log(text.replace("мир", "друзья")); // "Привет, друзья!"
```
- Примечание:
По умолчанию метод заменяет только первое вхождение подстроки. Для замены всех вхождений используйте replaceAll().

### 10. replaceAll()
Метод replaceAll() заменяет все вхождения подстроки на заданное значение.

Пример:
``` javascript
let text = "Привет, мир! Привет!";
console.log(text.replaceAll("Привет", "Здравствуй")); // "Здравствуй, мир! Здравствуй!"
```
- Примечание:
Этот метод заменяет все вхождения подстроки, а не только первое.

### 11. substring()
Метод substring() извлекает подстроку между двумя индексами. Если второй индекс не передан, извлекается подстрока от первого индекса до конца строки.

Пример:
```javascript
let text = "Привет, мир!";
console.log(text.substring(0, 6)); // "Привет"
console.log(text.substring(7)); // "мир!"
```
- Примечание:
Индексы могут быть больше или меньше друг друга — метод автоматически корректирует порядок.

### 12. slice()
Метод slice() извлекает подстроку, начиная с указанного индекса до другого индекса. Может работать с отрицательными индексами.

Пример:
``` javascript
let text = "Привет, мир!";
console.log(text.slice(0, 6)); // "Привет"
console.log(text.slice(-4));   // "мир!"
```
- Примечание:
В отличие от substring(), slice() поддерживает отрицательные индексы.

### 13. split()
Метод split() разделяет строку на массив подстрок, используя указанный разделитель.

Пример:
``` javascript
let text = "Привет, мир!";
console.log(text.split(", ")); // ["Привет", "мир!"]
```
- Примечание:
Если разделитель не найден, метод возвращает массив, содержащий исходную строку.

### 14. toLowerCase()
Метод toLowerCase() преобразует все символы строки в нижний регистр.

Пример:
```javascript
let text = "Привет";
console.log(text.toLowerCase()); // "привет"
```
- Примечание:
Возвращает новую строку, не изменяя исходную.

### 15. toUpperCase()
Метод toUpperCase() преобразует все символы строки в верхний регистр.

Пример:
```javascript
let text = "Привет";
console.log(text.toUpperCase()); // "ПРИВЕТ"
```
- Примечание:
Возвращает новую строку, не изменяя исходную.

### 16. Math.floor()
Метод Math.floor() округляет число в меньшую сторону до ближайшего целого.

Пример:
```javascript
console.log(Math.floor(3.9)); // 3
console.log(Math.floor(-3.9)); // -4
```

### 17. Math.ceil()
Метод Math.ceil() округляет число в большую сторону до ближайшего целого.

Пример:
```javascript
console.log(Math.ceil(3.1)); // 4
console.log(Math.ceil(-3.1)); // -3
```
### 18. Math.round()
Метод Math.round() округляет число до ближайшего целого.

Пример:
```javascript
console.log(Math.round(3.5)); // 4
console.log(Math.round(3.4)); // 3
```
### 19. Math.abs()
Метод Math.abs() возвращает абсолютное значение числа.

Пример:
```javascript
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5));  // 5
```
### 20. Math.max()
Метод Math.max() возвращает наибольшее из переданных чисел.

Пример:
```javascript
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max(-1, -5, -3)); // -1
```
### 21. Math.min()
Метод Math.min() возвращает наименьшее из переданных чисел.

Пример:
```javascript
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.min(-1, -5, -3)); // -5
```
### 22. Math.pow()
Метод Math.pow() возводит число в степень.

Пример:
```javascript
console.log(Math.pow(2, 3)); // 8
```
### 23. Math.sqrt()
Метод Math.sqrt() возвращает квадратный корень числа.

Пример:
```javascript
console.log(Math.sqrt(16)); // 4
```
### 24. Math.random()
Метод Math.random() генерирует случайное число от 0 до 1.

Пример:
```javascript
console.log(Math.random()); // случайное число, например 0.123456789
```
### 25. isNaN()
Метод isNaN() проверяет, является ли значение не числом.

Пример:
```javascript
console.log(isNaN("Hello")); // true
console.log(isNaN(123)); // false