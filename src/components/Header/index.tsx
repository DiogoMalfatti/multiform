import styled from 'styled-components'

const Header = () => {
  return(
    <Container>
      <h1>Cadastro de Desenvolvedor</h1>
      <p>Faça seu cadastro na lista e receba um emprego instantaneamente. #SQN</p>
    </Container>
  )
}

const Container = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #16195c;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 28px;
  }

  p {
    font-size: 14px;
    color: #b8b8d4;
  }
`

export default Header