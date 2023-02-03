export function ConverterFromDezimal() {
  console.log('dezimalconverter')
  var dezimalValue = document.getElementById('dezimal').value
  const binaer = []
  let stringBinaer = ''
  // verwandelt die Dezimal Eingabe in Binär in der falschen Reihnfolge(Rückwärts)
  do {
    const rechner = dezimalValue % 2
    if (rechner === 1) {
      binaer.push(1)
      console.log(binaer)
      dezimalValue = dezimalValue / 2 - 0.5
      console.log(dezimalValue)
    } else {
      binaer.push(0)
      console.log(binaer)
      dezimalValue = dezimalValue / 2
      console.log(dezimalValue)
    }
  } while (dezimalValue != 0)
  let counter = binaer.length - 1
  //korrigiert die Reihenfolge
  for (let i = 0; i < binaer.length; i++) {
    stringBinaer = '' + stringBinaer + binaer[counter]
    counter--
  }

  document.getElementById('binaer').value = stringBinaer

  let hexa = []

  var binaerValue = document.getElementById('binaer').value

  const binaerforHexa = Array.from(String(binaerValue))

  let checker = binaerforHexa.length % 4
  // verwandelt die Binär Eingabe in Binär format
  while (checker != 0) {
    checker = binaerforHexa.length % 4
    if (checker == 0) {
      break
    }
    binaerforHexa.unshift(0)
  }

  console.log(binaerforHexa)
  let split = binaerforHexa.length / 4
  console.log(split)
  let counter1 = 0
  let splitBinaerforHexa = ''
  //verwandelt Binär in Dezimal
  for (let i = 0; i < split; i++) {
    for (let i = 0; i < 4; i++) {
      splitBinaerforHexa = splitBinaerforHexa + binaerforHexa[counter1]
      counter1++
    }
    console.log(splitBinaerforHexa)
    if (splitBinaerforHexa == '0000') {
      hexa.push('0')
    }
    if (splitBinaerforHexa == '0001') {
      hexa.push('1')
    }
    if (splitBinaerforHexa == '0010') {
      hexa.push('2')
    }
    if (splitBinaerforHexa == '0011') {
      hexa.push('3')
    }
    if (splitBinaerforHexa == '0100') {
      hexa.push('4')
    }
    if (splitBinaerforHexa == '0101') {
      hexa.push('5')
    }
    if (splitBinaerforHexa == '0110') {
      hexa.push('6')
    }
    if (splitBinaerforHexa == '0111') {
      hexa.push('7')
    }
    if (splitBinaerforHexa == '1000') {
      hexa.push('8')
    }
    if (splitBinaerforHexa == '1001') {
      hexa.push('9')
    }
    if (splitBinaerforHexa == '1010') {
      hexa.push('a')
    }
    if (splitBinaerforHexa == '1011') {
      hexa.push('b')
    }
    if (splitBinaerforHexa == '1100') {
      hexa.push('c')
    }
    if (splitBinaerforHexa == '1101') {
      hexa.push('d')
    }
    if (splitBinaerforHexa == '1110') {
      hexa.push('e')
    }
    if (splitBinaerforHexa == '1111') {
      hexa.push('f')
    }
    splitBinaerforHexa = ''
  }
  console.log(hexa)
  hexa.forEach((number) => {
    document.getElementById('hexadezimal').value += number.toUpperCase()
  })
}
