import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Axios  from 'axios'
import setFormObject from "../common/FormUtils"


const initialData = {
    title: ''
}


const ChatForm = ({match, chatInfo, id}) => {

	const [data, setData] = useState(initialData)
	const [errors, setErrors] = useState({})


	useEffect(() => {
        if (id) getChatInfoAction(id)
    }, [])

	const handleSubmit = e => {
		e.preventDefault()

		const errors = validate(data)
        setErrors(errors)

        if (Object.keys(errors).length === 0) {
        	axios.post('/api/chat/', data)
        	.then(function (response) {
    
        		//history.push("/")
        	})
        	.catch(function (error) {
        		console.log(error);
        	})
        }
	}

	const validate = (data) => {
        const errors = {}

        if (!data.title) errors.title = 'Title cannot be blank'

        return errors
    }

	return (
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
	)
}


ChatForm.propTypes = {
	chatInfo: PropTypes.object
}

const mapStateToProps = ({chat}) => {
	return {...chat}
}

export default connect(mapStateToProps)(ChatForm)
