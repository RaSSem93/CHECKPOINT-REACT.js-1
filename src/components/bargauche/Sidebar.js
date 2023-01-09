import React from 'react'
const presentation =[
  {id:1,
    name: "Zey-Bar Impossible",
    sousnom :"Zeybar-impossible",
    nombredevue:"33K    ",
    date :"il y'a 2 ans",
    video :"https://www.youtube.com/embed/3t4n6mWc48A"
  },
  {id:2,
    name: "MANCHESTER CITY",
    sousnom :"manchester",
    nombredevue:"2500vue",
    date :"il y'a 2 ans",
    video :"https://www.youtube.com/embed/8ut77K2YidI"
  },
  {id:3,
    name: "Barcelone",
    sousnom :"manchester",
    nombredevue:"190vue",
    date :"il y'a 2 ans",
    video :"https://www.youtube.com/embed/medpgtesTno"
  },
  {id:4,
    name: "Mortatha -Rayda",
    sousnom :"Album 2022",
    nombredevue:"6500Mvue",
    date :"il y'a 2 ans",
    video :"https://www.youtube.com/embed/giovp0bCEiM"
  }
]

const Sidebar = () => {
  return (
    <div class="Sidebar">
        <h1 class="titre"> Mon mix </h1>
        <h4 class="sous-titre">Youtube</h4>
        <div class="present">
          <h3 class="tou">Tous</h3>
          <h3 class="vid">Video similaire</h3>
          <h3 class="reg"> Regarde</h3>
        </div>

        {presentation.map(el=>

        <div class="side">
          <div>
          <iframe width="170" height="100" src={el.video} title="Emily and Gabriel | Hurts So Good" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div class="com">
           < h3> {el.name}</h3>
           <h4>{el.sousnom}</h4>
           <div class="dat">
            <h4>{el.nombredevue}</h4>
            <h4>{el.date}</h4>
           </div>
          </div>
        </div>
        )
}


    </div>
  )
}

export default Sidebar