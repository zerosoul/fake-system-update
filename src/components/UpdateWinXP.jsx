// import React from 'react'
import styled from 'styled-components';
import FakePercent from './FakePercent';
const StyledWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('img/fake.update.win.xp.bg.jpg');
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
    flex-direction: column;
    align-items: center;
    margin-top: -1rem;
    margin-right: -8rem;
    .txt {
      display: flex;
      flex-direction: column;
      .line {
        font-family: Tahoma, Arial;
        font-size: 20px;
        color: #fff;
        font-weight: normal;
        line-height: 1.5;
        text-align: right;
        white-space: nowrap;
      }
    }
  }
`;
export default function UpdateWinXP() {
  return (
    <StyledWrapper>
      <div className="tip">
        <img className="logo" src="img/fake.update.win.xp.logo.png"></img>
        <div className="txt">
          <span className="line">
            Installing Windows Updates... <FakePercent />
          </span>
          <span className="line">Do not turn off or unplug your computer.</span>
        </div>
      </div>
    </StyledWrapper>
  );
}
