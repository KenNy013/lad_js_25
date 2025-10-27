/* eslint-disable curly */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-expressions */
import "console-emojis"

function lessonFive() {
  console.log("-".repeat(80), "\n")

  //  1 Сделайте функцию, которая возвращает квадрат числа. Число
  // передается параметром

  const powCustom = (number) => number ** 2
  console.log(powCustom(10))

  //2. Сделайте функцию, которая возвращает сумму двух чисел.

  const sumCustom = (num1, num2) => num1 + num2
  console.log(sumCustom(10, 10))

  //3. Сделайте функцию, которая отнимает от первого числа второе
  // и делит на третье.

  const calculationNumber = (num1, num2, num3) => (num1 - num2) / num3
  console.log(calculationNumber(20, 10, 5))

  // 4. Сделайте функцию, которая принимает параметром число от 1
  // до 7, а возвращает день недели на русском языке.

  function getDayFromNum(num) {
    if (
      !(
        typeof num === "number" &&
        Number.isInteger(Number(num)) &&
        !(num < 1 || num > 7)
      )
    ) {
      return "Error | Month is not value"
    }

    const array = ["пн", "вт", "ср", "чт", "пт", "сб", "вск"]
    return array[num - 1]
  }

  console.log(getDayFromNum(7))

  //    5. Сделайте функцию, которая параметрами принимает 2 числа.
  // Если эти числа равны - пусть функция вернет true, а если не
  // равны - false.

  function isCompareNum(num1, num2) {
    if (
      !(
        typeof num1 === "number" &&
        Number.isInteger(Number(num1)) &&
        typeof num2 === "number" &&
        Number.isInteger(Number(num2))
      )
    ) {
      return "Error | Month is not value"
    }

    return num1 === num2
  }

  console.log(isCompareNum(5, 5))

  // 6. Сделайте функцию, которая параметрами принимает 2 числа.
  // Если их сумма больше 10 - пусть вернет true, а если нет то -
  // false.

  function isSumOver10(num1, num2) {
    if (
      !(
        typeof num1 === "number" &&
        Number.isInteger(Number(num1)) &&
        typeof num2 === "number" &&
        Number.isInteger(Number(num2))
      )
    ) {
      return "Error | Month is not value"
    }

    return num1 + num2 > 10
  }

  console.log(isSumOver10(5, 10))

  // 7. Сделайте функцию, которая параметром принимает число и
  // проверяет - отрицательное оно или нет. Если отрицательное -
  // пусть функция вернет true, а если нет - false.

  function isNegativeNumber(num) {
    if (!(typeof num === "number" && Number.isInteger(Number(num)))) {
      return "Error | Param is not value"
    }

    return num < 0
  }

  console.log(isNegativeNumber(-19))

  // 7.Сделайте функцию isNumberInRange, которая параметром
  // принимает число и проверяет, что оно больше нуля и меньше
  // 10. Если это так - пусть функция возвращает true, если не так -
  // false.

  function isNumberInRange(num) {
    if (!(typeof num === "number" && Number.isInteger(Number(num)))) {
      return "Error | Param is not value"
    }

    return num > 0 && num < 10
  }

  console.log(isNumberInRange(-19))
  // 8.Сделайте функцию getDigitsSum (digit - это цифра), которая
  // параметром принимает целое число и возвращает сумму его
  // цифр.

  function getDigitsSum(num) {
    if (!(typeof num === "number" && Number.isInteger(Number(num)))) {
      return "Error | Param is not value"
    }

    return String(num)
      .split("")
      .reduce((sum, element) => sum + Number(element), 0)
  }

  console.log(getDigitsSum(333))

  // 10. *Найдите все года от 1 до 2020, сумма цифр которых равна
  // 13. Для этого используйте вспомогательную функцию
  // getDigitsSum из предыдущей задачи.

  function findNumberByCallaback(num, range, callback) {
    if (
      !(
        typeof num === "number" &&
        Number.isInteger(Number(num)) &&
        typeof range === "number" &&
        Number.isInteger(Number(range)) &&
        typeof callback === "function"
      )
    ) {
      return "Error | Param is not value"
    }
    const result = []

    for (let index = 1; index < range; index++) {
      if (callback(index) === num) {
        result.push(index)
      }
    }

    return result
  }

  console.log(findNumberByCallaback(13, 2020, getDigitsSum))

  //11. Сделайте функцию isEven() (even - это четный), которая
  // параметром принимает целое число и проверяет: четное оно
  // или нет. Если четное - пусть функция возвращает true, если
  // нечетное - false

  const isEvent = (num) => num % 2 === 0

  console.log(isEvent(21))

  //12. Дано число. Сложите его цифры. Если сумма получилась
  // более 9-ти, опять сложите его цифры. И так, пока сумма не
  // станет однозначным числом (9 и менее). Можно использовать
  // функцию getDigitsSum из 9 задачи

  function getSingleDigitSumRecursive(num) {
    if (num <= 9) return num
    return getSingleDigitSumRecursive(getDigitsSum(num))
  }

  console.log(getSingleDigitSumRecursive(99))

  //13.  Напишите стрелочную функцию, которая будет
  // возвращать true если строка является палиндромом и false в
  // противном случае.

  const isPalindrome = (str1, str2) =>
    String(str1).toLowerCase() === String(str2).toLowerCase()

  console.log(isPalindrome("КАК", "КАК"))

  console.log("-".repeat(80), "\n")
}

export default lessonFive
