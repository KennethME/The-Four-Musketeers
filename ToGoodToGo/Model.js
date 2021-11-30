const model = 
{
    
    app : {
        currentpage: '', 
        currentUser: [0],   
},

// Inputs 
inputs: 
{
    login: // <----- Sendes til Login function
    {
        // userName: '',
        // password: ''
    },
    
    newAd: // <---- Sendes til ads
    {
        id: '', 
        userLoginName: '', 
        userName: '', 
        userid: '',
        title: '',
        details: '', 
        zipCode: '', 
        adress: '',
        datePosted: '', 
        dateExpired: '', 
        phoneNumber: '', 
        image: '', 
        imageId: '',
        allergyID:[''], 
        orderedById: [],
    },

    editAd:
    {
        id: '', 
        userLoginName: '', 
        userName: '', 
        userid: '',
        title: '',
        details: '', 
        zipCode: '', 
        adress: '',
        datePosted: '', 
        dateExpired: '', 
        phoneNumber: '', 
        image: '', 
        imageId: '',
        allergyID:[''], 
        orderedById: [],
    },

      
    newUser: // <--- Sendes til users
    [
        {      
            id: '', 
            userName:'', 
            userLoginName: '', 
            userPw: '', 
            zipCode: '', 
            tlf: '',
            adress: '', 
        } 
    ],

    editUser: // <---- sendes til users
    [
        {
            id: '',
            userName:'', 
            userLoginName: '', 
            userPw: '', 
            zipCode: '', 
            tlf: '',
            adress: '', 
        }
    ],

    editUserButton: {
        edit: "enabled",
        save: "disabled",
        hide: "isHidden",
        show: "",
    },

    editAdButton: {
        edit: "enabled",
        save: "disabled",
        hide: "isHidden",
        show: "",
    },
    editAdInputButton: {
        edit: "enabled",
        save: "disabled",
        hide: "isHidden",
        show: "",
    },
    checkedbtn:{
        isChecked: true,
    },

    checkAllergy:{
        egg: false, 
        gluten: false,
        nøtter: false,
        melk: false,
    },

    foodDescriptionInputs: {
        title: "",
        adress: "",
        zipCode: "",
        phoneNumber: "",
        datePosted: "",
        dateExpired: "",
        details: "",
        image: "https://sirencomms.com/wp-content/themes/massive-dynamic/assets/img/placeholders/placeholder1.jpg",
    },
        


    hideFFButton: {
        giveAwayFoodFramesclass: "giveAwayFoodFrames",  //giveAwayFoodFrames
        foodDescriptionImageclass: "isHidden", //foodDescriptionImage
        uploadPhotoFrameclass: "isHidden", //uploadPhotoFrame
        userLoginFramesclass: "userLoginFrames", //userLoginFrames
        userLoginFramesclass2: "isHidden", //userLoginFrames
        foodDescriptionInputsclass: "foodDescriptionBorder",
        foodDescriptionInputsclass2: "isHidden",
    },

    giveAway: {
        historyAdInput: "isHidden",
        newAdInput: "isHidden",
        newAdInputBtn: "",
        uploadImage: "isHidden",
        uploadAllergy: "isHidden",
        uploadAnonymous: "isHidden",
        inputButtons: "",
        disabled: "",
        photoPreview: "isHidden",

        prewView: "giveAwayDescriptionBorder",
        prewViewBtn: "isHidden",
        
    },

},
    //Felles data
    users: 
    [
    {       
        id: 0,
        userName:'Geir',  
        userLoginName: '1', 
        userPw: '1', 
        zipCode: '5003', 
        tlf: '45932881', 
        adress: 'Johannes Svein Vei 20',
    }, 

    {      
        id: 1, 
        userName:'eskil', 
        userLoginName: 'qw', 
        userPw: '123', 
        zipCode: '5002', 
        tlf: '14445678', 
        adress: 'Trond Michel svein vei 21',
    }, 

    {      
        id: 2, 
        userName:'Kristoffer', 
        userLoginName: 'Kris', 
        userPw: '123', 
        zipCode: '5001', 
        tlf: '12345678', 
        adress: 'Trond Michel 11',
    },      
    {      
        id: 3, 
        userName:'Tomas', 
        userLoginName: 'a', 
        userPw: 'a', 
        zipCode: '5004', 
        tlf: '12345678', 
        adress: 'Trond Michel 11',
    },      
    {      
        id: 4, 
        userName:'Kenneth', 
        userLoginName: 'k', 
        userPw: 'k', 
        zipCode: '5002', 
        tlf: '999 22 111', 
        adress: 'Aurdalslia 21',
    },      
    ],

    allergies: 
    [
        
    ],

    adsHistory: 
    [
        {   
            id: 0, 
            userLoginName: 'aa', 
            userName: 'Geir', 
            userid: 0,
            title: 'EGG Chicken',
            zipCode: '5000', 
            adress: 'Jostein Tords Vei 0',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: ['https://solidstarts.com/wp-content/uploads/when-can-babies-eat-eggs.jpg'], 
            imageId: 0, 
            details: 'EGG', 
            allergyID:[0], 
            orderedById: [],
        },
        {   
            id: 1, 
            userLoginName: 'aa', 
            userName: 'Geir', 
            userid: 0,
            title: 'GLUTEN',
            zipCode: '5001', 
            adress: 'Jostein Tords Vei 1',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Gluten_Sources.png', 
            imageId: 0, 
            details: 'GLUTEN', 
            allergyID:[1], 
            orderedById: [],
        },
        {   
            id: 2, 
            userLoginName: 'aa', 
            userName: 'Geir', 
            userid: 0,
            title: 'NUTS',
            zipCode: '5002', 
            adress: 'Jostein Tords Vei 2',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://frukt.imgix.net/N%C3%B8tter,_valn%C3%B8tter,_hasseln%C3%B8tter,_mandler_2ze7d28nef-Artikkel.jpg', 
            imageId: 0, 
            details: 'NØTTER', 
            allergyID:[2], 
            orderedById: [],
        },
        {   
            id: 3, 
            userLoginName: 'aa', 
            userName: 'Geir', 
            userid: 0,
            title: 'MILK',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 3',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://www.matportalen.no/matvaregrupper/tema/melk_og_melkeprodukter/article10130.ece/BINARY/Melk', 
            imageId: 0, 
            details: 'MELK', 
            allergyID:[3], 
            orderedById: [],
        },
        {   
            id: 4, 
            userLoginName: 't', 
            userName: 'Tomas', 
            userid: 3,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 6',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://raphaelpedersenblogg.files.wordpress.com/2017/11/img_2003.jpg?resize=1170%2C885', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[2], 
            orderedById: [],
        },
        {   
            id: 5, 
            userLoginName: 't', 
            userName: 'Tomas', 
            userid: 3,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 7',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://fiskesprell.no/contentassets/987532cb14b943ed99b455f78a028c52/simen-g.-fangel---kokkesprell_2017_vinnerrett_6_trinn.jpg?width=1000&height=600&transform=downFill&center=0.23%2C0.56', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 1], 
            orderedById: [],
        },
        {   
            id: 6, 
            userLoginName: 't', 
            userName: 'Tomas', 
            userid: 3,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 6',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://raphaelpedersenblogg.files.wordpress.com/2017/11/img_2003.jpg?resize=1170%2C885', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[2], 
            orderedById: [],
        },
        {   
            id: 7, 
            userLoginName: 't', 
            userName: 'Tomas', 
            userid: 3,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 7',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://fiskesprell.no/contentassets/987532cb14b943ed99b455f78a028c52/simen-g.-fangel---kokkesprell_2017_vinnerrett_6_trinn.jpg?width=1000&height=600&transform=downFill&center=0.23%2C0.56', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 1], 
            orderedById: [],
        },
        {   
            id: 8, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 8',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://mills.ams3.digitaloceanspaces.com/content/uploads/20200924162323/slik-steker-du-fisk-komprimert-e1487862945783.jpg', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 2], 
            orderedById: [],
        },
        {   
            id: 9, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 9',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://heiamat.no/wp-content/uploads/2012/03/redspett.jpg', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 1, 2], 
            orderedById: [],
        },
        {   
            id: 10, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 10',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://bilder.ngdata.no/7035119223203/campaign/large.jpg', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 1, 2], 
            orderedById: [],
        },
        {   
            id: 11, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 11',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPi5YXmJfR_wBTUfQ3B4r-CuvTln7nJ-rF3VfzZcaSlUbltA2VJWC0Fq7dGLvqzY8czz4&usqp=CAU', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 1, 2], 
            orderedById: [],
        },
        {   
            id: 12, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 11',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://thebigmansworld.com/wp-content/uploads/2015/12/hot-chocolate-oatmeal2.jpg', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 1, 2], 
            orderedById: [0],
        },
        {   
            id: 13, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 11',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://i2.wp.com/simple-veganista.com/wp-content/uploads/2018/11/cinnamon-oatmeal-3.jpg', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 1, 2], 
            orderedById: [0],
        },
    ],
    
    
    ads: 
    [
        {   
            id: 0, 
            userLoginName: 'aa', 
            userName: 'Geir', 
            userid: 0,
            title: 'EGG Chicken',
            zipCode: '5000', 
            adress: 'Jostein Tords Vei 0',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: ['https://solidstarts.com/wp-content/uploads/when-can-babies-eat-eggs.jpg'], 
            imageId: 0, 
            details: 'EGG', 
            allergyID:[0], 
            orderedById: [],
        },
        {   
            id: 1, 
            userLoginName: 'aa', 
            userName: 'Geir', 
            userid: 0,
            title: 'GLUTEN',
            zipCode: '5001', 
            adress: 'Jostein Tords Vei 1',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Gluten_Sources.png', 
            imageId: 0, 
            details: 'GLUTEN', 
            allergyID:[1], 
            orderedById: [],
        },
        {   
            id: 2, 
            userLoginName: 'aa', 
            userName: 'Geir', 
            userid: 0,
            title: 'NUTS',
            zipCode: '5002', 
            adress: 'Jostein Tords Vei 2',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://frukt.imgix.net/N%C3%B8tter,_valn%C3%B8tter,_hasseln%C3%B8tter,_mandler_2ze7d28nef-Artikkel.jpg', 
            imageId: 0, 
            details: 'NØTTER', 
            allergyID:[2], 
            orderedById: [],
        },
        {   
            id: 3, 
            userLoginName: 'aa', 
            userName: 'Geir', 
            userid: 0,
            title: 'MILK',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 3',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://www.matportalen.no/matvaregrupper/tema/melk_og_melkeprodukter/article10130.ece/BINARY/Melk', 
            imageId: 0, 
            details: 'MELK', 
            allergyID:[3], 
            orderedById: [],
        },
        {   
            id: 4, 
            userLoginName: 't', 
            userName: 'Tomas', 
            userid: 3,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 6',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://raphaelpedersenblogg.files.wordpress.com/2017/11/img_2003.jpg?resize=1170%2C885', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[2], 
            orderedById: [],
        },
        {   
            id: 5, 
            userLoginName: 't', 
            userName: 'Tomas', 
            userid: 3,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 7',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://fiskesprell.no/contentassets/987532cb14b943ed99b455f78a028c52/simen-g.-fangel---kokkesprell_2017_vinnerrett_6_trinn.jpg?width=1000&height=600&transform=downFill&center=0.23%2C0.56', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 1], 
            orderedById: [],
        },
        {   
            id: 6, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 8',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://mills.ams3.digitaloceanspaces.com/content/uploads/20200924162323/slik-steker-du-fisk-komprimert-e1487862945783.jpg', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 2], 
            orderedById: [],
        },
        {   
            id: 7, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 9',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://heiamat.no/wp-content/uploads/2012/03/redspett.jpg', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 1, 2], 
            orderedById: [],
        },
        {   
            id: 8, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 10',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://bilder.ngdata.no/7035119223203/campaign/large.jpg', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 1, 2], 
            orderedById: [],
        },
        {   
            id: 9, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 11',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPi5YXmJfR_wBTUfQ3B4r-CuvTln7nJ-rF3VfzZcaSlUbltA2VJWC0Fq7dGLvqzY8czz4&usqp=CAU', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 1, 2], 
            orderedById: [],
        },
        {   
            id: 10, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 11',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://images.media-allrecipes.com/userphotos/560x315/5477640.jpg', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 1, 2], 
            orderedById: [],
        },
        {   
            id: 11, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Fisk',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 11',
            datePosted: '23-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://www.wellplated.com/wp-content/uploads/2015/02/Chai-Chocolate-Oatmeal.-A-healthy-way-to-eat-chocolate-for-breakfast.jpg', 
            imageId: 0, 
            details: 'Fisk', 
            allergyID:[0, 1, 2], 
            orderedById: [0],
        },
        {   
            id: 12, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Blaut Graut',
            zipCode: '5003', 
            adress: 'Jostein Tords Vei 11',
            datePosted: '21-11-2021', 
            dateExpired: '27-12-2021', 
            phoneNumber: '93435423', 
            image: 'https://thebigmansworld.com/wp-content/uploads/2015/12/hot-chocolate-oatmeal2.jpg', 
            imageId: 0, 
            details: 'Vetsje ka dette her e', 
            allergyID:[0, 1, 2], 
            orderedById: [0],
        },
        {   
            id: 13, 
            userLoginName: 'k', 
            userName: 'Kenneth', 
            userid: 4,
            title: 'Graut',
            zipCode: '5033', 
            adress: 'Jostein evens Vei 111',
            datePosted: '21-11-2021', 
            dateExpired: '23-11-2021', 
            phoneNumber: '93435423', 
            image: 'https://i2.wp.com/simple-veganista.com/wp-content/uploads/2018/11/cinnamon-oatmeal-3.jpg', 
            imageId: 0, 
            details: 'Dette er den tredje grøten eg har laget idag', 
            allergyID:[0, 1, 2], 
            orderedById: [0],
        },
    ],

    chatBox: 
    [
        {from: 1, to: 2, text:'', ad: 1}
    ],

};

