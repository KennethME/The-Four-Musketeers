let html = '';
show();
function show(){
   document.getElementById('app').innerHTML = html;
}

function firstPage(){
    html = /*html*/`    
    <h1 class="headLine">2 Good 2 Go</h1>
    <div class = 'announcements'>${announcements()}</div>
    <div>vi kan skrive det vi vil her </div>
    `;
    show();
}

// firstPage();

function announcements(){
    html = "";
    for (let ad of model.ads){
            html += /*html*/`   
        <div onclick= 'mainPage()'>
        <img src = '${ad.image}' width = '300' height = '300'><br>
        </div> `; 
        }
       return html;
}



// DENNE JOBBER VI MED NÅ
// DENNE JOBBER VI MED NÅ
// DENNE JOBBER VI MED NÅ
// DENNE JOBBER VI MED NÅ

{/* <div class="overHeadButtons">
<div class="userButtons">
    <button onclick="accountInformationPage()" class="mainBtns">Bruker informasjon</button> 
    <br>
    <button onclick="logOut()" class="mainbtns">Logg ut</button>
</div>
</div>
    <div class="backButton">
        <button onclick="exitGiveAway()" class="mainbtns">X</button>
    </div> */}

function giveAway(){
    let userAdPhoto = '';
    for (let i = 0; i < model.adsHistory.length; i++){
        if(model.adsHistory[i].userid == model.app.currentUser)
        userAdPhoto += /*html*/`
        <img onclick="userAdHistory(${i})" src="${model.adsHistory[i].image}" class="foodGroupPhotoFrame">
        `;
    }
    html = /*html*/`
    <h1 class="headLine GiveAwayHeadLine">GiveAwayPage</h1>

    
    <div class="giveAwayMain">
     
    
    <div class="frames" id="${model.inputs.giveAway.inputButtons}">
    <div class="overHeadButtons">
    <button onclick="accountHomePage()" class="loggUtBtnGiveAwayPage mainbtns">X<button>
   </div>
        <div class="giveAwayAdChoise">
        <button class="giveAwayFoodBtns" onclick="newAdinputs()">
        <img src="https://img.icons8.com/color/200/000000/giving.png"/>
        <div clss="textName">
            <h3>legg ut annonse</h3>  
        </div>

        </button>
            <button class="giveAwayFoodBtns" onclick="historyAdInputs()">
            <img src="https://img.icons8.com/fluency/200/000000/history-folder.png"/>
            <div clss="textName">
                <h3>Annonse historikk</h3> 
            </div> 
            </button>
        </div>            
    </div>
    <div class="giveAwayHistoryImageBorder" id="${model.inputs.giveAway.historyAdImages}">
        <h3>Din Ad Historikk</h3>
        <div class="giveAwayHistoryImage">
            ${userAdPhoto}
        </div>
    </div>
        <!-- Onsubmit burde? ligge i <Formen for at den skal fungere>
        Funket ikke når den lå i <Button> Legg ut Annonse </button> -->
                <div class="${model.inputs.giveAway.prewView}" id="${model.inputs.giveAway.newAdInput}">
                    <form class="giveAwayDescriptionInputs" onsubmit="postAd()">
                        <label>Tittel:</label>
                        <input ${model.inputs.giveAway.disabled} type="text" value="${model.inputs.newAd.title}" oninput="model.inputs.newAd.title = this.value" required />
                        <label>Adresse:</label>
                        <input ${model.inputs.giveAway.disabled} type="text" value="${model.inputs.newAd.adress}" oninput="model.inputs.newAd.adress = this.value" required />
                        <label>PostNr:</label>
                        <input ${model.inputs.giveAway.disabled} type="text" value="${model.inputs.newAd.zipCode}" oninput="model.inputs.newAd.zipCode = this.value" required />
                        <label>Telefon:</label>
                        <input ${model.inputs.giveAway.disabled} type="text" value="${model.inputs.newAd.phoneNumber}" oninput="model.inputs.newAd.phoneNumber = this.value" required />
                        <label>Dato fra:</label>
                        <input ${model.inputs.giveAway.disabled} type="text" value="${model.inputs.newAd.datePosted}" oninput="model.inputs.newAd.datePosted = this.value" required />
                        <label>Dato Til:</label>
                        <input ${model.inputs.giveAway.disabled} type="text" value="${model.inputs.newAd.dateExpired}" oninput="model.inputs.newAd.dateExpired= this.value" required />
                        <label>Beskrivelse:</label>
                        <input ${model.inputs.giveAway.disabled} class="beskrivelseInput" type="text" value="${model.inputs.newAd.details}" oninput="model.inputs.newAd.details=this.value">
                        <button class="${model.inputs.giveAway.prewViewBtn}" type="submit">legg ut annonse</button>
                    </form>
                    <button onclick="toUploadImage()" id="${model.inputs.giveAway.newAdInputBtn}">Til Bilder</button>
                    <div class="${model.inputs.giveAway.prewViewBtn}">
                        <h3>Anonym Bruker:</h3>
                        <img class="${model.inputs.giveAway.anonymUserCheck} "src="${model.inputs.anonymUserImage.anonym}">
                    <br>
                    <br>
                        <h3>Allergi:</h3>
                        <div>
                            <img class="${model.inputs.giveAway.nøtterCheck}" src="${model.inputs.allergyImage.nøtterFalse}" width="60px"/>
                            <img class="${model.inputs.giveAway.melkCheck}" src="${model.inputs.allergyImage.melkFalse}" width="60px"/>
                            <img class="${model.inputs.giveAway.eggCheck}" src="${model.inputs.allergyImage.eggFalse}" width="60px"/>
                            <img class="${model.inputs.giveAway.glutenCheck}" src="${model.inputs.allergyImage.glutenFalse}" width="60px"/>
                        </div>
                    </div>
                    <img class="imageDisplay" id="${model.inputs.giveAway.photoPreview}" src="${model.inputs.newAd.image}"/>
                </div>  

                <div class="${model.inputs.giveAway.historyPrewView}" id="${model.inputs.giveAway.historyAdInput}">
                    <form class="giveAwayDescriptionInputs" onsubmit="postHistoryAd()">
                    <label>Tittel:</label>
                    <input ${model.inputs.giveAway.disabled} type="text" value="${model.inputs.foodDescriptionInputs.title}" oninput="model.inputs.foodDescriptionInputs.title = this.value" required />
                    <label>Adresse:</label>
                    <input ${model.inputs.giveAway.disabled} type="text" value="${model.inputs.foodDescriptionInputs.adress}" oninput="model.inputs.foodDescriptionInputs.adress = this.value" required />
                    <label>PostNr:</label>
                    <input ${model.inputs.giveAway.disabled} type="text" value="${model.inputs.foodDescriptionInputs.zipCode}" oninput="model.inputs.foodDescriptionInputs.zipCode = this.value" required />
                    <label>Telefon:</label>
                    <input ${model.inputs.giveAway.disabled} type="text" value="${model.inputs.foodDescriptionInputs.phoneNumber}" oninput="model.inputs.foodDescriptionInputs.phoneNumber = this.value" required />
                    <label>Dato fra:</label>
                    <input ${model.inputs.giveAway.disabled} type="text" value="${model.inputs.foodDescriptionInputs.datePosted}" oninput="model.inputs.foodDescriptionInputs.datePosted = this.value" required />
                    <label>Dato Til:</label>
                    <input ${model.inputs.giveAway.disabled} type="text" value="${model.inputs.foodDescriptionInputs.dateExpired}" oninput="model.inputs.foodDescriptionInputs.dateExpired = this.value" required />
                    <label>Beskrivelse:</label>
                    <input ${model.inputs.giveAway.disabled} type="text" value="${model.inputs.foodDescriptionInputs.details}" oninput="model.inputs.foodDescriptionInputs.details = this.value"/>
                    <button class="${model.inputs.giveAway.historyPrewViewBtn}" type="submit">legg ut annonse</button>
                    </form>
                    <button onclick="toUploadHistoryImage()" id="${model.inputs.giveAway.historyAdInputbtn}">Til Bilder</button>
                    <div class="${model.inputs.giveAway.historyPrewViewBtn}">
                        <h3>Anonym Bruker:</h3>
                        <img class="${model.inputs.giveAway.anonymUserCheck} "src="${model.inputs.anonymUserImage.anonym}">
                    <br>
                    <br>
                        <h3>Allergi:</h3>
                        <div>
                            <img class="${model.inputs.giveAway.nøtterCheck}" src="${model.inputs.allergyImage.nøtterFalse}" width="60px"/>
                            <img class="${model.inputs.giveAway.melkCheck}" src="${model.inputs.allergyImage.melkFalse}" width="60px"/>
                            <img class="${model.inputs.giveAway.eggCheck}" src="${model.inputs.allergyImage.eggFalse}" width="60px"/>
                            <img class="${model.inputs.giveAway.glutenCheck}" src="${model.inputs.allergyImage.glutenFalse}" width="60px"/>
                        </div>
                    </div>
                    <img class="imageDisplay" id="${model.inputs.giveAway.photoPreview}" src="${model.inputs.foodDescriptionInputs.image}"/>
                </div>
   
                <div class="giveAwayDescriptionBorder" id="${model.inputs.giveAway.uploadImage}"> 
                    <input type="file" accept="image/*" name="image" id="file" onchange="loadFile(event)">
                    <img class="uploadPhotoFrame" src="${model.inputs.foodDescriptionInputs.image}" id="output" onchange="model.inputs.foodDescriptionInputs.image=this.value"/>  
                    <button onclick="toAllergyUpload()" id="${model.inputs.giveAway.uploadImagebtn}">Til Allergi</button>
                    <button onclick="toHistoryAllergyUpload()" id="${model.inputs.giveAway.HistoryUploadImagebtn}">Til Allergi</button>
                    <br>
                    <br>
                </div>
                <div class="giveAwayDescriptionBorder" id="${model.inputs.giveAway.uploadAllergy}"> 
                    <h4>Har denne retten noen allergier?</h4>
                    <div id="giveAwayAllergyCheckBoxes">
                        <label>Egg:</label>
                        <input onclick="checkEgg()" type="checkbox"/> 
                        <label>Gluten:</label>
                        <input onclick="checkGluten()" type="checkbox"/>
                        <label>Nøtter:</label>
                        <input onclick="checkNøtter()" type="checkbox"/>
                        <label>Melk:</label>
                        <input onclick="checkMelk()" type="checkbox"/>
                    </div>
                    <br>
                    <div id="giveAwayAllergyCheckBoxes">
                        <label>Ingen allergier</label>
                        <input type="checkbox"/> 
                    </div>
                    <button onclick="toAnonymousUpload()" id="${model.inputs.giveAway.uploadAllergybtn}">Til Personvern</button>
                    <button onclick="toHistoryAnonymousUpload()" id="${model.inputs.giveAway.uploadHistoryAllergybtn}">Til Personvern</button>
                </div>    
                <div class="giveAwayDescriptionBorder" id="${model.inputs.giveAway.uploadAnonymous}"> 
                    <h4>Godkjenner du at informasjonen din er synlig?</h4>
                    <img class="${model.inputs.giveAway.anonymUserCheck} "src="${model.inputs.anonymUserImage.anonym}">
                    <p>Når du gir ut mat, så har du mulighet til å skjule kontaktinformasjonen din helt til noen tar kontakt med deg. Ellers så vil kontaktinformasjonen din vises og kunder kan ta kontakt med informasjon som ligger ute</p>
                    <br>
                    <br>
                    <div>
                        <input ${model.inputs.checkedbtn.isChecked} type="checkbox" onclick="anonymUserBtn()">
                        <label  type="text">jeg vil at min informasjon skal være skjult</label>
                    </div>    
                    <br>
                    <div>
                        <input ${model.inputs.checkedbtn.isChecked} type="checkbox">
                        <label  type="text">Jeg godkjenner at min informasjon er synlig</label>
                    </div>  
                    <br>
                    <div>
                        <button id="${model.inputs.giveAway.uploadAnonymousbtn}" onclick="newAdPreview()">Forhåndsvisning</button>
                        <button id="${model.inputs.giveAway.uploadHistoryAnonymousbtn}" onclick="historyAdPreview()">Forhåndsvisning</button>
                    </div> 
                </div>
        </div>
    </div>`;
show();
}




