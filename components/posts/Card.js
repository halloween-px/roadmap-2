import Link from "next/link";

const PostsCard = (props) => {
    const post = props.post;

    return (
        <>
        <Link href={`/posts/${post.id}`}>
        <a className="features__item" style={{display:'block'}}>
                    <img className="features__icon" src="" alt="икнока" />
                    <h4 className="features__title">{post.title}</h4>
                    <div className="features__text">{post.body}</div>
                </a>
        </Link>
        </>
    )
}

export default PostsCard;