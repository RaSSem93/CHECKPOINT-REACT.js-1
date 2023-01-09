import React from 'react'
import './Main.css';
const commentaire =[
  {id:1,
    name: "Rassem",
    comment :"Very beautiful girl",
    image :"https://yt3.ggpht.com/ytc/AMLnZu9hU5KG9lfqHokVWzbr3ZufmdJw65swxQimacziOw=s48-c-k-c0x00ffffff-no-rj",
    date :"il y'a 2 ans"

  },
  {id:2,
    name: "Rassem",
    comment :"Very beautiful girl",
    image :"https://yt3.ggpht.com/ytc/AMLnZu9hU5KG9lfqHokVWzbr3ZufmdJw65swxQimacziOw=s48-c-k-c0x00ffffff-no-rj",
    date :"il y'a 2 ans"

  },
  {id:3,
    name: "Nessrine",
    comment :"Very beautiful girl",
    image :"https://yt3.ggpht.com/ytc/AMLnZu9hU5KG9lfqHokVWzbr3ZufmdJw65swxQimacziOw=s48-c-k-c0x00ffffff-no-rj",
    date :"il y'a 1 ans"

  },
  {id:4,
    name: "lam3ii",
    comment :"it's good player",
    image :"https://yt3.ggpht.com/ytc/AMLnZu9hU5KG9lfqHokVWzbr3ZufmdJw65swxQimacziOw=s48-c-k-c0x00ffffff-no-rj",
    date :"il y'a 2 heures"

  }
]
const Main = () => {
  return (

    <div class="main"> 
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TwFUvvuya5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <h1 class="titre1">ZeyBar_Kalbimin Tek Sahibine</h1>
    <div className='channel'>
        <div>
            <img class="rassem" src='https://yt3.ggpht.com/ytc/AMLnZu-XvLlfDHL6twdcAQKzd0HrQxftCd3wwfdi2Ssz=s48-c-k-c0x00ffffff-no-rj'/>
        </div>
        <div>
           < h4 className='tit1'> Shipplandia</h4>
           <h5 className='tit2'>yoytube1</h5>
        </div>
        <div className='abonne'>
            <h3>S'abonner</h3>

        </div>
        <div className='gauche'>
         <div className='gauch'>
        <i class="fa-solid fa-thumbs-up"></i>
        <h3>6.7K</h3>
        </div>
        <div>
        <i class="fa-solid fa-thumbs-down"></i>
        </div>
        </div>
        <div className='part'>
          
        <i class="fa-solid fa-share"></i>
          <h3>partager</h3>
        </div>
        
    </div>
    <div className="para">
          <p>
          447 483 vues  14 août 2020 <br/>
          Série: Eye Candy (2015) <br/>
          Atores: Victoria Justice, Ryan Cooper<br/>
          Coloring: Astible by Lean <br/>
          </p>
        </div>
        
        
        <div className='comm' >
          <div> 
            <img class="imgcomm" src='https://yt3.ggpht.com/yti/AJo0G0kRGbLkeDJD-9Wb5Bi93PoxmLWrC1JDpPlolg=s48-c-k-c0x00ffffff-no-rj'/>
          </div>
          <div>
          <input className='inp' type="text" id="name" name="name" required size="60" placeholder='Ajouter un commentaire'/>
          </div>

        </div>
        <div>
        {commentaire.map(el=>
        
        <div className='commreel'key={el.id}>
          <div >
            <img className='imgpers' src={el.image}/>

          </div>
          <div>
           < div className='nom'>
            <h3>{el.name}</h3>
            <h4 className='da'>{el.date}</h4>
           </div>
           <div>
            < h2> {el.comment}</h2>
           </div>
           <div className="ensem">
            <div class="btnp"><i class="fa-solid fa-thumbs-up"></i></div>
           
           <div>6.7 K</div>
           <div class="btnm" ><i class="fa-solid fa-thumbs-down"></i></div>
           <div className='rep'>Repondre</div>
           </div>
           <div className='ensemb'> 
            <div class="btnm"><i class="fa-solid fa-caret-down"></i></div>
            <div> 36 Reponse</div>
          
           </div>
           
          </div>
          </div>
      
         
    
    
  )
}

       
     </div>   
</div>
  )
}

export default Main