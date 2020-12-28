import React  from 'react'
import PropTypes from 'prop-types'

const ErrorBlock = ({errors}) => {

	return (
		<div className="alert alert-danger" role="alert">
			<ul>
				{Object.keys(errors).map(errorId => (
					<li key={errorId}>{errors[errorId]}</li>
				))}
			</ul>
		</div>
	)
}

ErrorBlock.propTypes = {
	errors: PropTypes.object
}

export default ErrorBlock