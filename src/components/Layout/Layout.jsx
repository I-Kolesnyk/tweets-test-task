import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";

import Loader from "components/Loader";
import NavButton from "components/NavButton";
import DropDownFilter from "components/DropDownFilter/DropDownFilter";

import { GlobalStyles } from "styles/GlobalStyles";
import { theme } from "styles/theme";
import { HeaderContainer, Header, Main, Title, BackIcon, TweetIcon } from "./Layout.styled";

function Layout() {
  const { state, pathname } = useLocation();
  
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Header>
        <HeaderContainer>
          <Title>Lovely Tweets</Title>
          {pathname === "/tweets" ? (
            <>
            <DropDownFilter/>
            <NavButton path={state?.from ?? "/"}>
              <BackIcon />
              Go back
            </NavButton>
            </>
            
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
