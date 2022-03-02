import React, { useEffect, useState } from "react";
// import Pagination from '@mui/material/Pagination';
import("./Home.css");

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [pages, setPages] = useState(0);
  const [num, setNum] = useState(1);
  const [details, setDetails] = useState(false);
  const [inputchar, setInputChar] = useState("");
  // const [gender , setGender] = useState("all");

  useEffect(() => {
    getEmployee();
  }, [num]);

  // useEffect(() => {
  //   getEmployee2();
  // }, [gender]);

  const SearchUser = () => {
    fetch(`http://localhost:2244/employees/${inputchar}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log('res.Employees:', res[0])
        setEmployees(res);
        setPages(res.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getEmployee = () => {
    fetch(`http://localhost:2244/?page=${num}`)
      .then((res) => res.json())
      .then((res) => {
        //  console.log('res:', res.Employees[0)

        // console.log("res.totalpages:", res.totalpages);
        setEmployees(res.Employees);
        setPages(res.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const getEmployee2 = () => {
  //   fetch(`http://localhost:2244/${gender}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       //  console.log('res:', res.Employees[0)

  //       // console.log("res.totalpages:", res.totalpages);
  //       setEmployees(res.Employees);
  //       setPages(res.totalPages);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  var pg = [];
  function pag() {
    for (let i = 1; i <= pages; i++) {
      pg.push(i);
    }
    // console.log(pg, pages);
  }
  pag();
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input type="text" onChange={(e) => setInputChar(e.target.value)} />

          <button
            onClick={() => {
              SearchUser();
            }}
          >
            Submit
          </button>
        </div>
        {/* <select onChange={(e) => setGender(e.target.value)} >
              <option value={'all'}> select </option>
              <option value={'Male'}> Male</option>
              <option value={'Female'}> Female </option>
          </select> */}
      </div>

      {employees.map((e, i) => (
        <div
          key={i}
          style={{
            border: "1px solid black",
            width: "60%",
            margin: " 10px auto",
            borderRadius: "10px",
            padding: "8px",
            display: " flex",
              alignItems: "center"
          }}
        >
          <div
            style={{
              display: " flex",
              alignItems: "center",
              cursor: "pointer"
            }}
            onClick={() => setDetails(!details)}
          >
            <div>
              <img
                src={e.profile}
                style={{ width: "100px", borderRadius: "50%" }}
                alt={e.name}
              />
            </div>
            <div style={{ marginLeft: "25px" }}>
              <h3 style={{ marginBottom: "0px" }}>{e.name}</h3>
              <p style={{ margin: "5px 0px" }}>
                Joining Date : {e.joiningDate}
              </p>
              <p style={{ margin: "5px 0px" }}>Department : {e.department}</p>
            </div>
          </div>
          {details ? (
            <table style={{ margin: "auto" }}>
              <tbody>
                <tr>
                  <th>Month</th>
                  <th>Year</th>
                  <th>Salary</th>
                </tr>
                <tr>
                  <td>{e.payment[0].month} Month</td>
                  <td>{e.payment[0].year}</td>
                  <td>{e.payment[0].salary}-/Rs</td>
                </tr>
              </tbody>
            </table>
          ) : null}
        </div>
      ))}
      <div style={{ margin: "auto", width: "10%" }}>
        {pages
          ? pg.map((el, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setNum(el)}
                  style={{ margin: " 0 10px" }}
                >
                  {el}
                </button>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Home;