// Required funker når den ligger inni en <form>

function mainPage()
{
    html = /*html*/`
    <h1 class="MainheadLine">2 Good 2 Go</h1>

        <div class="frames">
        
            <div class="newUserBorder">
                <p class="mainPageText">Ny til 2 Good 2 Go™?</p>
                <p>Lag en bruker</p>
                <button onclick="newUser()" class="clickHere mainBtns" 
                type="submit">Klikk her</button>
                <hr>
            </div>

            <form class="userLoginFrames"> 
                <label>Brukernavn:</label>
                
                <input type="text" placeholder= "username"  oninput="model.inputs.login.userName=this.value" required>
                <label>Passord:</label>
                <input type="password" placeholder="******" oninput="model.inputs.login.password=this.value" required>
                <button onclick="logIn()" class="mainBtns" id="enterBtn" type="submit">Login</button>
            </form>
        </div>
    `;
    show();
}
//giveAway();
//  postedAdsPage();
 mainPage();
 //accountHomePage(); //AccountPage er ferdig med css.

function newUser(){
    html = /*html*/`
    
   
    <h1 class="headLine">NewUserPage</h1>
        <div class="frames">

            <div id="newUserInfo">
                <h1>NewUserPage</h1>
            </div>
                <div class="userLoginFrames"> 
                    <label>Navn:</label>
                    <input type="text" placeholder="Navn" oninput="model.inputs.newUser.userName=this.value">

                    <label>Brukernavn:</label>
                    <input type="text" placeholder= "Navn" oninput="model.inputs.newUser.userLoginName=this.value">

                    <label>MobilNr:</label>
                    <input type="text" placeholder= "Telefon" oninput="model.inputs.newUser.tlf=this.value">
                    
                    <label>Adresse:</label>
                    <input type="text" placeholder= "Adresse" oninput="model.inputs.newUser.adress=this.value">

                    <label>Zip Code:</label>
                    <input type="text" placeholder= "Zip Code"oninput="model.inputs.newUser.zipCode=this.value">
    
                    <label>Passord:</label>
                    <input type="text" placeholder="*****" oninput="model.inputs.newUser.userPw=this.value">
        
                    <button onclick="mainPage()" class="mainBtns" type="submit">Avbryt</button>
                    <button onclick="newUsers()" class="mainBtns" type="submit">Opprett Bruker</button>
                </div>
        </div>
   
    `;
show();
}
// width
function accountHomePage(){
    html = /*html*/`
    <h1 class="headLine">accountHomePage</h1>

    <div class="userInfo">
    <button onclick="accountInformationPage()" class="edit mainBtns">Brukerinformasjon</button> 
    <br>
    
</div>

        <div class="miniFrames">
            <div onclick= "giveAway()">
          
                <img src="https://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Food-Dome-icon.png" class="icons iconImg2" width="90%">
                <h3>Gi ut mat</h3>
            </div>
        </div>

    <div class="miniFrames">
        <div onclick="postedAdsPage()">
    
            <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/chromium-app-list-icon.png" class="icons" width="auto">
            <h3>Arkiverte annonser</h3>
        </div>
    </div>

<div id="miniFramesDivider"></div>
     <div class="miniFrames2">
        <div onclick="foodPage()" >
    
            <img src="https://img.icons8.com/color/256/00000/hamburger.png" class="icons" width="auto">
            <h3>Finn mat</h3>
        </div>
    </div>

    <div class="miniFrames2">
        <div onclick="activeAdInformationPage()">

            <img src="https://img.icons8.com/color/256/000000/prepositions-in.png" class="icons" width="auto">
            <h3>Dine annonser</h3>
        </div>
        </div>
        <div class="userInfo2">
        <button onclick= "logOut()" class="loggUtBtnMenuPage mainBtns">Logg ut</button>
        </div>
  
  
    `;
    show(); 
};
function accountInformationPage() {
    html = /*html*/`
    <h1 class="headLine">2 Good 2 Go</h1>
    
        <button onclick= "accountHomePage()" class="loggUtBtn mainbtns">X</button>
  
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
            </div>`;
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
    <h1 class="headLine">2 Good222 2 Go</h1>

    <div class="overHeadButtons">
        <div class="userButtons">
            <button onclick="accountInformationPage()" class ="edit mainBtns">Bruker informasjon</button> 
            <br>
            <button onclick="logOut()" class= "mainbtns">Logg ut</button>
        </div>
        <div class="backButton">
            <button onclick="accountHomePage()" class= "mainbtns">X</button>
        </div>
    </div>
    <div class="mainFrame">
        <div class="giveAwayFoodFrames">
            <div class="foodDescriptionImage">
                <div id="foodGroupFrame">${activeAdPhoto}</div>
        </div>
            <div class="foodDescriptionInputs"></div>
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
                postingAd += /*html*/`
                <img onclick="foodPageAd(${i})" src="${model.ads[i].image}" class="foodGroupPhotoFrame">`;
        
    }
    html = /*html*/`
    <h1 class="headLine findFoodPageheadLine">FindFoodPage</h1>

    <div class="overHeadButtons">
     
            <button onclick="accountInformationPage()" class="edit">Bruker informasjon</button> <br>
            <button onclick="logOut()" class="loggUtBtn">Logg ut</button>
        </div>
        <div class="backButton">
            <button onclick="accountHomePage()" class="loggUtBtn">X</button>
    </div>

    <div class="FoodPageFrame"> 
        <div class="allergyButtons">
            <button onclick="removeEggAllergies()" class="mainBtns">Egg</button>
            <button onclick="removeGlutenAllergies()" class="mainBtns">Gluten</button>
            <button onclick="removeNøtterAllergies()" class="mainBtns">Nøtter</button>
            <button onclick="removeMelkAllergies()" class="mainBtns">Melk</button>
            <button onclick="resetAllergies()">RESET HER</button>
        </div>
        <div class="zipSearchInput">
            <label>Post Adresse</label>
            <input class="ZipSearchBar" oninput="${model.inputs.foodPage.searchBar = this.value}" type="text">
        </div>
        <div class="foodGroupFrame">${postingAd}</div>
    </div>
    `;
