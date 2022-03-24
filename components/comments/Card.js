const CommentCard = (props) => {
    const comment = props.comment;

    return (
        <>
        <div className="reviews__item">
			<div className="reviews__content">
				<div className="reviews__text">{ comment.name }
				</div>
				<div className="reviews__author">{ comment.body }</div>
			</div>
		</div>
        </>
    )
}

export default CommentCard;