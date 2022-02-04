
import './firstSection.css';


function FirstSection(){
    return(
        <>
           <section className="first--section_contanier">
               <div className="first--section__box">
                   <div className="left">
<span className="bookmark-logo">
    New Release
</span>
<h2>
The Swan Isle
</h2>
<h2>(2023)</h2>
<p>
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
</p>

<h5>Order Now</h5>
<div className="first--section--btns">
    <button>Amazon</button>
    <button>Google</button>
    <button>iBooks</button>
</div>
                   </div>
                   <div className="rigth">
                  <img src="./foto/second--img_2.webp" />
                   </div>
               </div>
           </section>
        </>
    )
}
export default FirstSection;