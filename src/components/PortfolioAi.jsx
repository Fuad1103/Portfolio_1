import {useState} from "react";


const askAI = async () => {

  if (!question.trim()) {
    setAnswer("Please enter a question.");
    return;
  }

  setLoading(true);

  try {

    const res = await fetch("/api/chat", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        message: question
      })

    });


    const data = await res.json();

    console.log("AI RESPONSE:", data);


    if (data.answer) {
      setAnswer(data.answer);
    } else if (data.error) {
      setAnswer("Error: " + data.error);
    } else {
      setAnswer("No response received.");
    }


  } catch (error) {

    console.log("FETCH ERROR:", error);
    setAnswer("Connection error.");

  }


  setLoading(false);

};



return (

<div
className="
max-w-3xl
mx-auto
p-8
rounded-3xl
bg-white/10
backdrop-blur-xl
shadow-xl
"
>


<h2 className="
text-3xl
font-bold
dark:text-white
">

Ask Fuad AI 🤖

</h2>


<input

className="
w-full
mt-6
p-4
rounded-xl
"

placeholder="
Ask about my projects, skills...
"

value={question}

onChange={
e=>setQuestion(e.target.value)
}

/>


<button

onClick={askAI}

className="
mt-4
px-6
py-3
bg-cyan-500
rounded-xl
"

>

{
loading?
"Thinking..."
:
"Ask AI"
}


</button>



<p className="
mt-6
dark:text-white
leading-7
">

{answer}

</p>



</div>

);



export default PortfolioAi;
