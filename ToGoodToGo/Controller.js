var userIndex = [];
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();


function logIn() 
{

	for(let i = 0; i < model.users.length; i++) 
    {
		if(model.inputs.login.userName == model.users[i].userLoginName && model.inputs.login.password == model.users[i].userPw) 
        {

            let id = model.users[i].id;
            let currentId = model.app.currentUser;

             currentId.push(id);
             userIndex.push(id);
             console.log("Du er logget inn med BrukerID:", currentId)
        accountHomePage();
        }
    }
}

function logOut()
{
    let currentId = model.app.currentUser;

    currentId.splice(0,1);
    userIndex.splice(0,1);
    console.log("Du logget ut med BrukerID:", currentId)
    mainPage();
}


function newUsers()
{
    model.users.forEach((item, i) => 
    {
        
        newUserid = i + 1;
    });

    model.users.push({
        id: newUserid, 
        userName: model.inputs.newUser.userName, 
        userLoginName: model.inputs.newUser.userLoginName, 
        userPw: model.inputs.newUser.userPw, 
        adress: model.inputs.newUser.adress, 
        zipCode: model.inputs.newUser.zipCode, 
        tlf: model.inputs.newUser.tlf
    })

    let currentId = model.app.currentUser;
    userIndex.push(newUserid);
    currentId.push(newUserid);
    console.log("dette er antall brukere", model.users);
    console.log("dette er currentUserId", currentId)
    console.log("Du er logget inn med BrukerID", newUserid)
    accountHomePage();
};

function editAccountInfo()
{

    delete model.users[userIndex]['userName'];
    delete model.users[userIndex]['userLoginName'];
    delete model.users[userIndex]['zipCode'];
    delete model.users[userIndex]['userPw'];
    delete model.users[userIndex]['tlf'];
    delete model.users[userIndex]['adress'];
   
    model.users[userIndex].userName = model.inputs.editUser.userName;
    model.users[userIndex].userLoginName = model.inputs.editUser.userLoginName;
    model.users[userIndex].userPw = model.inputs.editUser.userPw;
    model.users[userIndex].zipCode = model.inputs.editUser.zipCode;
    model.users[userIndex].tlf = model.inputs.editUser.tlf;
    model.users[userIndex].adress = model.inputs.editUser.adress;
  
};



let anonymUser = false; 
function anonymUserBtn(){
    anonymUser = true;
};

function postAd()
{
    
     let foodImage = document.getElementById('output').src
    let newAllergyID = model.allergies;
    
    
        let currentId = model.app.currentUser;
        let anonymUs = anonymUser
        let anonym = "Anonym"
        let orderId = [];
        model.ads.forEach((item, i) => 
        {

            newAdId = i + 1;
        });
    
        if(anonymUs === true){
        let newAd = 
        {
            id:anonym,
            userLoginName: model.users[currentId].userLoginName,
            userid: model.users[currentId].id,
            title: model.inputs.newAd.title,
            datePosted: model.inputs.newAd.datePosted,
            dateExpired: model.inputs.newAd.dateExpired,
            image: model.inputs.newAd.image,
            imageId: model.inputs.newAd.imageId,
            details: model.inputs.newAd.details,
            allergyID: newAllergyID,
            zipCode: model.inputs.newAd.zipCode,
            adress: anonym, // <-------- Anonym Verdi
            userName: anonym, // <-------- Anonym Verdi
            phoneNumber: anonym,// <-------- Anonym Verdi
            orderedById: orderId,
          };
          model.ads.push(newAd);
          model.allergies = [];
          console.log(model.ads);
          accountHomePage();
        }
        else if (anonymUs === false){
        let  newAd =  // ikke annonym
        {
          
            id: newAdId,
            userLoginName: model.users[currentId].userLoginName,
            userid: model.users[currentId].id,
            title: model.inputs.newAd.title,
            datePosted: model.inputs.newAd.datePosted,
            dateExpired: model.inputs.newAd.dateExpired,
            image: foodImage,
            imageId: newAdId,
            details: model.inputs.newAd.details,
            allergyID: newAllergyID,
            zipCode: model.inputs.newAd.zipCode,
            adress: model.inputs.newAd.adress,
            phoneNumber: model.inputs.newAd.phoneNumber,
            userName: model.users[currentId].userName,
            orderedById: orderId,
        }
    model.ads.push(newAd);
    model.adsHistory.push(newAd);
    model.allergies = [];
    console.log(model.ads);
    accountHomePage();
    
    };
};

