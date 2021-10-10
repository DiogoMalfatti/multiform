import { ReactNode } from 'react'
import styled from 'styled-components'
import Header from '../Header'
import SidebarItem from '../../components/SidebarItem'
import { useForm } from '../../contexts/FormContext'

type Props = {
  children: ReactNode
}

const Theme = ({ children }: Props) => {

  const { state } = useForm()

  return (
    <Container>
      <Area>
      <Header />
      <Steps>
        <SideBar>
          <SidebarItem
            title='Pessoal'
            description='Se indentifique'
            icon='profile'
            path='/'
            active={state.currentStep === 1}
          />
          <SidebarItem
            title='Profissional'
            description='Seu nível'
            icon='book'
            path='/step2'
            active={state.currentStep === 2}
          />
          <SidebarItem
            title='Contatos'
            description='Como te achar'
            icon='mail'
            path='/step3'
            active={state.currentStep === 3}
          />
        </SideBar>
        <Page>
          {children}
        </Page>
      </Steps>
      </Area>
    </Container>
  )
}

const Container = styled.div`
  background: #02044a;
  color: #fff;
  min-height: 100vh;
`

const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Steps = styled.div`
  flex: 1;
  display: flex;
`

const SideBar = styled.div`
  width: 250px;
  border-right: 1px solid #16195c;
`

const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
`

export default Theme