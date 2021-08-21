$(document).ready(function(){
	const urlParams = new URLSearchParams(window.location.search);
	const uid = urlParams.get('uid');
	const key = urlParams.get('key');
	const url = urlParams.get('url');

	if(uid === '' || uid === null || key === '' || key === null || url === '' || url === null) 
		console.log('Missing required inputs');
	else
		$.ajax(
	  	{
	  		url: "https://api.ipify.org/?format=json", success: function(result)
			{
				const ipAdress = result.ip; 
				$.ajax(
				{
					type: 'POST',
					url: url, 
					headers: {
						"content-type":"application/json",
						"authorization": key
					},
					data: JSON.stringify(
						{
							"ip": ipAdress,
							"uid": uid
						}
					)
				}
				);
	  		}
	  	}
  	);
});
