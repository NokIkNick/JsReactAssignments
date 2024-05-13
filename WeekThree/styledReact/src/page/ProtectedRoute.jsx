import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProtectedRoute = ({isAuthenticated, children}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated){
            navigate("/login");
        }
    }, [isAuthenticated, navigate])

    if(isAuthenticated) return <>{children}</>
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    isAuthenticated: PropTypes.bool

}
