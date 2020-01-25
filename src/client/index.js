import { handleSubmit, testValidURL } from './js/formHandler'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

const testServer = async () => {
  console.log('TestServer started');
  const request = await fetch('http://localhost:8000/test');
  try{
    const response = await request.json();
    console.log(response);
    return response.title
  }catch(error){
    console.log("error", error);
  }
};

testServer;

export {
  handleSubmit,
  testValidURL,
  testServer

 }
