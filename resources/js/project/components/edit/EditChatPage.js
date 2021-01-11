import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import setFormObject from "../common/FormUtils"


const initialData = {
    title: ''
}


const EditChatPage = ({match}) => {

	const [data, setData] = useState(initialData)
	const [errors, setErrors] = useState({})

	useEffect(() => {
        if (match) {
            //setData(props.film)
        } else {
            setData(initialData)
        }
    }, [])

	const handleSubmit = e => {
		e.preventDefault()

		const errors = validate(data)
        setErrors(errors)

        if (Object.keys(errors).length === 0) {
        	/*axios.post('/api/login', data)
        	.then(function (response) {
        		localStorage.setItem('token', response.data.token)
        		localStorage.setItem('token_expires', response.data.expires_at)
        		props.setIsLogged(true)
        		history.push("/")
        	})
        	.catch(function (error) {
        		if (error.response.status === 401) {
        			setErrors({credentials: 'Invalid login or password'})
        		}
        		console.log(error);
        	})*/
        }
	}

	const validate = (data) => {
        const errors = {}

        if (!data.title) errors.title = 'Title cannot be blank'

        return errors
    }

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-9 col-lg-6 col-xl-5">
					<h1 className="text-center">Add New Chat</h1>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="title">Title:</label>
							<input 
								type="text"
								className="form-control"
								id="title"
								name="title"
								value={data.title} 
								onChange={setFormObject(data, setData)}
							/>
						</div>
						<button type="submit" className="btn btn-block btn-primary">Submit</button>	
					</form>
				</div>
			</div>
		</div>
	)
}




export default EditChatPage
