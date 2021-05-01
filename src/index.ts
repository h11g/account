import * as _ from 'lodash'
import { cube } from './math.js'
import './style.css'
import './index.less'
import Print from './print'
import Icon from './webpack-icon.svg'

// function getComponent () {
//   return import('lodash').then(({ default: _ }) => {
//     const element = document.createElement('div')
//     element.innerHTML = _.join([
//       'Hello webpack!',
//       '5 cubed is equal to ' + cube(5)
//     ], ' ')

//     return element
//   })
// }

function component() {
  const element = document.createElement('pre')

  element.innerHTML = _.join(['Hello webpack!', '5 cubed is equal to ' + cube(5)])

  element.onclick = Print.bind(null, 'Hello webpack!')

  const img = new Image()
  img.src = Icon

  element.appendChild(img)

  return element
}

document.body.appendChild(component())
// getComponent().then((component) => {
//   document.body.appendChild(component)
// })
