import './App.css';
import styled from 'styled-components';
import TodoListForm from './components/TodoListForm';
import {ItemTarefa} from "./components/ItemTarefa"
import imagemGato from './img/gatorebaixado.jpg'
import { useState } from 'react';


const Container = styled.div`

`



function App() {

  const [listaTarefas, setListaTarefas] = useState([
    {
      title:"Olá Mundo",
      description:"Olá, tudo bom?",
      img:imagemGato,
      alt:"gato rebaixado"
    },
    {
      title:"Olá Mundo",
      description:"Olá, tudo bom?",
      img:imagemGato,
      alt:"gato rebaixado"
    },
    {
      title:"Olá Mundo",
      description:"Olá, tudo bom?",
      img:imagemGato,
      alt:"gato rebaixado"
    }
  ])

  const adicionarTarefa = (novaTarefa) => {

    setListaTarefas(prevState => [...prevState, novaTarefa])
  }


  return (
    <Container>
      {listaTarefas.map((tarefa, index) => (
        <ItemTarefa key={index} {...tarefa} />
      ))}
      <TodoListForm handleSubmit={adicionarTarefa}/>
    </Container>
  );
}

export default App;
