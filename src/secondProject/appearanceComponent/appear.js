
import Rewiev from '../reviewSection/rewiev';
import './appear.css';

function AppearSection(){
    return(
        <>
          <section className="appear--section">
  <h1>See Upcoming Appearances</h1>
  <p>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>

      <div className="appear--section__div">
      <h3>January 18th 2023, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</h3>
      <button>Join</button>
      </div>

      <div className="appear--section__div">
      <h3>January 18th 2023, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</h3>
      <button>Join</button>
      </div>

      <div className="appear--section__div">
      <h3>January 18th 2023, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</h3>
      <button>Join</button>
      </div>

    <div className="about--section">
        <img src="./foto/second--mg_1.webp" />
        <h1>About Kayla Griffith</h1>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>

        <button>Join</button>
    </div>

<footer className="footer">
    <p>&copy; 2023 by K.Griffith. Proudly created with DeadPool</p>
</footer>
          </section>
        </>
    )
}

export default AppearSection;