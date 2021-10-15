import React, { useState } from "react";
import "./productList.css";
import { productRows as products, userRows } from "../../../DummyUsers";
import { DataGrid } from "@material-ui/data-grid";
import { Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const [data, setData] = useState(products);

  //handleDeleteFunction
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 110 },

    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListInfo">
            <img
              className="productListImg"
              src={params.row.img}
              alt="product"
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 130 },
    {
      field: "status",
      headerName: "Status",
      type: "text",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
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
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <Delete
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <h2>Product List</h2>
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

export default ProductList;
