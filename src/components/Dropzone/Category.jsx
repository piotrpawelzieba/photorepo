import React from 'react'


const Category = ({key, category: {title}, className }) => {
    return(
        <li 
            className={className} 
            key={key} 
            onDragEnter={(ev)=>(ev.target.className = "dropzone__category dropzone__category--hover")}
            onDragLeave={(ev)=>(ev.target.className = "dropzone__category")}
            
        > 
            {title} 
        </li>
    )
}
export default Category