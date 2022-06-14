import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute ({ component: Component, user, ...rest }) {
    return (
        <Route
            {...rest}
            render = {props => 
                localStorage.getItem('user')?(
                    <Component {...props} />
                ) : ( 
                    <Redirect to={{
                                    pathname: '/loginpost', 
                                    state: {from: props.location}
                                  }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute;