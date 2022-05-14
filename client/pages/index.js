import { useState, useEffect } from "react";
import MainLayout from "../components/layouts/Main";
import UserCard from "../components/users/Card";
import SliderCard from "../components/sliders/Card";

const IndexPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.items)
            })
    }, [])
    return (
        <MainLayout>
            <SliderCard />
            <div className="team">
                <div className="container">
                    <div className="team__inner">
                        {users.map((user) => {
                            return <UserCard key={user._id} user={user} />
                        })}
                    </div>
                </div>
            </div>
        </MainLayout>

    )
}

export default IndexPage;