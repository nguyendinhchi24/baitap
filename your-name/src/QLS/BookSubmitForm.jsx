import React from 'react'

export default function BookSubmitForm(props) {

  const { isFormVisibleSubmit, formSubmitBook, submitBookHandler, showFormSubmit } = props
  const submitBook = (e) => {
    e.preventDefault()
    props.submitBook({ ...props.formSubmitBook })
  };


  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-10"></div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={() => showFormSubmit()}>Add a new Book</button>
        </div>
      </div>
      {isFormVisibleSubmit && (
        <div className="row justify-content-center mt-4">
          <div className="col-md-1"></div>
          <div className="col-md-8">
            <h2 className="mb-4">Add a new Book</h2>
            <form onSubmit={submitBook}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">Title:</label>
                <input onChange={submitBookHandler} value={formSubmitBook.id !== null ? props.formSubmitBook.id : ""} className="form-control" name="title" />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Quantity:</label>
                <input onChange={submitBookHandler} value={formSubmitBook.name !== null ? props.formSubmitBook.name : ""} type='number' className="form-control" name="quantity" />
              </div>
              <button type="submit" className="btn btn-info">
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
