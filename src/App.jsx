import { useState } from 'react'
import TextBubble from "./components/TextBubble";

function App() {
  const [ inputValue, setInputValue ] = useState('')
  const [ messages, setMessages ] = useState([
    {
      user: 'Kofi',
      type: 'sender',
      message: 'Hello!',
      time: '21:00pm'
    },
    {
      user: 'Ama',
      type: 'reciever',
      message: 'lorem Ipsum',
      time: '21:10pm'
    },
  ])


  const sendMessage = (e) => {
    e.preventDefault()
    let temp_messages = [...messages]
    const today = new Date()
    let minutes = today.getMinutes()
    let hour = today.getHours()
    const new_message = {user: 'Kofi', message: inputValue, type:'sender', time: hour+':'+minutes }

    temp_messages.push(new_message)
    setMessages(temp_messages)
  }

  return (
    <div className="w-screen h-screen ">
      <div className="w-auto md:rounded-xl mx-auto max-w-4xl h-screen relative bg-background p-4" >

        <div className="flex flex-col justify-end z-1 h-full pb-14" >
          {
            messages.map(data => (
              <TextBubble key={data.time} type={data.type} message={data.message} user={data.user} time={data.time} />
            ))
          }
        </div>


        <div className="absolute left-0 bottom-0 z-10 w-full p-4 bg-background" >
          <form className="border border-primary overflow-hidden rounded-full flex justify-between items-center" >
            <input className="w-full outline-none py-2 px-4 bg-transparent" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" />
            <button type='submit' onClick={sendMessage} className="pr-4" >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="fill-primary bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
