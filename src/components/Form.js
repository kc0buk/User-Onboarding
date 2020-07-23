import React from 'react'

function Form(props) {
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault(
            submit()
        )
    }

    const onCheckboxChange = event => {
        const { name, checked } = event.target
        checkboxChange(name, checked)
    }

    const onInputChange = event => {
        const { name, value } = event.target
        inputChange(name, value)
    }

    return (
        <form className='' onSubmit={onSubmit}>
            <div className=''>
                <h2>Signup</h2>
                <button disabled={disabled}>Submit</button>
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
                <label htmlFor='emailInput'>Email:&nbsp;
                    <input 
                        type='email'
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        id='emailInput'
                    />
                </label>
                <label htmlFor='passwordInput'>Password:&nbsp;
                    <input 
                        type='password'
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        id='passwordInput'
                    />
                </label>
                <label htmlFor='tosInput'>Click to accept the terms of service:&nbsp;
                    <input 
                        type='checkbox'
                        name='tos'
                        checked={values.tos === true}
                        onChange={onCheckboxChange}
                    />

                </label>
            </div>
        </form >
    )
}

export default Form