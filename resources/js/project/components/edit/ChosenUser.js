import React from 'react'


const ChosenUser = ({ user }) => {

	const { name, userpic } = user

	const src = userpic ? '/storage/img/userpics/' + userpic : '/storage/img/user.svg'		

	return (
		<div className="chosen-user d-flex justify-content-between align-items-center alert alert-success">
			<div className="chosen-user__info d-flex align-items-center">
				<div className="chosen-user__img">
					<img src={src} alt="" />	
				</div>
				<span>{name}</span>
			</div>
			<a href="#"  className="chosen-user__close">
				<svg><use xlinkHref="/storage/img/icons.svg#close"></use></svg>
			</a>
		</div>
	)
}


export default  ChosenUser