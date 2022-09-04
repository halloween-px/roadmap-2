import Link from "next/link";
const getNum = (_id) => {
    return parseInt(_id.slice(-2), 16);
}
const PostsCard = ({ post: { _id, title, body } }) => {

    return (
        <>
            <section className="section section-padding pb-0">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative item-area">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                        <h3 className="mb-0">{title.slice(0, 40)}...</h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">
                            {body.slice(0, 30)}...
                        </p>
                        <Link href={`/posts/${_id}`}>
                            <a className="stretched-link">
                                Continue reading
                            </a>
                        </Link>
                    </div>
                    <div className="col-auto d-none d-lg-block w-100">
                        <img
                            className="bd-placeholder-img w-100" style={{ height: '250px', objectFit: 'cover', objectPosition: 'center' }}
                            src={`https://picsum.photos/id/${getNum(_id)}/900/900/`}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PostsCard;