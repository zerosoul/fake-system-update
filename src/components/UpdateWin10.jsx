// import React from 'react'
import styled from 'styled-components';
import Loading from './Win8Loading';
import FakePercent from './FakePercent';

const StyledWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #006dae;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  user-select: none;
  font-family: Segoe UI Light, Segoe UI, Arial;
  font-size: 23px;
  color: #fff;
  font-weight: normal;
  .center {
    position: relative;
    /* width: 35rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -2rem;
    .txt {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      .line {
        line-height: 1.3;
        text-align: center;
        white-space: nowrap;
      }
    }
  }
  .tip {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export default function UpdateWin10() {
  return (
    <StyledWrapper>
      <div className="center">
        <div className="loading">
          <Loading />
        </div>
        <div className="txt">
          <span className="line">Configuring Windows Updates</span>
          <span className="line">
            <FakePercent /> complete.
          </span>
          <span className="line">Do not turn off your computer.</span>
        </div>
      </div>
      <div className="tip">Your PC will restart several times</div>
    </StyledWrapper>
  );
}
