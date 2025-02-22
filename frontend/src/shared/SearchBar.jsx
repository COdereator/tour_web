import React, { useRef } from "react";
import "./shared.css";
const SearchBar = () => {

    const locationRef = useRef("")
    const distanceRef = useRef("")
    const maxgroupRef = useRef("")

    const searchHandler = () =>{
        const location = locationRef.current.value 
        const distance = distanceRef.current.value 
        const maxgroup = maxgroupRef.current.value 

        if(location === '' || distance === '' || maxgroup === '')
        {
            alert("All fields are required")
        }
    }

  return (
    <div className="searchBar">
        <div className="searchContent">
            <div className="box" style={{borderRight:'1px solid black',paddingRight:'15px',borderColor:'grey'}}>
                <span><i class="ri-map-pin-line"></i></span>
                <div className="search">
                    <h1>Location</h1>
                    <input type="text" ref={locationRef} placeholder="Where are you going?"/>
                </div>
            </div>
            <div className="box" style={{borderRight:'1px solid black',paddingRight:'15px',borderColor:'grey'}}>
                <span><i class="ri-map-pin-time-line"></i></span>
                <div className="search">
                    <h1>Distance</h1>
                    <input type="text" ref={distanceRef} placeholder="Distance k/m"/>
                </div>
            </div>
            <div className="box">
                <span><i class="ri-group-line"></i></span>
                <div className="search">
                    <h1>Max People</h1>
                    <input type="number" ref={maxgroupRef} placeholder="0"/>
                </div>
            </div>
            <div className="icons">
                <span onClick={searchHandler}><i class="ri-search-line"></i></span>
            </div>
        </div>
    </div>
  );
};

export default SearchBar;
