import React from 'react';
import { Paginator } from '../common/Paginator/Paginator';
import User from './User';


let Users = (props) => {
   
    return <div>
        <Paginator totalItemsCount={props.totalItemsCount}
         pageSize={props.pageSize} 
         currentPage={props.currentPage}
         onPageChanged={props.onPageChanged}
         portionSize={props.portionSize}
         />
        
        {
            props.users.map(u => <User key={u.id}
                followingInProgress={props.followingInProgress}
                unfollow={props.unfollow}
                follow={props.follow}
                user={u}
             />)
        }
                </div>
    }
       


export default Users;