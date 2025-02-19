import withAuth from "../HOCs/withAuth.jsx";
import SeatModule from "../module/SeatModule"

const SeatPage = () => {
    return <SeatModule />
}

export default withAuth(SeatPage);
