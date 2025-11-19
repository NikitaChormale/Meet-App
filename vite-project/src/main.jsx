
import { createRoot } from 'react-dom/client';
import "./index.css";
import imgmicon from "./mic-onn.png";
import imgmicoff from "./moc-off.png";
import img1 from "./flower.png";
import img2 from "./img2.png";
const root=createRoot(document.getElementById('root'));
const Hello=({user, micstate,photo}) => {
    const avtarColors=["#dc2684ff",
        " #2c863eff","#181bd4ff","#db0d0dff"];
 const avtarColor=avtarColors[Math.floor(Math.random() * 
  avtarColors.length)];
    return (
      <>
 <div className="card">
       <div
          className="avtar"
          style={{
            backgroundColor: photo ? "transparent" : avtarColor
          }}
        >
          {!photo && user[0] }
          {photo &&(
            <img src={photo} alt="user" className="image" />
          )}   
        </div>
       <div className='name'> {user}</div>
      <div>
      <img
      src={micstate==="on"? imgmicon: imgmicoff}
      className='micstate' />
      </div>
        </div>
         </>
    );
};
root.render(
    <>
<div>
    <h1>component and props</h1>
    <Hello  user="Nikita" micstate="off" 
    />
    <Hello  user="Komal" micstate="off"
      photo={img1}/>
    <Hello  user="Shital" micstate="off" 
      photo={img2}/>
    
    <Hello  user="Pratiksha" micstate="on" 
     userfirst="pratiksha"/>
    
   <Hello  user="Ankita" micstate="off" 
   />
     <Hello  user="Neha" micstate="off" />   
</div>
 </>

);