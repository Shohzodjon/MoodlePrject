import "./header.css";

function SecondHeaderCom(){
    return(
        <header className="second--project__header">
            <navbar className ="second--project__navbar">
                <h1>K. Griffith</h1>
                <ul>
                    <li><a href="#">Appearance</a></li>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">news</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </navbar>

            <div className="second--project__container">
                <img src="./foto/scond--img_3.webp" />
                <h2>Kayla Griffith</h2>
                <h5>Award Winning Author</h5>
            </div>
        </header>
    )
}
export default SecondHeaderCom;