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
             model.inputs.login = {};
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
    model.inputs.newUser = {};
    userIndex.push(newUserid);
    currentId.push(newUserid);
    console.log("dette er antall brukere", model.users);
    console.log("dette er currentUserId", currentId)
    console.log("Du er logget inn med BrukerID", newUserid)
    accountHomePage();
};
function editAccount()
{
    model.inputs.hideFFButton.userLoginFramesclass = "isHidden";
    model.inputs.hideFFButton.userLoginFramesclass2 = "userLoginFrames";
    model.inputs.editUserButton.edit = "disabled";
    model.inputs.editUserButton.save = "enabled";
    accountInformationPage();
}

function cancelEditAccount()
{
    model.inputs.hideFFButton.userLoginFramesclass = "userLoginFrames";
    model.inputs.hideFFButton.userLoginFramesclass2 = "isHidden";
    model.inputs.editUserButton.edit = "enabled";
    model.inputs.editUserButton.save = "disabled";
    accountInformationPage();
}

function saveEditAccount()
{
    let id = parseInt(userIndex);
    model.users.splice(id, 1, 
                        {
                        id: id,
                        userName: model.inputs.editUser.userName,
                        userLoginName: model.inputs.editUser.userLoginName,
                        userPw: model.inputs.editUser.userPw,    
                        zipCode: model.inputs.editUser.zipCode,
                        tlf: model.inputs.editUser.tlf,
                        adress: model.inputs.editUser.adress    
                        })

    console.log(model.users[id])
    model.inputs.editUserButton.edit = "enabled";
    model.inputs.editUserButton.save = "disabled";
    model.inputs.hideFFButton.userLoginFramesclass = "userLoginFrames";
    model.inputs.hideFFButton.userLoginFramesclass2 = "isHidden";
    accountInformationPage();
  
};



let anonymUser = false; 
function anonymUserBtn(){
    if (anonymUser === false){
        anonymUser = true;
    } else {anonymUser = false}

 
};


function postAd()
{
    let foodImage = document.getElementById('output').src
    let newAllergyID = model.allergies;
    if(model.inputs.checkAllergy.egg === true){
        model.allergies.push(0);
    }
    if(model.inputs.checkAllergy.gluten === true){
        model.allergies.push(1);
    }
    if(model.inputs.checkAllergy.nøtter === true){
        model.allergies.push(2);
    }
    if(model.inputs.checkAllergy.melk === true){
        model.allergies.push(3);
    }
    
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
            id: newAdId,
            userLoginName: model.users[currentId].userLoginName,
            userid: model.users[currentId].id,
            title: model.inputs.newAd.title,
            datePosted: model.inputs.newAd.datePosted,
            dateExpired: model.inputs.newAd.dateExpired,
            image: foodImage,
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
            userName: model.users[currentId].userName,
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
            orderedById: orderId,
        }
    model.inputs.checkAllergy.egg = false;
    model.inputs.checkAllergy.gluten = false;
    model.inputs.checkAllergy.nøtter = false;
    model.inputs.checkAllergy.melk = false;
    model.ads.push(newAd);
    model.adsHistory.push(newAd);
    model.allergies = [];
    model.inputs.newAd = {};
    model.inputs.foodDescriptionInputs = {  title: "",adress: "",zipCode: "",phoneNumber: "",datePosted: "", dateExpired: "",details: "", image: "https://sirencomms.com/wp-content/themes/massive-dynamic/assets/img/placeholders/placeholder1.jpg"}
    model.inputs.hideFFButton.uploadPhotoFrameclass = "isHidden"
    console.log(model.ads);
    accountHomePage();
    
    };
};

