function ListGroup() {
  const items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];
  /*map function
  {items.map((item) => (
  <li key={item}> {item}</li>
  ))}    
  
  //it will cycle through the array creating an <li> item for each item (in this case each name)
  //"key = name" it is an identifier that we give to each object , because react use this identifier to remouve or modify each object (NP:a key is not to be confused with an id or class , THEY ARE NOT THE SAME THING)
  */

  /*abbrevieting code 
    in a return statement in react we can only return HTML objects 
    example :{
    return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
  }
  otherwise it will give back an error

  but we can add some simple logic in it if it can stay inside an {}
  example
    return (
    <>
      <h1>List</h1>
       {items.length === 0 ? <p>no items found</p> : null} <--modified line
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
with this we abbreviated this 
if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>no items found</p>
      </>
    );

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
  */

  return (
    <>
      <h1>List</h1>      
       {items.length === 0 ? <p>no items found</p> : null} 
       <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
    )
}
export default ListGroup;
//https://www.youtube.com/watch?v=SqcY0GlETPk 36:47