import React, {useEffect, useState} from 'react';
import './Second.css';
import Logo from '../images/Lolios.png';
import girl from '../images/girl.png';
import queryString from 'query-string';
import io from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom';

let socket;

const Second = ({history,location}) => {
    // const URL = 'localhost:5000';
    const URL = 'https://lolios-api.herokuapp.com';
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [usersList, setUsers] = useState([]);

    useEffect(() => {
        const {name , room} = queryString.parse(location.search);

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
            setMessages([...messages, message]);
        });
    }, [messages]);

    useEffect(() => {
        socket.on('roomData', ({users}) => {
            setUsers(users);
        });
    }, [usersList]);

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
                    <ScrollToBottom>
                        {
                            messages && messages.map(message => message.user === name.toLowerCase() ?
                                (
                                    <div className='authorDiv'>
                                        <p>{message.text}</p>
                                    </div>
                                ) :
                                (
                                    <div className='guestDiv'>
                                        <p><span className='guestName'>{message.user.charAt(0).toUpperCase()+message.user.slice(1)}</span>{' : ' + message.text}</p>
                                    </div>
                                ))
                        }
                    </ScrollToBottom>
                </div>
                <div className="chatarea">
                    <input type="text" id="typesomething" placeholder="Type your message.." maxLength="100" onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} value={message} />
                    <p className="Send" onClick={e => sendMessage(e)}>Send</p>
                </div>
            </div>
            <div className="memberside">
                <div className="member">Members</div>
                <div className="membersname">
                    {
                        usersList.map(userInfo => (<p key={userInfo.id}>{userInfo.name.charAt(0).toUpperCase()+userInfo.name.slice(1)}</p>))
                    }
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
