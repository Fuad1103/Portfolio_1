import { useEffect,useState } from "react";


function Github(){

const [repos,setRepos]=useState([]);


useEffect(()=>{


fetch(
  "https://api.github.com/users/fuadbinzafar/repos?sort=updated&per_page=6"
)

.then(res=>res.json())

.then(data=>setRepos(data.slice(0,6)))


},[]);



return(

<section className="py-20 px-6">

<h2 className="text-4xl font-bold text-center">
GitHub Projects
</h2>


<div className="
grid
md:grid-cols-3
gap-6
mt-10
">


{
repos.map(repo=>(

<div
key={repo.id}
className="
p-6
rounded-xl
shadow
bg-white
dark:bg-gray-900
"
>


<h3 className="font-bold text-xl">

{repo.name}

</h3>


<p>

{repo.description}

</p>


</div>

))
}


</div>


</section>

)

}


export default Github;