show();
};

function foodPageAd(index)
{
    html = /*html*/`
    <h1 class="headLine">2 Good 2 Go</h1>
    <h1 class="headLine">2 Good222 2 Go</h1>

        <div class="overHeadButtons">
            <div class="userButtons">
                <button onclick="accountInformationPage()" class="edit mainBtns">Bruker informasjon</button> <br>
                <button onclick= "logOut()" class="logge ut mainbtns">Logg ut</button>
            </div>
            <div class="backButton">
                <button onclick= "foodPage()" class="logge ut mainbtns">X</button>
            </div>
        </div>
       
        <div class="frame">
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
            </div>
        <button onclick="contactAdPoster(${model.ads[index].id})" class="edit mainBtns">Ta kontakt med utgiver</button>
    </div>
    `;  
show();
}
{/* <div class="userButtons">
<button onclick="accountInformationPage()" class ="edit mainBtns">Bruker informasjon</button> <br>
<button onclick="logOut()" class= "logge ut mainbtns">Logg ut</button>
</div> */}
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
    <h1 class="headLinePostedAds headLine">postedAdsPage</h1>
    <div class="overHeadButtons">
    <button onclick="accountHomePage()" class="loggUtBtnpostedAdsPage mainbtns">X</button>

        </div>

        <div class="postedAdsframe">


    <div class="giveAwayFoodFrames anotherWindowForKenneth">
