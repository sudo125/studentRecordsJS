var recordArr = [];

var getJSON = function () {
    
      console.log("In getJSON function");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            
            console.log("AJAX call success");
            console.log(this.responseText);
            recordArr = JSON.parse(this.responseText);
            console.log(recordArr);
            
            saveDataToLS();
            // display the data
            displayRecords();
            
        }
    };
    console.log("Loading Data complete");
    xhttp.open("GET", "personInfo.json", true);
    xhttp.send();
    
    
    

};

var displayRecords = function () {
    
    console.log("displaying " + recordArr.length + " records");
    //clear previous records
    var table = document.getElementById("showDeatilsInTable");
    table.innerHTML =   "<tr>                    <th id=\"nameCell\" class=\"celldecor\">Name</th>                    <th id=\"locCell\"class=\"celldecor\">Location</th>                    <th id=\"pnumCell\" class=\"celldecor\">Phone Number</th>                   <th id=\"addCell\" class=\"celldecor\">Address</th>                </tr>";
        
    // display recArr
    for(var i = 0; i< recordArr.length; i++)
    {
        
        var row = table.insertRow();

        var nameCell = row.insertCell(0);
        var locCell = row.insertCell(1);
        var pnumCell = row.insertCell(2);
        var addCell = row.insertCell(3);

        nameCell.innerHTML = recordArr[i].name;
        locCell.innerHTML = recordArr[i].location;
        pnumCell.innerHTML = recordArr[i].phoneNumber;
        addCell.innerHTML = recordArr[i].address;
        
        
    }
    
    };

var saveDataToLS = function () {
  
    // logic
    
    localStorage.setItem('sendData', JSON.stringify(recordArr));
      console.log("saving data to LS");
};

var loadDataToLS = function () {
    console.log("loading data frm LS");
    //logic
    recordArr = JSON.parse(localStorage.getItem('sendData'));
    console.log(recordArr);
};

var submitClick = function () {
    
    if(!checkValidation()) {
        return;
    }
    
    
    //function on clicking the submit button : submits the info
          var redObj = {
        name:document.getElementById("name").value, 
        location:document.getElementById("loc").value, 
        phoneNumber:document.getElementById("pnum").value, 
        address:document.getElementById("add").value
    };
    
    recordArr.push(redObj);
    console.log("Adding new user");
    console.log(redObj);
    
    
    saveDataToLS();
    displayRecords();
    
        document.getElementById("name").value = "";
        document.getElementById("loc").value = "";
        document.getElementById("pnum").value = "";
        document.getElementById("add").value = "";
        console.log("the text box gets clear as soon as we press submit");
    
};

window.onload = function() {
  console.log("Program Started");
    
    //check if data available in LS
    if(localStorage.getItem('sendData') != null) {
        console.log("data present in LS");
        loadDataToLS();
        
        
        // display the data
    displayRecords();
        
    }
    else {
        // get data form JSON
        console.log("data not present in LS");
        getJSON();
        
    }
    
    
    
    
    
};

