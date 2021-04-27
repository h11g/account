// import _ from 'lodash'
import { cube } from './math.js'
import './style.css'

function getComponent () {
  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div')
    element.innerHTML = _.join([
      'Hello webpack!',
      '5 cubed is equal to ' + cube(5)
    ], ' ')

    return element
  })
}

// function component () {
//   const element = document.createElement('pre')

//   element.innerHTML = _.join([
//     'Hello webpack!',
//     '5 cubed is equal to ' + cube(5)
//   ])

//   return element
// }

// document.body.appendChild(component())
getComponent().then((component) => {
  document.body.appendChild(component)
})
