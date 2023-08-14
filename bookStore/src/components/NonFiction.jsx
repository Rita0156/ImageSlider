import React from "react";
import BookCard from "./BookCard"
import AllData from "../nonfiction.json"

export default function NonFiction() {
  
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div style={{
        width:"95%",
        margin:"auto",
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"20px"
      }} className="books-container">
        {/* Display all Non-Fiction books here */}

        {AllData.map((item)=>(
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
