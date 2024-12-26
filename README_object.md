# Объект в JavaScript
Объект — это тип данных в JavaScript, представляющий собой коллекцию свойств и значений. Свойства объекта описывают его характеристики, а значения могут быть любого типа данных, включая другие объекты.
У объектов в есть свойства (properties). Свойства объекта представляют собой пары "ключ-значение", где:

- Ключ — это строка (или символ), используемая для идентификации свойства.
- Значение — это данные любого типа (включая функции, которые называются методами)
``` javascript
const user = {
  name: "Alice",       // Свойство с ключом "name" и значением "Alice"
  age: 25,             // Свойство с ключом "age" и значением 25
  isAdmin: false       // Свойство с ключом "isAdmin" и значением false
};
```

- Как проверить наличие свойства
Оператор in: Проверяет, существует ли свойство в объекте (независимо от его значения).

```javascript
console.log("name" in user); // true
console.log("email" in user); // false
```
Проверка на undefined: Если свойства нет, доступ к нему вернёт undefined.

```javascript
console.log(user.name !== undefined); // true
console.log(user.email !== undefined); // false
```
Особенности работы со свойствами
Свойство может быть доступно через точку или квадратные скобки:

```javascript
console.log(user.name);        // "Alice"
console.log(user["isAdmin"]);  // false
```
Динамическое добавление свойств:

```javascript
user.email = "alice@example.com";
console.log(user.email); // "alice@example.com"
```
Удаление свойства:

```javascript
delete user.age;
console.log(user.age); // undefined
```
Проверка всех свойств объекта:

```javascript
console.log(Object.keys(user)); // ["name", "isAdmin", "email"]
```
#### Итог
- Объект всегда имеет свойства, даже если они добавлены позже. Проверка наличия свойства и работа с ним — это базовые операции при работе с объектами в JavaScript.

# Методы объекта
1. Object.keys() - Для получения массива всех собственных ключей (имен свойств) объекта.
2. Object.values() Для получения массива всех значений свойств объекта.
3. Object.entries() Возвращает массив, содержащий пары ключ-значение для всех собственных свойств объекта. Каждая пара представлена в виде массива: первый элемент — это ключ, а второй — значение.

# Метод Object.keys() в JavaScript
Метод Object.keys() используется для получения массива всех собственных ключей (имен свойств) объекта. Он возвращает только строковые ключи, игнорируя символы.


``` javascript
Object.keys(obj);
obj — объект, из которого нужно получить ключи.
Возвращаемое значение
Возвращает массив строк, каждая из которых — это ключ свойства объекта.
```

Примеры
1. Получение ключей объекта
```javascript
const user = {
  name: "Alice",
  age: 25,
  isAdmin: false
};

const keys = Object.keys(user);
console.log(keys); // ["name", "age", "isAdmin"]
```
2. Работа с пустым объектом
``` javascript
const emptyObj = {};
console.log(Object.keys(emptyObj)); // []
```
3. Перебор ключей объекта
```javascript
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

Object.keys(car).forEach((key) => {
  console.log(`${key}: ${car[key]}`);
});
// Вывод:
// brand: Toyota
// model: Camry
// year: 2020
```
#### Особенности
- Только собственные свойства: Метод возвращает только те ключи, которые принадлежат самому объекту, не затрагивая свойства из цепочки прототипов.

```javascript
const obj = Object.create({ inheritedKey: 42 });
obj.ownKey = "value";

console.log(Object.keys(obj)); // ["ownKey"]
```
Порядок ключей: Ключи возвращаются в порядке их добавления, за исключением числовых ключей, которые идут в порядке возрастания.

```javascript
const obj = { 2: "b", 1: "a", name: "test" };
console.log(Object.keys(obj)); // ["1", "2", "name"]
```
#### Использование с другими методами
- Получение пар ключ-значение
- Вместе с Object.keys() можно использовать map для создания массива пар ключ-значение:

```javascript
const user = {
  name: "Alice",
  age: 25
};

const entries = Object.keys(user).map((key) => [key, user[key]]);
console.log(entries); // [["name", "Alice"], ["age", 25]]
```
Проверка наличия ключа
```javascript
const user = {
  name: "Alice",
  age: 25
};

console.log(Object.keys(user).includes("name")); // true
console.log(Object.keys(user).includes("email")); // false
```
Итог: Object.keys() — это удобный способ получить список ключей объекта для их дальнейшей обработки или анализа.

# Метод Object.values()  
Метод Object.values() используется для получения массива всех значений свойств объекта. Он возвращает значения всех собственных свойств объекта (ключи из цепочки прототипов игнорируются).


```javascript
Object.values(obj);
obj — объект, из которого нужно получить значения.
Возвращаемое значение
Возвращает массив, содержащий значения всех собственных свойств объекта.
```

