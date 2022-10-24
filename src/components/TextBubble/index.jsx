const TextBubble = ({ type, message, user, time }) => (
    <div className={` my-1 ${type === 'sender' ? 'self-end' :'' }`} >
        {
            type === 'reciever'? <p className="text-xs" >{user +', '+ time}</p> : <p className="text-xs" >{'you, '+ time}</p>
        }
        <div className={`
            max-w-lg w-fit py-2 px-4 rounded-2xl 
            ${type === 'sender' ? 'rounded-tr-md bg-white text-primary' : 'rounded-tl-md bg-primary text-white'} 
        `}>
          {message}
        </div>
    </div>
)

export default TextBubble