let html = '';
show();
function show()
{
   document.getElementById('app').innerHTML = html;
}

function mainPage()
{
    html = /*html*/`
    
    <h1 class="headLine">Too Good To Go</h1>

    <div class="mainPageFrame">
        <div class="frames">
        
            <div class="newUserBorder">
                <p>Ny til "To Good To Go?"</p>
                <p>Lag en bruker</p>
                <button onclick="newUser()" class="mainBtns" type="submit">Klikk her</button>
            </div>
            <form class="userLoginFrames"> 
                <label>Brukernavn:</label>
                <input type="text" placeholder= "navn"  oninput="model.inputs.login.userName=this.value" required>
    
                <label>Passord:</label>
                <input type="text" placeholder= "*****" oninput="model.inputs.login.password=this.value" required>
                <button onclick="logIn()" class="mainBtns" id="enterBtn" type="submit">Login</button>
            </form>
        </div>
    </div>
    `;
    show();
}
mainPage();

// Required funker når den ligger inni en <form>



function newUser(){
    html = /*html*/`
    
    <h1 class="headLine">Too Good To Go</h1>
    <div class="newUserPageFrame">
        <div class="frames">
            <div id="newUserInfo">
                <h1>Lag en bruker</h1>
            </div>
                <div class="userLoginFrames"> 
                    <label>Navn:</label>
                    <input type="text" placeholder= "Navn" oninput="model.inputs.newUser.userName=this.value">

                    <label>Brukernavn:</label>
                    <input type="text" placeholder= "Navn" oninput="model.inputs.newUser.userLoginName=this.value">

                    <label>MobilNr:</label>
                    <input type="text" placeholder= "Telefon" oninput="model.inputs.newUser.tlf=this.value">
                    
                    <label>Adresse:</label>
                    <input type="text" placeholder= "Adresse" oninput="model.inputs.newUser.adress=this.value">

                    <label>Zip Code:</label>
                    <input type="text" placeholder= "Zip Code"oninput="model.inputs.newUser.zipCode=this.value">
    
                    <label>Passord:</label>
                    <input type="text" placeholder= "*****" oninput="model.inputs.newUser.userPw=this.value">
        
                    <button onclick="mainPage()" class="mainBtns" type="submit">Avbryt</button>
                    <button onclick="newUsers()"class="mainBtns" type="submit">Opprett Bruker</button>
                    </div>
        </div>
    </div>
    
    `;
    show();
}

function accountHomePage(){
    html = /*html*/`
    <h1 class="headLine">Too Good To Go</h1>
    <div class="userInfo">
        <button onclick="accountInformationPage()" class ="edit mainBtns">Bruker informasjon</button> <br>
        <button onclick= "logOut()" class= "logge ut mainbtns">Logg ut</button>
    </div>
    <div class="accountPageFrame">
        <div class="miniFrames">
            <div onclick= "giveAway()">
                <h3 class ="titleUserPage">Gi ut mat<h3>
            </div>
        </div>
        <div class="miniFrames">
            <div onclick="postedAdsPage()" >
                <h3 class ="titleUserPage">Dine utlagte annonser<h3>
            </div>
        </div>
        <div class="miniFrames">
            <div onclick="foodPage()" >
                <h3 class ="titleUserPage">Finn mat<h3>
            </div>
        </div>
        <div class="miniFrames">
            <div onclick="activeAdInformationPage()">
                <h3 class ="titleUserPage">Dine aktive bestilinger<h3>
            </div>
        </div>
    </div>
    `;
    show(); 
};

