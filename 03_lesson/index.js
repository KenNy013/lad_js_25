/* eslint-disable max-len */
/* eslint-disable quotes */
import "console-emojis"
import chalk from "chalk"

/// Урок 2:
function lessonThree() {
  console.log("-".repeat(80), "\n")

  /// 1
  console.one(
    chalk.italic(
      ` Задание. Дайте ответ, что будет в результате выполнения данных ниже примеров.
С объяснением, почему это так.\n`
    )
  )

  ///1.1 => true
  console.question(
    '1.1 "кот" > "код"',
    chalk.gray(
      " => \nОтвет | true, так как 'т-1090' код символа выше 'д-1076'\n"
    )
  )

  ///1.2 => '24'
  console.question(
    '1.2 "2" + 2 * "2"',
    chalk.gray(
      "=> \nОтвет | '24' , сначала по умножение (больше приоретет у оператора) получается 4, затем конкатенация строк и получается '24' \n"
    )
  )

  ///1.3 => true
  console.question(
    "1.3 undefined == null",
    chalk.gray("=> \nОтвет | true,  один из 'прикольных' исключений в js 😬\n")
  )

  ///1.4 => false
  console.question(
    "1.4 undefined != null",
    chalk.gray(
      "=>\nОтвет | false,  undefined == null дает true, то undefined != null даст false\n"
    )
  )

  ///1.5 => false
  console.question(
    "1.5 null == 0",
    chalk.gray(
      "=> \nОтвет | false, null при нестрогом сравнении равен только undefined, а с числами/строками — нет😵 \n"
    )
  )

  ///1.6 => false
  console.question(
    '1.6 2 > "3"',
    chalk.gray(
      "=> \nОтвет | false, при разных типах приводит к числу поэтому '3' => 3, а 3 > 2\n"
    )
  )

  ///1.7 => 1
  console.question(
    '1.7 null - false + true"',
    chalk.gray(
      "=> \nОтвет | 1, потому что: null => 0 - false => 0 = 0 + true => 1 = 1. null при преобразование в число = 0\n"
    )
  )

  ///1.8 => NaN
  console.question(
    '1.8 1 / "l"',
    chalk.gray(
      "=> \nОтвет | NaN, при приведение 'l' в число будет NaN, а 1/NaN все равно будет NaN\n"
    )
  )

  ///1.9 => 6
  console.question(
    '1.9 "2" * "3"',
    chalk.gray(
      "=> \nОтвет | 6, '*' преобразует операнты в числа, а тут они без проблем преобразуются 🤭\n"
    )
  )

  ///1.10 => "9O"
  console.question(
    '1.10 4 + 5 + "O"',
    chalk.gray(
      "=> \nОтвет | '9O', 4 + 5 = 9, затем конкатенация происходит, потому что второй оперант string \n"
    )
  )

  ///1.11 => "l45"
  console.question(
    '1.11 "l" + 4 + 5',
    chalk.gray("=> \nОтвет | 'l45',  конкатенация строк \n")
  )

  ///1.12 => 2
  console.question(
    '1.12 "4"- 2',
    chalk.gray(
      "=> \nОтвет | 2, '4', преобразуется в число при операторе '-'  \n"
    )
  )

  ///1.13 => NaN
  console.question(
    '1.13 "4"-"4x"',
    chalk.gray(
      "=> \nОтвет | NaN, '4px', потому что '4x' нельзя преобразовать в число \n"
    )
  )

  ///1.14 => true
  console.question(
    '1.14 "23" == 23',
    chalk.gray(
      "=> \nОтвет | true, идет преобразоване '23' к числу при нестрогом сравнение \n"
    )
  )

  ///1.15 => false
  console.question(
    "1.15 null == false",
    chalk.gray(
      "=> \nОтвет | false, опять же прикольное исключение в js, null == undefined \n"
    )
  )

  ///1.16 => -Infinity
  console.question(
    '1.16 "-4 "/ 0 + 1"',
    chalk.gray(
      "=> \nОтвет | -Infinity, потому что: -4 / 0 = -Infinity + 1 = -Infinity \n"
    )
  )

  ///1.17 => 1
  console.question(
    "1.17 null + 1",
    chalk.gray("=> \nОтвет | 1, null => 0 при преобразоване в число \n")
  )

  ///1.18 => NaN
  console.question(
    "1.18 undefined + null",
    chalk.gray("=> \nОтвет | NaN, undefined => NaN \n")
  )

  ///1.19 => false
  console.question(
    '1.18 1 === "1"',
    chalk.gray(
      "=> \nОтвет | false, строгое сравнение по типам number и string \n"
    )
  )

  ///1.20 => false
  console.question(
    '1.20 "2" > 10',
    chalk.gray("=> \nОтвет | false, '2' преобразуется тут в 2, а 2 < 10 \n")
  )

  ///1.21 => false
  console.question(
    "1.21 NaN == undefined",
    chalk.gray(
      "=> \nОтвет | false,  не равен ни одному другому значению, даже самому себе \n"
    )
  )

  /// 2
  console.two(
    chalk.italic(" Задание.Что будет выведено в консоль и почему? \n")
  )

  ///2.1 => "53"
  console.question(
    '2.1 console.log("5" + 3)',
    chalk.gray(
      "=> \nОтвет | '53', потому что '+' со строкой преобразует число 3 в строку '3'\n"
    )
  )

  ///2.2 => 8
  console.question(
    '2.2 console.log("10"- 2)',
    chalk.gray(
      "=> \nОтвет | 8, потому что '-' со строкой преобразует '10' в число 10 \n"
    )
  )

  ///2.3 => 15
  console.question(
    '2.3 console.log("5" * 3);',
    chalk.gray(
      "=> \nОтвет | 15, потому что '*' со строкой преобразует '5' в число 5 \n"
    )
  )

  ///2.4 => 5
  console.question(
    '2.4 console.log("20" / 4)',
    chalk.gray(
      "=> \nОтвет | 5, потому что '/' со строкой преобразует '20' в число 20 \n"
    )
  )

  ///2.5 => 2
  console.question(
    '2.5 console.log("17" % 5)',
    chalk.gray(
      "=> \nОтвет | 2, потому что '%' со строкой преобразует '17' в число 17 \n"
    )
  )

  ///2.6 => 1,23
  console.question(
    "2.6 console.log([1, 2] + 3)",
    chalk.gray(
      "=> \nОтвет | 1,23, массив преобразуется в строку и происходит конкатенация \n"
    )
  )

  ///2.7 => 8
  console.question(
    '2.7 console.log("2" ** 3)',
    chalk.gray(
      "=> \nОтвет | 8, потому что '**' со строкой преобразует '2' в число 2 \n"
    )
  )

  ///2.8 => 1
  console.question(
    "2.8 console.log(+true)",
    chalk.gray("=> \nОтвет | 1, явное пробразование в число true = 1 \n")
  )

  ///2.9 => 0
  console.question(
    "2.9 console.log(+false)",
    chalk.gray("=> \nОтвет | 0, явное пробразование в число false = 0 \n")
  )

  ///2.10 => 5
  console.question(
    "2.10 console.log(null + 5)",
    chalk.gray(
      "=> \nОтвет | 5, null в данном случае преобразуется в число а null = 0 \n"
    )
  )

  ///2.11 => NaN
  console.question(
    "2.11 console.log(undefined + 5)",
    chalk.gray(
      "=> \nОтвет | NaN, undefined в данном случае преобразуется в число а undefined = NaN \n"
    )
  )

  ///2.12 => "5"
  console.question(
    "2.12 console.log('' + 5)",
    chalk.gray(
      "=> \nОтвет | '5', потому что '+' со строкой преобразует число 5 в строку '5' и происходит конкатенация \n"
    )
  )

  ///2.13 => -5
  console.question(
    "2.13 console.log('' - 5)",
    chalk.gray(
      "=> \nОтвет | -5, потому что '-' со строкой преобразует строку '' в число 0 \n"
    )
  )

  ///2.14 => 0
  console.question(
    "2.14 console.log('' * 5)",
    chalk.gray(
      "=> \nОтвет | 0, потому что '*' со строкой преобразует строку '' в число 0 \n"
    )
  )

  ///2.15 => 7
  console.question(
    "2.15 console.log([10] - 3)",
    chalk.gray(
      "=> \nОтвет | 0, потому что '-' с объектом преобразует объект  [10] в число 10 \n"
    )
  )

  ///2.16 => NaN
  console.question(
    "2.16 console.log([1, 2] - 3)",
    chalk.gray(
      "=> \nОтвет | NaN, потому что '-' с объектом преобразует объект  [1, 2] в cтроку 1,2 -> NaN \n"
    )
  )

  ///2.17 => [object Object]1
  console.question(
    "2.17 console.log({} + 1)",
    chalk.gray(
      "=> \nОтвет | [object Object]1,  объект {} → строка '[object Object]' \n"
    )
  )

  ///2.18 => 103
  console.question(
    "2.18 console.log('10' + 5 - 2)",
    chalk.gray(
      "=> \nОтвет | 103,  сначала конкатенация, затем строка '105' преобразует в число при операторе '-' \n"
    )
  )

  ///2.19 => 11
  console.question(
    "2.19 console.log('10'- 2 + 3)",
    chalk.gray(
      "=> \nОтвет | 11,  строка '10' преобразует в число при операторе '-' \n"
    )
  )

  console.log("\n", "-".repeat(80))
}

export default lessonThree
