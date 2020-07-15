import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";
import { FaPortrait, FaTimes } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import trump from "./images/trump.png";

const Main = styled.div`
  position: relative;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 1300px) {
    width: 90%;
  }
  @media (max-width: 1150px) {
    grid-template-columns: 80px 1fr;
  }
  @media (max-width: 1050px) {
    width: 80%;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 700px) {
    width: 95%;
  }
`;
const Menu = styled.div`
  position: relative;
`;
const MenuInnerContainer = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  position: sticky;
  top: 0;
`;

const MainContent = styled.div``;
const MainContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
`;
const Sidebar = styled.div`
  position: relative;

  @media (max-width: 1050px) {
    display: none;
  }
`;
const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 20px;
  padding-right: 15px;
  padding-left: 15px;
  grid-gap: 20px;

  @media (max-width: 1150px) {
    grid-template-columns: 50px;
  }
`;
const StyledMenuGrid = styled(MenuGrid)`
  border-radius: 21px;
  width: fit-content;
  height: 40px;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;
const TwitterSvg = styled.svg`
  fill: rgba(29, 161, 242, 1);
  width: 30px;
`;
const TwitterSvgWrapper = styled.div`
  cursor: pointer;
  height: 49px;
  width: 49px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

const Image = styled.img``;
const MenuItem = styled.div`
  @media (max-width: 1150px) {
    display: none;
  }
`;

const MenuSvgContainer = styled.div`
  width: 30px;
  justify-self: center;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  height: 42px;
  border-radius: 20px;
  background-color: rgb(29, 161, 242);
  cursor: pointer;
  color: #ffffff;
  &:hover {
    background-color: rgb(26, 145, 218);
  }
`;

const Profile = styled.div`
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;
const ProfileImage = styled.img``;
const ProfileName = styled.div`
  @media (max-width: 1150px) {
    display: none;
  }
`;

const ProfileWholeName = styled.div``;
const ProfileWholeAt = styled.div``;

const Header = styled.div``;
const Searchbar = styled.div`
  background-color: rgb(230, 236, 240);
  height: 40px;
  border-radius: 20px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SidebarMain = styled.div`
  background-color: rgb(245, 248, 250);
`;

const NewsItem = styled.div`
  border-bottom: 1px solid grey;
  margin-bottom: 20px;
`;

const WhoToFollow = styled.div``;
const WhoToFollowMenu = styled.div``;
const SideBarInnerDiv = styled.div`
  position: sticky;
  top: ${(props) => props.top};
`;

const AbsoluteTweetModal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background-color: rgba(153, 153, 153, 0.5);
  z-index: 1;
`;

const TweetModal = styled.div`
  width: 409px;
  height: 256px;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 140px;
  border-radius: 20px;
`;

const ContentImage = styled.img`
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const menuMap = [
  { image: "", name: "Home", link: "" },
  { image: "", name: "Explore", link: "" },
  { image: "", name: "Notifications", link: "" },
  { image: "", name: "Messages", link: "" },
  { image: "", name: "Bookmarks", link: "" },
  { image: "", name: "Lists", link: "" },
  { image: "", name: "Profile", link: "" },
  { image: "", name: "More", link: "" },
];

function App() {
  const [topPosition, changeTopPosition] = useState("auto");
  const [openTweetModal, changeTweetModal] = useState(false);

  return (
    <Main>
      {openTweetModal && (
        <AbsoluteTweetModal>
          <TweetModal>
            <FaTimes onClick={() => changeTweetModal(false)} />
          </TweetModal>
        </AbsoluteTweetModal>
      )}
      <Grid>
        <Menu>
          <MenuInnerContainer>
            <MenuGrid>
              <TwitterSvgWrapper>
                <TwitterSvg viewBox="0 0 24 24">
                  <g>
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </g>
                </TwitterSvg>
              </TwitterSvgWrapper>
              <div />
            </MenuGrid>
            {menuMap.map((item, index) => (
              <StyledMenuGrid>
                <MenuSvgContainer>
                  <svg
                    viewBox="0 0 24 24"
                    class="r-hkyrab r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                  >
                    <g>
                      <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path>
                    </g>
                  </svg>
                </MenuSvgContainer>
                <MenuItem>{item.name}</MenuItem>
              </StyledMenuGrid>
            ))}
            <Button onClick={() => changeTweetModal(true)}>Twitter</Button>
            <Profile>
              <FaPortrait style={{ fontSize: "40px" }} />
              <ProfileName>
                <ProfileWholeName>reuven brisman</ProfileWholeName>
                <ProfileWholeAt>@ReuvenBrisman</ProfileWholeAt>
              </ProfileName>
              <FiArrowDown />
            </Profile>
          </MenuInnerContainer>
        </Menu>
        <MainContentGrid>
          <MainContent>
            <Header>Home</Header>
            <Header>Whats happening</Header>
            {[...Array(10)].map((i, index) => (
              <ContentImage src={trump} />
            ))}
          </MainContent>
          <Sidebar>
            <SideBarInnerDiv top={topPosition}>
              <Searchbar>Search</Searchbar>
              <SidebarMain>
                <NewsItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, odio ratione dignissimos explicabo temporibus iure
                  odit quae dolores minima omnis repudiandae, nobis distinctio
                  vel numquam amet saepe autem perspiciatis maiores? Atque neque
                  consequatur eos id laborum! Atque perferendis illo quas nobis
                </NewsItem>
                <NewsItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, odio ratione dignissimos explicabo temporibus iure
                  odit quae dolores minima omnis repudiandae, nobis distinctio
                  vel numquam amet saepe autem perspiciatis maiores? Atque neque
                  consequatur eos id laborum! Atque perferendis illo quas nobis
                </NewsItem>
                <NewsItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, odio ratione dignissimos explicabo temporibus iure
                  odit quae dolores minima omnis repudiandae, nobis distinctio
                  vel numquam amet saepe autem perspiciatis maiores? Atque neque
                  conse
                </NewsItem>
                <NewsItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, odio ratione dignissimos explicabo temporibus iure
                  odit quae dolores minima omnis repudiandae, nobis distinctio
                  vel numquam am
                </NewsItem>
                <WhoToFollowMenu>
                  <WhoToFollow>john</WhoToFollow>
                  <WhoToFollow>jakc</WhoToFollow>
                  <WhoToFollow>jill</WhoToFollow>
                </WhoToFollowMenu>
              </SidebarMain>
            </SideBarInnerDiv>
          </Sidebar>
        </MainContentGrid>
      </Grid>
    </Main>
  );
}

export default App;
