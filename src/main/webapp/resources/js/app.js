var app = app || {}
app = (()=>{
	let _,js
	let init =x=>{
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
				alert($(this).text()+'클릭')
				_ = $.ctx()
				switch ($(this).text()) {
				
				case 'NAVER':
					$.getJSON(_+'/crawls/naver',d=>{})
					break;
				case 'CGV':
					$.getJSON(_+'/crawls/CGV',d=>{})
					break;
				case 'BUGS':
					$.getJSON(_+'/crawls/BUGS',d=>{})
					break;
				}
			})
		})
	}
	return {run}
})()