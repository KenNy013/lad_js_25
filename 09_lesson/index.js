import "console-emojis"

function lessonNine() {
  console.log("-".repeat(80), "\n")

  // 1.  Реализуйте класс Worker (Работник), который будет иметь
  // следующие свойства: name (имя), surname (фамилия), rate
  // (ставка за день работы), days (количество отработанных дней).
  // Также класс должен иметь метод getSalary(), который будет
  // выводить зарплату работника. Зарплата - это произведение
  // (умножение) ставки rate на количество отработанных дней
  // days. И метод getFullName() - имя и фамиля работника.

  // 2. Напишите новый класс Boss, этот класс наследуется от класса
  // Worker и прошлого задания. Появляется новые свойство:
  // workers - количество работников. И зарплата считается по
  // другому: произведение (умножение) ставки rate на количество
  // отработанных дней и на количество работников.

  // 3. Модифицируйте класс Worker из предыдущей задачи
  // следующим образом: для свойства rate и для свойства days
  // сделайте и методы-сеттеры и методы-геттеры для их чтения.

  class Worker {
    #name
    #surname
    #rate
    #days

    constructor(name, surname, rate, days) {
      if (typeof name !== "string" || name.trim() === "") {
        throw new Error("Имя обязательно и не может быть пустой строкой")
      }

      if (typeof surname !== "string" || surname.trim() === "") {
        throw new Error("Фамилия обязательна и не может быть пустой строкой")
      }

      if (typeof rate !== "number" || rate <= 0) {
        throw new Error("Ставка должна быть положительным числом")
      }

      if (typeof days !== "number" || days <= 0 || !Number.isInteger(days)) {
        throw new Error(
          "Количество дней должно быть целым положительным числом"
        )
      }

      this.#name = name
      this.#surname = surname
      this.#rate = rate
      this.#days = days
    }

    getSalary() {
      return this.#rate * this.#days
    }

    getFullName() {
      return `${this.#surname} ${this.#name}`
    }

    get getRate() {
      return this.#rate
    }

    get getDays() {
      return this.#days
    }

    set setRate(rate) {
      if (typeof rate !== "number" || rate <= 0) {
        throw new Error("Ставка должна быть положительным числом")
      }

      this.#rate = rate
    }

    set setDays(days) {
      if (typeof days !== "number" || days <= 0 || !Number.isInteger(days)) {
        throw new Error(
          "Количество дней должно быть целым положительным числом"
        )
      }
      this.#days = days
    }
  }

  const worker1 = new Worker("Геральд", "Ривийский", 31, 99)
  console.log(worker1.getFullName())
  console.log(worker1.getSalary())

  console.log("Rate: ", worker1.getRate)
  console.log("Days: ", worker1.getDays)

  worker1.setDays = 28
  worker1.setRate = 101

  console.log("Rate: ", worker1.getRate)
  console.log("Days: ", worker1.getDays)

  const worker2 = new Worker("Йеннифэр", "Из Венгерберга", 31, 119)
  const worker3 = new Worker("Морвран", "Воорхис", 31, 110)

  class Boss extends Worker {
    #workers = []

    constructor(workers, ...args) {
      if (!Array.isArray(workers)) {
        throw new Error("Workers должен быть массивом")
      }

      if (!workers.every((worker) => worker instanceof Worker)) {
        throw new Error("Все workers должны быть экземплярами класса Worker")
      }

      super(...args)
      this.#workers = [...workers]
    }

    getSalary() {
      return (
        super.getSalary() *
        this.#workers.reduce((currentValue, worker) => {
          return currentValue + worker.getSalary()
        }, 0)
      )
    }
  }

  const boss1 = new Boss(
    [worker1, worker2, worker3],
    "Эмгыр",
    "вар Эмрейс",
    31,
    9999
  )
  console.log(boss1.getSalary())

  // 4. Реализуйте класс MyString, который будет иметь следующие
  // методы: метод reverse(), который параметром принимает
  // строку, а возвращает ее в перевернутом виде, метод ucFirst(),
  // который параметром принимает строку, а возвращает эту же
  // строку, сделав ее первую букву заглавной и метод ucWords,
  // который принимает строку и делает заглавной первую букву
  // каждого слова этой строки.

  class MyString extends String {
    reverse() {
      return this.split("").reverse().join("")
    }

    ucFirst() {
      return this.charAt(0).toUpperCase() + this.slice(1)
    }

    ucWords() {
      return this.split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    }
  }

  const str = new MyString("вперед, плотва!")
  console.log(str.reverse())
  console.log(str.ucFirst())
  console.log(str.ucWords())

  // 5. Реализуйте класс Validator, который будет проверять строки. К
  // примеру, у него будет метод isEmail параметром принимает
  // строку и проверяет, является ли она корректным емейлом или
  // нет. Если является - возвращает true, если не является - то
  // false. Кроме того, класс будет иметь следующие методы: метод
  // isDomain для проверки домена, метод isDate для проверки
  // даты и метод isPhone для проверки телефона.

  class Validator {
    static isEmail(email) {
      if (typeof email !== "string" || email.trim() === "") {
        return false
      }
      return /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email)
    }

    static isDomain(domain) {
      if (typeof domain !== "string" || domain.trim() === "") {
        return false
      }

      return /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(domain.trim())
    }

    static isDate(date) {
      if (typeof date !== "string" || date.trim() === "") {
        return false
      }

      return /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(date.trim())
    }

    static isPhone(phone) {
      if (typeof phone !== "string" || phone.trim() === "") {
        return false
      }

      return /^(8|\+7)(\s|\(|-)?(\d{3})(\s|\)|-)?(\d{3})(\s|-)?(\d{2})(\s|-)?(\d{2})$/.test(
        phone.trim()
      )
    }
  }

  const isValidEmail = Validator.isEmail("muxreev.dan@yandex.ru")
  const isValidDomain = Validator.isDomain("proglib.com")
  const isValidPhone = Validator.isPhone("89306724412")
  const isValidDate = Validator.isDate("2030-12-30")

  console.log(isValidEmail)
  console.log(isValidDomain)
  console.log(isValidPhone)
  console.log(isValidDate)

  //6. Реализуйте класс Student (Студент), который будет
  // наследовать от класса User, подобно тому, как это сделано в
  // теоретической части урока. Этот класс должен иметь
  // следующие свойства: name (имя, наследуется от User),
  // surname (фамилия, наследуется от User), year (год
  // поступления в вуз). Класс должен иметь метод getFullName()
  // (наследуется от User), с помощью которого можно вывести
  // одновременно имя и фамилию студента. Также класс должен
  // иметь метод getCourse(), который будет выводить текущий
  // курс студента (от 1 до 5). Курс вычисляется так: нужно от
  // текущего года отнять год поступления в вуз. Текущий год
  // получите самостоятельно с помощью new Date.

  // Для защиты:)

  class User {
    #name
    #surname

    constructor(name, surname) {
      if (typeof name !== "string" || name.trim() === "") {
        throw new Error("Имя обязательно и не может быть пустой строкой")
      }

      if (typeof surname !== "string" || surname.trim() === "") {
        throw new Error("Фамилия обязательна и не может быть пустой строкой")
      }

      this.#name = name
      this.#surname = surname

      // Замораживаем объект
      Object.freeze(this)
    }

    getFullName() {
      return `${this.#surname} ${this.#name}`
    }
  }

  class Student extends User {
    #year

    constructor(name, surname, year) {
      super(name, surname)

      if (!this.#isValidDate(year)) {
        throw new Error("Некорректная дата!")
      }

      this.#year = new Date(year)

      if (this.#isFutureDate()) {
        throw new Error("Дата не может быть больше!")
      }
    }

    #isFutureDate() {
      return this.#year > new Date()
    }

    #isValidDate(date) {
      return /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(date.trim())
    }

    getCource() {
      const now = new Date()
      const currentYear = now.getFullYear()
      const entryYear = this.#year.getFullYear()
      let course = currentYear - entryYear

      if (now.getMonth() > 8) {
        course = course + 1
      }

      return course <= 5 > 0 ? course : "Окончил обучение"
    }
  }

  // Для проверки
  const user = new Student("Даниил", "Мухреев", "2024-11-13")

  console.log(user.getFullName())
  console.log(user.getCource())

  console.log("\n", "-".repeat(80))
}

export default lessonNine
