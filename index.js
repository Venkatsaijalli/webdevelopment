var users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"john.png"
    },
    {
        "name":"Jane Doe",
        "gender":"Female",
        "image":"jane.png"
    }
]

var index=0;

function toggle(){
    if(index==0){
        index=1;
    }else{
        index=0;
    }
    document.getElementById("user-name").innerText=users[index].name;
    document.getElementById("user-gender").innerText=users[index].gender;
    document.getElementById("user-image").src=users[index].image;
}

function random(){
    fetch("https://randomuser.me/api")
        .then(function(rawData){
            return rawData.json();
        })
        .then(function(jsonData){
            var user=jsonData.results[0];
            var fullName=user.name.title+" "+user.name.first+" "+user.name.last;
            var gender=user.gender;
            document.getElementById("user-name").innerText=fullName;
            document.getElementById("user-gender").innerText=gender;
            document.getElementById("user-image").src=user.picture.large;
        })
}