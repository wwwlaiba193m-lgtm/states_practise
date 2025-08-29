import React, { useState } from "react";

export default function FormData() {
    const [value , setvalue] = useState("")
    function HandleVlaue(e){
        setvalue(e.target.value)
    }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">
                Enter Data Here
              </label>
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                placeholder="Type Here ..."
                value={value}
               onChange={HandleVlaue}/>
              {/* <small id="" className="form-text text-dark">
                Username is required
              </small> */}
            </div>
          </div>
          <div className="col-6">
            <div className="display">
              <h1>{value}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from "react";

// export default function FormData() {
//   const [value, setvalue] = useState({
//     username: "",
//     email: "",
//     password: "",
//     cpass: "",
//   });
//   function handlechange(e) {
//     event.preventDefault();
//     setvalue({
//       username: "13",
//       email: "23",
//       password: "43",
//       cpass: "324",
//     });
//   }
//   return (
//     <div>
//       <form action="" method="post" onSubmit={handlechange}>
//         <input type="text" name="" id="" placeholder="username" />
//         <input type="text" name="" id="" placeholder="email" />
//         <input type="text" name="" id="" placeholder="password" />
//         <input type="text" name="" id="" placeholder="confirm password" />
//         <button type="submit">Submit Data</button>
//       </form>
//       <h1></h1>
//     </div>
//   );
// }
