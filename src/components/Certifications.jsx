import { motion } from "framer-motion";

import certifications from "../data/certifications";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


function Certifications(){


return (

<section

id="certifications"

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

transition={{
duration:0.7
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

Certifications 🏆

</h2>



<p

className="

mt-4

text-gray-600

dark:text-gray-400

"

>

Professional certificates and achievements

</p>



</motion.div>





{/* Swiper */}


<div className="mt-14">


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

},


}

}



>



{

certifications.map((certificate,index)=>(


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

h-[560px]

bg-white/70

dark:bg-white/10

backdrop-blur-xl

border

border-gray-200

dark:border-white/20

rounded-3xl

overflow-hidden

shadow-xl

flex

flex-col

"

>


{/* Certificate Image */}


<img

src={certificate.image}

alt={certificate.title}

className="

w-full

h-56

object-cover

flex-shrink-0

"

/>





{/* Content */}


<div

className="

p-6

flex

flex-col

flex-1

"

>


<h3

className="

text-xl

font-bold

text-gray-900

dark:text-white

leading-tight

"

>

{certificate.title}

</h3>





<p

className="

mt-3

text-cyan-600

dark:text-cyan-400

font-semibold

"

>

{certificate.issuer}

</p>





{/* Description */}


<ul

className="

mt-4

space-y-2

text-sm

text-gray-700

dark:text-gray-300

leading-6

flex-1

"

>


{

certificate.description.map((point,index)=>(


<li key={index}>

• {point}

</li>


))


}


</ul>





{/* Button */}


<a

href={certificate.link}

target="_blank"

rel="noopener noreferrer"


className="

mt-auto

px-5

py-2

rounded-xl

bg-cyan-500

text-black

font-semibold

text-center

hover:bg-cyan-600

transition

"

>

View Certificate

</a>



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


export default Certifications;