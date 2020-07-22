import React from 'react'

function Form(props) {
    const {
        values,
        submit,
        inputChange,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault(
            submit()
        )
    }

    const onInputChange = event => {
        const { name, value } = event.target
        inputChange(name, value)
    }

    return (
        <form className='' onSubmit={onSubmit}>
            <div className=''>
                <h2>Signup</h2>
                <button>Submit</button>
            </div>
            <div className='errors'>
                {/* Render Form Validation Errors */}
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div>
            <div className=''>
                <label htmlFor='nameInput'>Name:&nbsp;
                    <input 
                        type='text'
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        id='nameInput'
                    />
                </label>
            </div>
        </form >
    )
}

export default Form