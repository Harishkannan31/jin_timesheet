import React from 'react';
import './App.css';
import { sidebardata } from './Sidebardata';
const handleLogout = () => {
    // Implement your logout logic here
      console.log('Logout clicked');
      };
function Sidebar(){
    return(
        
        <div className='sidebar'>
        <ul>
            
            {sidebardata.map((val,key)=> {
                return (
                    <section className='sidebarsection'>
                    <div>
                    
                       <img  src={val.image} />
                   
                  </div>
                <div> 
                
                <li key={key} onClick={()=>window.location.pathname=val.link}><div>{val.title}</div></li>
                </div> 
                </section>  
                )
            })}
        </ul>

        <div className='bottom-section'>
        <div className='username'>Harishkannan</div>
        <img className='logoutIcon' src="../logout.png" onClick={() => handleLogout()}></img>
        </div>

     

        
        </div>
    )
}
export default Sidebar;