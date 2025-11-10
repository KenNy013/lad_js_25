/* eslint-disable curly */
/* eslint-disable max-len */
import "console-emojis"

function lessonSeven() {
  console.log("-".repeat(80), "\n")

  // 1 Используя метод map() напишите код, который получает из
  // массива строк новый массив, содержащий их длины.

  function getLengthWithArrStr(arr) {
    if (
      !Array.isArray(arr) ||
      arr.length === 0 ||
      !arr.every((elem) => typeof elem === "string")
    ) {
      return "Error| Not valid"
    }

    return arr.map((elem) => elem.length)
  }

  console.log(
    "1.",
    getLengthWithArrStr(
      // eslint-disable-next-line quotes
      '"Раньше все было проще: чудовища злые, люди добрые. А теперь… Перемешалось как-то все…'.split(
        " "
      )
    )
  )

  // 2  Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17,19].
  // Использую метод reduce() напишите функцию
  // currentSums(numbers), которая возвращает новый массив из
  // такого же числа элементов, в котором на каждой позиции
  // будет находиться сумма элементов массива numbers до этой
  // позиции включительно.

  function currentSumPosition(numbers) {
    if (
      !Array.isArray(numbers) ||
      numbers.length === 0 ||
      !numbers.every((elem) => typeof elem === "number")
    ) {
      return "Error| Not valid"
    }

    return numbers.reduce((acc, currentValue, index, array) => {
      if (index === 0) {
        acc.push(currentValue)
      } else {
        acc.push(
          array.reduce((acc2, currentValue2, index2) => {
            if (index >= index2) {
              acc2 += currentValue2
            }
            return acc2
          }, 0)
        )
      }
      return acc
    }, [])
  }

  console.log("2.", currentSumPosition([2, 3, 5, 7, 11, 13, 17, 19]))

  //3 Напишите код, который получает из массива чисел новый
  // массив, содержащий пары чисел, которые в сумме должны
  // быть равны семи: (0:7), (1:6) и т.д.

  function getCouplesEqual7(numbers) {
    if (
      !Array.isArray(numbers) ||
      numbers.length === 0 ||
      !numbers.every((elem) => typeof elem === "number")
    ) {
      return "Error| Not valid"
    }

    const couples = []
    const positionUsing = new Set()

    for (let i = 0; i < numbers.length; i++) {
      if (positionUsing.has(i)) continue
      for (let j = 0; j < numbers.length; j++) {
        if (positionUsing.has(j)) continue
        if (numbers[i] + numbers[j] === 7) {
          couples.push([i, j])
          positionUsing.add(i)
          positionUsing.add(j)
          break
        }
      }
    }

    return couples.map((value) => "(" + value.join(":") + ")")
  }

  console.log(
    "3.",
    getCouplesEqual7([3, 4, 7, 0, 2, 3, 6, 7, 8, 4, 1, 9, 11, 4])
  )

  // 4 Напишите код, создающий массив, который будет состоять из
  // первых букв слов строки str.

  function firstLetterInStr(str) {
    if (typeof str !== "string" || str.length === 0) {
      return "Err | Str is not valid"
    }

    return str.split(" ").map((letter) => letter[0])
  }

  console.log(
    "4.",
    firstLetterInStr(
      "Раньше все было проще: чудовища злые, люди добрые. А теперь… Перемешалось как-то все…"
    )
  )

  // 5 Напишите код, создающий массив, который будет состоять из
  // строк, состоящих из предыдущего, текущего и следующего
  // символа строки str.

  function makeCharTriads(str) {
    if (typeof str !== "string" || str.length === 0) {
      return "Err | Str is not valid"
    }

    return str.split("").reduce((acc, word, index, arr) => {
      acc.push(`${arr[index - 1] || ""}${word}${arr[index + 1] || ""}`)
      return acc
    }, [])
  }
  console.log("5.", makeCharTriads("abcde"))

  // 6 Напишите код, преобразующий массив цифр, которые
  // располагаются неупорядоченно, в массив цифр
  // расположенных по убыванию их значений.

  function sortArraysNumber(numbers) {
    if (
      !Array.isArray(numbers) ||
      numbers.length === 0 ||
      !numbers.every((elem) => typeof elem === "number")
    ) {
      return "Error| Not valid"
    }

    return numbers.sort((a, b) => b - a)
  }

  console.log(
    "6.",
    sortArraysNumber([3, 4, 7, 0, 2, 3, 6, 7, 8, 4, 1, 9, 11, 4])
  )

  // 7. Напишите код, объединяющий три массива цифр, и
  // располагающий цифры, в полученном массиве, в порядке
  // убывания их значений через пробел.

  function concatAndSortDescending(...arrays) {
    return arrays.flat().sort((a, b) => a - b)
  }

  console.log("7.", concatAndSortDescending([1, 5, 9], [8, 0, 2], [9, 8, 7]))

  // 8 Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5],[6]].
  // Найдите сумму элементов этого массива. Массив, конечно
  // же, может быть произвольным.

  function getNestedArraySum(numbers) {
    if (numbers.some((elem) => Array.isArray(elem))) {
      return getNestedArraySum(numbers.flat(1))
    } else {
      return numbers.reduce((acc, num) => acc + num, 0)
    }
  }

  console.log("8.", getNestedArraySum([1, [1, 3, [5, 7, 3]]]))

  // 9. Дан массив с числами. Не используя метода reverse
  // переверните его элементы в обратном порядке.

  function revertNumberArray(numbers) {
    if (
      !Array.isArray(numbers) ||
      numbers.length === 0 ||
      !numbers.every((elem) => typeof elem === "number")
    ) {
      return "Error| Not valid"
    }

    return numbers.reduce((acc, _, index, array) => {
      acc.push(array[array.length - 1 - index])
      return acc
    }, [])
  }

  console.log("9.", revertNumberArray([2, 3, 5, 7, 11, 13, 17, 19]))

  // 10 Дан массив с числами. Узнайте сколько элементов с начала
  // массива надо сложить, чтобы в сумме получилось больше 10-ти.

  function getInfoBySumEqual10(numbers) {
    if (
      !Array.isArray(numbers) ||
      numbers.length === 0 ||
      !numbers.every((elem) => typeof elem === "number")
    ) {
      return "Error| Not valid"
    }

    return numbers.reduce(
      (acc, value) => {
        if (acc.total > 10) {
          return acc
        }

        return { count: acc.count + 1, total: acc.total + value }
      },
      {
        count: 0,
        total: 0
      }
    ).count
  }

  console.log("10.", getInfoBySumEqual10([2, 3, 5, 7, 11, 13, 17, 19]))

  // 11 Напишите функцию arrayFill, которая будет заполнять
  // массив заданными значениями. Первым параметром функция
  // принимает значение, которым заполнять массив, а вторым -
  // сколько элементов должно быть в массиве. Пример:
  // arrayFill('x', 5) сделает массив ['x','x','x','x','x'].

  function arrayFill(elementRepeat, number) {
    if (!elementRepeat || typeof number !== "number") {
      return "Err | Not value params or param"
    }

    return new Array(number).fill(elementRepeat)
  }

  console.log(arrayFill("x", 5))

  console.log("\n", "-".repeat(80))
}

export default lessonSeven
