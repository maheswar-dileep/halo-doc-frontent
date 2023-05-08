import React from 'react';

function ChatCard({ message, id }) {
  return (
    <>
      <div>hello</div>
      {message
        && message?.map((msg,index) => (id === msg.sender ? (
          <div key={index} className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex items-center justify-start flex-row-reverse">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                A
              </div>
              <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                <div>{msg.text}</div>
              </div>
            </div>
          </div>
        ) : (
          <div key={msg.id} className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flex-row items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                A
              </div>
              <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <div>{msg.text}</div>
              </div>
            </div>
          </div>
        )))}
    </>
  );
}

export default ChatCard;
