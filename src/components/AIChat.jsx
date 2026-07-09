import { useState } from "react";

function AIChat() {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role:"ai",
      text:"Hi 👋 I'm Fuad's AI assistant. Ask me anything!"
    }
  ]);


  const [input,setInput] = useState("");


  function sendMessage(){

    if(!input) return;


    setMessages([
      ...messages,
      {
        role:"user",
        text:input
      },
      {
        role:"ai",
        text:"Fuad is a React developer skilled in JavaScript, Tailwind CSS and modern web development 🚀"
      }
    ]);


    setInput("");

  }



  return (

    <div className="
    fixed
    bottom-6
    left-6
    z-50
    ">


      {
        open && (

          <div className="
          w-80
          bg-white
          dark:bg-gray-900
          shadow-xl
          rounded-xl
          p-4
          mb-3
          ">


            <div className="
            h-60
            overflow-y-auto
            space-y-3
            ">


            {
              messages.map((msg,index)=>(

                <p
                key={index}
                className={
                  msg.role==="user"
                  ?
                  "text-right text-blue-600"
                  :
                  "text-gray-700 dark:text-white"
                }
                >

                {msg.text}

                </p>

              ))
            }


            </div>



            <div className="flex gap-2 mt-3">

              <input

              value={input}

              onChange={(e)=>setInput(e.target.value)}

              className="
              border
              rounded
              px-3
              py-2
              w-full
              "

              placeholder="Ask me..."

              />


              <button

              onClick={sendMessage}

              className="
              bg-blue-600
              text-white
              px-3
              rounded
              "
              >

              ➤

              </button>


            </div>


          </div>

        )

      }



      <button

      onClick={()=>setOpen(!open)}

      className="
      bg-blue-600
      text-white
      w-14
      h-14
      rounded-full
      text-2xl
      shadow-lg
      "
      >

      🤖

      </button>


    </div>

  );
}


export default AIChat;