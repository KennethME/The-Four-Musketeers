let html = '';
show();
function show(){
   document.getElementById('app').innerHTML = html;
}

function firstPage(){
    html = /*html*/`
    <h1 class="FirstPageHeadLine">VELKOMMEN</h1>
    <button onclick=" mainPage()">Gå inn</button>
    <hr>
    <h3> 2good2go er en mat blah blah blah blah</h3>
    <br>
    <div id="text1">
    <p class="firstPageText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor purus, dapibus eget augue non, vulputate gravida augue. Etiam lacus lorem, gravida eu libero in, ultricies congue dui. In hac habitasse platea dictumst. Aliquam hendrerit, ligula id volutpat facilisis, orci est aliquet leo, sed commodo tortor magna eu ante. Maecenas consectetur nunc nisi, non pulvinar dolor viverra ut. Morbi commodo nisi aliquam lorem hendrerit elementum. Pellentesque et elit venenatis leo malesuada ultricies. Praesent egestas cursus ipsum, vel cursus dolor molestie vehicula. Phasellus eu finibus nunc. Nullam ultricies malesuada quam, eu volutpat justo elementum a.

    Suspendisse tincidunt vehicula euismod. Fusce ornare ipsum leo, at scelerisque felis venenatis ac. Vivamus suscipit tortor sit amet velit semper, vitae tincidunt tortor rhoncus. Suspendisse sodales mi vitae scelerisque congue. Aliquam magna ex, varius ac commodo id, gravida ut magna. Ut faucibus urna dolor, nec malesuada erat molestie mollis. Ut volutpat, nunc sit amet malesuada pretium, nibh elit dignissim diam, at lacinia mi erat eget libero. Etiam volutpat diam ac justo consectetur blandit.</p>
    </div>
    <div id="text2">
    <h1>More info</h1>
    <p class="firstPageText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor purus, dapibus eget augue non, vulputate gravida augue. Etiam lacus lorem, gravida eu libero in, ultricies congue dui. In hac habitasse platea dictumst. Aliquam hendrerit, ligula id volutpat facilisis, orci est aliquet leo, sed commodo tortor magna eu ante. Maecenas consectetur nunc nisi, non pulvinar dolor viverra ut. Morbi commodo nisi aliquam lorem hendrerit elementum. Pellentesque et elit venenatis leo malesuada ultricies. Praesent egestas cursus ipsum, vel cursus dolor molestie vehicula. Phasellus eu finibus nunc. Nullam ultricies malesuada quam, eu volutpat justo elementum a.

    Suspendisse tincidunt vehicula euismod. Fusce ornare ipsum leo, at scelerisque felis venenatis ac. Vivamus suscipit tortor sit amet velit semper, vitae tincidunt tortor rhoncus. Suspendisse sodales mi vitae scelerisque congue. Aliquam magna ex, varius ac commodo id, gravida ut magna. Ut faucibus urna dolor, nec malesuada erat molestie mollis. Ut volutpat, nunc sit amet malesuada pretium, nibh elit dignissim diam, at lacinia mi erat eget libero. Etiam volutpat diam ac justo consectetur blandit.</p>
    </div>
    <div class="imgSlideShow">
    <img class="slide">
    </div>
    `;
    show();
}

firstPage();


function initSlideshow() {	
    setImage(0);
    
    for (let i = 0; i < model.ads.length; i++){
        model.images.push(model.ads[i].image);
    }

    setInterval(function(){
    		nextImage();
    },5000);
};

// >= dette betyr større eller er lik. "2 er større eller lik 2"  
//(100 >= 2) = true 
//(1 >= 2) = false
// <= Mindre eller er lik;
// si du har to setintervals og begge bruker samme teller, tilfeldigvis, så kan du ende opp med å skippe
//teller indexen. SÅ da vil noen ganger if(index === 1) ikke stemme, for det kan bli index = 2. Så bruk if(index >= 1)


function nextImage() {

    if(model.app.currentImage > model.images.length - 1){
        model.app.currentImage = 0;
    }
    setImage(model.app.currentImage);
    console.log(model.app.currentImage)
    
    model.app.currentImage++;
};
function setImage(index) {
    
    document.querySelectorAll('.slide')[0].src = model.images[index];
};




// function announcements(){
//     html = "";
//     for (let ad of model.ads){
//             html += /*html*/`   
//         <div onclick= 'mainPage()'>
//         <img src = '${ad.image}' width='150' height='100'><br>
//         </div> `; 
//         }
//         show();
//        return html;
//     }
    
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



