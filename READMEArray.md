# Array в JavaScript

**Array** (массив) — это структура данных в JavaScript, которая позволяет хранить упорядоченный список элементов. Элементы могут быть любого типа: числа, строки, объекты, другие массивы и т. д.

## Основные возможности массива

1. **Создание массива**
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const mixedArray = ['текст', 42, true];
   ```
   #### Изменение элементов Элементы массива можно изменять, обращаясь к ним по индексу:

```javascript
const fruits = ['apple', 'banana', 'cherry'];
fruits[1] = 'orange'; // Меняем 'banana' на 'orange'
console.log(fruits); // ['apple', 'orange', 'cherry']
```
## Методы Array
1. pop() (изменяет своего род-я)
2. push() (изменяет своего род-я)
3. shift() (изменяет своего род-я)
4. unshift() (изменяет своего род-я)
5. splice() (изменяет своего род-я)

6. concat() (методы возвращают нового родителя без изменения основного родителя)
7. slice() методы возвращают нового родителя без изменения основного родителя
8. join() методы возвращают нового родителя без изменения основного родителя
9. toString() методы возвращают нового родителя без изменения основного родителя
10. toReversed() методы возвращают нового родителя без изменения основного родителя
11. includes() Метод возвращает новое значение
12. indexOf() Метод возвращает новое значение

# Метод `pop()` в JavaScript

Метод **`pop()`** используется для удаления последнего элемента из массива. Он изменяет исходный массив и возвращает удалённый элемент. Если массив пуст, метод возвращает `undefined`.

```javascript
const fruits = ['apple', 'banana', 'cherry'];
const lastFruit = fruits.pop();

console.log(fruits); // ['apple', 'banana']
console.log(lastFruit); // 'cherry'
```
``` javascript
const numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
    console.log(numbers.pop()); // Вывод: 4, 3, 2, 1
}
console.log(numbers); // []
```
# Метод `push()` в JavaScript

Метод **`push()`** используется для добавления одного или нескольких элементов в конец массива. Он изменяет исходный массив и возвращает новую длину массива.

## Синтаксис

```javascript
array.push(element1, element2, ..., elementN);
```
- Особенности метода
1. Добавляет один или несколько элементов в конец массива.
2. Изменяет исходный массив.
3. Возвращает новую длину массива.

#### Примеры использования
Простой пример
```javascript
const fruits = ['apple', 'banana'];
const newLength = fruits.push('cherry');

console.log(fruits); // ['apple', 'banana', 'cherry']
console.log(newLength); // 3
```
#### Добавление нескольких элементов
```javascript
const numbers = [1, 2, 3];
numbers.push(4, 5, 6);

console.log(numbers); // [1, 2, 3, 4, 5, 6]
```
#### Использование в цикле
Добавление элементов в массив в процессе выполнения программы:

```javascript
const stack = [];
for (let i = 1; i <= 5; i++) {
    stack.push(i);
}
console.log(stack); // [1, 2, 3, 4, 5]
```
#### Добавление объектов в массив
```javascript
const users = [{ name: 'Alice' }, { name: 'Bob' }];
users.push({ name: 'Charlie' });

console.log(users);
// [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
```
#### Возврат длины массива
Метод возвращает новую длину массива, что может быть полезно:

```javascript
const arr = [10, 20];
const len = arr.push(30, 40);
console.log(len); // 4
console.log(arr); // [10, 20, 30, 40]
```
- Когда использовать push()
1. Когда нужно добавить элементы в конец массива.
2. Когда важно изменить исходный массив.
3. Когда требуется узнать новую длину массива после добавления элементов.
 
 # Метод `shift()` в JavaScript

Метод **`shift()`** используется для удаления первого элемента из массива. Он изменяет исходный массив и возвращает удалённый элемент. Если массив пуст, метод возвращает `undefined`.

## Синтаксис

```javascript
array.shift();
```
- Особенности метода
1. Удаляет первый элемент массива.
2. Изменяет исходный массив.
3. Возвращает удалённый элемент.
4. Возвращает undefined, если массив пуст.
Примеры использования
Простой пример
```javascript
const fruits = ['apple', 'banana', 'cherry'];
const firstFruit = fruits.shift();

console.log(fruits); // ['banana', 'cherry']
console.log(firstFruit); // 'apple'
```
Работа с пустым массивом
```javascript
const emptyArray = [];
const result = emptyArray.shift();

console.log(emptyArray); // []
console.log(result); // undefined
```
Использование в цикле
Удаление элементов массива до тех пор, пока он не станет пустым:

```javascript
const queue = [1, 2, 3, 4];
while (queue.length > 0) {
    console.log(queue.shift()); // Вывод: 1, 2, 3, 4
}
console.log(queue); // []
```
Удаление объектов из начала массива
Метод shift() работает с массивами любого типа данных, включая объекты:

```javascript
const tasks = [{ id: 1 }, { id: 2 }, { id: 3 }];
const firstTask = tasks.shift();