var loadFile = function(event) 
{
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};


function submitPostedAds(index)
{
    model.ads[index].title = model.inputs.editAd.title
    model.ads[index].adress = model.inputs.editAd.adress
    model.ads[index].zipCode = model.inputs.editAd.zipCode
    model.ads[index].phoneNumber = model.inputs.editAd.phoneNumber
    model.ads[index].datePosted = model.inputs.editAd.datePosted
    model.ads[index].dateExpired = model.inputs.editAd.dateExpired
    model.ads[index].details = model.inputs.editAd.details
};



function editPostedAds(index)  
{
    delete model.ads[index]['title'];
    delete model.ads[index]['adress'];
    delete model.ads[index]['zipCode'];
    delete model.ads[index]['phoneNumber'];
    delete model.ads[index]['datePosted'];
    delete model.ads[index]['dateExpired'];
    delete model.ads[index]['details'];
};

let orderById = [];
function contactAdPoster(i){
    orderById = parseInt(model.app.currentUser);
    if(userIndex.includes(model.ads[i].userid)){
        
        alert("du kan ikke bestille din egen vare")
    }
    else if(model.ads[i].orderedById.includes(orderById)){
        alert("du har trykket bestill")
    }
    else
    {
    model.ads[i].orderedById.push(orderById);
    console.log(model.ads[i].orderedById, model.app.currentUser)
    foodPage();
    }
    orderById = [];
}

let removedAllergyArray = [];

function resetAllergies()
{
    for(let i = 0; i < removedAllergyArray.length; i++) 
    {
      model.ads.push(removedAllergyArray[0, i]);
    };
    removedAllergyArray = [];
    foodPage();
}

function removeEggAllergies(){
    for(let i = 0; i < model.ads.length; i++) 
    { 
        if(model.ads[i].allergyID.includes(0)){
            removedAllergyArray.push(model.ads[i]);
            console.log(removedAllergyArray);
            model.ads.splice(i, 1);
            
            removeEggAllergies();
        }
    }
    foodPage();
};  

function removeGlutenAllergies(){
    for(let i = 0; i < model.ads.length; i++) 
    { 
        if(model.ads[i].allergyID.includes(1)){ 
            removedAllergyArray.push(model.ads[i]);
            model.ads.splice(i, 1);     
    
            removeGlutenAllergies()
        }
    }
    foodPage();
};

function removeNøtterAllergies(){
    for(let i = 0; i < model.ads.length; i++) 
    { 
        if(model.ads[i].allergyID.includes(2)){ 
            removedAllergyArray.push(model.ads[i]);
            model.ads.splice(i, 1);     
            removeNøtterAllergies()
        }
    }
    foodPage();
    };

function removeMelkAllergies(){
    for(let i = 0; i < model.ads.length; i++) 
    { 
        if(model.ads[i].allergyID.includes(3)){ 
            removedAllergyArray.push(model.ads[i]);
            model.ads.splice(i, 1);     
            removeMelkAllergies();
        }
    }
    foodPage();
    };
    
function checkEgg()
{

    model.allergies.push(0)
    
};

function checkGluten() 
{
    model.allergies.push(1)
};

function checkNøtter()
{
    model.allergies.push(2)

};

function checkMelk()
{
    model.allergies.push(3)
};

function userAdHistory(index){
    document.getElementById("newAdTittel").value = model.ads[index].title;
    document.getElementById("newAdAdresse").value = model.ads[index].adress;
    document.getElementById("newAdPostNr").value = model.ads[index].zipCode;
    document.getElementById("newAdBeskrivelse").value = model.ads[index].details;

}

function resetGiveAwayFoodAllergies(i){

    model.allergies = [];
    model.allergies.splice(i, 4,);
    };
    
    
let deleteAdsArray = [];
function deleteMyAds() 
{
    for (let i = 0; i < model.ads.length; i++)
    {
        if(model.app.currentUser.includes(model.ads[i].userid)){
            console.log(model.ads[userIndex])
            model.ads.splice(model.ads[userIndex], 1);
            deleteMyAds();
        }
    }
    postedAdsPage();


};
function deleteMyAd(index){
    model.ads.splice(model.ads[index], 1)
    postedAdsPage();
}