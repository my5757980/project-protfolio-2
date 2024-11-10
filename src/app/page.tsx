import Image from "next/image";
import pic from "../app/4d8afee0d8c779fe04625ad070192830.jpg"
import About from "./components/About/page";
import Contact from "./components/Contact/page";
import style from "./custom.module.css"




export default function Home(){
  return(
    <section  >
    <div className={style.div2}>
     {/* <h1>Welcome to home page</h1> */}
    
     
     <Image  src={pic}  alt="Responsive image"  className={style.img}></Image> 
     <p className={style.p}>Hey i'm</p> <p className={style.p1}>Muhammad Yaseen</p> 
    
     <h1 className={style.h1}>Fronted Developer</h1>
     
     <br />
     <h1 className={style.h5}>Hey i'm Fronted Developer from pakistan dedicated to delivering beautiful, functional and user-friendly websites that exceed your expectations.</h1>
     
      

    </div>
    

   <About/>


   <Contact />


   
  

   


   

   
   
    
    </section>
  )
}