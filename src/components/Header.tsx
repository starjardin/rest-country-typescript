import React from 'react';
import styled from 'styled-components'


const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
