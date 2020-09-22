import React, {useState} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import Logo from '../images/Lolios.png';
import Lol from '../images/lolimg.png';
import {uuid} from 'uuidv4';

const Home = ({history}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const handleRoom = () => {
        setRoom(uuid());
        if(!name || !room){
            alert('Name is required');
        }
        else{
            history.push(`/second?name=${name}&room=${room}`);
        }
    }
    return (
        <div className="firstpage">
            <div className="content1">
                <div className="headerfp">
                    <img src={Logo} className="logo1" alt='Logo' />
                    <p>Lolios</p>
                </div>

                    <p className="heading1">
                        Be Anyone, <br></br>Talk Anonymously
                    </p>
                    <p className="subhead">Enter in a chat room with your friends anonymously to let them guess who is who.</p>

                    <input type="text"  placeholder="Enter Your Name" className="nameinput" onChange={e => setName(e.target.value) }/>

                    <div className="devline"></div>

                    <p className="room" onClick={() => handleRoom()}>Create Room</p>
                    <p className="or">or</p>

                    <div className="linkcont">
                    <input type="text"  placeholder="Enter Link" className="linkinput" onChange={e => setRoom(e.target.value)} />
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} className="entbtn" to={`/second?name=${name}&room=${room}`}>
                        Enter
                    </Link>
                    </div>
            </div>
            <div className="image">
                <img src={Lol} className="lolimg" alt='mascot' />
            </div>
        </div>

    );
}

export default Home;