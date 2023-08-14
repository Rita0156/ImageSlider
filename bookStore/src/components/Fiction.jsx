import React from "react";
import BookCard from "./BookCard"
import Alldata from  "../fiction.json"
export default function Fiction() {
  
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

      <div style={{
        width:"95%",
        margin:"auto",
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"20px"
      }} className="books-container">
        {/* Map all Fictional Books here. */}
        
        {Alldata.map((item)=>(
            <BookCard
              avatar={item.img}
              nameE={item.title}
              year={item.year}
              auth={item.author}
              price={item.price}
            />
        ))}

      </div>
    </div>
  );
}
