// const updateUI = require('./UpdateUI.js')
const callAylienAPI = require('./callAylienAPI.js')
import {updateUI, updateHTML} from './UpdateUI.js'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formURL = document.getElementById('formURL').value
    console.log(formURL)

    if (Client.testValidURL(formURL) === true) {
      callAylienAPI('http://localhost:8080/apiData', {"URL":formURL})
        .then(updateUI())
    }else {
      alert('Please enter a valid URL')
    }
    // setTimeout(updateUI,10000)
      // .then()
}

const testValidURL = (formURL) => {
    let pattern = /http(s):/;
    return pattern.test(formURL);
};

export {
  handleSubmit,
  testValidURL,
  // updateUI,
  // updateHTML
 }
