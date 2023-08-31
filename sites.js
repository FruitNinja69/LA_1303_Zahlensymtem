import { ConverterFromHexa } from './hexa.js'
import { ConverterFromDezimal } from './dezimal.js'
import { ConverterFromBinaer } from './binaer.js'

const Dropdown = document.getElementById('dropdown')

Dropdown.addEventListener('change', (event) => {
  var getValue = document.getElementById('dropdown').selectedOptions[0].value
  const hexa = document.getElementById('hexadezimal')
  const dezimal = document.getElementById('dezimal')
  const binaer = document.getElementById('binaer')

  if (getValue === 'binaer') {
    hexa.value = ''
    dezimal.value = ''
    binaer.value = ''
    hexa.readOnly = true
    dezimal.readOnly = true
    binaer.readOnly = false
    console.log(getValue)
    document.getElementById(`enter`).onclick = () => {
      ConverterFromBinaer()
    }
  }

  if (getValue === 'dezimal') {
    hexa.value = ''
    dezimal.value = ''
    binaer.value = ''
    dezimal.readOnly = false
    binaer.readOnly = true
    hexa.readOnly = true
    console.log(getValue)
    document.getElementById(`enter`).onclick = () => {
      ConverterFromDezimal()
    }
  }

  if (getValue === 'hexa') {
    hexa.value = ''
    dezimal.value = ''
    binaer.value = ''
    binaer.readOnly = true
    dezimal.readOnly = true
    hexa.readOnly = false
    console.log(getValue)
    document.getElementById(`enter`).onclick = () => {
      ConverterFromHexa()
    }
  }
})

const darkmodebutton = document.getElementsByClassName('darkbutton')
darkmodebutton[0].addEventListener('click', () => {
  document.body.classList.toggle('darkmode')
})
