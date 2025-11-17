import "console-emojis"

function lessonEight() {
  console.log("-".repeat(80), "\n")

  /// 1. Что выведет функция?

  // function f() {
  //  alert(this)
  // }
  // let user = {
  //   g: f.bind(null)
  // }
  // user.g()

  console.log(
    "1.",
    "Данная функция выведет => window/global, так как мы жестко привязали контекст null, хотя в строгом режиме будет null "
  )

  ///  2. Можем ли мы изменить this дополнительным связыванием?

  // function f() {
  //   alert(this.name)
  // }

  // const f = f.bind({ name: "Вася" }).bind({ name: "Петя" })
  // f()

  console.log(
    "2.",
    "Нет, bind() создает связанную функцию (bound function), которую невозможно перепривязать с помощью повторного вызова bind()"
  )

  // 3.
  // function sayHi() {
  //   alert(this.name)
  // }
  // sayHi.test = 5
  // let bound = sayHi.bind({
  //   name: "Вася"
  // })
  // alert(bound.test)

  console.log(
    "3.",
    "undefined, так как bind не наследует свойства оригинальной функции (объекта)"
  )

  // 4
  // Вызов askPassword() в приведённом ниже коде должен
  // проверить пароль и затем вызвать user.loginOk/loginFail в
  // зависимости от ответа.
  // Однако, его вызов приводит к ошибке. Почему?

  console.log(
    "4.",
    "Потому что контекст определяется в момент вызова получается тут: window/global.ok()/window/global.fail(), лучше жестко установить контекст"
  )

  // 5
  //Объект user был изменён. Теперь вместо двух функций
  // loginOk/loginFail у него есть только одна – user.login(true/false).
  // Что нужно передать в вызов функции askPassword в коде
  // ниже, чтобы она могла вызывать функцию user.login(true) как
  // ok и функцию user.login(false) как fail?

  function askPassword(ok, fail) {
    let password = "rockstar1"
    if (password == "rockstar") ok()
    else fail()
  }
  let user = {
    name: "John",
    login(result) {
      console.log(this.name + (result ? " logged in" : " failed to log in"))
    }
  }

  console.log("5.")
  askPassword(user.login.bind(user, true), user.login.bind(user, false))

  // 6
  //Напишите в указанном месте конструкцию с методом bind()
  // так, чтобы this внутри функции func всегда указывал на value.
  // из переменной elem.

  const elem = { value: "Привет" }

  function func(surname, name) {
    console.log(this.value + "," + surname + " " + name)
  }

  /// конечно функция теперь потеряется....
  func = func.bind(elem)

  console.log("6.")
  func("Иванов", "Иван")
  func("Петров", "Петр")

  // 7.  Есть функция которая складывает три числа.Выполните каррирование

  function sum(a) {
    return function (b) {
      return function (c) {
        return a + b + c
      }
    }
  }

  console.log(sum(5)(10)(20))

  // 8. Реализовать таймер-функцию используя замыкания. Функция
  // принимает два аргумента начальное значение и значение
  // завершения. Таймер движется назад.При достижении точки
  // завершения в консоль выводится значение таймера и
  // сообщение о завершении работы таймера.

  function timer(startSeconds, endSeconds) {
    let currentTime = startSeconds

    return () => {
      const timerID = setInterval(() => {
        const minutes = Math.floor(currentTime / 60)
        const seconds = currentTime % 60

        // Форматируем в вид MM:SS
        const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`

        console.log(formattedTime)

        if (currentTime <= endSeconds) {
          console.log("Таймер закончил работу")
          clearInterval(timerID)
        }

        currentTime-- // Уменьшаем время на 1 секунду
      }, 1000)
    }
  }

  // Правильное использование:
  const myTimer = timer(60, 0)
  myTimer() // Запускаем таймер

  console.log("\n", "-".repeat(80))
}

export default lessonEight
