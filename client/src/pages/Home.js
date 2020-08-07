import React from 'react'
import ChatsList from '../components/ChatsList'
import Chats from '../components/Chats'

const Home = () => {
    return (
        <div className='grid-2'>
            <div>
                <ChatsList />
            </div>
            <div>
              <Chats />
            </div>
        </div>
    )
}

export default Home
