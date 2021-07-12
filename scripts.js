$('#moveCarousel').carousel({
	interval: 3000
})

$('#moveCarousel2').carousel({
	interval: 3000
})

$('#moveCarousel3').carousel({
	interval: 3000
})

$('.carousel .carousel-item').each(function(){
		let minPerSlide = 3;
		let next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		for (var i=0;i<minPerSlide;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}

			next.children(':first-child').clone().appendTo($(this));
		}
});

function queryCarrousel() {
	$('.loader').show();
	$.ajax({
		type: 'GET',
		url: "https://smileschool-api.hbtn.info/quotes",
		dataType: 'json',
		success: function(data) {
			for (let i = 0; i < data.length; i++) {
				for (let j = 0; j < i; j++) {
					$('#quotesDynamic').append(`
						<div class="carousel-item active">
							<div class="row align-items-center mr-auto ml-auto">
								<div class="text-center col-12 col-lg-2  col-sm-2">
									<img src=${data[i].pic_url} class="d-block align-self-center" alt="...">
								</div>
								<div class="col-12 col-lg-9 col-sm-7">
									<div class="quote-info">
										<p class="text-white">«${data[i].text}</p>
										<h4 class="text-white">${data[i].name}</h4>
										<span class="text-white">${data[i].title}</span>
									</div>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<div class="row align-items-center mr-auto ml-auto">
								<div class="text-center col-12 col-lg-2  col-sm-2">
									<img src=${data[j].pic_url} class="d-block align-self-center" alt="...">
								</div>
								<div class="col-12 col-lg-9 col-sm-7">
									<div class="quote-info">
										<p class="text-white">«${data[j].text}</p>
										<h4 class="text-white">${data[j].name}</h4>
										<span class="text-white">${data[j].title}</span>
									</div>
								</div>
							</div>
						</div>
					`)
				}
			}
			$('.loader').hide();
		}
	});
}
queryCarrousel();

function queryTutorials() {
	$('.loader').show();
	$.ajax({
		type: 'GET',
		url: 'https://smileschool-api.hbtn.info/popular-tutorials',
		contentType: 'json',
		success: function (response) {
			response.forEach(function (data) {
				$('#newTutorials').append(`
						<div class="col-12 col-lg-3 col-md-6 col-sm-6">
							<div class="card d-flex border-0">
								<img src=${data.thumb_url} alt="" class="card-img-top">
								<div class="text-center">
									<img src="images/play.png" alt="" class="align-self-center card-img-overlay img-fluid" width="100">
								</div>
								<div class="card-body">
									<h5 class="card-title">${data.title}</h5>
									<p class="card-text">${data["sub-title"]}</p>
									<div class="author d-flex align-items-center">
										<img src=${data.author_pic_url} alt="" class="rounded-circle" width="30">
										<h6 class="mt-2 ml-2">${data.author}</h6>
									</div>
									<div class="info my-3 d-flex justify-content-between">
										<div class="stars">
											<img src="images/star_on.png" alt="" width="15">
											<img src="images/star_on.png" alt="" width="15">
											<img src="images/star_on.png" alt="" width="15">
											<img src="images/star_on.png" alt="" width="15">
											<img src="images/star_off.png" alt="" width="15">
										</div>
										<span>${data.duration}</span>
									</div>
								</div>
							</div>
						</div>
	`);
	$('.loader').hide();
	})
	}
	})
}
queryTutorials();

function queryLatest() {
	$('.loader').show();
	$.ajax({
		type: 'GET',
		url: 'https://smileschool-api.hbtn.info/latest-videos',
		contentType: 'json',
		success: function (response) {
			response.forEach(function (data) {
				$('#newLatest').append(`
						<div class="col-12 col-lg-3 col-md-6 col-sm-6">
							<div class="card d-flex border-0">
								<img src=${data.thumb_url} alt="" class="card-img-top">
								<div class="text-center">
									<img src="images/play.png" alt="" class="align-self-center card-img-overlay img-fluid" width="100">
								</div>
								<div class="card-body">
									<h5 class="card-title">${data.title}</h5>
									<p class="card-text">${data["sub-title"]}</p>
									<div class="author d-flex align-items-center">
										<img src=${data.author_pic_url} alt="" class="rounded-circle" width="30">
										<h6 class="mt-2 ml-2">${data.author}</h6>
									</div>
									<div class="info my-3 d-flex justify-content-between">
										<div class="stars">
											<img src="images/star_on.png" alt="" width="15">
											<img src="images/star_on.png" alt="" width="15">
											<img src="images/star_on.png" alt="" width="15">
											<img src="images/star_on.png" alt="" width="15">
											<img src="images/star_off.png" alt="" width="15">
										</div>
										<span>${data.duration}</span>
									</div>
								</div>
							</div>
						</div>
	`);
	$('.loader').hide();
	})
	}
	})
}
queryLatest();


function queryCourses() {
	$('.loader').show();
	$.ajax({
		type: 'GET',
		url: 'https://smileschool-api.hbtn.info/courses',
		contentType: 'json',
		success: function (response) {
			response.forEach(function (data) {
				console.log(data.courses.title[2]);
				$('#newTutorials').append(`
				<div class="col-12 col-lg-3 col-md-6 col-sm-6">
				<div class="card d-flex border-0">
					<img src=${data.thumb_url} alt="" class="card-img-top">
					<div class="text-center">
						<img src="images/play.png" alt="" class="card-img-overlay" width="100">
					</div>
					<div class="card-body">
						<h5 class="card-title">${data.title}</h5>
						<p class="card-text">${data["sub-title"]}</p>
						<div class="author d-flex align-items-center">
							<img src=${data.author_pic_url} alt="" class="rounded-circle" width="30">
							<h6 class="mt-2 ml-2">${data.author}</h6>
						</div>
						<div class="info my-3 d-flex justify-content-between">
							<div class="stars">
								<img src="images/star_on.png" alt="" width="15">
								<img src="images/star_on.png" alt="" width="15">
								<img src="images/star_on.png" alt="" width="15">
								<img src="images/star_on.png" alt="" width="15">
								<img src="images/star_off.png" alt="" width="15">
							</div>
							<span>${data.duration}</span>
						</div>
					</div>
				</div>
			</div>
			`)
			}
		)}
	})
}
queryCourses();
