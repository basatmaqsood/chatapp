import Message from "./Message";
function Messages() {
  return (
    <div className="messages">
      <Message owner={"owner"} content={"hi"}/>
      <Message content={"yes"} />
      <Message content={"whats up?"} owner={"owner"}/>
      <Message content={"Nothing important. Whats up with you?"}/>
      <Message content={"Just chilling with boiz"} owner={"owner"}/>
      <Message content={"great!"}/>
      <Message content={"when are you going to Islamabad?"} owner={"owner"}/>
      <Message content={"Tomorrow. You wanna join?"}/>
      <Message content={"Yeah!"} owner={"owner"}/>
      <Message content={"Great! lets see you tomorrow"}/>
    </div>
  );
}

export default Messages;
