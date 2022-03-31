import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import CommentCard from '../../components/comments/Card';
import MainLayout from '../../components/layouts/Main';
import PostsCard from '../../components/posts/Card';

const PostsPage = () => {
    const router = useRouter();
    const [post, setPost] = useState();
    const [comments, setComments] = useState([]);
    const postId = router.query.post_id;

    useEffect(() => {
        if (!postId) {
            return
        }

        fetch(`http://localhost:3001/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                setPost(data.item);
            })

        fetch(`http://localhost:3001/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => {
                setComments(data.items);
            })

    }, [postId])

    return (
        <MainLayout>
            <div className="conteiner">
                {!!post && <PostsCard post={post} />}
            </div>

            <div className="reviews">
                <div className="conteiner">
                    <div className='row row-gap'>
                        <h2>Комментарии</h2>
                        {comments.map((comment) => {
                            return (
                                <CommentCard key={comment.id} comment={comment} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default PostsPage;