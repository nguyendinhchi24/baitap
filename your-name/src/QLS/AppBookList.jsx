import React, { useEffect, useState } from 'react'
import BookTable from './BookTable'
import axiosClient from './axiosClient'
import routes from '../routes'
import BookSubmitForm from './BookSubmitForm'
import BookEditForm from './BookEditForm'

export default function AppBookList() {

  const [data, setData] = useState(null)
  const [isFormVisibleSubmit, setFormVisibleSubmit] = useState(false)
  const [isFormVisibleEdit, setFormVisibleEdit] = useState(false)
  const [formSubmitBook, setFormSubmitBook] = useState({title: "", quantity: null})
  const [chooseBoook, setChooseBook] = useState(null)

  useEffect(() => {
    async function fetchUsers() {
      const data = await axiosClient.get(routes.QLS.library.list)
      setData(data)
    }
    fetchUsers()
  }, [])

  function showFormSubmit(){
    if (isFormVisibleSubmit=== true){
      setFormSubmitBook({title: "", quantity: null})
      setFormVisibleSubmit(false)
    }else{
      setFormVisibleSubmit(true)

    }
  }
  function showFormEdit(){
    if (isFormVisibleEdit=== true){
      setFormSubmitBook({title: "", quantity: null})
      setFormVisibleEdit(false)
    }else{
      setFormVisibleEdit(true)

    }
  }

  function submitBookHandler(e) {
    setFormSubmitBook({
      ...formSubmitBook,
      [e.target.name]: e.target.value
    })
  }

  async function submitBook(item) {
    if (chooseBoook === null) {
      const responseData = await axiosClient.post(routes.QLS.library.list, item)
      setFormSubmitBook({...data,title: "", quantity: null})
      setFormVisibleSubmit(false)
      setData([responseData, ...data])
    } else {
      await axiosClient.put(`/library/${chooseBoook}`, item)
      const index = data.findIndex(item => item.id === chooseBoook)
      const dataNew = [...data]
      dataNew[index] = item
      setData(dataNew)
      setChooseBook(null)
      setFormVisibleEdit(false)
      setFormSubmitBook({...data,title: "", quantity: null})
    }
  }

  function editBook(item) {
    if (chooseBoook === item.id) {
      setFormSubmitBook({title: "", quantity: null})
      setChooseBook(null)
    } else {
      setFormSubmitBook(data.find(i => i.id === item.id))
      setFormVisibleEdit(true);
      setChooseBook(item.id)
    }
  }

  async function deleteBook(id) {
    await axiosClient.delete(`/library/${id}`)
    setData(data => data.filter(item => item.id !== id))
  }

  return (
    <>
      <BookSubmitForm
        showFormSubmit={showFormSubmit}
        formSubmitBook={formSubmitBook}
        setFormSubmitBook={setFormSubmitBook}
        submitBook={submitBook}
        submitBookHandler={submitBookHandler}
        isFormVisibleSubmit={isFormVisibleSubmit}
      />
      <BookEditForm
        showFormEdit={showFormEdit}
        formSubmitBook={formSubmitBook}
        setFormSubmitBook={setFormSubmitBook}
        submitBook={submitBook}
        submitBookHandler={submitBookHandler}
        isFormVisibleEdit={isFormVisibleEdit}
      />
      <BookTable
        data={data}
        editBook={editBook}
        deleteBook={deleteBook}
        isFormVisibleEdit={isFormVisibleEdit}
        showFormEdit={showFormEdit}
      />

    </>
  )
}
