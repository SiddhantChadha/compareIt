import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { useState } from 'react'
import Products from "./components/Products";

function App() {
  let [globalCompany, setGlobalCompany] = useState('');
  let [globalProduct, setGlobalProduct] = useState('');

  return (
    <div >
      <Navbar setGlobalCompany={setGlobalCompany} setGlobalProduct={setGlobalProduct}></Navbar>

      {(globalCompany == '' && globalProduct == '') ?
        <Form setGlobalCompany={setGlobalCompany} setGlobalProduct={setGlobalProduct}></Form>:
        <Products globalCompany={globalCompany} globalProduct={globalProduct}></Products>
    }

    </div>
  );
}

export default App;