console.log(tasks); // [{ id: 2 }, { id: 3 }]
console.log(firstTask); // { id: 1 }
```
- Когда использовать shift()
1. Когда нужно удалить первый элемент из массива.
2. Когда важно сохранить удалённое значение для дальнейшего использования.
3. Для работы с массивами, которые используются как очередь (FIFO — First In, First Out).

# Метод `unshift()` в JavaScript

Метод **`unshift()`** используется для добавления одного или нескольких элементов в начало массива. Он изменяет исходный массив и возвращает новую длину массива.

## Синтаксис

```javascript
array.unshift(element1, element2, ..., elementN);
```

- Особенности метода
1. Добавляет один или несколько элементов в начало массива.
2. Изменяет исходный массив.
3. Возвращает новую длину массива.
#### Примеры использования
Простой пример
```javascript
const fruits = ['banana', 'cherry'];
const newLength = fruits.unshift('apple');

console.log(fruits); // ['apple', 'banana', 'cherry']
console.log(newLength); // 3
```
Добавление нескольких элементов
```javascript
const numbers = [3, 4, 5];
numbers.unshift(1, 2);

console.log(numbers); // [1, 2, 3, 4, 5]
```
Использование в цикле
Добавление элементов в массив в обратном порядке:

```javascript
const stack = [];
for (let i = 5; i >= 1; i--) {
    stack.unshift(i);
}
console.log(stack); // [1, 2, 3, 4, 5]
```
Добавление объектов в массив
```javascript
const users = [{ name: 'Bob' }, { name: 'Charlie' }];
users.unshift({ name: 'Alice' });

console.log(users);
// [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
```
Возврат длины массива
Метод возвращает новую длину массива:

```javascript
const arr = [20, 30];
const len = arr.unshift(10);
console.log(len); // 3
console.log(arr); // [10, 20, 30]
```
- Когда использовать unshift()
1. Когда нужно добавить элементы в начало массива.
2. Когда важно изменить исходный массив.
3. Когда требуется узнать новую длину массива после добавления элементов.
# Метод `splice()` в JavaScript

Метод **`splice()`** используется для добавления, удаления или замены элементов массива. Он изменяет исходный массив и возвращает массив удалённых элементов.

## Синтаксис

```javascript
array.splice(start, deleteCount, item1, item2, ..., itemN);
```
#### Особенности метода
- Изменяет исходный массив.
- Возвращает массив удалённых элементов.
- Может одновременно удалять, добавлять и заменять элементы.
#### Примеры использования
Удаление элементов
Удалим 2 элемента, начиная с индекса 1:

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];
const removed = fruits.splice(1, 2);

console.log(fruits); // ['apple', 'date']
console.log(removed); // ['banana', 'cherry']
```
Добавление элементов
Добавим элементы на позицию 2:

```javascript
const fruits = ['apple', 'date'];
fruits.splice(1, 0, 'banana', 'cherry');

console.log(fruits); // ['apple', 'banana', 'cherry', 'date']
```
Замена элементов
Заменим 1 элемент на позиции 1:

```javascript
const fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 1, 'grape');

console.log(fruits); // ['apple', 'grape', 'cherry']
```
Удаление всех элементов от индекса
Удалим все элементы, начиная с позиции 2:

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];
const removed = fruits.splice(2);

console.log(fruits); // ['apple', 'banana']
console.log(removed); // ['cherry', 'date']
```
Комбинированное использование
Одновременно удалим и добавим элементы:

```javascript
const numbers = [1, 2, 3, 4];
numbers.splice(1, 2, 5, 6);

console.log(numbers); // [1, 5, 6, 4]
```
#### Когда использовать splice()
- Для удаления элементов из массива.
- Для добавления новых элементов в массив.
- Для замены существующих элементов на новые.
- Для изменения структуры массива в месте, отличном от начала или конца.

# Метод `concat()` в JavaScript

Метод **`concat()`** используется для объединения двух или более массивов или добавления новых элементов к массиву. Он возвращает новый массив, не изменяя исходные массивы.

## Синтаксис

```javascript
const newArray = array1.concat(array2, ..., arrayN);
```

#### Особенности метода
- Не изменяет исходные массивы.
- Возвращает новый массив, содержащий элементы всех переданных массивов или значений.
- Может объединять как массивы, так и отдельные элементы.
#### Примеры использования
Объединение массивов
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = arr1.concat(arr2);

console.log(result); // [1, 2, 3, 4, 5, 6]
console.log(arr1);   // [1, 2, 3] (не изменён)
console.log(arr2);   // [4, 5, 6] (не изменён)
```
Добавление элементов
```javascript
const fruits = ['apple', 'banana'];
const result = fruits.concat('cherry', 'date');

console.log(result); // ['apple', 'banana', 'cherry', 'date']
```
Объединение нескольких массивов
```javascript
const arr1 = [1];
const arr2 = [2, 3];
const arr3 = [4, 5];
const result = arr1.concat(arr2, arr3);

console.log(result); // [1, 2, 3, 4, 5]
```
Вложенные массивы
Метод не разворачивает вложенные массивы:

