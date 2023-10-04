import React from 'react';

export default function BookTable(props) {
  const { data } = props;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-9">
          <h1>TABLE</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>DOB</th>
                <th>Address</th>
                <th>Phone_Number</th>
              </tr>
            </thead>
            <tbody id="booklist">
              {data && data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.dob}</td>
                    <td>{item.address}</td>
                    <td>{item.phone_number}</td>
                    <td>
                      <button
                        className={'btn btn-' +(props.chooseUsers === item.id ? "secondary" : "primary")}
                        onClick={() => props.editUsers(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => props.deleteUsers(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
