import Link from "next/link";

const UserCard = (props) => {
    const user = props.user;
    return (
        <>
            <div className="team__item">
               <Link href={`/users/${user.id}`}><a><img className="team__photo" style={{width:'100%'}} src={`https://i.pravatar.cc/?img=${user.id}`} alt="" /></a></Link>
                <div className="team__title1">{user.name}</div>
                <div className="team__title2">{user.email}</div>
                <div className="team__text">
                    <p>{user.username}</p>
                </div>
            </div>
        </>
    )
}

export default UserCard;