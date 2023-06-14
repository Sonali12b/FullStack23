import React from 'react'

export const Card = React.memo(({title,image}) => {
  return (
    <div className='card'>
        <img src={image} width={500}></img>
        <h1>{title}</h1>
    </div>
  )
})

// const MoCard=({userid,body,title})=>{
//   const myComponent = useMemo(()=>{
//     return(
//       <div>
//         <h1>{userid}</h1>
//         <h3>{body}</h3>

//         <p>{title}</p>
//       </div>
//     )
//   },[userid,body,title]);
//   return <div>{myComponent}</div>
// }
// export default MoCard;
