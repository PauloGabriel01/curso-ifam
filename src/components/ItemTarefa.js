import styled from 'styled-components';

const TarefaContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`

const TarefaTitle = styled.h1`
  font-family: Arial;
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
          <TarefaTitle className="tarefa-title">{title}</TarefaTitle>
          <p>{description}</p>
        </div>
        <TarefaImage src={img} alt={alt}/>
      </TarefaContent>
   )
}

