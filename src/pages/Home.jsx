import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://localhost:3000/">
        Finance Crawler
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Home() {
  return (
    <section id="title">
      <div className="container-fluid">
        {/* <!-- Title --> */}
        <div className="row">
          <div className="col-lg-6">
            <h1>Expense Tracker</h1>
            <p>Price is what you pay, Value is what you get.</p>

            <a
              href="http://localhost:3000/login"
              className="btn btn-outline-dark btn-lg download-button"
              role="button"
            >
              Sign In
            </a>
            <a
              href="http://localhost:3000/register"
              className="btn btn-outline-dark btn-lg download-button"
              role="button"
            >
              Sign Up
            </a>
            {/* <button
              type="button"
              className="btn btn-outline-light btn-lg download-button"
            >
              <i className="fa-solid fa-user-plus"></i> Register
            </button> */}
            {/* <button
              type="button"
              className="btn btn-outline-light btn-lg download-button"
            >
              <i class="fa-solid fa-arrow-pointer"></i> Login
            </button> */}
          </div>

          <div className="col-lg-6 title-img-div">
            {/* <img
              className="title-img"
              src="images/mob.jpg"
              alt="iphone-mockup"
            ></img> */}
          </div>
        </div>
      </div>
      <Copyright sx={{ pt: 4 }} />
    </section>
  );
}

export default Home;