<div id="chatteBox">
    </div>
                <div class="foodDescriptionBorder">
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
                </div>
                <form class="${model.inputs.hideFFButton.userLoginFramesclass2}" onsubmit="submitPostedAd(${model.inputs.editAd.id})">
                    <label>Tittel:</label>
                    <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.title}" oninput="model.inputs.editAd.title = this.value" required/>
                    <label>Adresse:</label>
                    <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.adress}" oninput="model.inputs.editAd.adress = this.value" required/>
                    <label>PostNr:</label>
                    <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.zipCode}" oninput="model.inputs.editAd.zipCode = this.value" required/>
                    <label>Telefon:</label>
                    <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.phoneNumber}" oninput="model.inputs.editAd.phoneNumber = this.value" required/>
                    <label>Dato fra:</label>
                    <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.datePosted}" oninput="model.inputs.editAd.datePosted = this.value" required/>
                    <label>Dato Til:</label>
                    <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.dateExpired}" oninput="model.inputs.editAd.dateExpired = this.value" required/>
                    <label>Beskrivelse:</label>
                    <input ${model.inputs.editAdInputButton.save} class="brukerInfo" type="text" placeholder="${model.inputs.editAd.details}" oninput="model.inputs.editAd.details = this.value" required/>
                    <div>
                    <button ${model.inputs.editUserButton.save} id="deleteMyAdsBtn" onclick="deleteMyAd(${model.inputs.editAd.id})">Delete Ad</button>
                    <button ${model.inputs.editUserButton.save} onclick="cancelPostedAd(${model.inputs.editAd.id})" class="mainBtns">Avbryt</button>
                    <input ${model.inputs.editUserButton.save} class="mainBtns" type="submit" value="Lagre"/>
                    </div>
                </form>
                </div>        
        </div>
        <div class="foodDescriptionImage">
        <div id="foodGroupFrame">${userAdPhoto}</div>
    </div>
    `;
show();
}
{/* <div class="userButtons">
<button onclick="accountInformationPage()" class ="edit mainBtns">Bruker informasjon</button> <br>
<button onclick="logOut()" class= "logge ut mainbtns">Logg ut</button>
</div> */}
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
    <h1 class="activeAdPageheadLine">activeAdPage</h1>

    <div class="overHeadButtonsActiveAdPage">
 
        <div class="backButton">
            <button onclick="accountHomePage()" class= "loggUtBtnActiveAdPage mainbtns">X</button>
        </div>
    </div>

    <div class="frames">
        
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
    `;
show();
}

function chatBox(){
     html = /*html*/`
     <button class="open-button" onclick="openForm()">Chat</button>

    <div class="chat-popup" id="myForm">
    <form action="/action_page.php" class="form-container">
        <h1>Chat</h1>

        <label for="msg"><b>Message</b></label>
        <textarea placeholder="Type message.." name="msg" required></textarea>

        <button type="submit" class="btn">Send</button>
        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
    </form>
    </div>
     `;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }