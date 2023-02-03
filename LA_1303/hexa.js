export function ConverterFromHexa() {
  var hexaValue = document.getElementById('hexadezimal').value
  let dezimal = 0
  // Hexa input wird in Array unterteilt
  let hexa = Array.from(String(hexaValue))
    // es verwandelt jeder Hexainput in Zahlen
  for (let i = 0; i < hexa.length; i++) {
    if (hexa[i] == 'a') {
      hexa[i] = 10
    } else if (hexa[i] == 'b') {
      hexa[i] = 11
    } else if (hexa[i] == 'c') {
      hexa[i] = 12
    } else if (hexa[i] == 'd') {
      hexa[i] = 13
    } else if (hexa[i] == 'e') {
      hexa[i] = 14
    } else if (hexa[i] == 'f') {
      hexa[i] = 15
    }
    hexa[i] = parseInt(hexa[i])
  }
  console.log(hexa)
  let hexacounter = hexa.length - 1

  //Umwandlung Hexa in dezimal
  for (let i = 0; i < hexa.length; i++) {
    let ausrechner = 16 ** i
    dezimal = dezimal + hexa[hexacounter] * ausrechner
    console.log(dezimal)
    hexacounter--
  }
  document.getElementById('dezimal').value = dezimal

  const binaer = []
  let stringBinaer = ''
  // verwandelt die Binär Eingabe in Binär format
  do {
    const rechner = dezimal % 2
    if (rechner === 1) {
      binaer.push(1)
      dezimal = dezimal / 2 - 0.5
    } else {
      binaer.push(0)
      console.log(binaer)
      dezimal = dezimal / 2
    }
  } while (dezimal != 0)
  let counterbinaer = binaer.length - 1
  //Umwandlung Dezimal in Binär
  for (let i = 0; i < binaer.length; i++) {
    stringBinaer = '' + stringBinaer + binaer[counterbinaer]
    counterbinaer--
  }

  document.getElementById('binaer').value = stringBinaer
}