```javascript
const arr1 = [1, 2];
const arr2 = [3, [4, 5]];
const result = arr1.concat(arr2);

console.log(result); // [1, 2, 3, [4, 5]]
```
Примеры с пустыми массивами
```javascript
const empty = [];
const numbers = [1, 2, 3];
const result = empty.concat(numbers);

console.log(result); // [1, 2, 3]
```
#### Когда использовать concat()
- Когда нужно объединить два или более массивов.
- Когда требуется сохранить исходные массивы без изменений.
- Для добавления новых элементов в массив без его изменения.

# Метод `slice()` в JavaScript

Метод **`slice()`** используется для создания нового массива, который содержит копию части исходного массива. Метод не изменяет исходный массив и возвращает новый массив.

## Синтаксис

```javascript
const newArray = array.slice(begin, end);
```
#### Особенности метода
- Не изменяет исходный массив.
- Возвращает новый массив, содержащий элементы, начиная с индекса begin и до индекса end.
- Если аргумент end не указан, метод извлекает элементы до конца массива.
- Если begin больше длины массива, метод вернёт пустой массив.
#### Примеры использования
Извлечение части массива
```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];
const result = fruits.slice(1, 3);

console.log(result); // ['banana', 'cherry']
console.log(fruits); // ['apple', 'banana', 'cherry', 'date'] (не изменён)
```
Извлечение до конца массива
```javascript
const fruits = ['apple', 'banana', 'cherry'];
const result = fruits.slice(1);

console.log(result); // ['banana', 'cherry']
```
Отрицательные индексы
Отрицательные индексы отсчитываются от конца массива:

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];
const result = fruits.slice(-3, -1);

console.log(result); // ['banana', 'cherry']
```
Копирование всего массива
Если не указаны параметры, метод возвращает копию всего массива:

```javascript
const fruits = ['apple', 'banana', 'cherry'];
const result = fruits.slice();

console.log(result); // ['apple', 'banana', 'cherry']
console.log(fruits); // ['apple', 'banana', 'cherry'] (не изменён)
```
#### Когда использовать slice()
- Когда нужно извлечь часть массива без изменения исходного массива.
- Для создания копии массива.
- Когда нужно работать с подмассивами.

# Метод `join()` в JavaScript

Метод **`join()`** используется для объединения всех элементов массива в строку. Метод принимает опциональный разделитель, который будет вставлен между элементами массива. Если разделитель не указан, элементы массива будут объединены через запятую.

## Синтаксис

```javascript
const result = array.join(separator);
```

#### Особенности метода
- Возвращает строку, содержащую элементы массива, объединённые указанным разделителем.
- Если массив пуст, возвращается пустая строка.
- Если элемент массива является undefined или null, то он будет преобразован в строку "undefined" или "null".
#### Примеры использования
Объединение массива в строку с дефисом
```javascript
const fruits = ['apple', 'banana', 'cherry'];
const result = fruits.join('-');

console.log(result); // 'apple-banana-cherry'
```
Объединение массива с запятой (по умолчанию)
```javascript
const fruits = ['apple', 'banana', 'cherry'];
const result = fruits.join();

console.log(result); // 'apple,banana,cherry'
```
Объединение с пробелом
```javascript
const words = ['Hello', 'world'];
const result = words.join(' ');

console.log(result); // 'Hello world'
```
Объединение массива с пустым разделителем
```javascript
const digits = [1, 2, 3, 4];
const result = digits.join('');

console.log(result); // '1234'
```
Работа с null и undefined
```javascript
const array = ['apple', null, 'banana', undefined];
const result = array.join('|');

console.log(result); // 'apple|null|banana|undefined'
```
#### Когда использовать join()
- Когда нужно объединить элементы массива в строку.
- Для создания строки с кастомным разделителем между элементами массива.
- Для формирования текстового представления массива.

# Метод `includes()` в JavaScript

Метод **`includes()`** используется для проверки, содержит ли массив указанный элемент. Он возвращает `true`, если элемент найден, и `false` в противном случае.

## Синтаксис

```javascript
const result = array.includes(element, start);
```

#### Особенности метода
- Метод не изменяет исходный массив.
- Возвращает true, если элемент найден, и false, если не найден.
- Использует строгую проверку равенства (т.е. ===), то есть значения NaN считаются равными только друг другу, а не числам или строкам.
#### Примеры использования
Проверка наличия элемента в массиве
```javascript
const fruits = ['apple', 'banana', 'cherry'];
const result = fruits.includes('banana');

console.log(result); // true
```
Проверка отсутствия элемента в массиве
```javascript
const fruits = ['apple', 'banana', 'cherry'];
const result = fruits.includes('orange');

console.log(result); // false
```
Указание начального индекса для поиска
```javascript
const fruits = ['apple', 'banana', 'cherry'];
const result = fruits.includes('banana', 2);

console.log(result); // false (поиск начинается с индекса 2)
```
Работа с NaN
```javascript
const numbers = [1, 2, NaN, 4];
const result = numbers.includes(NaN);

console.log(result); // true (NaN можно найти в массиве)
```
#### Когда использовать includes()
- Когда нужно проверить наличие элемента в массиве.
- Для поиска элементов в массиве, например, при проверке пользовательского ввода.
- Для поиска значений в массиве, например, в списке опций или ответов.