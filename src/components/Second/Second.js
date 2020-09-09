import React from 'react';
import './Second.css';
import Logo from '../images/Lolios.png';
import girl from '../images/girl.png';

const Second = () => {
    return (
        <div className="main-page">
            <div className="logoside">
                <div className="upperside">
                    <div className="logo">
                        <img src={Logo} className="logo2" alt='Logo' />
                        <p>Lolios</p>
                    </div>
                </div>
                <div className="lowerside">
                    <img src={girl} alt="load" />
                </div>
            </div>
            <div className="chatside">
                <div className="chatarea">
                    <div className="messages">
                        <p className="sender1">Hey there..</p>
                    </div>
                    <input type="text" id="typesomething" placeholder="Type something" maxLength="100" />
                    <p className="Send">Send</p>
                </div>
            </div>
            <div className="memberside">
                <div className="member">Members</div>
                <div className="membersname">
                    <p>Daddy</p>
                    <p>Mommy</p>
                    <p>Papa ki Pari</p>
                    <p>Papa ka Para</p>
                </div>
                <div className="linkside">
                    <div className="link">Group Link</div>
                    <div className="LINK">cgfhchsjjxj</div>
                    <div className="leaveroom">Leave Room</div>
                </div>
            </div>
        </div>
    );
}

export default Second;
