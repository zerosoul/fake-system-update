import styled from 'styled-components';

const StyledWrapper = styled.section`
  display: flex;
  height: 100vh;
  .half {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 2.2rem;
  }
  .left {
    .title {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 2rem;
    }
    .desc {
      font-size: 1.4rem;
      color: #666;
      /* margin-bottom: 4rem; */
    }
    .tip {
      position: absolute;
      bottom: 1rem;
      font-size: 1rem;
      color: #bbb;
      text-align: right;
      a {
        color: #666;
        text-decoration: none;
      }
    }
  }
  .right {
    flex: 1;
    align-items: center;
    background: #eee;
    .title {
      font-size: 1.8rem;
      color: #999;
      margin-bottom: 2rem;
    }
    .thumbnails {
      display: flex;
      .thumbnail {
        text-decoration: none;
        border: 1px solid #555;
        user-select: none;
        cursor: pointer;
        color: #fff;
        margin-right: 1rem;
        width: 6rem;
        height: 4rem;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        &:hover {
          border-color: #fff;
        }
      }
    }
  }
`;

export default StyledWrapper;
