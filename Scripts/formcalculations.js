/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html
You are free to use the code in Commercial or non-commercial projects
*/

//hr addon
var hr_prices = new Array();
 hr_prices["None"]=0;
 hr_prices["1H"]=1000;
 hr_prices["2H"]=2000;
 hr_prices["3H"]=3000;
 hr_prices["4H"]=4000;
 hr_prices["5H"]=5000;

//cup types
var cup_types = new Array();
 cup_types["A"] =10;
 cup_types["B"] =10;
 cup_types["C"] =10;
 cup_types["D"] =12;
 cup_types["F"] =12;
 cup_types["K"] =15;
 cup_types["M1"]=10;
 cup_types["M2"]=10;
 cup_types["I1"]=15;
 cup_types["I2"]=15;
 cup_types["I3"]=15;
 cup_types["I4"]=15;
 cup_types["J1"]=18;
 cup_types["J2"]=18;
 cup_types["J3"]=18;
 cup_types["L"]=20;
 cup_types["H"]=12;
 cup_types["S1"]=22;
 cup_types["S2"]=22;
// ---------------- //
 cup_types["G1"]=8;
 cup_types["G2"]=8;
 cup_types["G3"]=8;
 cup_types["G4"]=8;
 cup_types["I5"]=15;
 cup_types["I6"]=15;

 cup_types["E"]=35;
 cup_types["S"]=12;
 cup_types["P"]=12;
 cup_types["U"]=30;
 cup_types["N"]=20;
 cup_types["O"]=10;

 cup_types["Q1"]=18;
 cup_types["Q2"]=22;
 cup_types["Q3"]=28;
 cup_types["R1"]=18;
 cup_types["R2"]=18;
 cup_types["T1"]=8;

 cup_types["X1"]=15;
 cup_types["X2"]=12;
 cup_types["X3"]=12;
 cup_types["X4"]=12;

 cup_types["W1"]=18;
 cup_types["W2"]=18;
 cup_types["V1"]=15;
 cup_types["V2"]=18;




//disctance
 var distance_prices= new Array();
 distance_prices["None"]=0;
 distance_prices["Keelung"]=600;
 distance_prices["Taoyuan"]=800;
 distance_prices["Yilan"]=1500;
 distance_prices["Hsinchu"]=1600;
 distance_prices["Miaoli"]=2000;
 distance_prices["Taichung"]=3000;
 distance_prices["Changhua"]=3500;
 distance_prices["Hualien"]=4200;
 distance_prices["Nantou"]=4500;
 distance_prices["Chiayi"]=5000;
 distance_prices["Kaohsiung"]=6000;
 distance_prices["Taitung"]=7500;

// 無酒精
var nAlcohol_price = new Array();
nAlcohol_price["None"] =0;
nAlcohol_price["50ppl"] =1000;
nAlcohol_price["100ppl"] =1700;
nAlcohol_price["150ppl"] =2500;

// 杯數
function getcupsPrice()
{
    var getcupsPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the select id="filling"
    var selectedcups = theForm.elements["cups"];
    getcupsPrice = selectedcups.value * 110;

    return getcupsPrice;
}

// 杯樣式1
function getcupType1()
{
    var cupTypes1 = 0;
    var theForm = document.forms["cakeform"];
    var selectedType = theForm.elements["cupType1"];
    var selectedcups = theForm.elements["cups"];
    
    cupTypes1 = cup_types[selectedType.value] * (parseInt(selectedcups.value /2) + (selectedcups.value %2));

    //finally we return cakeFillingPrice 
    return cupTypes1;
}

// 杯樣式2
function getcupType2()
{
    var cupTypes2 = 0;
    var theForm = document.forms["cakeform"];
    var selectedType = theForm.elements["cupType2"];
    var selectedcups = theForm.elements["cups"];
    
    cupTypes2 = cup_types[selectedType.value] * parseInt(selectedcups.value /2);

    //finally we return cakeFillingPrice cupTypes2 = cup_types[selectedType.value] * parseInt(selectedcups.value /2);
    return cupTypes2;
}

// 追加時間
function gethrPrice()
{
    var hrPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the select id="filling"
     var selectedhr = theForm.elements["hr"];
     
    //set cakeFilling Price equal to value user chose
    //For example distance_prices["Lemon".value] would be equal to 5
    hrPrice = hr_prices[selectedhr.value];

    //finally we return cakeFillingPrice
    return hrPrice;
}