function postHistoryAd(){
    let foodImage = document.getElementById('output').src
    let newAllergyID = model.allergies;
    if(model.inputs.checkAllergy.egg === true){
        model.allergies.push(0);
    }
    if(model.inputs.checkAllergy.gluten === true){
        model.allergies.push(1);
    }
    if(model.inputs.checkAllergy.nøtter === true){
        model.allergies.push(2);
    }
    if(model.inputs.checkAllergy.melk === true){
        model.allergies.push(3);
    }
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
            id: newAdId,
            userLoginName: model.users[currentId].userLoginName,
            userid: model.users[currentId].id,
            title: model.inputs.foodDescriptionInputs.title,
            datePosted: model.inputs.foodDescriptionInputs.datePosted,
            dateExpired: model.inputs.foodDescriptionInputs.dateExpired,
            image: foodImage,
            imageId: model.inputs.newAd.imageId,
            details: model.inputs.foodDescriptionInputs.details,
            allergyID: newAllergyID,
            zipCode: model.inputs.foodDescriptionInputs.zipCode,
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
            userName: model.users[currentId].userName,
            title: model.inputs.foodDescriptionInputs.title,
            datePosted: model.inputs.foodDescriptionInputs.datePosted,
            dateExpired: model.inputs.foodDescriptionInputs.dateExpired,
            image: foodImage,
            imageId: newAdId,
            details: model.inputs.foodDescriptionInputs.details,
            allergyID: newAllergyID,
            zipCode: model.inputs.foodDescriptionInputs.zipCode,
            adress: model.inputs.foodDescriptionInputs.adress,
            phoneNumber: model.inputs.foodDescriptionInputs.phoneNumber,
            orderedById: orderId,
        }
    model.inputs.checkAllergy.egg = false;
    model.inputs.checkAllergy.gluten = false;
    model.inputs.checkAllergy.nøtter = false;
    model.inputs.checkAllergy.melk = false;
    model.ads.push(newAd);
    model.adsHistory.push(newAd);
    model.allergies = [];
    model.inputs.newAd = {};
    model.inputs.foodDescriptionInputs = {  title: "",adress: "",zipCode: "",phoneNumber: "",datePosted: "", dateExpired: "",details: "", image: "https://sirencomms.com/wp-content/themes/massive-dynamic/assets/img/placeholders/placeholder1.jpg"}
    model.inputs.hideFFButton.uploadPhotoFrameclass = "isHidden"
    model.inputs.hideFFButton.foodDescriptionImageclass = "isHidden"
    model.inputs.editUserButton.hide = "isHidden"
    model.inputs.editUserButton.show = ""
    console.log(model.ads);
    accountHomePage();
    }
}
function userAdHistory(index){
    model.inputs.hideFFButton.uploadPhotoFrameclass = "uploadPhotoFrame";
    model.inputs.hideFFButton.foodDescriptionInputsclass = "isHidden";
    model.inputs.hideFFButton.foodDescriptionInputsclass2 = "foodDescriptionBorder"

    model.inputs.foodDescriptionInputs.title = model.adsHistory[index].title;
    model.inputs.foodDescriptionInputs.adress = model.adsHistory[index].adress;
    model.inputs.foodDescriptionInputs.zipCode = model.adsHistory[index].zipCode;
    model.inputs.foodDescriptionInputs.phoneNumber = model.adsHistory[index].phoneNumber;
    model.inputs.foodDescriptionInputs.details = model.adsHistory[index].details;
    model.inputs.foodDescriptionInputs.image = model.adsHistory[index].image;
    giveAway()
}
function hideFunction()
{
    model.inputs.hideFFButton.foodDescriptionImageclass = "isHidden"
    model.inputs.editUserButton.hide = "isHidden"
    model.inputs.editUserButton.show = ""
    model.inputs.foodDescriptionInputs = {  title: "",adress: "",zipCode: "",phoneNumber: "",datePosted: "", dateExpired: "",details: "", image: "https://sirencomms.com/wp-content/themes/massive-dynamic/assets/img/placeholders/placeholder1.jpg"}
    model.inputs.hideFFButton.uploadPhotoFrameclass = "isHidden"
    giveAway()
}
function showFunction()
{
    model.inputs.hideFFButton.foodDescriptionImageclass = "foodDescriptionImage"
    model.inputs.editUserButton.show = "isHidden"
    model.inputs.editUserButton.hide = ""
    giveAway()
}

