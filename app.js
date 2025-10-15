import "console-emojis"
import { cristal, summer, vice } from "gradient-string"
import chalk from "chalk"

// import lessonTwo from "./02_lesson/index.js"
import lessonThree from "./03_lesson/index.js"

console.handshake(cristal("Всем привет!\n"))

console.one(chalk.bold(vice("Введение в JavaScript. Переменные и типы данных")))
// lessonTwo()

console.two(chalk.bold(summer(" Преобразование типов. Операторы сравнения")))
lessonThree()
