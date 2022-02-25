import React, { useContext, useRef, useState } from "react";
import Store  from "../Store/Store";

const HOST_API ="http://localhost:8080/api";

const ListPrincipal = () => {
    const formRef = useRef(null);
    const {
     dispatch,
     state: { todo },
     } = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);    

    const onAdd = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: null,
    };    
  

    fetch(HOST_API + "/grouplist/save", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "add-grouplist", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

    return(
    <form>
      <input
        type="text"
        name="name"
        placeholder="Lista"
       ></input>
      <button onClick={onAdd}>Nueva Lista</button>
    </form>
    )
}

export default ListPrincipal;