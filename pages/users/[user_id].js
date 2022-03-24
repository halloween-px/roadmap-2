import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PostsCard from "../../components/posts/Card";
import UserCard from "../../components/users/Card";

const UsersPage = () => {
    const router = useRouter();
    const [user, setUser] = useState();
    const [posts, setPosts] = useState([]);
    const userId = router.query.user_id;
    useEffect(() => {
        if (!userId) {
            return
        }

        fetch(`http://localhost:3001/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                setUser(data.item);
            })

        fetch(`http://localhost:3001/posts?userId=${userId}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data.items);
            })

    }, [userId])


    return (
        <>
            <div className="team">
                <div className="conteiner">
                    <div className="team__inner">
                        {!!user && <UserCard user={user} />}
                    </div>
                </div>
            </div>
            <div className="features">
                {posts.map((post) => {
                    return (
                        <PostsCard key={post.id} post={post} />
                    )
                })}
            </div>
        </>
    )
}

export default UsersPage;