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
            <div class="userLoginFrames"> 
                <label>Brukernavn:</label>
                <input type="text" placeholder= "navn"  oninput="model.users.userLoginName=this.value">
    
                <label>Passord:</label>
                <input type="text" placeholder= "*****" oninput="model.users.userLoginName=this.value">
                <button onclick="logIn()" class="mainBtns" id="enterBtn" type="submit">Login</button>
            </div>
        </div>
    </div>
    `;
    show();
}
mainPage();

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
    for (let i = 0; i < model.ads.length; i++){
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
            <div onclick="showMyActiveAds()">
                <h3 class ="titleUserPage">Dine aktive bestilinger<h3>
            </div>
        </div>
    </div>
    `;
    show(); 
    }
};

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
function activeAdInformationPage(index){
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
            <button onclick="accountHomePage(this,)"   class= "logge ut mainbtns">X</button>
        </div>
    </div>
    <div class="mainFrame">
        <div class="giveAwayFoodFrames">
            <div class="foodDescriptionImage">
            <div id="foodGroupFrame">${activeAdPhoto}</div>
            </div>
            <div class="foodDescriptionInputs">
            <label>Tittel:</label>
            <input disabled type="text" value="${model.ads[index].title}">
            <label>Adresse:</label>
            <input disabled type="text" value="${model.ads[index].adress}">
            <label>PostNr:</label>
            <input disabled type="text" value="${model.ads[index].zipCode}">
            <label>Telefon:</label>
            <input disabled type="text" value="${model.ads[index].phoneNumber}">
            <label>Dato fra:</label>
            <input disabled type="text" value="${model.ads[index].datePosted}">
            <label>Dato Til:</label>
            <input disabled type="text" value="${model.ads[index].dateExpired}">
            <label>Beskrivelse:</label>
            <input disabled class="beskrivelseInput" type="text" placeholder="" value="${model.ads[index].details}">
            </div>
        </div>
    </div> 
    `;
show();
}

function accountInformationPage(){
    html = /*html*/`
    <h1 class="headLine">Too Good To Go</h1>
    <div class="backButton">
        <button onclick= "accountHomePage()" class= "logge ut mainbtns">X</button>
    </div>
    `;
    for(let i = 0; i < model.users.length; i++){
        if(model.users[i].id === parseInt(userIndex)){
            html += /*html*/`
            <div class="newUserPageFrame">
                <div class="frames">
                    <div id="newUserInfo">
                        <h1>Din Bruker</h1>
                    </div>
                        <div class="userLoginFrames"> 
                            <label>Navn:</label>
                            <input  class="brukerInfo" type="text" value="${model.users[userIndex].userName}" oninput="model.inputs.editUser.userName = this.value">
                            <label>Brukernavn:</label>
                            <input  class="brukerInfo" type="text" value="${model.users[userIndex].userLoginName}" oninput="model.inputs.editUser.userLoginName = this.value">
                            <label>MobilNr:</label>
                            <input  class="brukerInfo" type="text" value="${model.users[userIndex].tlf}" oninput="model.inputs.editUser.tlf = this.value">
                            <label>Adresse:</label>
                            <input  class="brukerInfo" type="text" value="${model.users[userIndex].adress}" oninput="model.inputs.editUser.adress = this.value">
                            <label>Zip Code:</label>
                            <input  class="brukerInfo" type="text" value="${model.users[userIndex].zipCode}" oninput="model.inputs.editUser.zipCode = this.value">
                            <label>Passord:</label>
                            <input  class="brukerInfo" type="text" value="${model.users[userIndex].userPw}" oninput="model.inputs.editUser.userPw = this.value">
                            <div>
                                <button onclick="accountHomePage()" class="mainBtns" type="submit">Tilbake</button>
                                <button onclick="editAccount(this)" class="mainBtns" type="submit">Rediger</button>
                                <button onclick="saveEditAccount()" class="mainBtns saveEditAccount" type="submit">Lagre</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            show();
        }
    }
}


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
        <div class="backButton">
            <button onclick="accountHomePage()" class= "logge ut mainbtns">X</button>
        </div>
    </div>
        <div class="mainFrame">
            <div class="giveAwayFoodFrames">
            <div class="foodDescriptionInputs">
                <h3>Din Ad Historikk</h3>
                <div id="foodGroupFrame">${userAdPhoto}</div>
            </div>
                <div class="foodDescriptionInputs">
                    <label>Tittel:</label>
                    <input id="newAdTittel" type="text" oninput="model.inputs.newAd.title=this.value">
                    <label>Adresse:</label>
                    <input id="newAdAdresse" type="text" oninput="model.inputs.newAd.adress=this.value">
                    <label>PostNr:</label>
                    <input id="newAdPostNr" type="text" oninput="model.inputs.newAd.zipCode=this.value">
                    <label>Telefon:</label>
                    <input id="newAdTlf"    type="text" oninput="model.inputs.newAd.phoneNumber=this.value">
                    <label>Dato fra:</label>
                    <input id="newAdCurrentDate"type="text" value="${date}" oninput="model.inputs.newAd.datePosted=this.value">
                    <label>Dato Til:</label>
                    <input id="newAdExpireDate"type="text" oninput="model.inputs.newAd.dateExpired=this.value">
                    <br>
                        <div>
                            <label>Egg:</label>
                            <input onclick="checkEgg()" id="checkEggs" type="checkbox"> 
                                                      
                            <label>Gluten:</label>
                            <input onclick="checkGluten()" id="checkGluten" type="checkbox">
                            
                            <label>Nøtter:</label>
                            <input onclick="checkNøtter()" id="checkNøtter" type="checkbox">
                            
                            <label>Melk:</label>
                            <input onclick="checkMelk()" id="checkMelk" type="checkbox">
                        </div>
                        <button onclick="resetGiveAwayFoodAllergies()">Reset</button>
                        <br>
                    <label>Beskrivelse:</label>
                    <input id="newAdBeskrivelse" class="beskrivelseInput" type="text" placeholder=""oninput=" model.inputs.newAd.details=this.value">
                </div>
               
                <div class="foodDescriptionInputs"> 
                    <input type="file"  accept="image/*" name="image" id="file"  onchange="loadFile(event)">
                    <img class="uploadPhotoFrame" id="output" onchange="model.inputs.newAd.image=this.value"/>
                    <div>
                        <input type="checkbox" onclick="anonymUserBtn()">
                        <label  type="text">jeg vil være anonym og vil bruke "ta kontakt" funksjon</label>
                    </div>
                    <button onclick = "postAd()" >legg ut annonse</button>
                </div>
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
        <img onclick="postedAdsPageAd(${i})" src="${model.ads[i].image}" class="foodGroupPhotoFrame">
        
        `;
        // put inn checkbox her for hver ad.
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
            <div id="foodGroupFrame">${userAdPhoto}</div>

            </div>
            <div class="foodDescriptionInputs"></div>
    </div> 
    `
    show();
}

