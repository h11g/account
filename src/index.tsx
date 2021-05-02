import React from 'react'
import ReactDOM from 'react-dom'
import App from 'src/app'

if (module && module.hot) {
  console.log('hot==>')
  module.hot.accept()
}

ReactDOM.render(<App name='vortesnail' age={25} />, document.querySelector('#root'))