Примеры
1. Получение значений объекта
```javascript
const user = {
  name: "Alice",
  age: 25,
  isAdmin: false
};

const values = Object.values(user);
console.log(values); // ["Alice", 25, false]
```
2. Работа с пустым объектом
```javascript
const emptyObj = {};
console.log(Object.values(emptyObj)); // []
```
3. Перебор значений объекта
```javascript
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

Object.values(car).forEach((value) => {
  console.log(value);
});
// Вывод:
// Toyota
// Camry
// 2020
```
#### Особенности
Только собственные свойства: Метод возвращает значения только свойств, принадлежащих самому объекту, и игнорирует значения, унаследованные из прототипа.

```javascript
const obj = Object.create({ inheritedKey: 42 });
obj.ownKey = "value";

console.log(Object.values(obj)); // ["value"]
```
Порядок значений: Значения возвращаются в порядке, соответствующем порядку их ключей в объекте.

```javascript
const obj = { 2: "b", 1: "a", name: "test" };
console.log(Object.values(obj)); // ["a", "b", "test"]
```
Использование с другими методами
1. Получение пар ключ-значение
Вместе с Object.values() можно использовать Object.keys() для получения соответствующих ключей и значений:

```javascript
const user = {
  name: "Alice",
  age: 25
};

const entries = Object.keys(user).map((key) => [key, user[key]]);
console.log(entries); // [["name", "Alice"], ["age", 25]]
```
2. Сумма значений (если они числовые)
```javascript
const salaries = {
  Alice: 500,
  Bob: 700,
  Charlie: 300
};

const total = Object.values(salaries).reduce((sum, value) => sum + value, 0);
console.log(total); // 1500
```
Сравнение с Object.keys()
Object.keys(obj) возвращает массив ключей объекта.
Object.values(obj) возвращает массив значений объекта.
```javascript
const user = {
  name: "Alice",
  age: 25
};

console.log(Object.keys(user));   // ["name", "age"]
console.log(Object.values(user)); // ["Alice", 25]
```
Итог
Метод Object.values() — это простой способ получить значения объекта для анализа или обработки. Он удобен для итерации по значениям или выполнения вычислений.


Метод Object.entries() в JavaScript
Метод Object.entries() возвращает массив, содержащий пары ключ-значение для всех собственных свойств объекта. Каждая пара представлена в виде массива: первый элемент — это ключ, а второй — значение.

Синтаксис
javascript
Копировать код
Object.entries(obj);
obj — объект, из которого нужно получить пары ключ-значение.
Возвращаемое значение
Возвращает массив массивов, где каждый внутренний массив состоит из двух элементов:

Первый элемент — ключ (строка).
Второй элемент — значение, соответствующее этому ключу.
Примеры
1. Получение пар ключ-значение
javascript
Копировать код
const user = {
  name: "Alice",
  age: 25,
  isAdmin: false
};

const entries = Object.entries(user);
console.log(entries);
// [["name", "Alice"], ["age", 25], ["isAdmin", false]]
2. Работа с пустым объектом
javascript
Копировать код
const emptyObj = {};
console.log(Object.entries(emptyObj)); // []
3. Перебор пар ключ-значение
javascript
Копировать код
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

Object.entries(car).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Вывод:
// brand: Toyota
// model: Camry
// year: 2020
Особенности
Только собственные свойства: Object.entries() возвращает пары ключ-значение только для свойств, принадлежащих самому объекту. Унаследованные свойства не учитываются.

javascript
Копировать код
const obj = Object.create({ inheritedKey: 42 });
obj.ownKey = "value";

console.log(Object.entries(obj)); // [["ownKey", "value"]]
Порядок пар: Пары возвращаются в порядке добавления свойств в объект.

javascript
Копировать код
const obj = { 2: "b", 1: "a", name: "test" };
console.log(Object.entries(obj)); // [["1", "a"], ["2", "b"], ["name", "test"]]
Использование
1. Преобразование объекта в массив
javascript
Копировать код
const user = {
  name: "Alice",
  age: 25
};

const entries = Object.entries(user);
console.log(entries); // [["name", "Alice"], ["age", 25]]
2. Обратное преобразование (массив в объект)
javascript
Копировать код
const entries = [["name", "Alice"], ["age", 25]];
const obj = Object.fromEntries(entries);

console.log(obj); // { name: "Alice", age: 25 }
3. Фильтрация ключей и значений
javascript
Копировать код
const scores = {
  Alice: 50,
  Bob: 70,
  Charlie: 30
};

// Оставляем только те, у кого баллы больше 40
const filtered = Object.entries(scores)
  .filter(([key, value]) => value > 40)
  .map(([key]) => key);

console.log(filtered); // ["Alice", "Bob"]
Сравнение с другими методами
Object.keys(obj) — возвращает массив ключей.
Object.values(obj) — возвращает массив значений.
Object.entries(obj) — возвращает массив пар ключ-значение.
javascript
Копировать код
const user = {
  name: "Alice",
  age: 25
};

console.log(Object.keys(user));    // ["name", "age"]
console.log(Object.values(user));  // ["Alice", 25]
console.log(Object.entries(user)); // [["name", "Alice"], ["age", 25]]
Итог
Метод Object.entries() удобен для работы с парами ключ-значение объекта, особенно при преобразовании объектов, их переборе или фильтрации данных.