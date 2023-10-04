import React from 'react';

function UsersSubmitForm(props) {
  const submitUsers = (e) => {
    e.preventDefault()
    props.submitUsers({ ...props.formSubmitUsers })
  };

  return (
    <div className="position-fixed top-0 start-0 p-3" style={{ width: '300px', background: 'white' }}>
      <h2 className="mb-4">Add New</h2>
      <form onSubmit={submitUsers}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID:</label>
          <input onChange={props.submitUsersHandler} value={props.formSubmitUsers.id !== null ? props.formSubmitUsers.id : ""} type='number' className="form-control" name="id" />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input onChange={props.submitUsersHandler} value={props.formSubmitUsers.name !== null ? props.formSubmitUsers.name : ""} className="form-control" name="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Dob:</label>
          <input onChange={props.submitUsersHandler} value={props.formSubmitUsers.dob !== null ? props.formSubmitUsers.dob : ""} className="form-control" name="dob" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input onChange={props.submitUsersHandler} value={props.formSubmitUsers.address !== null ? props.formSubmitUsers.address : ""} className="form-control" name='address' />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input onChange={props.submitUsersHandler} value={props.formSubmitUsers.phone_number !== null ? props.formSubmitUsers.phone_number : ""} className="form-control" name="phone_number" />
        </div>

        <button id="submitBookButton" type="submit" className="btn btn-info">
          {(props.chooseUsers === null) ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
}

export default UsersSubmitForm;