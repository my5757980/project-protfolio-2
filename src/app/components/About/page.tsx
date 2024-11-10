import Image from "next/image"
import pic from "../About/3f2cc389-9163-43e2-a763-cbed2457023e__800_800.png"
import style from "./custom.module.css"

 export default function  About(){
    
    
    return(
        <section id="About">
        <div className={style.div}>
            {/* <h1>Welcome to about page</h1> */}
            
            <Image src={pic} alt="Responsive image" className={style.img}></Image>
            <p className={style.p}>About Me</p>
            <h1 className={style.h1}>Hello! My name is Muhammad Yaseen and i am from karachi, pakistan professional Developer Engineering Technical skills HTML CSS JAVASCRIPT TYPESCRIPT NEXTJS TAILWIND CSS Education Intermediate Engineering and 3 years CIT diploma . </h1>


            
         
     
        </div>
        </section>
        
        
    )
}
