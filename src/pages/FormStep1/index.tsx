import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useForm, FormActions } from '../../contexts/FormContext'
import Theme from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'

const FormStep1 = () => {

  const history = useHistory()
  const { state, dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, [])

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step2')
    } else {
      alert('Prencha os dados')
    }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome.</h1>
        <p>Preencha o campo abaixo com seu nome.</p>
        <hr />
        <label>
          Seu nome completo
          <input
            type='text'
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
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
`

export default FormStep1