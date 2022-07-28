import { useState } from "react"
import imagemGato from '../img/gatorebaixado.jpg'


function TodoListForm({handleSubmit}) {
  const [valorDoTitulo, setValorDoTitulo] = useState('')
  const [valorDaDescricao, setValorDaDescricao] = useState('')



    const handleClick  = () => {
      if (!valorDoTitulo) return
      if (!valorDaDescricao) return

      const novaTarefa = {
        title: valorDoTitulo, 
        description: valorDaDescricao, 
        img:imagemGato,
        alt:"gato rebaixado"
      }

      handleSubmit(novaTarefa)
      setValorDoTitulo("")
      setValorDaDescricao("")
    }

    return (
      <div>
        <label for="tarefa">Tarefa: </label>
        <input type="text" name="tarefa" id="tarefa" value={valorDoTitulo} onChange={(e) => setValorDoTitulo(e.target.value) }/>
        <br/>
        <label for="descricao">Descrição: </label>
        <input type="text" name="descricao" id="descricao" value={valorDaDescricao} onChange={(e) => setValorDaDescricao(e.target.value)}/>
        <button onClick={() =>handleClick()}>Adicionar Tarefa</button>
             
      </div>
    );
  }
  
  export default TodoListForm;