import { useContext, useEffect } from "react";
import { useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "./../context/AuthContext";
import { ChatContext } from "./../context/ChatContext";
import { db } from "../firebase";

function Chats() {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const handleSelect = (u)=>{
    dispatch({type:"CHANGE_USER",payload:u})
    console.log(u);
  }
  const [chats, setChats] = useState([]);
  useEffect(
    function () {
      const getChats = () => {
        const unsub = onSnapshot(
          doc(db, "userchats", currentUser.uid),
          (doc) => {
            setChats(doc.data());
          }
        );
        return () => unsub();
      };
      return ()=>{
         getChats()
      }
    },
    [currentUser]
  );
  return (
    <div className="chats">
      {Object?.entries(chats)?.map((chat) => {
        return (
          <>
            { chat[1]?.displayName &&
              <div className="userChat" key={chat[0]} onClick={()=>handleSelect(chat[1].uid)}>
                <img src={`${chat[1].photoURL}`} alt="" />
                <div className="userChatInfo">
                  <span>{chat[1].displayName}</span>
                  <p>{chat[1].lastMessage?.text}</p>
                </div>
              </div>
            }
          </>
        );
      })}
    </div>
  );
}

export default Chats;
