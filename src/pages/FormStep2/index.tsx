import { useHistory, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useForm, FormActions } from '../../contexts/FormContext'
import Theme from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'
import SelectOption from '../../components/SelectOption'

const FormStep2 = () => {

  const history = useHistory()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if (state.name === '') {
      history.push('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      })
    }
  })

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step3')
    } else {
      alert('Prencha os dados')
    }
  }

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return (
    <Theme>
      <Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você ?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>
        <hr />
        <SelectOption 
          title='Sou iniciante'
          description='Comecei a programar há menos de 2 anos'
          icon='🥳'
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption 
          title='Sou programador'
          description='Já programo há 2 anos ou mais'
          icon='😎'
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />
        <Link to='/' className='backButton'>Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  )
}

const Container = styled.div`
  p {
    font-size: 13px;
    color: #b8b8d4;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }

  hr {
    height: 1px;
    border: 0;
    background: #16195c;
    margin: 30px 0;
  }

  label {
    font-size: 13px;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid #25cd89;
      border-radius: 10px;
      color: #fff;
      outline: 0;
      font-size: 15px;
      background: #02044a;
    }
  }

  button {
    background: #25cd89;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
  }

  .backButton {
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: #b8b8d4;
  }
`

export default FormStep2