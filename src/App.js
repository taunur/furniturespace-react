import "assets/css/app.css";
import CartPage from "pages/CartPage";
import CongratulationPage from "pages/CongratulationPage";
import DetailPage from "pages/DetailsPage";
import HomePage from "pages/HomePage";
import NotFoundpage from "pages/NotFoundPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/categories/:idc" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/congratulation" element={<CongratulationPage />} />
          <Route path="*" element={<NotFoundpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