var loadFile = function(event) 
{
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

function postedAd(index)
{
    model.inputs.editAd = model.ads[index];
    model.inputs.editAdButton.save = "enabled";
    postedAdsPage(); 
}

function editPostedAd()  
{

    model.inputs.hideFFButton.userLoginFramesclass = "isHidden";
    model.inputs.hideFFButton.userLoginFramesclass2 = "userLoginFrames";
    model.inputs.editAdInputButton.save = "enabled";
    model.inputs.editUserButton.save = "enabled";
    postedAdsPage();
};
function cancelPostedAd()
{
    model.inputs.editAd = model.inputs.newAd;
    model.inputs.hideFFButton.userLoginFramesclass = "userLoginFrames";
    model.inputs.hideFFButton.userLoginFramesclass2 = "isHidden";
    model.inputs.editAdInputButton.save = "disabled";
    model.inputs.editUserButton.save = "disabled";
    model.inputs.editAdButton.save = "disabled";
    model.inputs.editAd = model.inputs.newAd;
    postedAdsPage();
}

function submitPostedAd(index)
{
    let adId = model.ads[index].id
    console.log(adId);
    model.ads.splice(adId, 1,{
        id: model.ads[index].id, 
        userLoginName: model.ads[index].userLoginName, 
        userName: model.ads[index].userName, 
        userid: model.ads[index].userid,
        title: model.inputs.editAd.title,
        details: model.inputs.editAd.details, 
        zipCode: model.inputs.editAd.zipCode, 
        adress: model.inputs.editAd.adress,
        datePosted: model.inputs.editAd.datePosted, 
        dateExpired: model.inputs.editAd.dateExpired, 
        phoneNumber: model.inputs.editAd.phoneNumber, 
        image: model.ads[index].image, 
        imageId: model.ads[index].imageId,
        allergyID:model.ads[index].allergyID, 
        orderedById: model.ads[index].orderedById,
    });

    model.inputs.hideFFButton.userLoginFramesclass = "userLoginFrames";
    model.inputs.hideFFButton.userLoginFramesclass2 = "isHidden";
    model.inputs.editAdInputButton.save = "disabled";
    model.inputs.editUserButton.save = "disabled";
    model.inputs.editAdButton.save = "disabled";
    model.inputs.editAd = model.inputs.newAd;
    console.log(model.ads[index])

    postedAdsPage();
};

function deleteMyAd(index){

    for (let i = 0; i < model.ads.length; i++) {
        if(model.ads[i].id === index)
        model.ads.splice(i, 1);
    }
    model.inputs.hideFFButton.userLoginFramesclass = "userLoginFrames";
    model.inputs.hideFFButton.userLoginFramesclass2 = "isHidden";
    model.inputs.editAdInputButton.save = "disabled";
    model.inputs.editUserButton.save = "disabled";
    model.inputs.editAdButton.save = "disabled";
    model.inputs.editAd = model.inputs.newAd;
    postedAdsPage();
}


function orderedAd(index)
{
    model.inputs.editAd = model.ads[index];
    activeAdInformationPage();
}



let orderById = [];
function contactAdPoster(i){
    orderById = parseInt(model.app.currentUser);
    if(orderById == model.ads[i].userid){  
        alert("du kan ikke bestille din egen vare")
        foodPage()
    }
    else if(model.ads[i].orderedById.includes(orderById)){
        alert("du har trykket bestill")
        foodPage()
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


function checkEgg(){
    if(model.inputs.checkAllergy.egg === false){
        model.inputs.checkAllergy.egg = true;
    }
    else{model.inputs.checkAllergy.egg = false}

};


function checkGluten() 
{
    if(model.inputs.checkAllergy.gluten === false){
        model.inputs.checkAllergy.gluten = true;
    }
    else{model.inputs.checkAllergy.gluten = false}

};

function checkNøtter()
{
    if(model.inputs.checkAllergy.nøtter === false){
        model.inputs.checkAllergy.nøtter = true;
    }
    else{model.inputs.checkAllergy.nøtter = false}

};

function checkMelk()
{
    if(model.inputs.checkAllergy.melk === false){
        model.inputs.checkAllergy.melk = true;
    }
    else{model.inputs.checkAllergy.melk = false}
};

function resetGiveAwayFoodAllergies(i){

    model.allergies = [];
    model.allergies.splice(i, 4,);
};
