/**
 * Представим, что на одном из проектов нам потребовался DSL для решения бизнес-задачи. Наши пользователи - большие поклонники Lisp, поэтому синтаксис этого языка им более привычен, чем синтаксис JS.
 * Парсер оригинального синтаксиса Lisp нам написать хоть и не так сложно, но все же для MVP это может быть неразумно, а вот простенький интерпретатор нам точно будет полезен.
 *
 * Что мы хотим получить:
 * 1. Возможность объявлять функции таким образом: [defn, 'funcName', ['a', 'b'], ['sum', 'a', 'b']], где
 *      defn - ключевое слово для определения функции
 *      'funcName' - имя функции
 *      ['a', 'b'] - перечисление аргументов функции
 *      ['sum', 'a', 'b'] - тело функции (т. е. вызов функции sum с аргументами a и b)
 * 2. Соответственно вызов функции должен быть таким ['funcName', 'a', 'b']
 *
 * Ниже уже реализован некоторый runtime и есть пример вызова interpret. Необходимо имплементировать interpret и defn.
 *
 * P.S.
 * Даже если не получится выполнять задание в полной мере (например, где-то застряли), все равно скидывайте в качестве решения то, что получилось.
 */



const defn = (functionName, args, body) => {
  // требуется реализация
  // Вопрос
  // Для чего нужны functionName  и args ?
  return sum(...body);
};

const interpret = (...code) => {
  // требуется реализация
  // const nameFunction = code[0][1];
  // const args = code[0][2];
  // const bodyParams = code[1].slice(1);
  
  // return defn(nameFunction, args, bodyParams);

  console.log(code);
const map = new Map(code);
console.log(map);
console.log(map.get('sum3'));

};

// Функция, используемая в runtime
const sum = (...args) => args.reduce((prev, curr) => prev + curr);

// Пример вызова функции interpret
const result = interpret(
  [defn, "sum3", ["a", "b", "c"], [sum, "a", "b", "c"]],
  ["sum3", 10, 20, 30]
);
console.log(`Result = ` + result);
console.assert(result === 60);