function accountInformationPage(){
    html = /*html*/`
            <h1 class="headLine">Too Good To Go</h1>
            <div class="backButton">
                <button onclick= "accountHomePage()" class= "logge ut mainbtns">X</button>
            </div>
            <div class="newUserPageFrame">
                <div class="frames">
                    <div id="newUserInfo">
                        <h1>Din Bruker</h1>
                            <form class="${model.inputs.hideFFButton.userLoginFramesclass}">
                                <label>Navn:</label>
                                <input ${model.inputs.editUserButton.save} class="brukerInfo" type="text" value="${model.users[userIndex].userName}">
                                <label>Brukernavn:</label>
                                <input ${model.inputs.editUserButton.save} class="brukerInfo" type="text" value="${model.users[userIndex].userLoginName}">
                                <label>MobilNr:</label>
                                <input ${model.inputs.editUserButton.save} class="brukerInfo" type="text" value="${model.users[userIndex].tlf}">
                                <label>Adresse:</label>
                                <input ${model.inputs.editUserButton.save} class="brukerInfo" type="text" value="${model.users[userIndex].adress}">
                                <label>Zip Code:</label>
                                <input ${model.inputs.editUserButton.save} class="brukerInfo" type="text" value="${model.users[userIndex].zipCode}">
                                <label>Passord:</label>
                                <input ${model.inputs.editUserButton.save} class="brukerInfo" type="text" value="${model.users[userIndex].userPw}">
                                <div class="btnRow">
                                <button ${model.inputs.editUserButton.edit} onclick="accountHomePage()" class="mainBtns" >Tilbake</button>
                                <button ${model.inputs.editUserButton.edit} onclick="editAccount()" class="mainBtns" >Rediger</button>
                                <button ${model.inputs.editUserButton.save} onclick="saveEditAccount()" class="mainBtns"  type="submit">Lagre</button>
                                </div>
                            </form>
                            <form class="${model.inputs.hideFFButton.userLoginFramesclass2}" onsubmit="saveEditAccount()">
                                <label>Navn:</label>
                                <input ${model.inputs.editUserButton.save} class="brukerInfo" type="text"  placeholder="${model.users[userIndex].userName}" oninput="model.inputs.editUser.userName = this.value" required>
                                <label>Brukernavn:</label>
                                <input ${model.inputs.editUserButton.save} class="brukerInfo" type="text"  placeholder="${model.users[userIndex].userLoginName}" oninput="model.inputs.editUser.userLoginName = this.value" required>
                                <label>MobilNr:</label>
                                <input ${model.inputs.editUserButton.save} class="brukerInfo" type="text"  placeholder="${model.users[userIndex].tlf}" oninput="model.inputs.editUser.tlf = this.value" required>
                                <label>Adresse:</label>
                                <input ${model.inputs.editUserButton.save} class="brukerInfo" type="text"  placeholder="${model.users[userIndex].adress}" oninput="model.inputs.editUser.adress = this.value" required>
                                <label>Zip Code:</label>
                                <input ${model.inputs.editUserButton.save} class="brukerInfo" type="text"  placeholder="${model.users[userIndex].zipCode}" oninput="model.inputs.editUser.zipCode = this.value" required>
                                <label>Passord:</label>
                                <input ${model.inputs.editUserButton.save} class="brukerInfo" type="text"  placeholder="${model.users[userIndex].userPw}" oninput="model.inputs.editUser.userPw = this.value" required>
                                <div>
                                    <button ${model.inputs.editUserButton.edit} onclick="accountHomePage()" class="mainBtns">Tilbake</button>
                                    <button class="${model.inputs.editUserButton.hide}"${model.inputs.editUserButton.edit} onclick="editAccount()" class="mainBtns">Rediger</button>
                                    <button ${model.inputs.editUserButton.save} onclick="cancelEditAccount()" class="mainBtns">Avbryt</button>
                                    <input ${model.inputs.editUserButton.save} class="mainBtns"  type="submit" value="Lagre">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            `;
    show();
}

function showMyActiveAds(){
    let activeAdPhoto = '';
    for (let i = 0; i < model.ads.length; i++){
        if(model.ads[i].orderedById.includes(model.users[userIndex].id)){
            
            activeAdPhoto += /*html*/`
            <img onclick="activeAdInformationPage(${i})" src="${model.ads[i].image}" class="foodGroupPhotoFrame">
            `;
        }
    }
    html = /*html*/`
    <h1 class="headLine">Too Good To Go</h1>
    <div class="overHeadButtons">
        <div class="userButtons">
            <button onclick="accountInformationPage()" class ="edit mainBtns">Bruker informasjon</button> <br>
            <button onclick="logOut()" class= "logge ut mainbtns">Logg ut</button>
        </div>
        <div class="backButton">
            <button onclick="accountHomePage()" class= "logge ut mainbtns">X</button>
        </div>
    </div>
    <div class="mainFrame">
        <div class="giveAwayFoodFrames">
            <div class="foodDescriptionImage">
            <div id="foodGroupFrame">${activeAdPhoto}</div>
            </div>
            <div class="foodDescriptionInputs">
        </div>
    </div> 
    `;
show();
}

