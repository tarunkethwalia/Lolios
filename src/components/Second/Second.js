import React, {useEffect, useState} from 'react';
import './Second.css';
import Logo from '../images/Lolios.png';
import girl from '../images/girl.png';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Second = ({history,location}) => {
    // const URL = 'https://goofy-heisenberg-d7d5ce.netlify.app';
    const URL = 'https://lolios-api.herokuapp.com';
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const {name , room} = queryString.parse(location.search);
        const element = document.getElementById("messageDiv");
        element.scrollTop = element.scrollHeight;

        setName(name);
        setRoom(room);

        socket = io(URL);

        socket.emit('join', {name, room}, () => {});

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [URL, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            console.log(message);
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className="main-page">
            <div className="logoside">
                <div className="upperside">
                    <div className="logo">
                        <img src={Logo} className="logo2" alt='Logo' onClick={() => history.push('/')} />
                        <p onClick={() => history.push('/')}>Lolios</p>
                    </div>
                </div>
                <div className="lowerside">
                    <img src={girl} alt="load" />
                </div>
            </div>
            <div className="chatside">
                {/*Fix this div*/}
                <div className="messages" id='messageDiv'>
                    {/*<p className="sender1">Hey there..</p>*/}
                    {
                        messages && messages.map(message => message.user === name.toLowerCase() ?
                            (
                                <div className='authorDiv'>
                                    <p>{message.text}</p>
                                </div>
                            ) :
                            (
                                <div className='guestDiv'>
                                    <p><span className='guestName'>{message.user}</span>{' : ' + message.text}</p>
                                </div>
                            ))
                    }
                </div>
                <div className="chatarea">
                    <input type="text" id="typesomething" placeholder="Type your message.." maxLength="100" onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} value={message} />
                    <p className="Send" onClick={e => sendMessage(e)}>Send</p>
                </div>
            </div>
            <div className="memberside">
                <div className="member">Members</div>
                <div className="membersname">
                    <p>Silly</p>
                    <p>Sassy</p>
                    <p>Akansha</p>
                    <p>Chris</p>
                    <p>Rishav</p>
                </div>
                <div className="link">Group Link</div>
                <div className="linkside">
                    <div className="LINK">{room}</div>
                    <div className="leaveroom" onClick={() => history.push('/')}>Leave Room</div>
                </div>
            </div>
        </div>
    );
}

export default Second;
