import React from 'react';
import Form from "./components/Form";
import List from "./components/List";
import { StoreProvider } from "./Store/Store";


function App() {
  return <StoreProvider>
    <div className='container'>
      <h3>To-Do List</h3>
      <Form />
      <List />
    </div>
  </StoreProvider>
}

export default App;
