import React from 'react';
import styled, { keyframes } from 'styled-components';

const AniLoading = keyframes`
  0%  { transform:rotate(225deg); opacity: 1;
         animation-timing-function: ease-out; }

  7%   { transform:rotate(345deg);
         animation-timing-function: linear; }

  30%   { transform:rotate(455deg);
          animation-timing-function: ease-in-out; }

  39%   { transform:rotate(690deg);
          animation-timing-function: linear; }

  70%   { transform:rotate(815deg); opacity: 1;
         animation-timing-function: ease-out; }

  75%   { transform:rotate(945deg);
         animation-timing-function: ease-out; }

  76% { transform:rotate(945deg); opacity: 0; }
  100% { transform:rotate(945deg); opacity: 0; }
`;
const StyledLoading = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  margin: auto;

  .circle {
    position: absolute;
    width: 30px;
    height: 30px;
    opacity: 0;
    transform: rotate(225deg);
    animation-iteration-count: infinite;
    animation-name: ${AniLoading};
    animation-duration: 5.5s;

    &:after {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 5px;
      background: #fff; /* Pick a color */
    }

    &:nth-child(2) {
      animation-delay: 240ms;
    }
    &:nth-child(3) {
      animation-delay: 480ms;
    }
    &:nth-child(4) {
      animation-delay: 720ms;
    }
    &:nth-child(5) {
      animation-delay: 960ms;
    }
  }
`;
export default function Win8Loading() {
  return (
    <StyledLoading>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </StyledLoading>
  );
}
