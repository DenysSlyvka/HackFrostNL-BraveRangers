import React from 'react';
import { formatRelative } from 'date-fns';

const Message = ({
    createdAt = null,
    text = "",
    displayName = "",
    photoURL = "",
}) => {
    return (
    <div className="message d-flex w-75 ">
        <div className="userInfo w-50">
            {photoURL ? (
                <img className= "profilePic" src={photoURL} alt="Avatar" witdh={25} height={25}/>
            ) : null }
            {displayName ? <p className="userName">&nbsp; {displayName} - &nbsp;</p> : null}
            {createdAt?.seconds ? (
                <span>
                    {formatRelative(new Date(createdAt.seconds * 1000), new Date()
                    )}
                </span>
            ) : null}
        </div>
        <div className="messageText">
            <p>{text}</p>
        </div>
    </div>
    );
};

export default Message;