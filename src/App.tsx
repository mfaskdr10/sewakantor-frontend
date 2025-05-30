import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse";
import CityDetails from "./pages/CityDetails";
import BookOffice from "./pages/BookOffice";
import SuccessBooking from "./pages/SuccessBooking";
import CheckBooking from "./pages/CheckBooking";
import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/city/:slug" element={<CityDetails />} />
        <Route path="/office/:slug" element={<Details />} />
        <Route path="/office/:slug/book" element={<BookOffice />} />
        <Route path="/success-booking" element={<SuccessBooking />} />
        <Route path="/check-booking" element={<CheckBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