/* <button ${model.inputs.editUserButton.save} onclick="saveEditAccount()" class="mainBtns"  type="submit">Lagre</button> */

// function selectElement(selector){
//     return document.querySelector(selector)
// }

// function clearResults(){
//     selectElement('.foodGroupFrame').innerHTML = "";
// }

// function getResults(){
//     const search = model.inputs.userSearchZipCode;
//     console.log(search);

//     clearResults();
//         for (let i = 0; i < model.ads.length; i++){
//             if(true){
//                 let allergi = model.ads[i].allergyID;

//                 selectElement('.foodGroupFrame').innerHTML += `
//                 <img onclick="foodPageAd(${i})" src="${model.ads[i].image}" id="adPhoto" class="foodGroupPhotoFrame ${allergi}">`;
                
//         }
//     }
// }
// selectElement('.ZipSearchBar').addEventListener('load', getResults);


// function myFunction() {
//     var input, filter;
//     input = document.getElementById("zipCodeInput");
//     filter = input.value;
 

//     for (i = 0; i < model.ads.length; i++) {
//          = .getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

function foodPage(){
    let postingAd = '';

    for (let i = 0; i < model.ads.length; i++){
            
                postingAd += `
                <img onclick="foodPageAd(${i})" src="${model.ads[i].image}" 
                id="adPhoto" class="foodGroupPhotoFrame">`;
            
        }
    html = /*html*/`
    <h1 class="headLine">Too Good To Go</h1>
    <div class="overHeadButtons">
        <div class="userButtons">
            <button onclick="accountInformationPage()" class ="edit mainBtns">Bruker informasjon</button> <br>
            <button onclick= "logOut()" class= "logge ut mainbtns">Logg ut</button>
        </div>
    <div class="backButton">
        <button onclick= "accountHomePage()" class= "logge ut mainbtns">X</button>
    </div>
    </div>
        <div class="FoodPageFrame"> 
        <div>
            <label>Post Adresse</label>
            <input class="ZipSearchBar" type="text" id="zipCodeInput">
        </div>
    <div class="allergyButtons">
        <button onclick="removeEggAllergies()" class="mainBtns">Egg</button>
        <button onclick="removeGlutenAllergies()" class="mainBtns">Gluten</button>
        <button onclick="removeNøtterAllergies()" class="mainBtns">Nøtter</button>
        <button onclick="removeMelkAllergies()" class="mainBtns">Melk</button>
        <button onclick="resetAllergies()">RESET HER</button>
    </div>
    <div class="foodGroupFrame">${postingAd}
    </div>
    </div>
    `;
    show();

};

function foodPageAd(index)
{
    html = /*html*/`
    <h1 class="headLine">Too Good To Go</h1>
        <div class="overHeadButtons">
            <div class="userButtons">
                <button onclick="accountInformationPage()" class="edit mainBtns">Bruker informasjon</button> <br>
                <button onclick= "logOut()" class="logge ut mainbtns">Logg ut</button>
            </div>
                <div class="backButton">
                    <button onclick= "foodPage()" class="logge ut mainbtns">X</button>
                </div>
        </div>
        <div class="mainFrame">
        <div class="giveFoodFrames"> 
            <div class="foodAdDescription">
                <div class="foodAdDescriptionInputs">
                    <label>Navn:${model.ads[index].userName}</label>
                    <label>Adresse:${model.ads[index].adress}</label>
                    <label>PostNr:${model.ads[index].zipCode}</label>
                    <label>Tlf:${model.ads[index].phoneNumber}</label>
                    <label>Dato fra:${model.ads[index].datePosted}</label>
                    <label>Dato Til:${model.ads[index].dateExpired}</label>
                    <label>Beskrivelse:${model.ads[index].details}</label>
                </div>
                <div class="foodAdDescriptionInputs">
                 <img src="${model.ads[index].image}" width="250px" height="200px"> 
                </div>
            </div>
        <div><button onclick="contactAdPoster(${model.ads[index].id})" class="edit mainBtns">Ta kontakt med utgiver</button></div>
        </div>
    </div>
    `;  
    show();
    
}

