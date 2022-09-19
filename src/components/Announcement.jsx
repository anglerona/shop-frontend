import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #eb547a;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Placeholder message!
    </Container>
  )
}

export default Announcement