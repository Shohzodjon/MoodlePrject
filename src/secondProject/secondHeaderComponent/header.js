import "./header.css";

function SecondHeaderCom(){
    return(
        <header className="second--project__header">
            <navbar className ="second--project__navbar">
                <h1>K. Griffith</h1>
                <ul>
                    <li><a href="https://pdp.uz/course-play/loyihani-githubga-yuklash-va-deploy-qilish">Appearance</a></li>
                    <li><a href="https://pdp.uz/course-play/loyihani-githubga-yuklash-va-deploy-qilish">Books</a></li>
                    <li><a href="https://pdp.uz/course-play/loyihani-githubga-yuklash-va-deploy-qilish">news</a></li>
                    <li><a href="https://pdp.uz/course-play/loyihani-githubga-yuklash-va-deploy-qilish">about</a></li>
                    <li><a href="https://pdp.uz/course-play/loyihani-githubga-yuklash-va-deploy-qilish">contact</a></li>
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