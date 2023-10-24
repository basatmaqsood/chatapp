import {IoIosAttach as Attach} from "react-icons/io"
import {BiSolidImage as Image} from "react-icons/bi"
function input() {
    return (
        <div className="input">
            <input type="text" placeholder="Type your Message" />
            <div className="send">
                    <Image/>
                <input type="file" style={{display:"none"}} id="file" />
                <label htmlFor="file">
                    <Attach/>
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default input
