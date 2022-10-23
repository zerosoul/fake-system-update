// import React from 'react'
import styled from 'styled-components';
import Loading from './Win8Loading';
import FakePercent from './FakePercent';
const StyledWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #07466c;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  user-select: none;
  .tip {
    position: relative;
    /* width: 35rem; */
    display: flex;
    /* flex-direction: column; */
    align-items: flex-start;
    margin-top: -2rem;
    .txt {
      display: flex;
      flex-direction: column;
      margin-left: 40px;
      .line {
        font-family: Segoe UI Light, Segoe UI, Arial;
        font-size: 23px;
        color: #fff;
        font-weight: normal;
        line-height: 1.3;
        text-align: center;
        white-space: nowrap;
      }
    }
  }
`;
export default function UpdateWin8() {
  return (
    <StyledWrapper>
      <div className="tip">
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
    </StyledWrapper>
  );
}
