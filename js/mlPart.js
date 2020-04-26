let predic = ""
let prob = 0.0
let result = ""
let imgUrl = JSON.parse(localStorage.getItem("picturelinks"))
let recycleArray = ["Cans", "Cardboard", "Glass", "Paper", "Plastic"]
let compostArray = ["Animal Waste", "Egg", "Meat", "Plant", "Produce", "Wheat"]

$(function() {
    var params = {
        // Request parameters
        // "application": "EarthX2020",
    };
    $.ajax({
        type: "POST",
        url: "https://eastus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/45aa1af1-fdbb-42c3-9e59-a2bd603ea652/classify/iterations/FinalTrained/url" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Prediction-key","23c4e631f7334807b56865b26e68aafa");
        },
        // Request body
        data: '{"url": "' + imgUrl + '"}',
    })
    .done(function(data) {
        predic = (data.predictions[0].tagName)
        prob = Math.round(data.predictions[0].probability * 10000)/100
        console.log(predic)
        console.log(prob)
        where(predic, prob)

    })
    .fail(function(data) {
        console.log(imgUrl)
        console.log(data)
        alert("error");
    });
});

function where(prediction, probability) {
    if (recycleArray.includes(prediction) && probability > 80.0) {
        // Recyclable
        result = "This should be recycled. (" + prediction + ")" 
        localStorage.setItem("result", result)
    } else if (compostArray.includes(prediction) && probability > 80.0) {
        // Compost
        result = "This should be composted. (" + prediction + ")" 
        localStorage.setItem("result", result)
    } else {
        // Garbage
        result = "This should be thrown in the garbage."
        localStorage.setItem("result", result)
    }
    alert(result)
    window.open("index.html", "_self") 
}