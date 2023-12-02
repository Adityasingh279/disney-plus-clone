import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="Home" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="Search" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="Watchlist" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="Originals" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="Movies" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="Series" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg
        src="https://www.bing.com/images/search?view=detailV2&ccid=awAiMS1B&id=2AA2ACAA4EF02901132B91A1E28D73DC04AE1B10&thid=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&mediaurl=https%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&exph=2305&expw=2400&q=any+user+image&simid=608007966313316200&FORM=IRPRST&ck=63405517292CCDCF55A926F04C80B2AB&selectedIndex=0&itb=1&idpp=overlayview&ajaxhist=0&ajaxserp=0"
        alt="User"
      />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
