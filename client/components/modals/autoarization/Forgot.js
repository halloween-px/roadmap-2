const Forgot = () => {
    return (
        <form
            action=""
            method="post"
            className="vg-form vg-form-dark"
            data-form="forgot"
            id="form-forgot"
        >
            <h4 className="form__title">Восстановление пароля</h4>
            <div className="form-group mb-3">
                <input
                    type="email"
                    name="email"
                    id="user_forgot_email"
                    className="form-group__input"
                    placeholder="Ваш email"
                    required=""
                />
                <label htmlFor="user_forgot_email" className="form-group__label">
                    Ваш email
                </label>
            </div>
            <div className="alert-area">
                <div className="msg" />
            </div>
            <div className="form-group">
                <button
                    type="submit"
                    className="btn btn--secondary btn--md me-2 mb-2 mb-xl-0"
                >
                    Восстановить
                </button>
                <a
                    href="#"
                    className="btn btn--black btn--md"
                    data-toggle="user-form"
                    data-target="sign-in"
                >
                    Отмена
                </a>
            </div>
        </form>
    )
}

export default Forgot;