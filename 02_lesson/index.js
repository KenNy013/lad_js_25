/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import "console-emojis"
import chalk from "chalk"

function lessonTwo() {
  console.log("-".repeat(80), "\n")

  // 1
  console.question(
    chalk.bold(
      "1.1 Задача: В переменной хранится возраст пользователя. Ему может быть 0 лет. Как назвать переменную?\n"
    ) + chalk.green("let userAge = 0\n")
  )

  let userAge = 0

  // 2
  console.question(
    chalk.bold("1.2 Задача: Нужно отслеживать, авторизован ли пользователь на сайте.\n") +
      chalk.green("let isLogin = true\n")
  )

  let isLogin = true

  //3
  console.question(
    chalk.bold(
      "1.3 Задача: В переменной хранится список всех товаров в корзине интернет-магазина.\n"
    ) + chalk.green(" const basketItems = [{}, {}]\n")
  )

  const basketItems = [{}, {}]

  //4
  console.question(
    chalk.bold(
      "1.4 Задача: В переменной хранится информация о книге: её название, автор, год издания и количество страниц.\n"
    ) +
      chalk.green(` const bookItem = {
    title: "Башня чайки",
    author: "Анжей Сапковский",
    year: 1997,
    page: 384
  }\n`)
  )
  const bookItem = {
    title: "Башня чайки",
    author: "Анжей Сапковский",
    year: 1997,
    page: 384
  }

  //5
  console.question(
    chalk.bold(
      "1.5 В переменную записывается общая сумма всех товаров в корзине после применения всех скидок.\n"
    ) + chalk.green("let totalSumBasket = 300 * 0.4\n")
  )
  let totalSumBasket = 300 * 0.4

  //6

  console.question(
    chalk.bold(
      "1.6 Задача: В переменной хранится ID таймера, который запускает какое-то действие каждые 5 секунд. Эта переменная нужна, чтобы позже можно было этот таймер остановить.\n"
    ) + chalk.green("const timerID = setTimeout(() => {}, 0)\n")
  )

  const timerID = setTimeout(() => {}, 0)

  //7

  console.question(
    chalk.bold(
      "1.7 Задача: Нужно работать с кнопкой в интерфейсе, при нажатии на которую открывается модальное окно.\n"
    ) + chalk.green("const modalBtnElement = null\n")
  )

  //8

  console.question(
    chalk.bold(
      "1.8 Задача: Переменная отвечает на вопрос: 'Отображен ли сейчас этот попап на экране?'\n"
    ) + chalk.green("let popUpIsActive = true\n")
  )

  let popUpIsActive = true

  //9

  console.question(
    chalk.bold(
      "1.9 Задача: В переменной собирается приветственное сообщение для пользователя, например, 'Добро пожаловать, [Имя]!'.'\n"
    ) + chalk.green(" let messageForUser = `Добро пожаловать Лютик!`\n")
  )

  let messageForUser = "Привет!"

  //10

  console.question(
    chalk.bold(
      "1.10 Задача: Создаётся функция, которая будет вызвана при отправке пользователем формы регистрации.'\n"
    ) + chalk.green("function sendMessageOnSubmitAuth() {}\n")
  )

  function sendMessageOnSubmitAuth() {}

  console.log("-".repeat(80))
}

export default lessonTwo
