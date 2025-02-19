import withAuth from "../HOCs/withAuth.jsx";
import BookingModule from "../module/BookingModule";

const BookingPage = () => {
  return <BookingModule />
};

export default withAuth(BookingPage);
