import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import CommentCard from '../../components/comments/Card';
import PostsCard from '../../components/posts/Card';

const PostsPage = () => {
    const router = useRouter();
    const [post, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const postId = router.query.post_id;

    useEffect(() => {
        if (!postId) {
            return
        }

        fetch(`http://localhost:3001/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data.item);
            })

        fetch(`http://localhost:3001/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => {
                setComments(data.items);
            })

    }, [postId])

    return (
        <>
            <div className="conteiner">
                {!!post && <PostsCard post={post} />}
            </div>


            <div className="reviews">
                <div className="conteiner">
                    {comments.map((comment) => {
                        return (
                            <CommentCard key={comment.id} comment={comment} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PostsPage;