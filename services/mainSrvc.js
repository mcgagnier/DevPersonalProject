angular.module('itri').service('mainSrvc', function(){

    this.testData = "Can you hear me now????"

    this.sampleUserData = [{
        username: 'mcgagnier',
        name: 'Chris Gagnier',
        image: "../images/me.jpg",
        desc: "I'm just a guy training for my first tri",
        id: 1111,
        age: 49

    }, {
        username: 'tracierey',
        name: 'Tracie Gagnier',
        image: "./images/tracie.jpg",
        desc: "I'm just a girl training for my first half-marathon",
        id: 1112,
        age: 51

    },{
        username: 'slaymaker',
        name: 'Dyllon Gagnier',
        image: "./images/dyllonR.jpg",
        desc: "I'm just a dude training for my first duathalon",
        id: 1113,
        age: 22

    },]
})
