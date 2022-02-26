import React from 'react';
import Form from "./components/Form";
import List from "./components/List";
import ListPrincipal from './components/ListPrincipal';
import { StoreProvider } from "./Store/Store";


function App() {
  return ( 
  <StoreProvider>
    <h1 align="center" >Lista</h1>
    <div className="containerC">
      <ListPrincipal />
      <Form />
      <List />
    </div>
  </StoreProvider>
  );
}
export default App;
