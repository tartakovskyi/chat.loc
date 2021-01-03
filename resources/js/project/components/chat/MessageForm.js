import React, { useState }  from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Axios  from 'axios'
import { getMessages } from '../../store/actions'
import InfoBlock from '../common/InfoBlock'
import setFormObject from "../common/FormUtils"


const initialData = {
    text: ''
}

const MessageForm = ({user_id, chat_id, getMessages}) => {

	const [data, setData] = useState(initialData)
	const [errors, setErrors] = useState({})

	const handleSubmit = e => {
		e.preventDefault()

		const errors = validate(data)
        setErrors(errors)

        if (Object.keys(errors).length === 0) {
        	axios.post('/api/message', {
        		user_id : user_id,
        		chat_id : chat_id,
        		text: data.text
        	})
        	.then(function (response) {
        		if (response.status == 200) {
        			setData(initialData)
        			getMessages(chat_id)
        		}
        	})
        	.catch(function (error) {
        		console.log(error);
        	})
        }
    }

	const validate = (data) => {
        const errors = {}

        if (!data.text) errors.text = 'Message cannot be blank'

        return errors
    }

	return (
		<form onSubmit={handleSubmit} className="messageForm mt-4">
			<h2>Add a Message</h2>
			{Object.keys(errors).length > 0 && <InfoBlock errors={errors} />}
			<div className="form-group">
				<textarea id="text" rows="8" className="form-control"
				name="text"
				placeholder="Your message..."
				value={data.text}
				onChange={setFormObject(data, setData)}
				></textarea>
			</div>
			<button type="submit" className="btn btn-block btn-primary">Submit</button>
		</form>
	)
}


MessageForm.propTypes = {
	user_id: PropTypes.number.isRequired,
	chat_id: PropTypes.number.isRequired
}


export default connect(null, {getMessages})(MessageForm)
