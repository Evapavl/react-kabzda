import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getProfileUser, getStatus, setUserProfile, updateStatus} from "../../redux/profile-reduce";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.autorizedUserId
            if(!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getProfileUser(userId);
        this.props.getStatus(userId);
    }

    render() {
//debugger;
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => ({
profile: state.profilePage.profile,
    status:state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default compose(
    withRouter,
   // withAuthRedirect,
    connect(mapStateToProps, {getProfileUser,
    getStatus, updateStatus})
    )(ProfileContainer)
