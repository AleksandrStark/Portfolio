import './App.css';
import ProjectList from './Components/ProjectList';
import Toolbar from './Components/Toolbar';
import projects from './Components/Portfolio';
import { useState } from "react"


function App() {

 
  let [filter, setFilter]=useState("All");

  function selectFilter(selected){
  

      setFilter(()=>
      {
        filter=selected
        console.log(selected); 
        return filter
      }
      
      ) 
    
  }

  let portfolioProjects= projects.filter((el)=>{
    return el.category===filter
  })


  return (
    <>
    <div className="img">

      {projects.map(project=>{
      return (
      
      <ProjectList 
        key={Math.random()}
        category={project.category}
        img={project.img}
      />
      )
      })}

    </div>
   
      <Toolbar
        // filters={["All", "Websites", "Flayers", "Business Cards"]}
        // selected="All"
        onSelectFilter={selectFilter}/
    > 
    </>
 
  );
}

export default App;
