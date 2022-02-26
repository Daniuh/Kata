import React, { useContext, useEffect } from "react";
import Store from '../Store/Store';

const HOST_API = "http://localhost:8080/api";

const List = () => {
    const { dispatch, state: { todo } } = useContext(Store);
    const currentList = todo.list;
  
    useEffect(() => {
      fetch(HOST_API + "/todos")
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: "update-list", list });
        })
    }, [dispatch]);
  
  
    const onDelete = (id) => {
      fetch(HOST_API + "/" + id + "/todo", {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: "delete-item", id });
      })
    }
  
    const onEdit = (todo) => {
      dispatch({ type: "edit-item", item: todo })
    };
  
    const onChange = (event, todo) => {
      const request = {
        name: todo.name,
        id: todo.id,
        completed: event.target.checked
      };
      fetch(HOST_API + "/todo", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: "update-item", item: todo });
        });
    };
  
    const decorationDone = {
      textDecoration: 'line-through'
    };
    return <div>
      <table className="table table-sm">
        <thead>
          <tr>
            <td colSpan={2} className="td">ID</td>
            <td colSpan={2} className="td">Tarea</td>
            <td className="td">¿Completado?</td>
          </tr>
        </thead>
        <tbody>
          {currentList.map((todo) => {
            return <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
              <td className="td" colSpan={2}>{todo.id}</td>
              <td className="td" colSpan={2}>{todo.name}</td>
              <td className="td"><input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input></td>
              <td><button className="button" onClick={() => onDelete(todo.id)}>Eliminar</button></td>
              <td><button className="button" onClick={() => onEdit(todo)}>Editar</button></td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>;
  }

  export default List;