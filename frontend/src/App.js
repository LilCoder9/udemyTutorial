import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Search from './components/Search';
import { Container,Row, Col} from 'react-bootstrap';

import { useState } from 'react';
import ImageCard from './components/ImageCard';


const UNSPLASH_KEY=process.env.REACT_APP_UNSPLASH_KEY

// const App =()=>{ } is the same as below
function App() {
  const [word,setWord] = useState('');
  const [images,setImages] = useState([])
  

  const handleSearchSubmit= (e) =>{
    e.preventDefault()
    console.log(word)
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`).then((res) => res.json())
    .then((data)=>{
      setImages([{...data, title: word},...images])//{...data,title:word} it adding the new data to array but also taking the search word name and making it the title to the new data 
      console.log(images)
    })
    .catch((err)=>{
      console.log(err)
    })

    setWord('')
  }

  const handleDeleteImage = (id) =>{
    setImages(images.filter((image)=> image.id !== id))
  }

  console.log(process.env.REACT_APP_UNSPLASH_KEY)


  return (
    <div>
      <Header title="Pie"/>
      <Search word={word} setWord={setWord}  handleSubmit ={handleSearchSubmit}/>
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
      {images.map((image,i) =>(
        <Col  key={i} className="pb-3"><ImageCard image={image} deleteImage={handleDeleteImage}/></Col>
      ))} 
        </Row>
      </Container>
    </div>
  );
}

export default App;
