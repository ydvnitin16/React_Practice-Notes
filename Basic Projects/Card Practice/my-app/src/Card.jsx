import myImage from "./assets/20250104061547_MacBook-Ai.avif";

// we cant access images like src="image/source" _-----_ we have to use the import and then {}

function Card() {
  return (
    <div>
      <div id="card">
        <img src={myImage} alt="Card Image" />
        <div id="content">
            <h2>Macbook</h2>
            <p id="description">Macbooks are the best laptops in the world which performs for what they are build for efficiently.</p>
        </div>
      </div>

    </div>
  );
}

export default Card;
