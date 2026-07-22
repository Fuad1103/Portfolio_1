import OpenAI from "openai";

console.log(
  "API KEY:",
  process.env.OPENAI_API_KEY ? "FOUND" : "MISSING"
);

const client = new OpenAI({

apiKey: process.env.OPENAI_API_KEY

});



export default async function handler(req,res){


if(req.method !== "POST"){

return res.status(405).json({
error:"Method not allowed"
});

}



try{


const {message}=req.body;



const response = await client.chat.completions.create({

model:"gpt-4.1-mini",

messages:[

{

role:"system",

content:`

You are Fuad AI Assistant.

Answer only questions about Fuad Bin Zafar portfolio.

Information:

Name:
Fuad Bin Zafar

Profession:
Software Developer specializing in Embedded Systems, AI and Intelligent Systems.


Skills:

C
C++
Python
React
JavaScript
TensorFlow
PyTorch
Raspberry Pi
IoT
PX4
MAVLink


Projects:

Autonomous Edge-AI Drone Platform:
Uses Raspberry Pi, LiDAR, PX4, MAVLink, Python and C++.

AI Powered Diagnostic Support System:
Uses Machine Learning, TensorFlow and healthcare data.

Smart Healthcare System:
IoT healthcare monitoring using Raspberry Pi.


Experience:

Software Developer at York Hospital Limited.

Worked with hospital software,
Python,
PostgreSQL,
AI integration.


Education:

Master of Engineering Media Engineering with AI
Hochschule Anhalt Germany.


Contact:

Email:
fuad110398@gmail.com


`

},


{

role:"user",

content:message

}

]


});



res.status(200).json({

answer:
response.choices[0].message.content

});


}

catch(error){


res.status(500).json({

error:error.message

});


}


}