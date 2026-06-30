import React from "react";
import HoneyPhoto from "../../assets/honey_photo.jpg";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center fs-3 ">About the Developer</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src={HoneyPhoto} alt="Honey Aswani"
            style={{ borderRadius: "50%", width: "55%" }}
          />
          <h4 className="mt-5" style={{color:"black"}}>Honey Aswani</h4>
          <h6>&nbsp;Full Stack Developer | Java & MERN Stack</h6>
        </div>
        <div className="col-6 p-3 fs-6">
          <p>
            
Hi, I'm Honey Aswani, a Computer Science Engineering student at Medicaps University with a passion for full-stack web development. I enjoy building scalable web applications using the MERN stack and continuously improving my problem-solving skills through Data Structures and Algorithms in Java.
</p>
          
          <p>
            
This trading platform project demonstrates my understanding of React, Node.js, Express, MongoDB, JWT authentication, bcrypt password hashing, REST APIs, and responsive user interface development.
</p>
          
          <p>
I enjoy learning new technologies, solving coding problems, and creating user-friendly web applications. Outside programming, I enjoy traveling, sketching, cooking, swimming, and badminton.
</p>
          <p>
Connect on{" "}
<a
  href="https://github.com/honeyAswani"
  target="_blank"
  rel="noreferrer"
  style={{ textDecoration: "none" }}
>
  GitHub
</a>

{" | "}

<a
  href="https://www.linkedin.com/in/honey-aswani-3a0889336/"
  target="_blank"
  rel="noreferrer"
  style={{ textDecoration: "none" }}
>
  LinkedIn
</a>

{" | "}

<a
  href="aswanihoney8347@gmail.com"
  style={{ textDecoration: "none" }}
>
  Email
</a>
</p>
        </div>
      </div>
    </div>
  );
}

export default Team;