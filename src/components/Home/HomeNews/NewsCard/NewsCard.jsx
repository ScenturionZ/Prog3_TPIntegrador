import { Card } from 'react-bootstrap';
import './NewsCard.css';
import React from 'react';

function getTitle(title, autor){
    let retorna = title.replace(" - " + autor, "");
    if(retorna.indexOf("?") !== retorna.length - 1){
        retorna += ".";
    }
    return retorna;
}

function getDate(date){
    let retorna = date.substring(0, date.indexOf("T")).split("-");
    retorna = retorna[2] + "/" + retorna[1] + "/" + retorna[0];
    return retorna;
}
//<Card.Img variant='top' src={value.urlToImage}/>

function NewsCard({ items }) {
    return (
        <>
            {
                items.map((value, index) =>
                    <div key={index}>
                        <a href={value.url} target="_blank" rel="noreferrer" className="text-decoration-none"> 
                            <Card className="mx-auto" height="12rem"> 
                                <h3 className="card-header fw-bold">Autor: {value.author}</h3>
                                <Card.Body>
                                    <Card.Title>{getTitle(value.title, value.author)}</Card.Title>
                                    <p className="card-text position-absolute bottom-0 end-0 me-3 mb-3">Fecha: {getDate(value.publishedAt)}</p>
                                </Card.Body>
                            </Card>
                        </a>
                    </div>
                )
            }
        </>
    );
}

export default NewsCard;