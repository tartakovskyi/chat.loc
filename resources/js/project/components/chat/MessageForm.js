import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import Axios  from 'axios'
import InfoBlock from '../common/InfoBlock'
import setFormObject from "../common/FormUtils"


const initialData = {
    message: ''
}

const MessageForm = (props) => {

	const [data, setData] = useState(initialData)
	const [errors, setErrors] = useState({})

	const handleSubmit = e => {
		e.preventDefault()

		const errors = validate(data)
        setErrors(errors)

    }

	const validate = (data) => {
        const errors = {}

        if (!data.message) errors.message = 'Message cannot be blank'

        return errors
    }

	return (
		<div class="row justify-content-center">
			<div class="col-lg-8">
				<form onsubmit={handleSubmit} className="messageForm mt-4">
					<h2>Add a Message</h2>
					{Object.keys(errors).length > 0 && <InfoBlock errors={errors} />}
					<div class="form-group">
						<textarea id="message" rows="10" className="form-control"
						name="message"
						placeholder="Your message..."
						onChange={setFormObject(data, setData)}
						>
							{data.message}
						</textarea>
					</div>
					<button type="submit" className="btn btn-block btn-primary">Submit</button>
				</form>
			</div>
		</div>
	)
}





export default MessageForm
