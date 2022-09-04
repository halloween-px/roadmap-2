import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useMainContext } from "../../components/contexts/Main";
import MainLayout from "../../components/layouts/Main";
import PostsCard from "../../components/posts/Card";
import UserCard from "../../components/users/Card";

const UsersPage = () => {
    const router = useRouter();
    const userId = router.query.user_id;
    const {user, loadUser, posts, loadPosts} = useMainContext();
    useEffect(() => {
        if (!userId) {
            return
        }

        loadUser(userId);
        loadPosts(userId);
    }, [userId])


    return (
        <MainLayout darkHeader={true}>
            <div className="team">
                <div className="container">
                    <div className="team__inner">
                        {!!user && <UserCard user={user} />}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="features">
                    <div className="row features-item">
                        {posts.map((post) => {
                            return (
                                <div key={post._id} className="col-lg-6">
                                    <PostsCard post={post} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}

export default UsersPage;