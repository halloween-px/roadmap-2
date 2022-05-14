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
        <MainLayout darkHeader = {true}>
            <div className="conteiner">
                {!!post && <PostsCard post={post} />}
            </div>

            <div className="reviews">
                <div className="conteiner">
                    <div className='row row-gap'>
                        <div className='section section-title'>
                            <div className='section-title--wrapper'>
                                <h2 className='title'>Комментарии</h2>
                            </div>
                        </div>
                        {comments.map((comment) => {
                            return (
                                <CommentCard key={comment._id} comment={comment} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default PostsPage;