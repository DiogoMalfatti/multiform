import { useHistory, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useForm, FormActions } from '../../contexts/FormContext'
import Theme from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'

const FormStep3 = () => {

  const history = useHistory()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if (state.name === '') {
      history.push('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      })
    }
  }, [])

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state)
    } else {
      alert('Preencha os dados')
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos ?</h1>
        <p>Preencha com seus dados para conseguirmos entrar em contato.</p>
        <hr />
        <label>
          Qual o seu email ?
          <input
            type='email'
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Qual o seu Github ?
          <input
            type='url'
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>
        <Link to='/step2' className='backButton'>Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
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
    display: block;
    margin-bottom: 20px;

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

export default FormStep3