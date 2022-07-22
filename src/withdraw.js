import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";
// import { deposit } from "./deposit";
import { renderTableData } from "./alldata";

export default function Withdraw() {
  const [balance, setBalance] = useState(0);
  const [value, setValue] = useState();
  let status = ` ${balance}`;

  function renderTableHeader() {
    let header = Object.keys(ctx.users[0]);
    return header.map((value, index) => {
      return <th>{value}</th>;
    });
  }
  const ctx = useContext(UserContext);
  function renderTableData() {
    return ctx.users.map((user, index) => {
      const { deposit } = user; //destructuring
      // console.log(users);
      // const user {...rest};
      return (
        // <tr>usersusers
        <h5>
          {deposit}
          {status}
        </h5>
        //       </tr>
      );
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const total = value + balance;
    setValue("");

    alert("WITHDRAW SUCCESSFULLY");

    setBalance(total);
    console.log(total);
  }

  function handleChange(e) {
    setValue(Number(e.target.value));
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="body">
          <div className="head">
            <h3> WITHDRAW FROM ACCOUNT</h3>
            <br />

            <h5 id="users">
              {renderTableHeader()}
              {renderTableData()}
            </h5>
            <h5> {status} </h5>
          </div>
          <br />

          <div className="input">
            <label>WITHDRAW:</label>

            <br />
            <input type="number" value={value} onChange={handleChange} />
          </div>
          <br />
          <br />
          <div>
            <button className="button" onClick={handleSubmit}>
              {" "}
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </Card>
  );
}
