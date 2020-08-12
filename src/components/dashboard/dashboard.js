import React from 'react';
import './dashboard.css';
const Dashboard=()=>{
return (
    <React.Fragment>
            <div className='row maindiv'>
                <div className='col-lg div1'>
                <div className='row'>
                    <div className='col-sm-1 sub1div1'>
                    <p><i className="fa fa-bars test" aria-hidden="true"></i></p>
                    <i className="fa fa-whatsapp test-watsapp" aria-hidden="true"></i>
                    <i className="fa fa-skype test-skype" aria-hidden="true"></i>
                    <div className='test-image'>
                    <img src={require('../../images/Messenger.png')} alt="messenger" width='25px'/>
                    </div>
                    </div>
                    <div className='col-sm-4 sub2div2'>
                    <h6>
                        inbox
                        <span className="spanuser">
                        <i className="fa fa-user-plus" aria-hidden="true"></i></span>
                    </h6>
                    <p><small>all messages <span className="spanuser">23</span></small></p>
                    <p><small>important <span className="spanuser">5</span></small></p>
                    <p><small>Drafts <span className="spanuser">20</span></small></p>
                    <hr />
               </div>
               <div className='col sub3div3'>
               <button className="btnsearch"><i className="fa fa-search test-search" aria-hidden="true"></i></button>
               <input type='text' placeholder='search'></input>
               </div>
               </div>
               </div>
            <div className='col-lg msg-div'>
                <p className="msg-box">
                    <b>Ameerbasha</b>
                    <small> is typing...</small>

                </p>
                <p className="firstmessage">ram<i className='fa fa-user'></i><pre >hi, how are you</pre></p>
                <p className="secondmessage"><i className='fa fa-user'>you</i><pre>iam fine,what about you</pre></p>
                <div>
                    <i className="fa fa-paperclip" aria-hidden='true'></i>
                <input type="text" placeholder='type message'></input>
                <i className='fa fa-share-square-o' aria-hidden='true'></i>
                </div>
            </div>
            <div className='col-lg-2'>
                <div className="profile-div">
                    <i className='fa fa-bell' aria-hidden="true"></i>
                    <h6>Profile</h6>
                </div>
                <div>
                    <img src={require('../../images/Messenger.png')} alt="messenger" width='20px'></img>
                    <i className="fa fa-ellipsis-h dots" aria-hidden='true'></i>
                </div>
                <i className='fa fa-user-circle fa-3x profile-pic' aria-hidden='true'></i>

                <p className="profilename">Ameerbasha</p>
            </div>
            </div>
    </React.Fragment>
)
}

export default Dashboard