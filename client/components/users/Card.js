import Link from "next/link";

const UserCard = ({user}) => {
    const {_id, username, name, email} = user;
    return (
        <>
            <div className="team__item">
               <Link href={`/users/${_id}`}><a><img className="team__photo" style={{width:'100%'}} src={`https://i.pravatar.cc/?u=${_id}`} alt="" /></a></Link>
                <div className="team__title1">{name}</div>
                <div className="team__title2">{email}</div>
                <div className="team__text">
                    <p>{username}</p>
                </div>
            </div>
        </>
    )
}

export default UserCard;