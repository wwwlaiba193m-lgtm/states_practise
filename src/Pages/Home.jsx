import React, { useState } from "react";
import img from "./new.jpg";
import { FaToggleOff } from "react-icons/fa6";

export default function Home() {
  // const [firststate, setfirststate] = useState("Hello")
  const [mode, setmode] = useState(true);
  const data = [
    {
      img: img,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: img,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: img,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: img,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
  ];
  // let data = "Hello"

  // function data(){
  //   setfirststate("WELCOME")
  // }
  function modechange() {
    setmode(!mode);
  }
  return (
    <>
      <div className={`${mode == true ? "light" : "dark"}`}>
        <div className="container">
          <FaToggleOff className="icons" onClick={modechange} />
        </div>
        {/* <h1>{firststate}</h1> */}
        {/* <button onClick={data} className='btn btn-outline-primary'>Chnage</button> */}
        <div className="container">
          {data.map((ele) => (
            <div className="img-card">
              <img src={ele.img} alt="" />
              <p>{ele.title}</p>
              <a href="">By {ele.author}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
