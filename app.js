import "console-emojis"
import { cristal, summer, vice } from "gradient-string"
import chalk from "chalk"

import lessonFive from "./05_lesson/index.js"

// import lessonTwo from "./02_lesson/index.js"
// import lessonThree from "./03_lesson/index.js"
// import lessonFour from "./04_lesson/index.js"

console.handshake(cristal("Всем привет!\n"))

console.one(
  chalk.bold(vice(" Введение в JavaScript. Переменные и типы данных"))
)
// lessonTwo()

console.two(chalk.bold(summer(" Преобразование типов. Операторы сравнения")))
// lessonThree()

console.three(chalk.bold(summer(" Циклы и условия")))
// lessonFour()

console.four(chalk.bold(summer(" Функции")))
lessonFive()
