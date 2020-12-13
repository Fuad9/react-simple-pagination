import { useEffect, useState } from "react";
import Axios from "axios";

import "./App.css";

import Pagination from "./components/Pagination/Pagination";
import Users from "./components/Users/Users";
import Loading from "./components/utilities/Loading";

function App() {
   const [loading, setLoading] = useState(false);
   const [users, setUsers] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [usersPerPage] = useState(20);

   useEffect(() => {
      const getData = async () => {
         try {
            setLoading(true);
            const response = await Axios.get("https://classmarker-app.herokuapp.com/mockData");
            setUsers(response.data);
            setLoading(false);
         } catch (error) {
            setLoading(false);
         }
      };
      getData();
   }, []);

   //get current users
   const indexOfLastUser = currentPage * usersPerPage;
   const indexOfFirstUser = indexOfLastUser - usersPerPage;
   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

   //Change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   return (
      <>
         {loading ? <Loading /> : <Users users={currentUsers} />}

         <div className="d-flex justify-content-center">
            <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
         </div>
      </>
   );
}

export default App;
