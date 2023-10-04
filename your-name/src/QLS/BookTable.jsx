import React from 'react'

export default function BookTable(props) {

    const { data, chooseBoook, editBook, deleteBook, showFormEdit } = props

    return (
        <div className='container '>
            <div className='row text-center'>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1>Bảng Quản lý Sách</h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id='booklist'>
                            {
                                data && data.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <button
                                                className={`btn btn-${chooseBoook === item.id ? "secondary" : "primary"}`}
                                                onClick={() => {
                                                    editBook(item)
                                                    showFormEdit()
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => deleteBook(item.id)}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
