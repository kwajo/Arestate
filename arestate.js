var config = {
  apiKey: "AIzaSyC4F-Iymk18XOw357E0V3s9o_RtzGQFTyY",
  authDomain: "arestate-219101.firebaseapp.com",
  databaseURL: "https://arestate-219101.firebaseio.com",
  projectId: "arestate-219101",
  storageBucket: "arestate-219101.appspot.com",
  messagingSenderId: "530247340924"
};



firebase.initializeApp(config);
var firestore = firebase.firestore();



var BucketName = 'areestatevideos';
var bucketRegion = 'ap-southeast-2';
var IdentityPoolId =  'ap-southeast-2:50cdab06-4615-4851-b74c-4fdbf1153941';

/*
console.log("startingAWSconfig");

AWS.config.region = 'ap-southeast-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-southeast-2:50cdab06-4615-4851-b74c-4fdbf1153941',
});

AWS.config.credentials.get(function(err) {
  if (err) console.log(err+"ERROR");
  else {console.log(AWS.config.credentials);
   console.log("CONFIG SET")}
});

/*
console.log("startingAWSconfig");
AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});
*
console.log("doneAWSconfig");

var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: BucketName}
});

*

function uploadImg() {
  var files = document.getElementById('image').files;
  if (!files.length) {
    return alert('Please choose a file to upload first.');
  }
  var file = files[0];
  var fileName = file.name;
  console.log(fileName);


  s3.upload({
    Key: fileName,
    Body: file,
    ACL: 'public-read'
  }, function(err, data) {
    if (err) {
      console.log("Credentials");
      console.log(AWS.config.credentials);
      console.log(err.message);
      console.log("done");
      return alert('There was an error uploading your photo: '+ err.message);
    }
    console.log("Uploaded Photo successfully");
  });
}

*/




function saveData(){
  const form = document.getElementById('form').elements;
  if (!form["name"].value.length) {
    return alert('Please Enter a name');
  }
  const name = form["name"].value;
  const width = form["width"].value;
  const docRef = firestore.doc("Arestate/"+name);
  console.log("The name is "+ name);
  console.log("The width is "+ width);
docRef.set({
  name:name,
  width:width
}).then(function(){
  console.log("status saved!");
}).catch(function (error){
  console.log("Got an error:",error);
});
//uploadImg();
window.location.reload();
}




//"houses":{
//  "myHouse":{
//  "owner":"alovelace",
//  "videourl":"url.mp4",
//  "iamgeurl":"url.com",
//  "width":.2,
//  "imageNameKey":"myHouse"

//the .then() function can be called after the set function to run code when
//the function has finished. If there is an error the catch function will be called
//instead along with the error code "error"

//both these functions take a function as an argument so the structure is
// .then(function(){}).catch(function(error){})
