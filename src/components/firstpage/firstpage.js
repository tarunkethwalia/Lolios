import React from 'react';
import './firstpage.css';
import Logo from '../images/Lolios.png';
import Lol from '../images/lolimg.png';


const firstpage = () => {
    return (
        <div className="firstpage">
            <div className="content1">
                <div className="headerfp">
                    <img src={Logo} className="logo1" />
                    <p>Lolios</p>
                </div>
                    <p className="heading1">
                        Be Anyone, <br></br>Talk Anonymously
                    </p>
                    <p className="subhead">Enter in a chat room with your friends anonymously to let them guess who is who.</p>

                    <input type="text"  placeholder="Enter Your Name" className="nameinput" />
                    <div className="devline"></div>
                    <p className="room">Create Room</p>
                    <p className="or">or</p>
                    <div className="linkcont">
                    <input type="text"  placeholder="Enter Link" className="linkinput" />
                    <button className="entbtn">Enter</button>
                    </div>
            </div>
            <div className="image">
                <img src={Lol} className="lolimg" />
            </div>
        </div>

    );
}

export default firstpage;
