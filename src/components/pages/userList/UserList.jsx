import React, { useState } from "react";
import "./userList.css";
import { userRows as rows, userRows } from "../../../DummyUsers";
import { DataGrid } from "@material-ui/data-grid";
import { Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState(rows);

  //handleDeleteFunction
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 110 },

    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListInfo">
            <img className="userListImg" src={params.row.avatar} alt="user" />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "status",
      headerName: "Status",
      type: "text",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <Delete
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <h2>UserList</h2>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          disableSelectionOnClick
          pageSize={11}
          //   rowsPerPageOptions={[11]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default UserList;
