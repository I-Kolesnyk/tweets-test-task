import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home page</div>} />
      <Route path="tweets" element={<div>Tweets</div>} />
      <Route path="*" element={<Navigate to="/"/>} replace={true} />
    </Routes>
  );
}

export default App;
