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
 