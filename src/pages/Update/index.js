import { useRef } from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import { useParams, useHistory } from 'react-router-dom';
import UpdateWinVista from '../../components/UpdateWinVista';
import UpdateWinXP from '../../components/UpdateWinXP';
import UpdateWin7 from '../../components/UpdateWin7';
import UpdateWin8 from '../../components/UpdateWin8';
import UpdateWin10 from '../../components/UpdateWin10';
import UpdateAppleMac from '../../components/UpdateAppleMac';
import IconCopy from '../../assets/icon.copy.png';
import IconFS from '../../assets/icon.full-screen.png';
import IconBack from '../../assets/icon.back.png';
const StyledWrapper = styled.div`
  position: relative;
  .setting {
    position: absolute;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.5rem;
    background-color: #fff;
    border-radius: 50%;
    margin-bottom: 0.8rem;
    box-shadow: 0 0 10px 2px rgba(34, 34, 34, 0.5);
    &:after {
      opacity: 0;
      content: attr(data-alt);
      position: absolute;
      top: 0;
      /* transform: translateY(-50%); */
      white-space: nowrap;
      font-size: 1.2rem;
      color: #666;
      background-color: #fff;
      padding: 0.4rem 0.6rem;
      border-radius: 5px;
      box-shadow: 0 0 10px 2px rgba(34, 34, 34, 0.5);
      transition: opacity 0.5s;
    }
    &.fullscreen {
      bottom: 1rem;
      right: 1rem;
      &:after {
        left: -1rem;
        transform: translateX(-100%);
      }
    }
    &.share {
      top: 1rem;
      right: 1rem;
      &:after {
        left: -1rem;
        transform: translateX(-100%);
      }
    }
    &.back {
      top: 1rem;
      left: 1rem;
      &:after {
        right: -1rem;
        transform: translateX(100%);
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
    &:hover:after {
      opacity: 1;
    }
  }
  &:fullscreen {
    cursor: none;
    .setting {
      display: none;
    }
  }
`;
const UpdateMap = {
  win_vista: <UpdateWinVista />,
  win_xp: <UpdateWinXP />,
  win_7: <UpdateWin7 />,
  win8: <UpdateWin8 />,
  win10: <UpdateWin10 />,
  apple_mac: <UpdateAppleMac />
};
export default function UpdatePage() {
  let history = useHistory();
  const fsEle = useRef(null);
  const { sys } = useParams();
  console.log({ sys });
  const handleFSClick = () => {
    fsEle.current.requestFullscreen();
  };
  const handleBackClick = () => {
    history.push('/');
  };
  const handleCopyClick = () => {
    copy(location.href, {
      message: 'copied!',
      onCopy: () => {
        alert('copied!');
      }
    });
  };
  return (
    <StyledWrapper ref={fsEle}>
      {UpdateMap[sys]}

      <aside onClick={handleBackClick} className="setting back" data-alt="Back home page">
        <img src={IconBack} />
      </aside>
      <aside
        onClick={handleFSClick}
        className="setting fullscreen"
        data-alt="Fullscreen the page and slack off at work!🤣"
      >
        <img src={IconFS} />
      </aside>
      <aside
        onClick={handleCopyClick}
        className="setting share"
        data-alt="Copy the link and share!"
      >
        <img src={IconCopy} />
      </aside>
    </StyledWrapper>
  );
}
