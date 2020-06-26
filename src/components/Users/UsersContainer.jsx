import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage, toggleIsFollowingProgress,
    unfollow
} from "../../redux/users-reduce";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {getPageSize, getUsers, getTotalItemsCount, getCurrentPage,
    getIsFetching, getFollowingInProgress, getPortionSize} from "../../redux/users-selectors"

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);

    }
    
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   totalItemsCount={this.props.totalItemsCount}
                   pageSize={this.props.pageSize}
                   followingInProgress={this.props.followingInProgress}
                   portionSize={this.props.portionSize}
            />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize:getPortionSize(state)
    }
}

export default compose(
    connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    requestUsers
}),
   // withAuthRedirect
    )(UsersContainer)