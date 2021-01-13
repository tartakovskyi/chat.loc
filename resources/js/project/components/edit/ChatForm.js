import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Axios  from 'axios'
import { getChatInfoAction } from '../../store/actions/chatAction'
import setFormObject from "../common/FormUtils"


const initialData = {
	user_id: '',
    title: ''
}


const ChatForm = ({chatInfo, auth, id, getChatInfoAction}) => {

	const [data, setData] = useState(initialData)
	const [errors, setErrors] = useState({})
	let history = useHistory()

	useEffect(() => {
        if (id) {
        	getChatInfoAction(id)
        }
    }, [id])

    useEffect(() => {
        if (chatInfo) {
        	setData({user_id: chatInfo.user_id, title: chatInfo.title})
        } else if (auth) {
        	setData({...data, user_id: auth.id})
        }
    }, [chatInfo,auth])


    

	const handleSubmit = e => {
		e.preventDefault()

		const errors = validate(data)
        setErrors(errors)

        if (Object.keys(errors).length === 0) {
        	axios.post('/api/chat/', data)
        	.then(function (response) {
				history.push('/chat/' + response.data.id + '/edit/')
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
			<input 
			type="hidden"
			name="user_id"
			value={data.user_id}
			/>
		<button type="submit" className="btn btn-block btn-primary">Submit</button>	
		</form>
	)
}


ChatForm.propTypes = {
	chatInfo: PropTypes.object
}

const mapStateToProps = ({chat, user}) => {
	return {...chat, ...user}
}

export default connect(mapStateToProps, { getChatInfoAction })(ChatForm)
