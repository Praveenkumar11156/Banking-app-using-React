import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";
import { useFormik } from "formik";

export default function Deposit() {
  const [balance, setBalance] = useState(0);
  const [value, setValue] = useState();

  const ctx = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = value + balance;
    setValue("");
    setBalance(total);
    console.log(total);
    // if (!values.name);
    // if (!values.email);
    // if (!values.password);
    alert("Account Successfully Created");

    ctx.users.push({
      balance: formik.values.balance
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      balance: ""
    }
  });

  return (
    <>
      <div class="container">
        <div className="account">
          <div class="card">
            <div class="bg-primary card-headera">Deposit In Your Account</div>
            <div class="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div class="mb-3">
                  <label class="form-label"></label>
                  <input
                    id="balance"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.balance}
                    class="form-control"
                    // id="name"
                    placeholder="Enter The Amount..."
                  />
                  {formik.errors ? formik.errors.name : null}
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
