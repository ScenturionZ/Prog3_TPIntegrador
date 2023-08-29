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

function NewsCard({ items }) {
    return (
        <>
            {
                items.map((value, index) =>
                    <div key={index}>
                        <a href={value.url} target="_blank" rel="noreferrer" className="text-decoration-none"> 
                            <div className="card mx-auto" height="12rem"> 
                                <h3 className="card-header fw-bold">Autor: {value.author}</h3>
                                <div className="card-body">
                                    <h5 className="card-title">{getTitle(value.title, value.author)}</h5>
                                    <p className="card-text position-absolute bottom-0 end-0 me-3 mb-3">Fecha: {getDate(value.publishedAt)}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                )
            }
        </>
    );
}

export default NewsCard;