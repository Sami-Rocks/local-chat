import { useState } from "react"
import { setUser } from "../../utils/utilities"

const UserModal = ({show, toggle}) => {

    const [ username, setUsername ] = useState('')
    const [ error,  setError ] = useState('')

    const registerUser = (e) => {
        e.preventDefault()
        setError('')

        if(username.length < 3){
            setError('Username must be more that 3 characters')
            return
        }

        setUser(username)
        toggle(false)
    }

    return(
        <div className={`w-screen h-screen absolute z-20 bg-black bg-opacity-90 flex justify-center items-center ${ !show ? 'hidden' : 'block'}`}>
          <div className="w-80 h-fit rounded-xl bg-white p-8 ">


            <form className='w-full text-center' >
            {error && <p className="text-red border border-red bg-red bg-opacity-10 rounded-lg text-sm p-2 w-full text-center mb-2" >{error}</p>}
              <p className='pb-10' >What shoud we call you?</p>
              <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className='w-full py-3 px-4 rounded-lg' />
              <button  type="button" onClick={registerUser} className='py-3 px-4 bg-primary text-white rounded-lg w-full mt-10' >Start Chatting</button>
            </form>
          </div>
        </div>  
    )
}

export default UserModal