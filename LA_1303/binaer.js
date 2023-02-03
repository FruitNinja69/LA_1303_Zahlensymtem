export function ConverterFromBinaer() {
  console.log('Binaerconverter')
  var binaerValue = document.getElementById('binaer').value
  let dezimal = 0

  const binaer = Array.from(String(binaerValue), Number)
  let counter = binaer.length - 1
  //verwandlung Binär in Dezimal
  for (let i = 0; i < binaer.length; i++) {
    let ausrechner = 2 ** i
    if (binaer[counter] == 1) {
      dezimal = dezimal + ausrechner
    }
    counter--
  }
  console.log(dezimal)
  document.getElementById('dezimal').value = dezimal

  const hexa = []

  let checker = binaer.length % 4
  // verwandelt die Binär Eingabe in Binär format
  while (checker != 0) {
    checker = binaer.length % 4
    if (checker == 0) {
      break
    }
    binaer.unshift(0)
  }

  console.log(binaer)
  let split = binaer.length / 4
  console.log(split)
  let counter1 = 0
  let splitBinaer = ''
  //verwandelt Binär in Dezimal
  for (let i = 0; i < split; i++) {
    for (let i = 0; i < 4; i++) {
      splitBinaer = splitBinaer + binaer[counter1]
      counter1++
    }
    console.log(splitBinaer)
    if (splitBinaer == '0000') {
      hexa.push('0')
    }
    if (splitBinaer == '0001') {
      hexa.push('1')
    }
    if (splitBinaer == '0010') {
      hexa.push('2')
    }
    if (splitBinaer == '0011') {
      hexa.push('3')
    }
    if (splitBinaer == '0100') {
      hexa.push('4')
    }
    if (splitBinaer == '0101') {
      hexa.push('5')
    }
    if (splitBinaer == '0110') {
      hexa.push('6')
    }
    if (splitBinaer == '0111') {
      hexa.push('7')
    }
    if (splitBinaer == '1000') {
      hexa.push('8')
    }
    if (splitBinaer == '1001') {
      hexa.push('9')
    }
    if (splitBinaer == '1010') {
      hexa.push('a')
    }
    if (splitBinaer == '1011') {
      hexa.push('b')
    }
    if (splitBinaer == '1100') {
      hexa.push('c')
    }
    if (splitBinaer == '1101') {
      hexa.push('d')
    }
    if (splitBinaer == '1110') {
      hexa.push('e')
    }
    if (splitBinaer == '1111') {
      hexa.push('f')
    }
    splitBinaer = ''
  }

  hexa.forEach((number) => {
    document.getElementById('hexadezimal').value += number.toUpperCase()
  })
}