//NO FILE CHOSEN = RED | BYTT TIL GRØNN NÅR IMG ER VALGT! HUSK 08/12-21
function giveAway(){
    let userAdPhoto = '';
    for (let i = 0; i < model.adsHistory.length; i++){
        if(model.adsHistory[i].userid == model.app.currentUser)
        userAdPhoto += /*html*/`
        <img onclick="userAdHistory(${i})" src="${model.adsHistory[i].image}" class="foodGroupPhotoFrame">
        `;
    }
    html = /*html*/`
    <h1 class="GiveAwayHeadLine">GiveAwayPage</h1>

   
    <div class="giveAwayMainFrames">
    
    <div class="giveAwayPage" id="${model.inputs.giveAway.inputButtons}">
    <button onclick="accountHomePage()" class="returnBtns loggUtBtnGiveAwayPage ">Tilbake</button>
        <div class="giveAwayAdChoise">
        <div class="overHeadButtons">
        </div>
        <button class="historyNewAdInputBtns" onclick="newAdinputs()">Gi ut mat?
            <img src="https://img.icons8.com/color/200/000000/giving.png"/>
       
        </button>

        <button class="historyNewAdInputBtns" onclick="historyAdInputs()">
            <img src="https://img.icons8.com/fluency/200/000000/history-folder.png"/>History?
         
        </button>

        </div>            
    </div>
    <div class="frames" id="${model.inputs.giveAway.historyAdImages}">
        <h3>Din Ad Historikk</h3>
        <div class="giveAwayHistoryImage">
            ${userAdPhoto}
        </div>
    </div>
                <div class="${model.inputs.giveAway.prewView}" id="${model.inputs.giveAway.newAdInput}">
                <button onclick= " toAnonymousUpload()" id="${model.inputs.giveAway.returnIdBtn5}" class="returnBtns">Tilbake</button>

                <button onclick= "returnNewAdInputs()" class="${model.inputs.giveAway.returnClassBtn5}">Tilbake</button>
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
                        <button class="${model.inputs.giveAway.prewViewBtn} addNewAdBtn" type="submit">legg ut annonse</button>
                    </form>
                    <button onclick="toUploadImage()" id="${model.inputs.giveAway.newAdInputBtn}"class="editDeleteNextBtns">Til Bilder</button>
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
                    <img class="imageDisplay" id="${model.inputs.giveAway.photoPreview}" src="${model.inputs.foodDescriptionInputs.image}"/>
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
                    <button onclick="toUploadHistoryImage()" id="${model.inputs.giveAway.historyAdInputbtn}" class="">Til Bilder</button>
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
                <button onclick= "returnToUploadImage()" class="giveAwayReturnBtn2 returnBtns">Tilbake</button>
                    <input type="file" accept="image/*" name="image" id="file" onchange="loadFile(event)">
                    <img class="uploadPhotoFrame" src="${model.inputs.foodDescriptionInputs.image}" id="output" onchange="model.inputs.foodDescriptionInputs.image=this.value"/>  
                    <button onclick="toAllergyUpload()" class="editDeleteNextBtns tilAllergiBtn" id="${model.inputs.giveAway.uploadImagebtn}">Til Allergi</button>
                    <button onclick="toHistoryAllergyUpload()" class="editDeleteNextBtns" id="${model.inputs.giveAway.HistoryUploadImagebtn}">Til Allergi</button>
                    <br>
                    <br>
                </div>
                <div class="giveAwayDescriptionBorder" id="${model.inputs.giveAway.uploadAllergy}"> 
                <button onclick="toUploadImage()" class="returnBtns giveAwayReturnBtn3">Tilbake</button>
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
                  
                    <button onclick="toAnonymousUpload()" id="${model.inputs.giveAway.uploadAllergybtn}" class="editDeleteNextBtns"> Personvern</button>
                    <button onclick="toHistoryAnonymousUpload()" id="${model.inputs.giveAway.uploadHistoryAllergybtn}">Personvern</button>
                </div>    
                <h1 class="txtPreviewAnonym"> Preview på din annonse </h1>
                <div class="giveAwayDescriptionBorderAnonym" id="${model.inputs.giveAway.uploadAnonymous}">
                <button onclick="toAllergyUpload()" class="returnBtns giveAwayReturnBtn4">Tilbake</button>
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
                        <button class="editDeleteNextBtns" id="${model.inputs.giveAway.uploadAnonymousbtn}" onclick="newAdPreview()">Forhåndsvisning</button>
                        <button id="${model.inputs.giveAway.uploadHistoryAnonymousbtn}" class="" onclick="historyAdPreview()">Forhåndsvisning</button>
                    </div> 
                </div>
        </div>
    </div>`;
show();
}


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
//firstPage();
 //mainPage();
