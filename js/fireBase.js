firebase.initializeApp(firebaseConfig);
console.log(firebase);

function uploadImage(message){
  const ref = firebase.storage().ref()
  const name = 'input-file'
// Data URL string
	ref.child(name).putString(message, 'data_url').then(snapshot => snapshot.ref.getDownloadURL())
  	.then(url=>{
	var picturelinks = JSON.parse((sessionStorage.getItem("picturelinks")));
  	picturelinks = url;
  	localStorage.setItem("picturelinks",JSON.stringify(picturelinks));
	console.log(url);
	window.open("mlPart.html", "_self") 
  })
  
}