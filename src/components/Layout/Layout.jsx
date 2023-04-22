import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loader from "components/Loader";

function Layout() {
  return (
    <>
      <header>
        <div>
          <h1>Tweets</h1>
        </div>
      </header>
      <main>
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
}

export default Layout;
