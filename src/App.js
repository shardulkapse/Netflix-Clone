import React from "react";
import "./App.css";
import Row from "./UI/Row";
import requests from "./data/requests";
import Banner from "./UI/Banner";
import Nav from "./UI/Nav";
import Footer from "./UI/Footer";

const App = () => {
  return (
    <div className="App">
     <Nav />
     <Banner />
      <Row title="NETFLIX ORIGINALS"fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
};

export default App;