// 距離加價
function getDistancePrice()
{
    var cakeFillingPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the select id="filling"
     var selectedFilling = theForm.elements["distance"];
     
    //set cakeFilling Price equal to value user chose
    //For example distance_prices["Lemon".value] would be equal to 5
    cakeFillingPrice = distance_prices[selectedFilling.value];

    //finally we return cakeFillingPrice
    return cakeFillingPrice;
}


// 多一位調酒師
function extraBartender()
{
    var Bartender=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="customSign"
    var extraBartender = theForm.elements["extraBartender"];

    //If they checked the box set candlePrice to 5
    if(extraBartender.checked==true)
    {
        Bartender=5000;
    }
    //finally we return the candlePrice
    return Bartender;
}


// 額外立牌
function getSignPrice()
{
    var signPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="customSign"
    var customSign = theForm.elements["customSign"];

    //If they checked the box set candlePrice to 5
    if(customSign.checked==true)
    {
        signPrice=2000;
    }
    //finally we return the candlePrice
    return signPrice;
}

// 無酒精
function getnAlcoholPrice()
{
    var nAlcoholPrice = 0;
    var theForm = document.forms["cakeform"];
    var selectedppl = theForm.elements["nAlcohol"];
    
    nAlcoholPrice = nAlcohol_price[selectedppl.value];

    //finally we return cakeFillingPrice
    return nAlcoholPrice;
}

// 吸管
function getstrawPrice()
{
    var straw = 0;
    var theForm = document.forms["cakeform"];
    var strawCount = theForm.elements["straw"];
    
    straw = strawCount.value * 8;

    //finally we return cakeFillingPrice
    return straw;
}

// 泡調
function getBubblePrice()
{
    var bubble = 0;
    var theForm = document.forms["cakeform"];
    var bubbleCount = theForm.elements["bubble"];
    
    bubble = bubbleCount.value *50;

    //finally we return cakeFillingPrice
    return bubble;
}

// 星調
function getstarPrice()
{
    var star = 0;
    var theForm = document.forms["cakeform"];
    var starCount = theForm.elements["star"];
    
    star = starCount.value *280;

    //finally we return cakeFillingPrice
    return star;
}

// 折價
function discount()
{
    var discount=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="customSign"
    var getdiscount = theForm.elements["getdiscount"];

    //If they checked the box set candlePrice to 5
    if(getdiscount.checked==true)
    {
        discount=-1000;
    }
    //finally we return the candlePrice
    return discount;
}
        
// 總價
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var cup12 = getcupType1() + getcupType2();
    var cakePrice = 5000 + gethrPrice() + extraBartender() + getcupsPrice() + cup12 + getDistancePrice() + getSignPrice() + getnAlcoholPrice() + getBubblePrice() + getstarPrice() + getstrawPrice() + discount();
    
    var addOn = 0 + extraBartender() + getSignPrice() + getnAlcoholPrice() + getBubblePrice() + getstarPrice() + getstrawPrice() + discount();
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "估價為：<br/> &nbsp;&nbsp;基本價:   ＄5000 <br/> &nbsp;&nbsp;杯數價:       ＄" + getcupsPrice() + "<br/>&nbsp;&nbsp;器皿加價：＄" + cup12 + "<br/>&nbsp;&nbsp;追加時間：＄" + gethrPrice() +  "<br/>&nbsp;&nbsp;距離加價： ＄" + getDistancePrice() + "<br/>&nbsp;&nbsp;額外增購： ＄" + addOn + "<br/> ---------------------- <br/>&nbsp;&nbsp;總價：     ＄" + cakePrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}


/*  not using stuffs

// getCupNumberPrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getCupNumberPrice()
{  
    var cupNumberPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the cake the user Chooses name=selectedcup":
    var selectedcup = theForm.elements["selectedcup"];
    //Here since there are 4 radio buttons selectedcup.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedcup.length; i++)
    {
        //if the radio button is checked
        if(selectedcup[i].checked)
        {
            //we set cupNumberPrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cups_prices array
            //We get the selected Items value
            //For example cups_prices["Round8".value]"
            cupNumberPrice = cups_prices[selectedcup[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cupNumberPrice
    return cupNumberPrice;
} */ 