import React,{useEffect,useState} from "react";
import "./style.css";
import ReactPaginate from 'react-paginate';


export default function App() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  const handlePageClick = () =>{
    console.log("clicked");
   }
  return (
    <div className="App">
      <h1>Hello ReqRes users!</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
           
         <ReactPaginate
        previousLabel={'previous'}
         nextLabel={'next'}
        //  breakLabel={'.. .'}
         pageCount={25}
          marginPagesDisplayed
         onPageChange={handlePageClick}
         containerClassName={'pagination  justify-content-center'}

         pageClassName={'page-item'}
         pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}

         />
       </div> 
    </div>
  );
}
