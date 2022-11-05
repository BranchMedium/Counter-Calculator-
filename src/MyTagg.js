import React from 'react';
import 'semantic-ui-css/semantic.min.css';
//*************************************** */

const MyTag = (props) => {
    return(
        <div className='ui container comments'>
            <div className= 'comment'>
                <div className= 'avatar'>
                    <img src= {props.myPic} alt='avatar'/>
                </div>
                <div className='content'>
                    <div className= 'author'>
                        {props.myName}
                    </div>
                    <div className = 'metadata'>
                        <span className='date'>{props.myTime}</span>
                    </div>
                    <div className= 'text'> 
                        Hey, how are you doing!!!
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyTag;
