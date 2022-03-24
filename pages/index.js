import { useState, useEffect } from "react";
import UserCard from "../components/users/Card";

const IndexPage = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.items)
            })
    }, [])
    return (
        <div className="team">
            <div className="conteiner">
                <div className="team__inner">
                    {users.map((user) => {
                        return <UserCard key={user.id} user={user} />
                    })}
                </div>
                <button onClick={() => setCount(count + 1)} >{count}</button>
            </div>
        </div>

    )
}

export default IndexPage;