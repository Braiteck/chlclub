$(function(){
	inView.offset(150)

	if( $('.you_get').length ) {
		inView('.you_get .grid')
		    .on('enter', function(el){
		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(0)').removeClass('animate')
		    		$(el).find('.item_wrap:eq(2)').removeClass('animate')
		    	}, 300)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(1)').removeClass('animate')
		    	}, 600)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(3)').removeClass('animate')
		    		$(el).find('.item_wrap:eq(5)').removeClass('animate')
		    	}, 700)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(4)').removeClass('animate')
		    	}, 900)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(6)').removeClass('animate')
		    		$(el).find('.item_wrap:eq(8)').removeClass('animate')
		    	}, 1000)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(7)').removeClass('animate')
		    	}, 1200)
		    })
	}


	if( $('.contacts_block .route').length ) {
		inView('.contacts_block .route')
		    .on('enter', function(el){
		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(0) img').removeClass('animate')
		    	}, 200)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(1) img').removeClass('animate')
		    	}, 400)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(2) img').removeClass('animate')
		    	}, 600)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(3) img').removeClass('animate')
		    	}, 800)
		    })
	}


	if( $('.individual').length ) {
		inView('.individual .grid')
		    .on('enter', function(el){
		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(0)').removeClass('animate')
		    	}, 200)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(2)').removeClass('animate')
		    	}, 400)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(1)').removeClass('animate')
		    	}, 600)
		    })
	}


	if( $('.steps').length ) {
		inView('.steps')
		    .on('enter', function(el){
		    	setTimeout(function(){
		    		$(el).find('.row').removeClass('animate')
		    		$(el).find('.gift').removeClass('animate')
		    	}, 300)
		    })
	}


	if( $('.how_cert').length ) {
		inView('.how_cert .grid')
		    .on('enter', function(el){
		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(0)').addClass('animate')
		    	}, 300)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(1)').addClass('animate')
		    	}, 600)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(2)').addClass('animate')
		    	}, 900)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(3)').addClass('animate')
		    	}, 1200)
		    })
	}


	if( $('.panorama_info').length ) {
		inView('.panorama_info .grid')
		    .on('enter', function(el){
		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(0)').removeClass('animate')
		    		$(el).find('.item_wrap:eq(2)').removeClass('animate')
		    	}, 300)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(1)').removeClass('animate')
		    	}, 600)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(3)').removeClass('animate')
		    		$(el).find('.item_wrap:eq(5)').removeClass('animate')
		    	}, 700)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(4)').removeClass('animate')
		    	}, 900)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(6)').removeClass('animate')
		    		$(el).find('.item_wrap:eq(8)').removeClass('animate')
		    	}, 1000)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(7)').removeClass('animate')
		    	}, 1200)
		    })
	}


	if( $('.panorama_price').length ) {
		inView('.panorama_price .grid')
		    .on('enter', function(el){
		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(0)').addClass('animate')
		    	}, 300)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(1)').addClass('animate')
		    	}, 600)

		    	setTimeout(function(){
		    		$(el).find('.item_wrap:eq(2)').addClass('animate')
		    	}, 900)
		    })
	}
})