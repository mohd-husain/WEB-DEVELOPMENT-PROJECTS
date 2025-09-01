import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios'


function App() {

  let [searchTitle, setSearchTitle] = useState('')
  let [movieData, setMovieData] =useState([])


  let getMovies = () => {
    let apiURL;
    if(searchTitle==''){
      apiURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
      //All Data Without Search
    }
    else {
      apiURL = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchTitle}`
      //Data With Search
    }

    axios.get(apiURL)
    .then((result) => result.data)
    .then((finalResult) => {
      setMovieData(finalResult.results)
    })

  }

  useEffect(() => {
    getMovies()
  }, [searchTitle])

  return (
    <>
      <h1 className='text-center py-5 bg-light'>Movie App</h1>

      {/* <section className='container_fluid'>
        <div className='container'>
          <div className='row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-4'>


            <MovieItems />
            <MovieItems />
            <MovieItems />
            <MovieItems />

          </div>
        </div>
      </section>

      <hr className='my-5'/> */}

      <Container fluid>
        <Container>
          <Row xs={1}>
            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                value={searchTitle}
                onChange={(e)=> setSearchTitle(e.target.value)}
                type="text" placeholder="Search Movie By Title"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row lg={4} md={2} xs={1} className='gy-4'>
            
            {
            movieData.length>=1 &&
            movieData.map((items, index)=>{
              return(
                <MovieItems key={index} data={items}/>
              )
            })
            }

            {/* <Col>
              <Card>
                <Card.Img variant="top" src="https://image.tmdb.org/t/p/w1280/yvirUYrva23IudARHn3mMGVxWqM/jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

             <Col>
              <Card>
                <Card.Img variant="top" src="https://image.tmdb.org/t/p/w1280/yvirUYrva23IudARHn3mMGVxWqM/jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

             <Col>
              <Card>
                <Card.Img variant="top" src="https://image.tmdb.org/t/p/w1280/yvirUYrva23IudARHn3mMGVxWqM/jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </Container>

    </>
  )
}

export default App

// function MovieItems() {
//   return (
//     <div className="card">
//       <img src="https://image.tmdb.org/t/p/w1280/yvirUYrva23IudARHn3mMGVxWqM/jpg" class="card-img-top" alt="..." />
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//       </div>
//     </div>
//   )
// }

function MovieItems({data}) {
  return (

    <Col>
      <Card>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`} />
        <Card.Body>
          <Card.Title>{data.original_title}</Card.Title>
          <Card.Text>
            Vote Average : {data.vote_average}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

  )
}