angular.module('itri').service('mainSrvc', function(){

    this.testData = "Can you hear me now????"

    this.sampleUserData = [{
        Username: 'mcgagnier',
        name: 'Chris Gagnier',
        image: "../img/NewYork.jpg",
        desc: "I'm just a guy training for my first tri",
        id: 1111,
        age: 49

    }, {
        Username: 'tracierey',
        name: 'Tracie Gagnier',
        image: "../img/NewYork.jpg",
        desc: "I'm just a girl training for my first half-marathon",
        id: 1112,
        age: 51

    },{
        Username: 'slaymaker',
        name: 'Dyllon Gagnier',
        image: "../img/NewYork.jpg",
        desc: "I'm just a kid training for my first duathalon",
        id: 1113,
        age: 22

    },]
})
