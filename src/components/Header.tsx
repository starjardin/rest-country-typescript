import styled from 'styled-components'


const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 3px solid #f6f6f6;
`
const Header = () => {
  return (
    <HeaderStyles>
      <h2>Where in the world</h2>
      <div>Dark mode</div>
    </HeaderStyles>
  );
}

export default Header;