function postedAdsPageAd(index){
    let userAdPhoto = '';
    for (let i = 0; i < model.ads.length; i++){
        if(model.ads[i].userid == model.app.currentUser)
        userAdPhoto += /*html*/`
        <img onclick="postedAdsPageAd(${i})" src="${model.ads[i].image}" class="foodGroupPhotoFrame">
        <button id="editPostedAdsBtn" onclick="editPostedAds(${i})" >Edit Ad</button>
        <input class="postedAdsPageSub" type="submit" onclick="submitPostedAds(${i})" id="submitBtn" value="Submit">
        <button id="deleteMyAdsBtn" onclick="deleteMyAd(${i})">Delete Ad</button>
        `;
        // put inn checkbox her for hver ad.
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
            <div id="foodGroupFrame">${userAdPhoto}</div>
            </div>
            <div class="foodDescriptionInputs">
            <label>Tittel:</label>
            <input  type="text" value="${model.ads[index].title}" oninput="model.inputs.editAd.title=this.value">
            <label>Adresse:</label>
            <input  type="text" value="${model.ads[index].adress}"oninput="model.inputs.editAd.adress=this.value">
            <label>PostNr:</label>
            <input  type="text" value="${model.ads[index].zipCode}"oninput="model.inputs.editAd.zipCode=this.value">
            <label>Telefon:</label>
            <input  type="text" value="${model.ads[index].phoneNumber}"oninput="model.inputs.editAd.phoneNumber=this.value">
            <label>Dato fra:</label>
            <input  disabled type="text" value="${model.ads[index].datePosted}"oninput="model.inputs.editAd.datePosted=this.value">
            <label>Dato Til:</label>
            <input  type="text" value="${model.ads[index].dateExpired}"oninput="model.inputs.editAd.dateExpired=this.value">
            <label>Beskrivelse:</label>
            <input  class="beskrivelseInput" type="text" placeholder="" value="${model.ads[index].details}"oninput="model.inputs.editAd.title=this.value"></div>
        </div>
    </div> 
    `
    show();
}
