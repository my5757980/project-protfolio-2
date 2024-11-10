import Link from "next/link"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import style from "./custom.module.css"




export default function Contact (){
    return(
        <section id="Contact">
        <div className={style.div}>
         {/* <h1>welcome to contact page</h1> */}
         <h1  className={style.h1}>Contact</h1>
          <div>
         <p className={style.p1}>FirstName</p>
         <input type="text" name="firstName"  maxLength={30} size={20} className={style.input1}></input>
         <br />
         <br />
         <p  className={style.p2}>LastName</p>
         <input type="text" name="lastName" maxLength={30} size={20} className={style.input2}></input>
         <br />
         <br />
         <p className={style.p3}>E-mail</p>
         <input type="text" name="e-mail" maxLength={30} size={20} className={style.input3}></input>
         <br />
         <br />
         <p className={style.p4}>Message</p>
         <input type="text" name="message "  maxLength={5000} size={40} className={style.input4}></input>
         <br />
         <br />

         <button className={style.button}>
          <a href="mailto:my5757980@gmail.com" className={style.a}> Send Message</a>
            </button>

           </div>
         
               
           
         <div className={style.div6} >
          <Link href="https://www.linkedin.com/in/muhammad-yaseen-a053272bb/">
            <p > <AiFillLinkedin/>Linkedin</p>
            </Link>

            <Link href="https://github.com/my5757980">
            <p><AiFillGithub/>Github</p>
              </Link>
           
          </div>

         
        </div>
        </section>
    )
}



