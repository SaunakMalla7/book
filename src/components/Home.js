import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const Home = () => {
  const users = useSelector((state) => state.users);
  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD User app</h1>
      </div>
      <div className="container">
        <div className="row d-flex flex-column">
          <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
            Add Contact
          </Link>
          <div className="col-md-10 mx-auto my-4">
            <Table className="table  ">
              <tbody className="table-header bg-dark text-white">
                {users.map(({ id, name, email }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <button>Delete</button>
                      <button>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
