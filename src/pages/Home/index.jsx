/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
// import GithubRibbon from '../../components/GithubRibbon';
import StyledWrapper from './styled';
const Thumbnails = [
  {
    to: '/update/win_xp',
    title: 'Windows XP',
    bg: '/img/fake.update.win.xp.bg.jpg'
  },
  {
    to: '/update/win_7',
    title: 'Windows 7',
    bg: '/img/fake.update.win.7.bg.jpg'
  },
  {
    to: '/update/win_vista',
    title: 'Windows Vista',
    bg: '/img/fake.update.win.vista.bg.jpg'
  },
  {
    to: '/update/win8',
    title: 'Windows 8',
    bg: '#07466c'
  },
  {
    to: '/update/win10',
    title: 'Windows 10',
    bg: '#006dae'
  },
  {
    to: '/update/apple_mac',
    title: 'macOS',
    bg: '#000'
  }
];
export default function Home() {
  return (
    <>
      {/* <GithubRibbon /> */}
      <StyledWrapper>
        <div className="half left">
          <h1 className="title">Fake System Update Screens</h1>
          <h2 className="desc">Prank your friends and collagues with fake update screens!</h2>
          <footer className="tip">
            <p>
              <span>Created by </span>
              <a href="https://yangerxiao.com/" target="_blank">
                Tristan
              </a>
              <span> © 2021</span>
            </p>
            <p>
              <span>Inspired by </span>
              <a href="https://fakeupdate.net/">fakeupdate.net</a>
              <span> with some improvements.</span>
            </p>
          </footer>
        </div>
        <div className="half right">
          <h2 className="title">👇 Please Select Operation System👇</h2>
          <div className="thumbnails">
            {Thumbnails.map((t) => {
              const { title, bg, to } = t;
              let bgObj = bg.startsWith('#')
                ? { backgroundColor: bg }
                : {
                    backgroundImage: `url(${bg})`
                  };
              return (
                <Link
                  to={to}
                  key={title}
                  className="thumbnail"
                  style={{
                    ...bgObj
                  }}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        </div>
      </StyledWrapper>
    </>
  );
}
