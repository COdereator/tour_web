import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import '../style/tour.css'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
import NewsLetter from '../shared/NewsLetter'
import tourdata from '../data/tours'

const Tours = () => {

  const [pageCount , setPageCount] = useState(0)
  const [page , setPage] = useState(0)

  useEffect(()=>{
    const pages = Math.ceil(5 / 4)
    setPageCount(pages)
  },[page]) 

  return <>
    <CommonSection title = {"All Tours"}/>
    <div className="section" style={{height:'120px',marginBottom:'0px'}}>
      <SearchBar/>
    </div>
    <div className="section" style={{marginTop:'0px',display:'block'}}>
      <div className="grid-container">
      {
        tourdata.map(tour => (
          <TourCard tour = { tour } />
        ))
      }
      </div>
      <div className="pagination">
        {[...Array(pageCount).keys()].map(number => (
          <span key={number} onClick={() => setPage(number)} className={page === number ? 'active_page' : ''}>
            {number + 1}
          </span>
        ))}
      </div>
    </div>
  </>;
};

export default Tours;
