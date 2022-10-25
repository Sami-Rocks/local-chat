export const setUser = (user) => {
    sessionStorage.setItem('user', user)
}
export const getUser = () => {
    return sessionStorage.getItem('user') || null
}

export const updateMessages = (message) => {
    let messages = getMessages()
    messages.push(message)

    localStorage.setItem('messages', JSON.stringify(messages))
    window.dispatchEvent(new Event("storage"));
}

export const getMessages = () => {
    return JSON.parse(localStorage.getItem('messages')) || []
}