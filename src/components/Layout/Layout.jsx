import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";

import Loader from "components/Loader";
import NavButton from "components/NavButton/NavButton";

import { GlobalStyles } from "styles/GlobalStyles";
import { BackIcon, TweetIcon } from "./Layout.styled";
import { theme } from "styles/Theme.styled";
import { HeaderContainer, Header, Main, Title } from "./Layout.styled";

function Layout() {
  const { state, pathname } = useLocation();
  console.log(pathname);
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Header>
        <HeaderContainer>
          <Title>Lovely Tweets</Title>
          {pathname === "/tweets" ? (
            <NavButton path={state?.from ?? "/"}>
              <BackIcon />
              Go back
            </NavButton>
          ) : <NavButton path={ "/tweets"}>
         <TweetIcon/>
          Go tweeting
        </NavButton>}
        </HeaderContainer>
      </Header>
      <Main>
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </Main>
    </ThemeProvider>
  );
}

export default Layout;
