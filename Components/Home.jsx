import Router from 'next/router';
import {v4 as uuidv4} from "uuid"
import {toast,Toaster} from "react-hot-toast"
import Image from 'next/image';
import DPA from '../public/code-sync.png';
import { useState } from "react";
const Home = () => {
    const [newId, setnewId] = useState("")
    const [username, setUsername] = useState("")
    const newRoom =(e)=>{
        e.preventDefault()
        const id = uuidv4()
        setnewId(id)
        toast.success(`Created ROOM ID ${id}`)
    }
    const joinRoom=(e)=>{
        e.preventDefault()
        if(!newId||!username){
            toast.error("USERNAME OR ROOM ID REQUIRED!!!")
        }else{
            Router.push({
                pathname:`./room/${newId}`,
                state:{
                    username,newId
                }
            });
        }
    }
    const HandleInputEnter=(e)=>{
        if(e.code=="Enter"){
            joinRoom()
        }
    }
    return (
        <>
            <div>
                <Toaster  position="top-right" toastOptions={{className:"toaster",sucess:{theme:{primary:"#4aee88",},},}}></Toaster>
            </div>
            <div id="home">
                <div className="container">
                    <div className="imgBox">
                        <Image src={DPA} height="100" width="300"></Image>
                    </div>
                    <h5>Paste Your Invitation ROOM ID</h5>
                    <form>
                        <input type="text" placeholder="ROOM ID" value={newId} onChange={(e)=>{setnewId(e.target.value)}}/>
                        <input type="text" placeholder="USERNAME" value={username} onChange={(e)=>{setUsername(e.target.value)}} onKeyUp={HandleInputEnter}/>
                        <button type="submit" onClick={joinRoom}>Join</button>
                    </form>
                    <p>If you don't have a room then <a href='#' onClick={newRoom}>Create!</a></p>
                </div>
                    <h6>Built with ❤️ by <a href="https://github.com/thearnabsaha">TheArnabSaha</a></h6>
            </div>
        </>
    );
}

export default Home;