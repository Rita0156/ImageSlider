export default function BookCard({avatar,nameE,year,auth,price}) {
  return (
    <div style={{
      textAlign:'center',
      margin:"auto",
      boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      padding:"2rem"
    }} data-testid='book-card'>
        <img  style={{width:"300px", height:"350px"}}  src={avatar} alt={""} />
        <b><div data-testid='book-card-title'>{nameE}<span>({year})</span></div></b>
        <div data-testid='book-card-author'>{auth}</div>
        <div data-testid='book-card-price'>Price :{price} Rs.</div>
    </div>
  )
}

//box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;