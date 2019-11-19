var app = app || {}
app = (()=>{
	let _,js
	let init =()=>{
		_=$.ctx()
		js=$.js()
	}
	let run = x =>{
		onCreate()
		$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Session(x))
		})
	}
	let onCreate=()=>{
		setContentView()
	}
	let setContentView=()=>{
		$('<table id="tab"><tr></tr></table>')
		.css({width: '80%',
            height: '800px',
            border: '1px solid black',
            margin: '0 auto'
        })
		.appendTo('#wrapper')
		$('<td/>',{id :'left'})
		.css({width: '20%',
                height: '100%',
                border: '1px solid black',
            'vertical-align': 'top'	
         })
		.appendTo('tr')
		$('<td/>',{id :'right'})
		.css({width: '80%',
                height: '100%',
                border: '1px solid black'
         })
		.appendTo('tr')
		
		$.each(['NAVER','CGV','BUGS'],(i,j)=>{
			$('<div/>')
			.text(j)
			.css({width: '100%',
	            height: '50px',
	            border: '1px solid black',
	            'text-align' : 'center'
			})
			.appendTo('#left')
			.click(function() {
				$(this).css({'background-color':'yellow'})
				$(this).siblings().css({'background-color':'white'})
				alert($(this).text()+'클릭')
				_ = $.ctx()
				switch ($(this).text()) {
				case 'NAVER':
					$('#right').empty()
					$.getJSON(_+'/crawls/naver',d=>{
						$.each(d,(i,j)=>{
							$('<div/>')
							.html('<h1>'+j.origin+'</h1><h4>'+j.teans+'</h4>')
							.css({width: '40%',
					              height: '40%',
					              border: '3px solid red',
					              float:'left'})
							.appendTo('#right')
						})
					})
					break;
				case 'CGV':
					$('#right').empty()
					$.getJSON(_+'/crawls/cgv',d=>{
						$.each(d,(i,j)=>{
							$('<div/>')
							.html('<h4>'+'<img style="width:200px;" src="'+j.image+'"></h4>'+'<h3>'+j.title+'</h3><h4>'+j.percent+'</h4>'+j.info)
							.css({
					              border: '3px solid red',
					              float:'left'})
							.appendTo('#right')
						})
					})
					break;
				case 'BUGS':
					$.getJSON(_+'/crawls/bugs',d=>{})
					break;
				}
			})
		})
	}
	
	return {run}
})()