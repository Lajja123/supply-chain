import React, { useRef, useState } from "react";
import "../styles/deleteproduct.css";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteProduct() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const toastInfo = () =>
    toast.success("Product Deleted", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <div className="availabel-proposal-main-div">
        <div className="delete-product-main-div">
          <FormControl
            sx={{ m: 1, minWidth: 70 }}
            size="small"
            id="dropdown-formcontrol"
            className="select-parent"
          >
            <TextField
              id="standard-basic"
              label="Product ID"
              variant="standard"
              onChange={(e) => {}}
            />
          </FormControl>
          <Button
            onClick={toastInfo}
            variant="contained"
            size="large"
            className="delete-btn"
          >
            Verify Product
          </Button>

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </>
  );
}

export default DeleteProduct;