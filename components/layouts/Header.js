import Link  from "next/link";

const Header = ({darkHeader}) => {
        const nav = [
            {id:1, nav:'О нас', link:'/about'},
            {id:2, nav:'Пользователи', link:'/users'},
            {id:3, nav:'Услуги', link:'/services'},
            {id:4, nav:'Каталог', link:'/catalog'},
            {id:5, nav:'Контакты', link:'/contacts'}
        ]
    return (
        <div className={`vg-header ${darkHeader ? 'page-header' : ''}`}>
            <div className='vg-header-wrapper'>
                <div className="vg-header-top">
                    <div className="container">
                        <div className="row align-items-center justify-content-xl-between">
                            <div className="col-auto">
                                <h4 className="logo-area">
                                    <Link href={'/'}><a>Альянс <span>групп</span></a></Link>
                                </h4>
                            </div>
                            <div className="col-auto order-xl-2 order-3">
                                <nav className="vg-nav">
                                    <ul className="vg-nav-main-container d-flex justify-content-center">
                                        {nav.map(item => (
                                            <li className="" key={item.id}>
                                                <Link href={item.link}><a>{item.nav}</a></Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-auto ms-xl-0 ms-auto order-xl-3 order-2">
                                <a href="#" className="btn btn--primary">Звонок</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;