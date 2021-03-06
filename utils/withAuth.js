import React from "react";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
    return (props) => {
        const [user, setUser] = React.useState(null);

        // Use Router instance definition
        const router = useRouter();

        React.useEffect(() => {
            // Check if access token is in local storage
            const accessToken = localStorage.getItem("auth-token");

            // If there is an access token we set the user state.
            setUser(accessToken);

            // If there is no access token we redirect to "/" page.
            if (!accessToken) {
                return router.replace("/loginOrSignup");
            }

            // If there's an access token we decode it and check if it's a valid JWT.
            const decodedToken = jwtDecode(accessToken);
            if (!decodedToken.role) {
                localStorage.clear();
                router.reload();
            }
        }, []);

        // User is not null, return the wrapped component.
        return user && <WrappedComponent {...props} />;
    };
};

export default withAuth;
