import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import { Textarea } from '../FormsControls/FormsControls';
import { required, maxLengthCreator } from '../Validator/Validator';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>);

    let messagesElements = state.messages.map(m => <MessageItem message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div> {messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} 
            name='newMessageBody' 
            placeholder={'text message'}
            validate={[required, maxLength50 ]} />
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs;