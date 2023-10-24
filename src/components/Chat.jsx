import {BsCameraVideoFill  as Camera } from "react-icons/bs"
import {FaUserFriends  as Friend } from "react-icons/Fa"
import {BsThreeDots  as ThreeDot } from "react-icons/bs"
import Messages from "./Messages"
import Input from "./input"


function Chat() {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Basat</span>
                <div className="chatIcons">
                    <Camera/>
                    <Friend/>
                    <ThreeDot/>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat
