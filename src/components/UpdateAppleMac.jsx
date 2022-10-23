// import React from 'react'
import styled from 'styled-components';

const StyledWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  user-select: none;
  .tip {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      width: 5.6rem;
    }
    .progress {
      margin-top: 5rem;
    }
  }
`;
export default function UpdateAppleMac() {
  return (
    <StyledWrapper>
      <div className="tip">
        <img className="logo" src="img/fake.update.mac.logo.png"></img>
        <img className="progress" src="img/fake.update.mac.progress.gif" />
      </div>
    </StyledWrapper>
  );
}
