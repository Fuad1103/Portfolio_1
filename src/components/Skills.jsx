import { motion } from "framer-motion";
import Reveal from "./Reveal";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiTypescript
} from "react-icons/si";


function Skills() {


  const skills = [

{
category:"Programming Languages",
icon:"💻",
items:[
"C",
"C++",
"Python"
]
},

{
category:"Artificial Intelligence & Machine Learning",
icon:"🤖",
items:[
"TensorFlow",
"PyTorch",
"Keras",
"Scikit-learn",
"NumPy",
"Pandas"
]
},

{
category:"Embedded Systems & Hardware",
icon:"⚙️",
items:[
"Raspberry Pi",
"GPIO Programming",
"IoT Sensor Integration",
"Signal Processing"
]
},

{
category:"Robotics & Autonomous Systems",
icon:"🚁",
items:[
"Autonomous Systems",
"Sensor Fusion",
"Robot Algorithms",
"Intelligent Robotics"
]
},
{
  category:"Web Development & Modern Frameworks",
  icon:"🌐",
  items:[
    "JavaScript",
    "React.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Vite"
  ]
},
{
category:"Development Tools",
icon:"🛠️",
items:[
"Jupyter Notebook",
"VS Code",
"Git",
"GitHub",
"Linux",
"Docker"
]
}

];



  return (
     <Reveal>

    <section

      id="skills"

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


      <div className="
      max-w-7xl
      mx-auto
      ">



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

          className="
          text-center
          "

        >


          <h2 className="
          text-5xl
          font-bold
          text-gray-900
          dark:text-white
          ">

            Technical Skills & Technologies ⚡

          </h2>



          <p className="
          mt-4
          text-gray-600
          dark:text-gray-400
          ">

            Technologies and tools I use to build modern applications.

          </p>


        </motion.div>





        {/* Skills Cards */}


        <div className="

        grid

        sm:grid-cols-2

        lg:grid-cols-3

        gap-8

        mt-14

        ">


          {
            skills.map((skill,index)=>(

                <motion.div

                    key={index}

                    className="
                    bg-white/70
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


                <div className="text-4xl">
{skill.icon}
                </div>


                <h3 className="
                text-xl
                font-bold
                mt-4
                text-gray-900
                dark:text-white
                ">

                {skill.category}

                </h3>



                <div className="
                mt-4
                flex
                flex-wrap
                gap-3
                ">


                {
                skill.items.map((item,i)=>(

                <span

                key={i}

                className="
                px-4
                py-2
                rounded-full
                bg-white/70
                dark:bg-white/10
                backdrop-blur-md
                text-gray-800
                dark:text-white
                border
                border-gray-200
                dark:border-white/20
                font-medium
                shadow-sm
                "

                >

                {item}

                </span>

                ))
            }


            </div>


            </motion.div>

            ))
        }



        </div>



      </div>


    </section>
    </Reveal>

  );

}


export default Skills;