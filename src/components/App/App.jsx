import { Routes, Route, Navigate } from "react-router-dom";

import Tweets from "pages/Tweets/Tweets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home page</div>} />
      <Route path="tweets" element={<Tweets/>} />
      <Route path="*" element={<Navigate to="/"/>} replace={true} />
    </Routes>
  );
}

export default App;
