import { getUser } from "../../utils/utilities"

const TextBubble = ({ message, user, time }) => (
    <div className={` my-1 ${user === getUser() ? 'self-end' :'' }`} >
        {
           user !== getUser() ? <p className="text-xs" >{user +', '+ time}</p> : <p className="text-xs" >{'you, '+ time}</p>
        }
        <div className={`
            max-w-lg w-fit py-2 px-4 rounded-2xl 
            ${user ===  getUser() ? 'rounded-tr-md bg-white text-primary' : 'rounded-tl-md bg-primary text-white'} 
        `}>
          {message}
        </div>
    </div>
)

export default TextBubble