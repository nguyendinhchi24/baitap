import React from 'react';

export default function BookEditForm(props) {
  const { isFormVisibleEdit, formSubmitBook, submitBookHandler } = props;
  const submitBook = (e) => {
    e.preventDefault();
    props.submitBook({ ...props.formSubmitBook });
  };

  return (
    <div className="container text-center">
      {isFormVisibleEdit && (
        <div className="row justify-content-center mt-4">
          <div className="col-md-1"></div>
          <div className="col-md-8">
            <h2 className="mb-4">Edit Book</h2>
            <form onSubmit={submitBook}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title:
                </label>
                <input
                  onChange={submitBookHandler}
                  value={formSubmitBook.title !== null ? formSubmitBook.title : ''}
                  className="form-control"
                  name="title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  Quantity:
                </label>
                <input
                  onChange={submitBookHandler}
                  value={formSubmitBook.quantity !== null ? formSubmitBook.quantity : ''}
                  type="number"
                  className="form-control"
                  name="quantity"
                />
              </div>
              <button type="submit" className="btn btn-info">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
