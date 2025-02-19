import withAuth from "../HOCs/withAuth.jsx";
import BookingManagementModule from "../module/BookingManagementModule";

function BookingManagementPage() {
  return <BookingManagementModule />
}

export default withAuth(BookingManagementPage);
