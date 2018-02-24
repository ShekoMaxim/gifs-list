import React, { Component } from "react";

class Contact extends Component {
 render() {
   return (
     <div>
       <h2>Contact info</h2>
         <div >
             <h2>Шеко Максим Михайлович</h2>
             <br />
             <p>Тел.: +375 25 622 13 25 </p>
             <p> E-mail: <a href="mailto:sheko.maxim@gmail.com">sheko.maxim@gmail.com</a></p>
             <br />
             <p> Linkedin: <a href="https://www.linkedin.com/in/maxim-sheko-61926bb6/">https://www.linkedin.com/in/maxim-sheko-61926bb6/</a></p>
             <br />
             <p> Resume: <a href="https://minsk.jobs.tut.by/resume/365c4b5dff01cd0be30039ed1f6453626c7059">https://minsk.jobs.tut.by/resume/365c4b5dff01cd0be30039ed1f6453626c7059</a></p>
         </div>
     </div>
   );
 }
}

export default Contact;