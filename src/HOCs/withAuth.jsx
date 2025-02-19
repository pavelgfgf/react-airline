import { Navigate } from "react-router";

const withAuth = (WrappedComponent) => {
    const isAuthenticated = localStorage.getItem('token');

    // eslint-disable-next-line react/display-name
    return (props) => {
        if (isAuthenticated) {
            return <WrappedComponent {...props} />;
        }

        return <Navigate to={"/login"} />
    }
}

export default withAuth;
