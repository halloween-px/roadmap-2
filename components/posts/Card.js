import Link from "next/link";

const PostsCard = ({ post: { id, title, body } }) => {

    return (
        <>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative item-area">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">World</strong>
                    <h3 className="mb-0">{ title.slice(0, 40) }...</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto">
                       { body.slice(0, 30) }...
                    </p>
                    <Link href={`/posts/${id}`}>
                        <a className="stretched-link">
                            Continue reading
                        </a>
                    </Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img
                        className="bd-placeholder-img h-100"
                       src={`https://picsum.photos/id/${id}/250/200`}
                    />
                </div>
            </div>
        </>
    )
}

export default PostsCard;