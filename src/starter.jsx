import { data } from "./data";
import React from 'react';

const BirthdayList = ()=>{
   
    const [people,setPeople] = React.useState(data)

    return <div>
        {people.map((person)=>{
        const {id,name,age,image} = person;
       return(    
          <article className='person' key={id}>
             <img src={image} alt={name} className='img' />
             <div>
               <h4>{name}</h4>
               <p>{age} years</p>
             </div>
           </article>
       )

        })}

<button type='button' className='btn' onClick={()=>setPeople([])}>Clear Items</button>
    </div>
}


export  {BirthdayList}