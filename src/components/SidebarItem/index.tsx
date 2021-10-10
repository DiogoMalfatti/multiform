import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg'
import { ReactComponent as BookIcon } from '../../svgs/book.svg'
import { ReactComponent as MailIcon } from '../../svgs/mail.svg'

type Props = {
  title: string
  description: string
  icon: string
  path: string
  active: boolean
}

const SidebarItem = ({ title, description, icon, path, active }: Props) => {
  return (
    <Container>
      <Link to={path}>
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
        <IconArea active={active}>
          {icon === 'profile' &&
            <ProfileIcon fill='white' width={24} height={24} />
          }
          {icon === 'book' &&
            <BookIcon fill='white' width={24} height={24} />
          }
          {icon === 'mail' &&
            <MailIcon fill='white' width={24} height={24} />
          }
        </IconArea>
        <Point active={active}></Point>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  margin: 30px 0;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`

const Info = styled.div`
  flex: 1;
  margin-right: 20px;
`

const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 15px;
  color: #fff;
`

const Description = styled.div`
  text-align: right;
  font-size: 13px;
  color: #b8b8d4;
`

const IconArea = styled.div<{ active: boolean}>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.active ? '#25cd89' : '#494a7c'};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Point = styled.div<{ active: boolean}>`
  width: 6px;
  height: 6px;
  border: 3px solid #494a7c;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -6px;
  background: ${props => props.active ? '#25cd89' : '#02044a'};
`

export default SidebarItem