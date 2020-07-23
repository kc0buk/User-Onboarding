import React, { useState, useEffect } from 'react';
import axios from 'axios'
import * as yup from 'yup'
import Form from './components/Form'
import Users from './components/Users'
import { POST_URL } from './constants/Constants'
import formSchema from './validation/formSchema'
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tos: '',
}

const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUser = newUser => {
    axios.post(`${POST_URL}`, newUser)
      .then(res => {
        console.log(res.data)
        setUsers([res.data, ...users])
        setFormValues(initialFormValues)
      })

      .catch(err => {
        debugger
      })
  }
  
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
      setFormValues({
        ...formValues,
        [name]: value
      })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      [name]: isChecked,
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    }
    if (!newUser.name) return
    postNewUser(newUser)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="App">
      <Form 
        values={formValues} 
        submit={submit}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        disabled={disabled} 
        errors={formErrors}
        />

        {
          users.map(user => {
            return (
            <Users key={user.id} details={user} />
            )
          })
        }
    </div>
  );
}

export default App;
