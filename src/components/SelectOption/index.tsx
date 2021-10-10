import styled from 'styled-components'

type Props = {
  title: string
  description: string
  icon: string
  selected: boolean
  onClick: () => void
}

const SelectOption = ({title, description, icon, selected, onClick}: Props) => {
  return (
    <Container onClick={onClick} selected={selected}>
      <Icon>{icon}</Icon>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  )
}

const Container = styled.div<{ selected: boolean }>`
  display: flex;
  border: 2px solid ${props => props.selected ? '#25cd89' : '#16195c'};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid #496459;
  }
`

const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #191a59;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`

const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`

const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
`

const Description = styled.div`
  font-size: 14px;
  color: #b8b8d4;
`

export default SelectOption