import { useState } from "react"
import imagemGato from '../img/gatorebaixado.jpg'


function TodoListForm({handleSubmit}) {
  const [valorDoInput, setValorDoInput] = useState('')

    const handleChange = (value) => {
      setValorDoInput(value)
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
        <label>Tarefa:</label>
        <input type="text" name="tarefa" value={valorDoInput} onChange={(e) => handleChange(e.target.value) } />
        <button onClick={() =>handleClick()}>Adicionar Tarefa</button>       
      </div>
    );
  }
  
  export default TodoListForm;