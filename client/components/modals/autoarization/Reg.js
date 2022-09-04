const Reg = () => {
  return (
    <form action="" method="post" className="vg-form vg-form-dark" data-form="sign-up" id="form-reg">
      <h4 className="form__title">Регистрация</h4>
      <div className="form-group mb-3">
        <input type="text" name="title" id="user_reg_name" className="form-group__input" placeholder="Ваше имя" required="" />
        <label htmlFor="user_reg_name" className="form-group__label">
          Ваше имя *
        </label>
      </div>
      <div className="form-group mb-3">
        <input
          type="email"
          name="email"
          id="user_reg_email"
          className="form-group__input"
          placeholder="Ваш E-mail"
          required=""
        />
        <label htmlFor="user_reg_email" className="form-group__label">
          Ваш E-mail *
        </label>
      </div>
      <div className="form-group mb-3">
        <input
          type="text"
          name="phone"
          data-mask="phone"
          id="user_reg_phone"
          className="form-group__input input-mask-phone"
          placeholder="Ваш телефон"
        />
        <label htmlFor="user_reg_phone" className="form-group__label">
          Ваш телефон
        </label>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <input
              type="password"
              name="password"
              id="user_reg_password"
              className="form-group__input"
              placeholder="Придумайте пароль"
              required=""
            />
            <label htmlFor="user_reg_password" className="form-group__label">
              Придумайте пароль *
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <input
              type="password"
              name="password_confirmation"
              id="user_reg_password_confirmation"
              className="form-group__input"
              placeholder="Придумайте пароль"
              required=""
            />
            <label
              htmlFor="user_reg_password_confirmation"
              className="form-group__label"
            >
              Повторите пароль *
            </label>
          </div>
        </div>
      </div>
      <div className="alert-area">
        <div className="msg" />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn--secondary btn--md me-2 mb-2 mb-xl-0"
        >
          Зарегистрироваться
        </button>
        <a
          href="#"
          className="btn btn--black btn--md"
          data-toggle="user-form"
          data-target="sign-in"
        >
          Войти
        </a>
      </div>
    </form>
  )
}

export default Reg;