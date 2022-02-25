import React from 'react';
import Form from "./components/Form";
import List from "./components/List";
import ListPrincipal from './components/ListPrincipal';
import { StoreProvider } from "./Store/Store";


function App() {
  return <StoreProvider>
    <div className='container'>
      <h3>Lista</h3>
      <ListPrincipal />
      <Form />
      <List />
    </div>
  </StoreProvider>
}

export default App;