function giveAway(){
    let userAdPhoto = '';
    for (let i = 0; i < model.adsHistory.length; i++){
        if(model.adsHistory[i].userid == model.app.currentUser)
        userAdPhoto += /*html*/`
        <img onclick="userAdHistory(${i})" src="${model.adsHistory[i].image}" class="foodGroupPhotoFrame">`
    }

    html = /*html*/`
    
    <h1 class="headLine">Too Good To Go</h1>
    <div class="overHeadButtons">
        <div class="userButtons">
            <button onclick="accountInformationPage()" class ="edit mainBtns">Bruker informasjon</button> <br>
            <button onclick="logOut()" class= "logge ut mainbtns">Logg ut</button>
        </div>
    </div>
        
            <div class="backButton">
                <button onclick="accountHomePage()" class= "logge ut mainbtns">X</button>
            </div>

<div class="mainFrame">
    <div class="${model.inputs.hideFFButton.giveAwayFoodFramesclass}" >
                <button class="${model.inputs.editUserButton.hide}" onclick="hideFunction()">Skjul min Historikk</button>
                <button class="${model.inputs.editUserButton.show}" onclick="showFunction()">Se min Historikk</button>
                <div class="${model.inputs.hideFFButton.foodDescriptionImageclass}" >
                    <h3>Din Ad Historikk</h3>
                    ${userAdPhoto}
                </div>
                
        <!-- Onsubmit burde? ligge i <Formen for at den skal fungere>
        Funket ikke når den lå i <Button> Legg ut Annonse </button> -->
                <form class="foodDescriptionInputs" onsubmit="postAd()">
                    <label>Tittel:</label>
                    <input type="text" value="${model.inputs.foodDescriptionInputs.title}" onsubmit="model.inputs.newAd.title=this.value" required />
                    <label>Adresse:</label>
                    <input type="text" value="${model.inputs.foodDescriptionInputs.adress}" onsubmit="model.inputs.newAd.adress=this.value" required />
                    <label>PostNr:</label>
                    <input type="text" value="${model.inputs.foodDescriptionInputs.zipCode}" onsubmit="model.inputs.newAd.zipCode=this.value" required />
                    <label>Telefon:</label>
                    <input type="text" value="${model.inputs.foodDescriptionInputs.phoneNumber}" onsubmit="model.inputs.newAd.phoneNumber=this.value" required />
                    <label>Dato fra:</label>
                    <input type="text" value="${model.inputs.foodDescriptionInputs.datePosted}" onsubmit="model.inputs.newAd.datePosted=this.value" required />
                    <label>Dato Til:</label>
                    <input type="text" value="${model.inputs.foodDescriptionInputs.dateExpired}" onsubmit="model.inputs.newAd.dateExpired=this.value" required />
                    <label>Beskrivelse:</label>
                    <input class="beskrivelseInput" type="text" value="${model.inputs.foodDescriptionInputs.details}" oninput="model.inputs.newAd.details=this.value">
                    <button type="submit">legg ut annonse</button>
                </form>
   
                <div class="foodDescriptionInputs"> 
                    <input type="file"  accept="image/*" name="image" id="file"  onchange="loadFile(event)">
                    <img class="uploadPhotoFrame" src="${model.inputs.foodDescriptionInputs.image}" id="output" onchange="model.inputs.newAd.image=this.value"/>
                    <div id="giveAwayFoodAnonymUser">
                        <input type="checkbox" onclick="anonymUserBtn()">
                        <label  type="text">jeg vil være anonym og vil bruke "ta kontakt" funksjon</label>
                    </div>      
                    <br>
                    <br>
                    <div id="giveAwayAllergyCheckBoxes">
                    <label>Egg:</label>
                    <input onclick="checkEgg()" type="checkbox"> 
                    <label>Gluten:</label>
                    <input onclick="checkGluten()" type="checkbox">
                    <label>Nøtter:</label>
                    <input onclick="checkNøtter()" type="checkbox">
                    <label>Melk:</label>
                    <input onclick="checkMelk()" type="checkbox">
                </div>
            <button onclick="resetGiveAwayFoodAllergies()">Reset</button>
        </div>    
    </div>
</div>
    `;
    show();
}
function postedAdsPage(){
    let userAdPhoto = '';
    for (let i = 0; i < model.ads.length; i++){
        if(model.ads[i].userid == userIndex)
        userAdPhoto += /*html*/`
        <img onclick="postedAd(${i})" src="${model.ads[i].image}" class="foodGroupPhotoFrame">
        `;
    }
        // put inn checkbox her for hver ad.
    
    html = /*html*/`
    <h1 class="headLine">Too Good To Go</h1>
    <div class="overHeadButtons">
        <div class="userButtons">
            <button onclick="accountInformationPage()" class ="edit mainBtns">Bruker informasjon</button> <br>
            <button onclick="logOut()" class= "logge ut mainbtns">Logg ut</button>
        </div>
        <div class="backButton">
            <button onclick="accountHomePage()" class= "logge ut mainbtns">X</button>
        </div>
    </div>
    <div class="mainFrame">
        <div class="giveAwayFoodFrames">
            <div class="foodDescriptionImage">
            <div id="foodGroupFrame">${userAdPhoto}</div>

            </div>
            <div class="foodDescriptionInputs">
            <form class="${model.inputs.hideFFButton.userLoginFramesclass}">
                                <label>Tittel:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.title}" type="text">
                                <label>Adresse:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.adress}" type="text">
                                <label>PostNr:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.zipCode}" type="text">
                                <label>Telefon:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.phoneNumber}" type="text">
                                <label>Dato fra:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.datePosted}" type="text">
                                <label>Dato Til:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.dateExpired}" type="text">
                                <label>Beskrivelse:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.details}" type="text">
                                <button ${model.inputs.editAdButton.save} onclick="editPostedAd(${model.inputs.editAd.id})" >Edit Ad</button>
                            </form>
                            <form class="${model.inputs.hideFFButton.userLoginFramesclass2}" onsubmit="submitPostedAd(${model.inputs.editAd.id})">
                                <label>Tittel:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.title}" oninput="model.inputs.editAd.title = this.value" required>
                                <label>Adresse:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.adress}" oninput="model.inputs.editAd.adress = this.value" required>
                                <label>PostNr:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.zipCode}" oninput="model.inputs.editAd.zipCode = this.value" required>
                                <label>Telefon:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.phoneNumber}" oninput="model.inputs.editAd.phoneNumber = this.value" required>
                                <label>Dato fra:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.datePosted}" oninput="model.inputs.editAd.datePosted = this.value" required>
                                <label>Dato Til:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.dateExpired}" oninput="model.inputs.editAd.dateExpired = this.value" required>
                                <label>Beskrivelse:</label>
                                <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.details}" oninput="model.inputs.editAd.details = this.value" required>
                                <div>
                                    <button ${model.inputs.editUserButton.save} id="deleteMyAdsBtn" onclick="deleteMyAd(${model.inputs.editAd.id})">Delete Ad</button>
                                    <button ${model.inputs.editUserButton.save} onclick="cancelPostedAd(${model.inputs.editAd.id})" class="mainBtns">Avbryt</button>
                                    <input ${model.inputs.editUserButton.save} class="mainBtns"  type="submit" value="Lagre">
                                </div>
                            </form>
            </div>
    </div> 
    `;
    show();
}
function activeAdInformationPage(){
    let activeAdPhoto = '';
    for (let i = 0; i < model.ads.length; i++){
        if(model.ads[i].orderedById.includes(model.users[userIndex].id)){
            activeAdPhoto += /*html*/`
            <img onclick="orderedAd(${i})" src="${model.ads[i].image}" class="foodGroupPhotoFrame">
            `;
        }
    }
    html = /*html*/`
    <h1 class="headLine">Too Good To Go</h1>
    <div class="overHeadButtons">
        <div class="userButtons">
            <button onclick="accountInformationPage()" class ="edit mainBtns">Bruker informasjon</button> <br>
            <button onclick="logOut()" class= "logge ut mainbtns">Logg ut</button>
        </div>
        <div class="backButton">
            <button onclick="accountHomePage()"   class= "logge ut mainbtns">X</button>
        </div>
    </div>
    <div class="mainFrame">
        <div class="giveAwayFoodFrames">
            <div class="foodDescriptionImage">
            <div id="foodGroupFrame">${activeAdPhoto}</div>
            </div>
            <div class="foodDescriptionInputs">
            <label>Tittel:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.title}" type="text">
            <label>Adresse:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.adress}" type="text">
            <label>PostNr:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.zipCode}" type="text">
            <label>Telefon:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.phoneNumber}" type="text">
            <label>Dato fra:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.datePosted}" type="text">
            <label>Dato Til:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.dateExpired}" type="text">
            <label>Beskrivelse:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.inputs.editAd.details}" type="text">
            </div>
        </div>
    </div> 
    `;
    
show();
}
