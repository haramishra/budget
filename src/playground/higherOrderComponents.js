import React from "react";
import ReactDom from 'react-dom'

const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>the info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>this is wrapped component</p>
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>Try loging in</p>}
        </div>
    )
}

const HocInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

ReactDom.render(<AuthInfo isAuth={false} info="This is info" />, document.getElementById("app"))

