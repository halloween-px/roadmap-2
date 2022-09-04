import { useState, useEffect } from "react";
import MainLayout from "../components/layouts/Main";
import UserCard from "../components/users/Card";
import SliderCard from "../components/sliders/Card";
import { useMainContext } from "../components/contexts/Main";
import Pagination from "../components/navigation/Pagination";

const IndexPage = () => {
    const { users, loadUsers, userPages } = useMainContext();
    useEffect(() => {
        loadUsers();
    }, [])
    return (
        <MainLayout>
            <SliderCard />
            <div className="team">
                <div className="container">
                    <Pagination pages={userPages} setPage={(page) => loadUsers(page)} />
                    <div className="team__inner">
                        {users.map((user) => {
                            return <UserCard key={user._id} user={user} />
                        })}
                    </div>
                    <Pagination pages={userPages} setPage={(page) => loadUsers(page)} />
                </div>
            </div>
        </MainLayout>

    )
}

export default IndexPage;