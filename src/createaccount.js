// import { useState, useContext } from "react";
// import { useFormik } from "formik";
// import { formik } from "formik";
// import { Form, Card, Button } from "react-bootstrap";
// import UserContext from "./context";
// export default function CreateAccount() {
//   const ctx = useContext(UserContext);

//    const onSubmit=(values) => {
//       if (!values.firstName);
//         if (!values.email);
//           if (!values.password);
//             ctx.users.push({
//               name: formik.values.firstName,
//               email: formik.values.email,
//               password: formik.values.password
//             });
//       alert(`LOGIN SUCCESSFUL`);
//     };
//     const formik = useFormik({
//       initialValues: {
//         name: "",
//         email: "",
//         password: ""
//       },
// validate: (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//   ) {
//     errors.email = "Invalid email address";
//   }
//   if (!values.password) {
//     errors.password = "Required";
//   } else if (values.password.length < 8) {
//     errors.password = "Must be 8 characters or less";
//   }
//   return errors;
//     }
//   });

//   return (
//     <div
//       style={{
//         backgroundColor: "greenyellow",
//         width: "230px",
//         minHeight: "180px"
//       }}
//     >
//       <div
//         style={{
//           padding: "10px 15px",

//           textAlign: "center",
//           color: "darkorange"
//         }}
//       >
//         <form onSubmit={formik.handleSubmit}>
//           <div>
//             <label htmlFor="firstName"> User Name:</label>
//             <input
//               id="firstName"
//               name="firstName"
//               type="text"
//               placeholder="Enter Your Name..."
//               onChange={formik.handleChange}
//               value={formik.values.firstName}
//             />
//           </div>
//           {formik.errors.firstName ? (
//             <div>{formik.errors.firstName}</div>
//           ) : null}

//           <label htmlFor="email"> EmailId </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             placeholder="Enter Your Email..."
//             onChange={formik.handleChange}
//             value={formik.values.email}
//           />
//           {formik.errors.email ? <div>{formik.errors.email}</div> : null}
//           <div>
//             <label for="passowrd">Password </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter Your password..."
//               onChange={formik.handleChange}
//               value={formik.values.password}
//             />
//           </div>
//           {formik.errors.password ? <div>{formik.errors.password}</div> : null}
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }
import { useState, useContext } from "react";
import { Form, Card, Button } from "react-bootstrap";
import UserContext from "./context";
import { useFormik } from "formik";

export default function CreateAccount() {
  const ctx = useContext(UserContext);

  const handleSubmit = (values) => {
    if (!values.name);
    if (!values.email);
    if (!values.password);
    alert("Account Successfully Created");
    ctx.users.push({
      name: formik.values.name,
      email: formik.values.email,
      password: formik.values.password
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      balance: "0"
    },

    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      } else if (values.name.length > 15) {
        errors.name = "Must be 15 characters or less";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Must be 8 characters or less";
      }
      return errors;
    }
  });

  return (
    <>
      <div class="container">
        <div className="account">
          <div class="card">
            <div class="bg-primary card-headera">Create User Account</div>
            <div class="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div class="mb-3">
                  <label class="form-label">Name:</label>
                  <input
                    name="name"
                    type="type"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    class="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                  {formik.errors ? formik.errors.name : null}
                </div>
                <div class="mb-3">
                  {/* <form onSubmit={formik.handleSubmit} /> */}
                  <label class="form-label">Email Address:</label>
                  <input
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Email"
                  />
                  {formik.errors ? formik.errors.email : null}
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password{" "}
                  </label>
                  <input
                    name="password"
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Enter Password"
                  />
                  {formik.errors ? formik.errors.password : null}
                </div>
              </form>
              <button
                class="btn btn-primary"
                type="submit"
                disabled=""
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
