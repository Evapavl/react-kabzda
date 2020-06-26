import React from 'react';
import Header from "./Header";
import {getAuthUserData, setAuthUserData, toggleIsFetching} from "../../redux/auth-reduce";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {logout} from "../../redux/auth-reduce"

class HeaderContainer extends React.Component {
    // componentDidMount() {
    //     this.props.getAuthUserData(this.props.id, this.props.login, this.props.email);
    // }

    render() {
        return<>
            {this.props.isFetching ? <Preloader/> : null}
        <Header {...this.props}/>
        </>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching, getAuthUserData, logout })(HeaderContainer);