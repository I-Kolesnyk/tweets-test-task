import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "components/Layout";
import Tweets from "pages/Tweets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home page</div>} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} replace={true} />
      </Route>
    </Routes>
  );
}

export default App;
