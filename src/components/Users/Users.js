import React, { useState } from "react";

import UsersTableData from "../UsersTableData/UsersTableData";
import Loading from "../utilities/Loading";

const Users = ({ users }) => {
   const [loading] = useState(false);

   return (
      <>
         <div>
            {loading ? (
               <Loading />
            ) : (
               <div className="">
                  <table className="table table-borderless" style={{ color: "#fff" }}>
                     <thead style={{ backgroundColor: "lightgray" }}>
                        <tr>
                           <th className="text-secondary" scope="col">
                              Name
                           </th>
                           <th className="text-secondary" scope="col">
                              Email
                           </th>
                           <th className="text-secondary" scope="col">
                              Company
                           </th>
                           <th className="text-secondary" scope="col">
                              Job
                           </th>
                           <th className="text-secondary" scope="col">
                              City
                           </th>
                           <th className="text-secondary" scope="col">
                              Phone
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        {users.map((user) => (
                           <UsersTableData user={user} key={Math.random()} />
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </>
   );
};

export default Users;
