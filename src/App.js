import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";
import { useState } from "react";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://api.unsplash.com/photos/random?query=word&client_id=${UNSPLASH_KEY}`)
    .then((res) => res.json())
    .then((data)=> {
      setImages([{...data, title: word}, ...images]);
      
    })
    .catch((err) => {
      console.log(err);
    })
    setWord('');
  }

  // console.log(images)

  const handleDelete = (id) => {
    setImages(images.filter((image) => image.id !== id))
    // alert(id)
  };

  return (
    
    <div>
      <Header brand="Search Image" />
      <Search word={word} setWord={setWord} handleSubmit={handleSubmit} />
      <div className="container-fluid g-5 mt-4">
        
        {images.length ? (
           <div className="row row-cols-1 row-cols-md-4 g-1">
            {images.map((image, i) => (
              <ImageCard key={i} image={image} handleDelete={handleDelete} />
            ))}
            </div>
        ) : (
          <Welcome />
        )}
        
      </div>
    </div>
  );
}

export default App;
