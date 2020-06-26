import React from 'react';
import classes from './ProfileInfo.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileStatusHooks = (props) => {
     
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])
    
    const activateEditMode = () =>{
        setEditMode(true);
   }
   const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
}
    const statusChange = (e) => {
        setStatus(e.currentTarget.value)
}
        return <>
            {!editMode &&
                <div>
                <span onDoubleClick={activateEditMode}>{props.status}</span>
            </div>
            }
            {editMode &&
                <div>
                <input onChange={statusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </>
    }


export default ProfileStatusHooks;