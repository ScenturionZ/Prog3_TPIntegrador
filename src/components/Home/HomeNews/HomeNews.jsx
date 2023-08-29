import './HomeNews.css';
import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import NewsCard from './NewsCard/NewsCard';
function HomeNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const API_URL = "https://newsapi.org/v2/top-headlines?country=ar&category=business&pageSize=12&apiKey=";
        const API_KEY = "41c0ed79d3ef46d69feb8b3bd014e551";
        const url = API_URL + API_KEY;

        fetch(url).then(res => {
            res.json().then((data) => {
                setNews(data.articles);
            });
        });
        setNews([]);
    }, []);

    return(
        <>
            <div className="mt-3 margin">
                <div className="novedades">
                    <Image className="img-novedades" src="assets/img/icono-valores.png" alt="icono valores" width="60" height="60" />
                    <p className="mt-3 mb-3">&nbsp; <strong>Novedades</strong></p>
                </div>
                <div className="my-5 bg-info-subtle">
                    <div className="container pb-5">
                        <div id="novedadesBody" className="row row-cols-lg-3 g-5 align-items-center">
                            {news.length ? <NewsCard items={news} /> : <><span>...Cargando Novedades</span></>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeNews;