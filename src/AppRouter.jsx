import { Routes, Route } from "react-router"
import IndexPage from "./pages/IndexPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import BookingPage from "./pages/BookingPage"
import { BrowserRouter } from "react-router"
import BookingManagementPage from "./pages/BookingManagementPage"
import SearchPage from './pages/SearchPage'  
import SeatPage from "./pages/SeatPage"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<IndexPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/booking/:code" element={<BookingManagementPage />} />
                <Route path="/seat" element={<SeatPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter