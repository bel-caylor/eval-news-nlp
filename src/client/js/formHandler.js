// const updateUI = require('./UpdateUI.js')
const callAylienAPI = require('./callAylienAPI.js')
import {updateUI, updateHTML} from './UpdateUI.js'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formURL = document.getElementById('formURL').value
    console.log(formURL)

    if (Client.testValidURL(formURL) === true) {
      callAylienAPI('http://localhost:8000/apiData', {"URL":formURL})
        .then(updateUI())
    }else {
      alert('Please enter a valid URL')
    }
    // setTimeout(updateUI,10000)
      // .then()
}

const testValidURL = (formURL) => {
    let pattern = /http|https:/;
    return pattern.test(formURL);
};

const testServer = async () => {
  console.log('Test started');
  const request = await fetch('http://localhost:8000/test');
  try{
    const response = await request.json();
    console.log(response);
    return response.title
  }catch(error){
    console.log("error", error);
  }
};

export {
  handleSubmit,
  testValidURL
  // testServer
 }
