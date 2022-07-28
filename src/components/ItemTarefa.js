import styled from 'styled-components';

const TarefaContent = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  padding: 10px 20px;
`

const TarefaTitle = styled.h1`
  border: 1px solid green;
`

const TarefaImage = styled.img`
  width: 10%;
  border-radius: 50%;
  justify-content: right;
`


export const ItemTarefa = ({title, description, img, alt}) => {
   return (
    <TarefaContent>
        <div>
          <h1 className="tarefa-title">{title}</h1>
          <p>{description}</p>
        </div>
        <TarefaImage src={img} alt={alt}/>
      </TarefaContent>
   )
}

