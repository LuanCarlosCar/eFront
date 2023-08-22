export function getFiveNumberCaption(valorMaximo: number) {
    const numbers = [];

    for (let i = 0; i <= 4; i++) {
      const value = (valorMaximo / 4) * i;
      numbers.push(value);
    }

    return numbers.reverse();
  }

  export function getValueH(currentValue: number, highestValue: number) {
    return (currentValue * 12) / highestValue;
  }

  export function getHighestValue(list: {value: number}[]){
   return Math.max(...list.map(({ value }) => (value)));
  }