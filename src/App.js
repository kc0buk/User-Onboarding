import React, { useState, useEffect } from 'react';
import axios from 'axios'
import * as yup from 'yup'
import Form from './components/Form'
import { POST_URL } from './constants/Constants'
import './App.css';

const initialFormValues = {
  name: '',
}

const initialFormErrors = {
  name: '',
}

const initialUsers = []

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const postNewUser = newUser => {
    axios.post(`${POST_URL}`, newUser)
      .then(res => {
        console.log(res.data)
        setUsers(res.data, ...users)
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

  const submit = () => {
    const newUser = {
      name: formValues.name.trim()
    }
    postNewUser(newUser)
  }


  return (
    <div className="App">
      <Form 
        values={formValues} 
        submit={submit}
        inputChange={inputChange} 
        errors={formErrors}
        />
    </div>
  );
}

export default App;
