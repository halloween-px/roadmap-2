
const SliderCard = (props) => {
	const slider = props.slider;
	return (
		<div className="vg-slider">
			<div className="vg-slider-item active">
				<div className="vg-slider-item--image"><img src="/img/sliders/slide_1.jpg" alt=""/></div>
				<div className="vg-slider-item--wrapper">
					<div className="container position-static">
						<div className="row vg-slider-item--layout vg-slider-item--layout--left-center">
							<div className="col-lg-7">
								<div className="title"><span>Поставки строительных материалов</span></div>
								<div className="subtitle"><span>Комплексные поставки строительных материалов высококачественной продукции. Оптовые поставки стройматериалов – это сотрудничество на взаимовыгодных условиях, когда каждый клиент оперативно получает качественный товар от лучших производителей по выгодным ценам.</span></div>
								<div className="btn-area mt-4">
									<a href="" className="btn btn--primary">Подробнее</a>
								</div>
							</div>
							<div className="image-area">
								<span><img src={'/img/sliders/slide_1.jpg'} alt="#"/> </span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SliderCard;