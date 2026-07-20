import { useEffect, useState } from "react";


function Github(){

const [repos,setRepos]=useState([]);


useEffect(()=>{


fetch(
"https://api.github.com/users/fuadbinzafar/repos?sort=updated&per_page=6"
)

.then(res=>res.json())

.then(data=>{

if(Array.isArray(data)){

setRepos(data);

}

})

.catch(error=>{

console.log(error);

});


},[]);



return(

<section className="
py-20
px-6
bg-gradient-to-br
from-slate-100
to-blue-50
dark:from-slate-900
dark:to-blue-950
">


<h2 className="
text-5xl
font-bold
text-center
dark:text-white
">

GitHub Projects 💻

</h2>



<div className="
grid
md:grid-cols-3
gap-6
mt-12
">


{

repos.map(repo=>(

<div

key={repo.id}

className="
p-6
rounded-2xl
bg-white/70
dark:bg-white/10
border
border-gray-200
dark:border-white/20
shadow-xl
"

>


<h3 className="
text-xl
font-bold
dark:text-white
">

{repo.name}

</h3>


<p className="
mt-3
text-gray-600
dark:text-gray-300
">

{repo.description || "No description available"}

</p>


<a

href={repo.html_url}

target="_blank"

rel="noopener noreferrer"

className="
inline-block
mt-5
text-cyan-500
font-semibold
"

>

View Repository →

</a>


</div>


))


}


</div>


</section>


)

}


export default Github;