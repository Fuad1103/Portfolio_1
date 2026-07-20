import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import Reveal from "./Reveal";


function About() {


const stats = [
  {
    number:"3+",
    title:"Years Software Engineering",
    icon:"⚙️"
  },
  {
    number:"15+",
    title:"Projects & Applications",
    icon:"🚀"
  },
  {
    number:"10+",
    title:"AI & Software Technologies",
    icon:"🤖"
  },
  {
    number:"2",
    title:"Master's Specializations",
    icon:"🎓"
  }
];



const timeline = [

{
year:"2026 – Current",

title:
"Master of Engineering in Media Engineering with AI",

description:
"Hochschule Anhalt, Germany • Specializing in Artificial Intelligence, Media Engineering, Machine Learning, and Intelligent Systems."
},


{
year:"2021 – 2022",

title:
"Master's in Data Science",

description:
"Maulana Abul Kalam Azad University of Technology, West Bengal, India • Studied Data Science, Machine Learning fundamentals, Data Analytics, and Statistical Computing."
},


{
year:"2017 – 2021",

title:
"B.Tech in Computer Science & Engineering",

description:
"Maulana Abul Kalam Azad University of Technology, India • Thesis: Mobile Voting System Based on Fingerprint Recognition."
}


];



return (

<Reveal>

<section

id="about"

className="
py-24
px-6

bg-gradient-to-br
from-slate-100
via-blue-50
to-slate-200

dark:from-slate-900
dark:via-slate-800
dark:to-blue-950
"

>


<div className="max-w-7xl mx-auto">



{/* Heading */}


<motion.div

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="text-center"

>


<h2

className="
text-5xl
font-bold
text-gray-900
dark:text-white
"

>

About Me 👨‍💻

</h2>



<p

className="
mt-4
text-gray-600
dark:text-gray-400
"

>

Get to know me and my Education Background

</p>


</motion.div>





{/* Main Section */}



<div

className="
grid
grid-cols-1
lg:grid-cols-2
gap-10
mt-16
"

>




{/* Profile Card */}



<motion.div


initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="

min-h-[650px]

bg-white/70

dark:bg-white/10

backdrop-blur-xl

border

border-gray-200

dark:border-white/20

rounded-3xl

p-8

shadow-xl

flex

flex-col

justify-center

"

>



<div

className="
flex
items-center
gap-5
flex-wrap
"

>


<img

src={profile}

alt="Fuad"

className="
w-26
h-28
rounded-full
border-4
border-cyan-400
object-contain
bg-white
dark:bg-slate-800
"

/>



<div>


<h3

className="
text-3xl
font-bold
text-gray-900
dark:text-white
"

>

Fuad Bin Zafar

</h3>



<p

className="
text-cyan-500
font-semibold
mt-2
"

>

Embedded Software Developer | AI-Driven Intelligent Systems

</p>


</div>


</div>





<p

className="
mt-8
leading-8
text-gray-700
dark:text-gray-300
"

>


I am passionate about developing embedded software systems
and integrating Artificial Intelligence to create intelligent,
efficient, and autonomous solutions.

<br/><br/>

With a background in Computer Science, Data Science, and
AI engineering, I focus on combining software development,
machine learning, and intelligent systems to build innovative
technology for real-world applications.


</p>



</motion.div>






{/* Education Timeline */}



<motion.div


initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}


className="
space-y-6
"

>



{

timeline.map((item,index)=>(


<motion.div

key={index}

whileHover={{
scale:1.02
}}

className="

bg-white/80

dark:bg-white/10

backdrop-blur-xl

border

border-gray-200

dark:border-white/20

rounded-3xl

p-6

shadow-xl

"

>


<span

className="
text-cyan-500
font-bold
text-xl
"

>

{item.year}

</span>



<h3

className="
text-xl
md:text-2xl
font-bold
mt-3
text-gray-900
dark:text-white
"

>

{item.title}

</h3>



<p

className="
mt-4
leading-7
text-gray-600
dark:text-gray-300
"

>

{item.description}

</p>



</motion.div>


))


}



</motion.div>



</div>







{/* Statistics */}



<div

className="
grid
grid-cols-2
md:grid-cols-4
gap-6
mt-16
"

>


{

stats.map((stat,index)=>(


<motion.div


key={index}


whileHover={{
scale:1.05
}}


className="

bg-white/70

dark:bg-white/10

backdrop-blur-xl

border

border-gray-200

dark:border-white/20

rounded-3xl

p-8

shadow-xl

"

>


<div className="text-4xl">

{stat.icon}

</div>



<h3

className="
text-4xl
font-bold
text-cyan-500
mt-3
"

>

{stat.number}

</h3>



<p

className="
mt-2
text-gray-700
dark:text-gray-300
"

>

{stat.title}

</p>



</motion.div>


))


}



</div>



</div>



</section>


</Reveal>

);


}


export default About;