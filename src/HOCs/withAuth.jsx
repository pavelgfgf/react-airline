import { Navigate } from "react-router";

const withAuth = (WrappedComponent) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
       const isAuthenticated = !!localStorage.getItem('token');

        if (!isAuthenticated) {
            return <Navigate to={"/login"} />
        }

       return <WrappedComponent {...props} />;
    }
}

export default withAuth;
