// import React from 'react'
import styled from 'styled-components';
import FakePercent from './FakePercent';
const StyledWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('img/fake.update.win.vista.bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  user-select: none;
  .tip {
    position: relative;
    /* width: 35rem; */
    display: flex;
    align-items: center;
    margin-top: -2rem;
    .loading {
      margin-right: 1rem;
      position: absolute;
      left: -4rem;
      top: 50%;
      transform: translateY(-50%);
    }
    .txt {
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      font-family: Segoe UI, Arial;
      line-height: 1.4;
      .line {
        text-align: center;
        white-space: nowrap;
      }
    }
  }
  .logo {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export default function UpdateWinVista() {
  return (
    <StyledWrapper>
      <div className="tip">
        <img className="loading" src="img/fake.update.win7.loading.gif"></img>
        <div className="txt">
          <span className="line">
            Installing Updates 5 of 68 -{' '}
            <span className="percent">
              <FakePercent />
            </span>{' '}
            complete.
          </span>
          <span className="line">Do not turn off your computer</span>
        </div>
      </div>
      <img className="logo" src="img/fake.update.win.vista.logo.png"></img>
    </StyledWrapper>
  );
}
