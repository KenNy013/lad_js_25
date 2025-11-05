/* eslint-disable operator-linebreak */
import "console-emojis"

function lessonSix() {
  console.log("-".repeat(80), "\n")

  // 1
  // Преобразовать строку в массив слов. Напишите функцию
  // stringToarray(str), которая преобразует строку в массив слов.

  function stringToArray(str) {
    if (!(typeof str === "string" && str.trim().length > 0)) {
      return "ERROR | Str not valid"
    }

    return str.split(/\s/)
  }

  console.log(
    stringToArray(
      "Раньше все было проще: чудовища злые, люди добрые. А теперь… Перемешалось как-то все…"
    )
  )

  // 2
  // Напишите функцию deleteСharacters(str, length), которая
  // возвращает подстроку, состоящую из указанного количества
  // символов.

  function deleteСharacters(str, length) {
    if (
      !(
        typeof str === "string" &&
        str.trim().length > 0 &&
        typeof length === "number"
      )
    ) {
      return "ERROR | str or length not valid"
    }

    return str.substring(0, length)
  }

  console.log(
    deleteСharacters(
      "Раньше все было проще: чудовища злые, люди добрые. А теперь… Перемешалось как-то все…",
      10
    )
  )

  // 3
  // Напишите функцию insertDash(str), которая принимает строку
  // str в качестве аргумента и вставляет тире (-) между словами.
  // При этом все символы строки необходимо перевести в
  // верхний регистр.

  function insertDash(str) {
    if (!(typeof str === "string" && str.trim().length > 0)) {
      return "ERROR | Str not valid"
    }

    return str.toLocaleUpperCase().split(/\s+/).join("-")
  }

  console.log(
    insertDash(
      "Но если приходится выбирать между одним злом и другим, я предпочитаю не выбирать вообще."
    )
  )

  // 4
  // Напишите функцию, которая принимает строку в качестве
  // аргумента и преобразует регистр первого символа строки из
  // нижнего регистра в верхний.

  function strChangeRegister(str) {
    if (!(typeof str === "string" && str.trim().length > 0)) {
      return "ERROR | Str not valid"
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  console.log(
    strChangeRegister(
      "но если приходится выбирать между одним злом и другим, я предпочитаю не выбирать вообще."
    )
  )

  // 5
  // Напишите функцию capitalize(str), которая возвращает строку,
  // в которой каждое слово начинается с заглавной буквы

  function capitalize(str) {
    if (!(typeof str === "string" && str.trim().length > 0)) {
      return "ERROR | Str not valid"
    }

    return str
      .split(/\s+/)
      .map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1))
      .join(" ")
  }

  console.log(
    capitalize(
      "но если приходится выбирать между одним злом и другим. Я предпочитаю не выбирать вообще."
    )
  )

  // 6
  // Напишите функцию changeRegister(str), которая принимает в
  // качестве аргумента строку и и заменяет регистр каждого
  // символа на противоположный. Например, если вводится
  // «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

  function changeRegister(str) {
    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    return str.replace(/\W/g, (char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
  }

  console.log(changeRegister("КаЖдЫй ОхОтНиК"))

  // 7
  // Напишите функцию removeChar(str), которая возвращает
  // строку, очищенную от всех не буквенно-цифровых символов.

  function removeChar(str) {
    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    return str.replaceAll(/[^a-zA-Zа-яА-ЯёЁ0-9\s]/g, "")
  }

  console.log(removeChar("КаЖд@Ый О$хОт&НиК"))

  // 8
  // Напишите функцию zeros(num, len), которая дополняет нулями
  // до указанной длины числовое значение с дополнительным
  // знаком «+» или «-» в зависимости от передаваемого аргумента.

  function zeros(num, len) {
    if (!(typeof num === "number" && typeof len === "number")) {
      return "ERROR | str or length not valid"
    }

    const sign = num >= 0 ? "+" : "-"
    const numberStr = Math.abs(num).toString().padStart(len, "0")
    return sign + numberStr
  }

  console.log(zeros(-200, 4))

  // 9
  // Напишите функцию comparison(str1, str2), которая сравнивает
  // строки без учёта регистра символов.

  function comparison(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") {
      return "ERROR | Str not valid"
    }

    if (str1.trim().length === 0 || str2.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    return str1.localeCompare(str2, undefined, { sensitivity: "base" }) === 0
  }

  console.log(comparison("аАаам", "аАааМ"))

  // 10
  // Напишите функцию insensitiveSearch(str1, str2), которая
  // осуществляет поиск подстроки str2 в строке str1 без учёта
  // регистра символов.

  function insensitiveSearch(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") {
      return "ERROR | Str not valid"
    }

    if (str1.trim().length === 0 || str2.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    const regex = new RegExp(`(^|[^а-яёa-z])${str2}([^а-яёa-z]|$)`, "i")

    return str1.match(regex)
  }

  console.log(
    insensitiveSearch(
      "но если приходится выбирать между одним злом и другим. Я предпочитаю не выбирать вообще.",
      "и"
    )
  )

  // 11
  // Напишите функцию initCap(str), которая преобразует стиль
  // написания составных слов строки в CamelCase, при котором
  // несколько слов пишутся слитно без пробелов, при этом каждое
  // слово внутри строки пишется с заглавной буквы.

  function initCap(str) {
    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }
    const arrayStr = str.split(/\s/)

    return arrayStr
      .map((str, index) =>
        index === 0 ? str : str.charAt(0).toLocaleUpperCase() + str.slice(1)
      )
      .join("")
  }

  console.log(initCap("is array from valid"))

  // 12
  //Напишите функцию initSnake(str), которая преобразует
  // стиль написания составных слов строки из CamelCase в
  // snake _ case, при котором несколько слов разделяются
  // символом подчеркивания (_), причём каждое слово пишется с
  // маленькой буквы.

  function initSnake(str) {
    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }
    const arrayStr = str.split(/\s/)

    return arrayStr
      .map((str, index) =>
        index === 0
          ? str
          : str.charAt(0).toLocaleLowerCase() + str.slice(1).toLocaleLowerCase()
      )
      .join("_")
  }

  console.log(initSnake("is array from valid"))

  // 13
  // Напишите функцию repeatStr(str, n), которая возвращает
  // строку повторяемую определённое количество раз.

  function repeatStr(str, n) {
    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    if (typeof n !== "number" || n === 0) {
      return "ERROR | n not valid"
    }

    return str.repeat(n)
  }

  console.log(repeatStr("привет", 2))

  // 14
  // Напишите функцию path(pathname), которая возвращает
  // имя файла (подстрока после последнего символа "\" ) из
  // полного пути к файлу.

  function path(str) {
    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    return str.split(/(\\|\/)/).pop()
  }

  console.log(path("/Users/daniilmuhreev/Desktop/Lad_Js/06_lesson/index.js"))

  // 15
  // Создайте функцию endsWith(), который сравнивает
  // подстроку str1 с окончанием исходной строки str и определяет
  // заканчивается ли строка символами подстроки.

  function endsWith(str, str1) {
    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    if (typeof str1 !== "string" || str1.trim().length === 0) {
      return "ERROR | Str1 not valid"
    }

    // return str.endsWith(str1)

    return str.slice(-str1.length) === str1
  }

  console.log(endsWith("привет да", "да"))

  // 16
  // Напишите функцию getSubstr(str, char, pos), которая
  // возвращает часть строки, расположенную после или до
  // указанного символа char в зависимости от параметра pos.

  function getSubstr(str, char, pos) {
    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    if (
      typeof char !== "string" ||
      (char.trim().length === 0 && char.trim().length > 1)
    ) {
      return "ERROR | Str1 not valid"
    }

    if (typeof pos !== "number") {
      return "ERROR Pos not valid"
    }

    const index = str.indexOf(char)

    if (index === -1) {
      return str
    }

    return pos === 1 ? str.slice(index + 1) : str.slice(0, index)
  }

  console.log(
    getSubstr(
      "но если приходится выбирать между одним злом и другим. Я предпочитаю не выбирать вообще.",
      "а",
      10
    )
  )

  // 17
  // Напишите функцию insert(str, substr, pos), которая вставляет
  // подстроку substr в указанную позицию pos строки str. По
  // умолчанию подстрока вставляется в начало строки.

  function insert(str, substr, pos) {
    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    if (typeof substr !== "string" || substr.trim().length === 0) {
      return "ERROR | Substr not valid"
    }

    if (typeof pos !== "number") {
      return "ERROR Pos not valid"
    }

    const arr = str.split(/\w*/)

    arr.splice(pos, 0, ...substr.split(/\w*/))

    return arr.join("")
  }

  console.log(
    insert(
      "но если приходится выбирать между одним злом и другим. Я предпочитаю не выбирать вообще.",
      " он",
      2
    )
  )

  // 18. Напишите функцию limitStr(str, n, symb), которая обрезает
  // строку, если она длиннее указанного количества символов n.
  // Усеченная строка должна заканчиваться троеточием «...»
  //(если не задан параметр symb) или заданным символом symb.

  function limitStr(str, n, symb = "...") {
    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    if (typeof symb !== "string" || symb.trim().length === 0) {
      return "ERROR | Symb not valid"
    }

    if (typeof n !== "number") {
      return "ERROR | n not valid"
    }

    return str.substring(0, n) + symb
  }

  console.log(
    limitStr(
      "но если приходится выбирать между одним злом и другим. Я предпочитаю не выбирать вообще.",
      10,
      "...узнать далее"
    )
  )

  // 19
  // Напишите функцию count(str, stringsearch), которая
  // возвращает количество символов stringsearch в строке str.

  function count(str, stringsearch) {
    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    if (typeof stringsearch !== "string" || stringsearch.trim().length === 0) {
      return "ERROR | Symb not valid"
    }

    const matches = str.match(new RegExp(stringsearch, "g"))
    return matches ? matches.length : 0
  }

  console.log(
    count(
      "но если приходится выбирать между одним злом и другим. Я предпочитаю не выбирать вообще.",
      "ра"
    )
  )

  // 20
  //Напишите функцию strip(str), которая удаляет все лишние
  // пробелы из строки str.

  function strip(str) {
    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    return str.replace(/\s+/g, " ").trim()
  }

  console.log(
    strip(
      "но      если приходится выбирать       между одним злом и другим. Я предпочитаю не       выбирать вообще."
    )
  )

  // 21
  // Напишите функцию cutString(str, n), которая удаляет лишние
  // слова из строки str, оставив в ней n слов.

  function cutString(str, n) {
    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    if (typeof n !== "number" || n < 0) {
      return "ERROR | n not valid"
    }

    return str.split(/\s+/).slice(0, n).join(" ")
  }

  console.log(
    cutString(
      "но если приходится выбирать между одним злом и другим. Я предпочитаю не выбирать вообще.",
      5
    )
  )

  // 22
  // Напишите функцию findWord(word, str), которая проверяет,
  // существует ли в строке str слова word.

  function findWord(word, str) {
    if (typeof word !== "string" || word.trim().length === 0) {
      return "ERROR | Word not valid"
    }

    if (typeof str !== "string" || str.trim().length === 0) {
      return "ERROR | Str not valid"
    }

    const regex = new RegExp(`(^|[^а-яёa-z])${word}([^а-яёa-z]|$)`, "i")
    return regex.test(str)
  }

  console.log(findWord("привет", "Привет мир"))

  console.log("\n", "-".repeat(80))
}

export default lessonSix
