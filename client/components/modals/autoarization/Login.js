const Login = ({openForgot, openReg}) => {
    return (
        <form action="http://localhost:3001/admin/login" method="post" onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target);
            console.log({
                email: e.target.email.value,
                password: e.target.password.value
            })
            fetch('http://localhost:3001/users/login/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: e.target.email.value,
                    password: e.target.password.value
                }),
            }) .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }} className="vg-form vg-form-dark" id="form-login">
            <h4>Авторизация</h4>
            <div className="form-group mb-3">
                <input type="email" name="email" id="user_login_email" className="form-group__input" placeholder="Ваш E-mail" required="" />
                <label htmlFor="user_login_email" className="form-group__label">
                    Ваш E-mail
                </label>
            </div>
            <div className="form-group mb-3">
                <input type="password" name="password" id="user_login_password" placeholder="Ваш пароль" className="form-group__input" required="" />
                <label htmlFor="user_login_password" className="form-group__label">
                    Ваш пароль
                </label>
                <span className="form-group__forgot">
                    <a href="#" data-toggle="user-form" data-target="forgot" onClick={openForgot}>
                        Забыли пароль?
                    </a>
                </span>
            </div>
            <div className="alert-area">
                <div className="msg" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn--secondary btn--md me-2">
                    Войти
                </button>
                <a href="#" className="btn btn--primary btn--md" data-toggle="user-form" data-target="sign-up" onClick={openReg}>
                    Регистрация
                </a>
            </div>
        </form>
    )
}

export default Login;