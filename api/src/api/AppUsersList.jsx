import React, { useState, useEffect } from 'react'
import UsersTable from './UsersTable'
import UsersSubmitForm from './UsersSubmitForm'
import axiosClient from './axiosClient'
import routes from '../routes'


export default function UsersBookList(props) {

  const [data, setData] = useState(null)
  const [formSubmitUsers, setFormSubmitUsers] = useState({ id: "", name: "", dob: "", address: "", phone_number: "" })
  const [chooseUsers, setChooseUsers] = useState(null)
  // call api
  useEffect(() => {
    async function fetchUsers() {
      const data = await axiosClient.get(routes.api.users.list)
      setData(data)
    }
    fetchUsers()
  }, [])


  // delete
  async function deleteUsers(id) {
    await axiosClient.delete(`/users/${id}`)
    setData(data => data.filter(item => item.id !== id))
  }

  // create
  function submitUsersHandler(e) {
    setFormSubmitUsers({
      ...formSubmitUsers,
      [e.target.name]: e.target.value
    })
  }

  function editUsers(item) {
    if (chooseUsers === item.id) {
      setFormSubmitUsers({ id: "", name: "", dob: "", address: "", phone_number: "" })
      setChooseUsers(null)
    } else {
      setFormSubmitUsers(data.find(i => i.id === item.id))
      setChooseUsers(item.id)
    }
  }

  async function submitUsers(item) {
    if (chooseUsers === null) {
      const responseData = await axiosClient.post(routes.api.users.list, item)
      setFormSubmitUsers({ id: "", name: "", dob: "", address: "", phone_number: "" })
      setData([responseData, ...data])
    } else {
      await axiosClient.put(`/users/${chooseUsers}`, item)
      const index = data.findIndex(item => item.id === chooseUsers)
      const dataNew = [...data]
      dataNew[index] = item
      setData(dataNew)
      setChooseUsers(null)
      setFormSubmitUsers({ id: "", name: "", dob: "", address: "", phone_number: "" })
    }
  }

  return (
    <>
      <UsersTable
        data={data}
        deleteUsers={deleteUsers}
        chooseUsers={chooseUsers}
        editUsers={editUsers}
      />
      <UsersSubmitForm
        formSubmitUsers={formSubmitUsers}
        submitUsersHandler={submitUsersHandler}
        submitUsers={submitUsers}
        chooseUsers={chooseUsers}

      />
    </>
  )
}