import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(()=> {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando filme em destaque (featured)
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
     
      setFeaturedData(chosenInfo);      
    }

    loadAll();
  }, []);

  // Evento de monitoramento do Scroll da pg
  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY >10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  return (
    <div className="page">
      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }
      <section className="lists">
        {movieList.map((item, key)=> (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        <p> 
          Direitos para  Copyright ©<a className="direitos" href="https://www.netflix.com/">Netflix</a> and 
          <a className="direitos" href="https://www.youtube.com/watch?v=tBweoUiMsDg&t=7937s" target="_blank">B7Web</a>
        </p>
        <p> 
          Feito com <span role="img" aria-label="coração">❤</span> por <a className="direitos" href="https://www.linkedin.com/in/julia-barbosa-795545171/" target="_blank">Julia Barbosa</a>
        </p> 
        <p>
          Todos os Dados são da base <a className="direitos" href="https://www.themoviedb.org/" target="_blank">The Movie DB</a>    
        </p>        
      </footer>
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://i.pinimg.com/originals/9a/02/aa/9a02aac51ed499e01518ac73dd954eb1.gif"></img>
        </div>
      }      
    </div>
  )
}