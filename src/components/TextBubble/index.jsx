const TextBubble = ({ type, message }) => (
        <div className={`
            max-w-lg w-fit my-1 py-2 px-4 rounded-2xl 
            ${type === 'user' ? 'rounded-tr-md self-end bg-white text-primary' : 'rounded-tl-md bg-primary text-white'} 
        `}>
          {message}
        </div>
)

export default TextBubble