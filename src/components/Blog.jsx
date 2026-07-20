import { motion } from "framer-motion";

import Reveal from "./Reveal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


function Blog() {


const posts = [

{
title:"How I Learned React",

description:
"My journey of learning React, components, hooks, and building real-world applications using modern frontend development practices.",

category:"React Development",

link:"https://react.dev/learn"

},


{
title:"Building My First Portfolio",

description:
"How I designed and developed a responsive developer portfolio using React, Tailwind CSS, and Framer Motion with modern UI principles.",

category:"Frontend Development",

link:"https://developer.mozilla.org/en-US/docs/Learn"

},


{
title:"JavaScript Tips",

description:
"Important JavaScript concepts, ES6 features, and programming techniques that helped me improve my software development skills.",

category:"JavaScript",

link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"

},


{
title:"Getting Started with Embedded AI",

description:
"Exploring embedded systems, Raspberry Pi, sensors, and Artificial Intelligence integration for intelligent edge devices.",

category:"Embedded Systems",

link:"https://www.raspberrypi.com/documentation/"

},


{
title:"Building Autonomous Systems",

description:
"My experience working with robotics, drones, sensor processing, and intelligent autonomous technologies.",

category:"AI & Robotics",

link:"https://docs.px4.io/main/en/"

}

];




return (

<Reveal>


<section

id="blog"

className="

py-24

px-6

bg-white

dark:bg-gray-950

transition-colors

duration-500

"

>


<div className="max-w-screen-2xl mx-auto px-4">



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

className="text-center mb-14"

>


<h2

className="

text-5xl

font-bold

text-gray-900

dark:text-white

"

>

Latest Articles ✍️

</h2>



<p

className="

mt-4

text-gray-600

dark:text-gray-300

"

>

Sharing knowledge about software development, AI, embedded systems and technology.

</p>



</motion.div>





{/* Swiper Blog Cards */}


<Swiper

modules={[Navigation]}

navigation

spaceBetween={30}


breakpoints={

{


// Mobile

0:{

slidesPerView:1,

},


// Tablet

768:{

slidesPerView:2,

},


// Desktop

1280:{

slidesPerView:3,

}


}

}


>



{

posts.map((post,index)=>(


<SwiperSlide key={index}>


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


whileHover={{

y:-10,

scale:1.03

}}



className="

h-[250px]

bg-gray-100

dark:bg-gray-900

rounded-3xl

p-8

shadow-lg

hover:shadow-2xl

transition

flex

flex-col

border

border-gray-200

dark:border-gray-800

"

>


{/* Category */}


<span

className="

text-sm

font-semibold

text-cyan-500

"

>

{post.category}

</span>





{/* Title */}


<h3

className="

mt-4

text-2xl

font-bold

text-gray-900

dark:text-white

leading-tight

"

>

{post.title}

</h3>





{/* Description */}


<p

className="

mt-4

text-gray-600

dark:text-gray-300

leading-7

flex-1

"

>

{post.description}

</p>





{/* Button */}


<a

href={post.link}

target="_blank"

rel="noopener noreferrer"

className="
mt-6
text-left
text-blue-600
dark:text-blue-400
font-semibold
hover:underline
"

>

Read More →

</a>



</motion.div>


</SwiperSlide>


))


}


</Swiper>




</div>


</section>


</Reveal>


);


}


export default Blog;