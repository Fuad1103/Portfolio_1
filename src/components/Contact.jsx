import { motion } from "framer-motion";
import Reveal from "./Reveal";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";


function Contact() {


return (

<Reveal>


<section

id="contact"

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
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.6
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

Contact Me 📩

</h2>


<p

className="
mt-4
max-w-2xl
mx-auto
text-gray-600
dark:text-gray-400
"

>

I am open to opportunities in Embedded Systems,
Artificial Intelligence, Frontend Development,
and Intelligent Software Solutions.

</p>


</motion.div>






<div

className="
grid
grid-cols-1
lg:grid-cols-2
gap-12
mt-14
"

>





{/* Contact Information */}


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



{/* Availability */}


<div

className="
inline-flex
px-4
py-2
rounded-full

bg-green-100
text-green-700

dark:bg-green-500/20
dark:text-green-400

font-semibold
text-sm
"

>

🟢 Available for new opportunities

</div>





<h3

className="
mt-6
text-3xl
font-bold

text-gray-900

dark:text-white

"

>

Let's Work Together 🚀

</h3>




<p

className="
mt-4
text-gray-600

dark:text-gray-300

leading-7

"

>

I enjoy building intelligent systems by combining
software engineering, artificial intelligence,
and embedded technologies.

</p>







<div

className="
mt-8
space-y-5

"

>




{/* Email */}


<a

href="https://mail.google.com/mail/?view=cm&fs=1&to=fuad110398@gmail.com"

target="_blank"

rel="noopener noreferrer"

className="

flex
items-center
gap-4

p-5

min-h-[90px]

rounded-xl

bg-white

dark:bg-white/10

shadow

hover:scale-105

transition

"

>


<FaEnvelope

className="
text-3xl
text-cyan-500
"

/>


<div>


<h4

className="
font-bold
text-gray-900
dark:text-white
"

>

Email

</h4>


<p

className="
text-gray-500
dark:text-gray-300
"

>

fuad110398@gmail.com

</p>


</div>


</a>







{/* Github */}


<a

href="https://github.com/Fuad1103"

target="_blank"

rel="noopener noreferrer"

className="

flex
items-center
gap-4

p-5

min-h-[90px]

rounded-xl

bg-white

dark:bg-white/10

shadow

hover:scale-105

transition

"

>


<FaGithub

className="
text-3xl
text-gray-900
dark:text-white
"

/>


<div>


<h4

className="
font-bold
text-gray-900
dark:text-white
"

>

GitHub

</h4>


<p

className="
text-gray-500
dark:text-gray-300
"

>

Fuad1103

</p>


</div>


</a>







{/* LinkedIn */}


<a

href="https://linkedin.com/in/fuad1103"

target="_blank"

rel="noopener noreferrer"

className="

flex
items-center
gap-4

p-5

min-h-[90px]

rounded-xl

bg-white

dark:bg-white/10

shadow

hover:scale-105

transition

"

>


<FaLinkedin

className="
text-3xl
text-blue-600
"

/>


<div>


<h4

className="
font-bold
text-gray-900
dark:text-white
"

>

LinkedIn

</h4>


<p

className="
text-gray-500
dark:text-gray-300
"

>

fuad1103

</p>


</div>


</a>




</div>


</motion.div>








{/* Contact Form */}



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




<h3

className="
text-3xl
font-bold
text-gray-900
dark:text-white
mb-6
"

>

Send Message ✉️

</h3>





<form

className="
space-y-5
"

>


<input

type="text"

placeholder="Your Name"

className="

w-full

px-5

py-4

rounded-xl

bg-white

dark:bg-white/10

border

border-gray-200

dark:border-white/20

outline-none

text-gray-900

dark:text-white

"

/>





<input

type="email"

placeholder="Your Email"

className="

w-full

px-5

py-4

rounded-xl

bg-white

dark:bg-white/10

border

border-gray-200

dark:border-white/20

outline-none

text-gray-900

dark:text-white

"

/>







<textarea

rows="6"

placeholder="Your Message"

className="

w-full

px-5

py-4

rounded-xl

bg-white

dark:bg-white/10

border

border-gray-200

dark:border-white/20

outline-none

text-gray-900

dark:text-white

"

/>







<button

type="submit"

className="

w-full

py-4

rounded-xl

bg-gradient-to-r

from-cyan-400

to-blue-500

text-white

font-bold

hover:scale-105

transition

duration-300

shadow-lg

hover:shadow-cyan-500/40

"

>

Send Message 🚀

</button>



<p

className="
text-center
mt-5
text-sm
text-gray-500
dark:text-gray-400
"

>

I usually respond within 24-48 hours.

</p>



</form>




</motion.div>






</div>



</div>



</section>


</Reveal>


);


}


export default Contact;