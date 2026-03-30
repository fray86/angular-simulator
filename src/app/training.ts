//6. Создать интерфейс, который описывает юзера

interface IUser {
  name: string;
  height: number;
  weight: number;
  married?: boolean;
}

//7. Создать интерфейс, который расширяется интерфейсом User

interface IMan extends IUser {
  favoriteGame: string;
  mmr: number;
}

//4. Создать переменную uploadStatus

let uploadStatus: "loading" | "success" | "error" = "loading";

//5. Создать переменную textFormat

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

//8. Создать функцию, которая принимает строку и вариант,  как именно форматировать строку

function formatText (text: string, textFormat: string) {
  if (textFormat === 'uppercase') {
    return text.toUpperCase();
  } if (textFormat === 'lowercase') {
    return text.toLowerCase()
  } if (textFormat === 'capitalize') {
     return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }
  return text;
}

console.log(formatText('ЗЯБЛИК', 'lowercase'))

//3. Создать функцию, которая принимает 2 числа и возвращает их сумму.

function sumNumbers(n1: number, n2: number): number {
  return n1 + n2;
}

//9. Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа

function textWithoutSimbol(text: string, simbol: string) {
  return text.replaceAll(simbol, "")
}

console.log(textWithoutSimbol("хахаха", "х"));

//10. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров

const users: IUser[] = [
   {
    name: 'Боярский',
    height: 181,
    weight: 77
  },
  {
    name: 'Газманов',
    height: 180,
    weight: 76
  },
  {
    name: 'Безруков',
    height: 179,
    weight: 75
  },
 ]

 let legend = users.filter(user => user.height === 179);
 console.log(legend)