import { useState } from "react"
import imagemGato from '../img/gatorebaixado.jpg'


function TodoListForm({handleSubmit}) {
  const [valorDoInput, setValorDoInput] = useState('')

    const handleChange = (e) => {
      setValorDoInput(e.target.value)
      console.log('valorDoInput', valorDoInput)
    }

    const handleClick  = () => {
      if (!valorDoInput) return

      const novaTarefa = {
        title: valorDoInput, 
        description: "descricao", 
        img:imagemGato,
        alt:"gato rebaixado"
      }

      handleSubmit(novaTarefa)
      setValorDoInput("")
    }

    return (
      <div>
        <p>{valorDoInput}</p>
          <label>Tarefa:</label>
          <input type="text" name="tarefa"  value={valorDoInput} onChange={(e) => handleChange(e) } />
            <button onClick={() => handleClick()}>
                Adicionar Tarefa
            </button>
      </div>
    );
  }
  
  export default TodoListForm;