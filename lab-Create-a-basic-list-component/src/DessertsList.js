function DessertsList(props) {
  // Implement the component here.
  var sortedProps = props.data.sort((a, b) => a.calories - b.calories);
  var filteredProps = sortedProps.filter((dessert) => {
     return dessert.calories < 500;
  }
  );
  return (
    
    
    < ul >
      {filteredProps.map((dessert, index)=>(
        
        < li  key = { index } > { dessert.name } - { dessert.calories } cal</li>))
}
    </ul >
  );
}

export default DessertsList;