//show and hide of the form
function showHideForm() {
    var x = document.getElementById('displayDetails');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
    var checkValidation = function () {
//adding validation to the text boxes.
    //getting all the input text objects where we wanna apply the validation.
        
    var xname= document.getElementById("name");
    var xloc= document.getElementById("loc");
    var xpnum= document.getElementById("pnum");
    var xadd= document.getElementById("add");
    
    //getting the error displayed. 
    var nameError = document.getElementById("nameError");
    var locError = document.getElementById("locError");
    var pnumError = document.getElementById("pnumError");
    var addError = document.getElementById("addError");
    
    //refreshing the text
    nameError.innerHTML = "";
    locError.innerHTML = "";
    pnumError.innerHTML = "";
    addError.innerHTML = "";
    
    //for the border
    xname.style.border = "";
    xloc.style.border = "";
    xpnum.style.border ="";
    xpnum.style.border ="";
    
    if(xname.value == "" || xloc.value == "" || xpnum.value =="" || xadd.value == "")
    {
        
        if(xname.value == ""){
                xname.style.border = "1px solid red";
                nameError.innerHTML = "Please Enter something";
                xname.focus();
                //return false;
            }
        if(xloc.value == ""){
                xloc.style.border = "1px solid red";
                locError.innerHTML = "Please Enter something";
                xloc.focus();
                //return false;
            }
        if(xpnum.value == ""){
                xpnum.style.border = "1px solid red";
                pnumError.innerHTML = "Please Enter something";
                xpnum.focus();
                //return false
            }
        if(xadd.value == ""){
                xadd.style.border = "1px solid red";
                addError.innerHTML = "Please Enter something";
                xadd.focus();
                //return false
            }
        
        
        
        return false;
    }
    else {
        return true;
    }       
    
}

/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
CODEI WAS TESTING WHILE MAKING THIS APPLICATION.


/*
// this is temp , remove later
var temp = function () {
        console.log("In temp function");
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.open("GET", "personInfo.json",true);

    httpRequest.onreadystatechange = function() {
        console.log("in ready state");
        if (this.readyState === 4 && this.status === 200) 
        {
            console.log("Ajax Success");
            var data = JSON.parse(httpRequest.responseText);
            recordArr.push(data);
              console.log("JSON data file saved to array");
            saveDataToLS();
            console.log("displaying array");
            console.log(data);
        }
        
        
        httpRequest.send();
    };
    function readData(data){
           recordArr.push(data);
       }
   };
*/  
/*var temp = function () {
    httpRequest.send(); 
    
    // when we include the json file directly 
    recordArr = [
{
    "name":"Sudipta",
    "location":"NJ",
    "phoneNumber":"8625889787",
    "address":"310 clevland ave, harrison"
},
{
    "name":"Sreekar",
    "location":"NJ",
    "phoneNumber":"8625886235",
    "address":"423 william street, harrison"
},
{
    "name":"Venu",
    "location":"NJ",
    "phoneNumber":"8625886549",
    "address":"208 harrison ave, harrison"
}

]  ;
}
*/



// this requests the file and executes a callback with the parsed result once
//   it is available

///code i wrote to experiment. 
/*
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState ==4 && xhttp.status ==200) {
    var recordArray = JSON.parse(localStorage.records);
    renderHTML(recordArray);

  }
};

//get method

xhttp.open("GET", "personInfo.json");
xhttp.send();





var personInfo = document.getElementById("showDeatilsInTable");


addInformation.addEventListener("click", function() {
 var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','\personInfo.json');
ourRequest.onload = function() {
  var recordArray = JSON.parse(localStorage.records);
    renderHTML(recordArray);
    
};
ourRequest.send();
    });

var recordArray = [];

var init1 = function {
    console.log("init() called");
    if(localStorage.records){
        console.log("There are records in ls initial check");
        function renderHTML(data) {
        var detailList = "";
        for(var i=0; i<recordArray.length; i++){
           detailList = registerProcess(recordArray[i].name, recordArray[i].loccation, recordArray[i].phoneNumber, recordArray[i].address);
        }
        personInfo.insertAdjacentHTML('beforeend', detailList);
    }
}
    console.log("There are no records in ls initial check");
}
function addNewInformation(){
    
    var name=document.getElementById("name").value;
    var location=document.getElementById("loc").value;
    var phoneNumber=document.getElementById("pnum").value;
    var address=document.getElementById("add").value;
    
    var redObj = {name:name, loccation:location, phoneNumber:phoneNumber, address:address};
    recordArray.push(redObj);
    
    localStorage.records = JSON.stringify(recordArray);
    
    registerProcess(name, location, phoneNumber, address);
    
    document.getElementById("name").value = "";
    document.getElementById("loc").value = "";
    document.getElementById("pnum").value = "";
    document.getElementById("add").value = "";
        
}

function registerProcess(name, location, phoneNumber, address){
    var table = document.getElementById("showDeatilsInTable");
    var row = table.insertRow();
    
    var nameCell = row.insertCell(0);
    var locCell = row.insertCell(1);
    var pnumCell = row.insertCell(2);
    var addCell = row.insertCell(3);
    
    nameCell.innerHTML = name;
    locCell.innerHTML = location;
    pnumCell.innerHTML = phoneNumber;
    addCell.innerHTML = address;
}


*/




