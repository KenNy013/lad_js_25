import "console-emojis"
import { cristal, summer, vice } from "gradient-string"
import chalk from "chalk"
import lessonNine from "./09_lesson/index.js"

// import lessonTwo from "./02_lesson/index.js"
// import lessonThree from "./03_lesson/index.js"
// import lessonFour from "./04_lesson/index.js"
// import lessonFive from "./05_lesson/index.js"
// import lessonSix from "./06_lesson/index.js"
// import lessonSeven from "./07_lesson/index.js"
// import lessonEight from "./08_lesson/index.js"

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
// lessonFive()

console.six(chalk.bold(summer(" Объекты")))
// lessonSix()

console.seven(chalk.bold(summer(" Массивы")))
// lessonSeven()

console.eight(chalk.bold(summer(" Объекты")))
// lessonEight()

console.nine(chalk.bold(summer(" Прототипирование")))

lessonNine()
