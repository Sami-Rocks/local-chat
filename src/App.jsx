import { useEffect, useState } from 'react'
import MessageInput from './components/MessageInput';
import TextBubble from "./components/TextBubble";
import UserModal from './components/UserModal';
import { getUser } from './utils/utilities';

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
  const [ modal, toggleModal ] = useState(false)

  useEffect(()=>{

    if(!getUser()){
      toggleModal(true)
    }
    console.log(getUser())
  },[])

  const sendMessage = (e) => {
    e.preventDefault()
    let temp_messages = [...messages]
    const today = new Date()
    let minutes = today.getMinutes()
    let hour = today.getHours()
    const new_message = {user: getUser(), message: inputValue, type:'sender', time: hour+':'+minutes }

    temp_messages.push(new_message)
    setMessages(temp_messages)
  }

  return (
    <div className="w-screen h-screen ">
        
        <UserModal show={modal} toggle={toggleModal} />  
      <div className="w-auto md:rounded-xl mx-auto max-w-4xl h-screen relative bg-background p-4" >

        <div className="flex flex-col justify-end z-1 h-full pb-14" >
          {
            messages.map(data => (
              <TextBubble 
                key={data.time} 
                type={data.type} 
                message={data.message} 
                user={data.user} 
                time={data.time} />
            ))
          }
        </div>


        <MessageInput 
          sendMessage={sendMessage} 
          inputValue={inputValue} 
          setInputValue={setInputValue} />
      </div>
    </div>
  );
}

export default App;
