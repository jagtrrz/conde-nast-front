import React, { useState, useEffect, useContext } from 'react';

import { Context } from "../store/appContext";
import { NewsCard } from "../components/cardNew";
import { Filters } from "../components/filters";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        setNewsList(store.news)
    }, [store.news, store.sendFilters])

    const mapCardList = newsList.map((item, index) => {
        return <NewsCard item={item} key={index}/>
    }) 

    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex p-5">
                    <h3>Filters {store.isAllNews ? 'All News' : 'Top Headlines'}</h3>
                    <Filters />
                </div>

                <div className="row d-felx justify-content-center">
                    {mapCardList.length 
                        ? <div className="col-lg-5 col-sm-12 px-0 m-3">{mapCardList }</div>
                        : <div className="col-lg-5 col-sm-12 px-0 m-3">
                                <h3 className="row d-felx justify-content-center">
                                    No news on this matter
                                </h3>
                            </div>
                    }
                    
                </div>
            </div>
        </>
    )
}