//AccountPage er ferdig med css.
accountHomePage();

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
    <button onclick="accountInformationPage()" class="edit mainBtns"><p class>Brukerinformasjon<p></button> 
    <br>
    
</div>

        <div class="miniFrames">
            <div onclick= "giveAway()">
          
                <img src="https://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Food-Dome-icon.png" class="icons iconImg2" width="90%">
                <p>Gi ut mat</p>
            </div>
        </div>

    <div class="miniFrames">
        <div onclick="postedAdsPage()">
    
            <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/chromium-app-list-icon.png" class="icons" width="auto">
            <p>Arkiverte annonser</p>
        </div>
    </div>

<div id="miniFramesDivider"></div>
     <div class="miniFrames2">
        <div onclick="foodPage()" >
    
            <img src="https://img.icons8.com/color/256/00000/hamburger.png" class="icons" width="auto">
            <p>Finn mat</p>
        </div>
    </div>

    <div class="miniFrames2">
        <div onclick="showMyActiveAds()">

            <img src="https://img.icons8.com/color/256/000000/prepositions-in.png" class="icons" width="auto">
            <p>Dine bestilte annonser</p>
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
    <h1 class="headLineBrukerInfo">accountInformationPage</h1>
    <div class="accountInfoPageFrame">
    <div id="newUserInfo">
    <button onclick= "accountHomePage()" class="loggUtBtnBrukerInfo mainbtns returnBtns">Tilbake</button>
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
                           
                                <button ${model.inputs.editUserButton.edit} onclick="editAccount()" class="EditDeleteNextBtns" >Rediger</button>
                                <button ${model.inputs.editUserButton.save} onclick="saveEditAccount()" class="EditDeleteNextBtns" type="submit">Lagre</button>
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
                                    <button ${model.inputs.editUserButton.edit} onclick="accountHomePage()" class="returnBtns EditDeleteNextBtns">Tilbake</button>
                                    <button class="${model.inputs.editUserButton.hide}"${model.inputs.editUserButton.edit} onclick="editAccount()" class="EditDeleteNextBtns">Rediger</button>
                                    <button ${model.inputs.editUserButton.save} onclick="cancelEditAccount()" class="EditDeleteNextBtns">Avbryt</button>
                                    <input ${model.inputs.editUserButton.save} class="EditDeleteNextBtns"  type="submit" value="Lagre">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`;
    show();
}

function foodPage(){
    let postingAd = '';
    for (let i = 0; i < model.ads.length; i++){
        if(model.inputs.foodPagezipCode === model.ads[i].zipCode){
                postingAd += /*html*/`
                <img onclick="foodPageAd(${i})" src="${model.ads[i].image}" class="foodGroupPhotoFrame">`;
        }
        else if(model.inputs.foodPagezipCode === '')
        postingAd += /*html*/`
        <img onclick="foodPageAd(${i})" src="${model.ads[i].image}" class="foodGroupPhotoFrame">`;
        }
    html = /*html*/`
    <h1 class="headLine findFoodPageheadLine">FindFoodPage</h1>

    <div class="overHeadButton">
        <button onclick="logOut()" class="loggUtBtn">Logg ut</button>
        <button onclick="accountHomePage()" class="returnBtns loggUtBtn">Tilbake</button>
    </div>
    <div class="allergyButtons">
        <button onclick="removeEggAllergies()" class="mainBtns">Egg</button>
        <button onclick="removeGlutenAllergies()" class="mainBtns">Gluten</button>
        <button onclick="removeNøtterAllergies()" class="mainBtns">Nøtter</button>
        <button onclick="removeMelkAllergies()" class="mainBtns">Melk</button>
        <button onclick="resetAllergies()">RESET HER</button>
    </div>
    <div class="zipSearchInput">
        <label>Post Adresse</label>
        <input class="ZipSearchBar" oninput="model.inputs.foodPagezipCode = this.value" type="text" value="${model.inputs.foodPagezipCode || ''}">
        <button type="submit" onclick="searchZipCode()">Søk</button>
    </div>
    <div class="FoodPageFrame">${postingAd}</div> 
    `;
show();
};

function foodPageAd(index)
{
    html = /*html*/`
    <h1 class="headLine">2 Good 2 Go</h1>

        <div class="overHeadFoodPageAdButtons">
            <div class="userButtons">
                <button onclick= "logOut()" class="logge ut mainbtns">Logg ut</button>
            </div>
            <div class="backButton">
                <button onclick= "foodPage()" class="returnBtns mainbtns">Tilbake</button>
            </div>
        </div>
       
        <div class="postedAdsframe">
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
                <div class="foodAdDescriptionInputs">
                <button onclick="contactAdPoster(${model.ads[index].id})" class="edit mainBtns">Ta kontakt med utgiver</button>
                </div>
            </div>
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
  
    
    <div class="postedAdsframe2">
    <button onclick="accountHomePage()" class="loggUtBtnpostedAdsPage mainbtns returnBtns">Tilbake</button>
         <div class="chatBoxPostedAdsPage">

        <button class="open-button" onclick="openForm()">Chat</button>
        <div class="chat-popup" id="${model.inputs.postedAdsPage.myForm}">
        <form action="/action_page.php" class="form-container">
        <h1>Chat</h1>

        <label for="msg"><b>Message</b></label>
        <textarea placeholder="Type message.." name="msg" required></textarea>

        <button type="submit" class="btn">Send</button>
        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
    </form>
    </div>
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
                    <button class="editDeleteNextBtns" ${model.inputs.editAdButton.save} onclick="editPostedAd(${model.inputs.editAd.id})" >Edit Ad</button>
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
                    <button ${model.inputs.editUserButton.save} class="editDeleteNextBtns" onclick="deleteMyAd(${model.inputs.editAd.id})">Delete Ad</button>
                    <button ${model.inputs.editUserButton.save} onclick="cancelPostedAd(${model.inputs.editAd.id})" class="editDeleteNextBtns">Avbryt</button>
                    <input ${model.inputs.editUserButton.save} class="editDeleteNextBtns"type="submit" value="Lagre"/>
                    </div>
                </form>
                </div>        
      
             
        <div id="foodGroupFrame"> <p class="dinHistorikk"> Din historikk:</p>${userAdPhoto}
        </div>
    
    </div>
    `;
show();
}
{/* <div class="userButtons">
<button onclick="accountInformationPage()" class ="edit mainBtns">Bruker informasjon</button> <br>
<button onclick="logOut()" class= "logge ut mainbtns">Logg ut</button>
</div> */}

function showMyActiveAds(){
    let activeAdPhoto = '';
    for (let i = 0; i < model.ads.length; i++){
        if(model.ads[i].orderedById.includes(model.users[userIndex].id)){
            activeAdPhoto += /*html*/`
            <div class="activeAdAds">
                <img onclick="activeAdInformationPage(${i})" src="${model.ads[i].image}" class="foodGroupPhotoFrame">
                <div class="activeAdInfo">
                        <p>Matrett:${model.ads[i].title}</p>
                        <p>Dato utlagt:${model.ads[i].datePosted}</p>
                        <p>Postadresse:${model.ads[i].zipCode}</p>
                </div>
            </div>
            `;
        }
    }
    html = /*html*/`
    <div class="activeBody">
       <h1 class="headLineActiveAd">2 Good 2 Go</h1>
       
      
        <div class="activeAdframes">
        
        <button onclick="accountHomePage() " class="loggUtBtnAccountHomePage returnBtns">Tilbake</button>
            <div>${activeAdPhoto}</div>
        </div>
    </div>
    `;
show();
}

function activeAdInformationPage(i){
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
    <div class="activeAdInfoframes">
  
    <button onclick="showMyActiveAds()" class="returnBtns tilbakeActiveAdPage">Tilbake</button>
        <div class="foodDescriptionImage">
            <div id="foodHistory"><img onclick="orderedAd(${i})" src="${model.ads[i].image}" class="foodGroupPhotoFrame"></div>
        </div>
        <div class="foodDescriptionInputs">
            <label>Tittel:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.ads[i].title}" type="text">
            <label>Adresse:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.ads[i].adress}" type="text">
            <label>PostNr:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.ads[i].zipCode}" type="text">
            <label>Telefon:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.ads[i].phoneNumber}" type="text">
            <label>Dato fra:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.ads[i].datePosted}" type="text">
            <label>Dato Til:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.ads[i].dateExpired}" type="text">
            <label>Beskrivelse:</label>
            <input ${model.inputs.editAdInputButton.save} class="brukerInfo" value="${model.ads[i].details}" type="text">
        </div>
    </div> 
    `;
show();
}