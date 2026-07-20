import { motion } from "framer-motion";

import projects from "../data/projects";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



function FeaturedProject(){



const featuredProjects = projects.filter(
(project)=> project.featured === true
);



return(


<section

id="featured"

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

Featured Projects 🚀

</h2>



<p

className="
mt-4
text-gray-600
dark:text-gray-400
"

>

My most important AI, Embedded and Software projects

</p>


</motion.div>







<div className="mt-14">



<Swiper


modules={[
Navigation,
Pagination,
Autoplay
]}


navigation


pagination={{
clickable:true
}}


autoplay={{

delay:4500,

disableOnInteraction:false,

pauseOnMouseEnter:true

}}


loop={true}


spaceBetween={30}


slidesPerView={1}


className="pb-14"

>



{

featuredProjects.map((project,index)=>(


<SwiperSlide key={index}>


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


whileHover={{
scale:1.02
}}



className="

grid

md:grid-cols-2

gap-10

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





{/* Image */}


<img

src={project.image}

alt={project.title}

className="

rounded-2xl

w-full

h-80

md:h-96

object-cover

"

/>







{/* Content */}


<div

className="
flex
flex-col
justify-center
"

>


<h3

className="
text-3xl
md:text-4xl
font-bold

text-gray-900
dark:text-white

"

>

{project.title}

</h3>





<p

className="
mt-5

text-gray-600

dark:text-gray-300

leading-8

"

>

{project.description}

</p>







{/* Technologies */}


<div

className="
flex
flex-wrap
gap-3
mt-6
"

>


{

project.technologies.map((tech)=>(


<span

key={tech}

className="

px-4
py-2

rounded-full

bg-cyan-100

text-cyan-700

dark:bg-cyan-500/20

dark:text-cyan-300

font-semibold

text-sm

"

>

{tech}

</span>


))


}


</div>









{/* Buttons */}


<div

className="
flex
gap-5
mt-8
"

>


<a

href={project.demo}

target="_blank"

rel="noopener noreferrer"

className="

px-6

py-3

rounded-xl

bg-gradient-to-r

from-cyan-400

to-blue-500

text-black

font-bold

hover:scale-105

transition

"

>

Live Demo

</a>




<a

href={project.github}

target="_blank"

rel="noopener noreferrer"

className="

px-6

py-3

rounded-xl

border

border-cyan-400

text-cyan-600

dark:text-cyan-300

hover:bg-cyan-500

hover:text-black

transition

"

>

GitHub

</a>



</div>



</div>



</motion.div>



</SwiperSlide>


))


}



</Swiper>



</div>






</div>


</section>


);


}


export default FeaturedProject;