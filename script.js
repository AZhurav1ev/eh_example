const enjoyhint_instance = new EnjoyHint({});
enjoyhint_instance.set([
	{'click .new_btn' : 'Click me'},
	{'click .new_btn2' : 'Click me'}
]);
enjoyhint_instance.runScript();

$('.new_btn2').on('click', function(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(json => {
		$("body").append(`<button class="new_btn3">${json[0].username}</button>`)
			const new_enjoyhint_instance = new EnjoyHint({});
			new_enjoyhint_instance.set([{'click .new_btn3' : 'After loading'}]);
			new_enjoyhint_instance.runScript();
	})
})
