import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AnimalsTable } from "./components";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <Button
          style={{
            marginLeft: "auto",
            marginBottom: "10px",
            padding: "10px",
            marginRight: "10px",
          }}
        >
          <Link
            to={"/create"}
            style={{
              textDecoration: "none",
              color: "blue",
              border: "2px solid blue",
              padding: "10px",
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.5)",
              fontWeight: "bold",
            }}
          >
            Añadir datos
          </Link>
        </Button>
      </div>
      <AnimalsTable />
    </div>
  );
};

export default Home;
