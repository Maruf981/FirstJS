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