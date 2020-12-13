import React from "react";

const UsersTableData = ({ user }) => {
   return (
      <>
         <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company}</td>
            <td>{user.job}</td>
            <td>{user.city}</td>
            <td>{user.phone}</td>
         </tr>
      </>
   );
};

export default UsersTableData;
