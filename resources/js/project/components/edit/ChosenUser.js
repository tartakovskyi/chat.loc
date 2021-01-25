import React from 'react'


const ChosenUser = ({ user }) => {

		

	return (
		<div className="chosen-user d-flex justify-content-between align-items-center">
			<div className="chosen-user__info">
				<div className="chosen-user__img">
					<img src={user.userpic ? '/storage/img/' + user.userpic : '/storage/img/nophoto.svg'} alt="">
				</div>
			</di>
		</div>
	)
}


export default  ChosenUser