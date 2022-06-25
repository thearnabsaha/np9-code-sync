import { useEffect, useState } from 'react';
import DPA from '../../public/code-sync.png';
import Image from 'next/image';
import Avatar from 'react-avatar';
import Router from 'next/router';

import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';

const room = () => {
    const [roommates, setRoommates] = useState([
        {socketId:1,username:"Arnab Saha"},
        {socketId:2,username:"Swapan Saha"},
        {socketId:3,username:"Suborno Das"},
        {socketId:4,username:"Arijit Kundu"},
        {socketId:5,username:"Ambitama Saha"},
    ])
    useEffect(() => {
        const init=async()=>{
            // Codemirror.fromTextArea(document.getElementById("code"))
            // CodeMirror.EditorView()

        }
        init()

    }, [])
    
    return (
        <>
            <div id="room">
                <div className="container">
                    <div className="left">
                        <div className="imgBox">
                            <Image src={DPA} height="70" width="210"></Image>
                        </div>
                        <div className="roomBox">
                            <p>Connected</p>
                            <div className="avatar">
                                {
                                    roommates.map((e)=>{
                                        return(
                                            <>
                                                <div key={e.socketId}>
                                                    <Avatar name={e.username} size={80} round="14px" />
                                                    <h1>{e.username}</h1>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="buttons">
                            <button className='copy'>Copy Room ID</button>
                            <button onClick={()=>{Router.push("../")}} className="leave">Leave</button>
                        </div>
                    </div>
                    <div className="right" id='right'>
                        <CodeMirror value="" height="100vh" theme={dracula} extensions={[javascript({ jsx: true })]} placeholder="Start Typing JavaScript Here!!" 
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default room;