var menuTarget;
var newsDay=[
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
];  //news bölməsində xəbərlərin gün tarixi massivi

var newsMonth=[
    "10",
    "10",
    "10",
    "10",
    "10",
    "10"
]; //news bölməsində xəbərlərin ay tarixi massivi

var newsYear=[
    2012,
    2013,
    2014,
    2015,
    2016,
    2017
];  //news bölməsində xəbərlərin il tarixi massivi

var newsHeading=[
    "The Best Medical Clinic",
    "Medical Services",
    "Questions And Answers About Neurostimulation",
    "What's Parkinson's Disease",
    "Obesity Surgery",
    "What's Kidney Stone"
];  //news bölməsində xəbərlərin başlığı massivi

var newsText=[
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."    
];  //news bölməsində xəbərlərin text'i

newsTop=0; //newsTop dəyişəni news bölməsində slider istifadə olunarsa aşağı-yuxarı hərəkət üçün dəyişən
newsSlideNumber=1;   //newsSlideNumber dəyişəni slider istifadə olunduğu zaman xəbərləri üç-üç qruplaşdırmaqla onların sayını bildirir



(function mainFunc(){
var li, newsDateDiv,span,newsDayMonth,newsTextDiv,heading,text;

document.getElementsByClassName("activeNav")[0].style.background="url(img/nav-hover-var1.png) 19px 27px no-repeat";

    for(var i=0;i<newsDay.length;i++){
        li=document.createElement("li");

        newsDateDiv=document.createElement("div");
        newsDateDiv.setAttribute("class", "newsDate");

        span=document.createElement("span");
        span.innerHTML=newsDay[i]+"<br>"

        newsDayMonth=document.createElement("p");

        newsDayMonth.innerHTML+="10-15";

        newsTextDiv=document.createElement("div");
        newsTextDiv.setAttribute("class","newsText");

        heading=document.createElement("h2");
        heading.innerHTML=newsHeading[i];

        text=document.createElement("p");
        text.innerHTML=newsText[i];

        document.getElementsByClassName("disast")[0].appendChild(li);
        li.appendChild(newsDateDiv);
        li.appendChild(newsTextDiv);

        newsDateDiv.appendChild(span);
        newsDateDiv.appendChild(newsDayMonth);

        newsTextDiv.appendChild(heading);
        newsTextDiv.appendChild(text);
    }
}());

window.onclick=function(event) {
    if(event.target!=menuTarget){
       menuTarget.getElementsByTagName("a")[0].style.color="#91a8ae"
    }
}

function navClick(k){
    menuTarget=k;
    menuTarget.getElementsByTagName("a")[0].style.color="#000";
}


function sendContact(){
    var maForm=[]; //Banner hissəsində Make An AppointMent bölməsindəki textarea və inputları özündə birləşdirən massiv 
    var check=false; //Make An Appointment hissəsində inputlarda və textarea'ların boş olub olmamasını yoxlamaq üçün bool tipində dəyişən
    var nameCheck=false;  //Make An Appointment hissəsində name inputunun ad üçün uyğun olub-olmamasını yoxlamaq üçün bool tipində dəyişən
    var phoneCheck=false; //Make An Appointment hissəsində phone inputunun nömrə üçün uyğun olub-olmamasını yoxlamaq üçün bool tipində dəyişən
    var emailCheck=false; //Make An Appointment hissəsində email inputunun email üçün uyğun olub-olmamasını yoxlamaq üçün bool tipində dəyişən
    var notification=document.getElementsByClassName("maNotification")[0].getElementsByTagName("p")[0]; //Make An Appointment hissəsində "GO" buttonuna click etdikdə nəticə görmək üçün tag'a müraciət dəyişəni

    for(var i=0;i<4;i++)
    maForm[i]=document.getElementsByClassName("maInput")[i];

    maForm[maForm.length]=document.getElementsByClassName("maTArea")[0];

    // 111-114-cü sətirlərdə maForm massivinə inputlar və textarea mənimsədilir

    for(var i=0;i<maForm.length;i++){
        if(maForm[i].value.length==0){
            check=true;
        }
    }

// 118-122-ci sətirlərdə inputların  və textarea'nın boş olub olmaması yoxlanılır 

    if(check==true){
        notification.innerHTML="please fill all fields" //hər hansı input və ya textarea boş olarsa bu əmr yerinə yetirilir
    }

    else{
        for(var i=0;i<maForm[0].value.length;i++){
            nameCheck=false;
            for(var j=65;j<=90;j++){
                if(maForm[0].value[i]==String.fromCharCode(j) || maForm[0].value[i]==String.fromCharCode(j+32)){
                    nameCheck=true; 
                    break;
                }
            }

            if(nameCheck==false)
            break;
        }

        for(var i=0;i<maForm[1].value.length;i++){
            phoneCheck=false;
            for(var j=48;j<=57;j++){
                if(maForm[1].value[i]==String.fromCharCode(j)){
                    phoneCheck=true;
                    break;
                }
            }
            if(phoneCheck==false)
            break;
        }
        
        for(var i=0;i<maForm[2].value.length;i++){
            if(maForm[2].value[i]=='@'){
                for(var j=i;j<maForm[2].value.length;j++){
                    if(maForm[2].value[j]=='.'){
                        if(maForm[2].value.length-j>2){
                            emailCheck=true;
                        }
                    }
                }
            }
        }
//126-166-ci sətirlərdə inputlar boş olmazsa(yəni dolu olarsa) name hissəsinin ad üçün, phone hissəsinin nömrə, email hissəsinin email üçüb düzgün olub-olmaması yoxlanılır.

        if(nameCheck==true && phoneCheck==true && emailCheck==true){
            notification.innerHTML="email sent"; //input email üçün uyğun olarsa bu əmr yerinə yetirilir 
        }

        else if(nameCheck==false){
            notification.innerHTML="you have entered an invalid name!" //input email üçün uyğun olmazsa bu əmr yerinə yetirilir
        }
        else if(phoneCheck==false){
            notification.innerHTML="you have entered an invalid phonenumber! It must be only numbers!" //input email üçün uyğun olmazsa bu əmr yerinə yetirilir
        }
        else if(emailCheck==false){
            notification.innerHTML="you have entered an invalid email address!" //input email üçün uyğun olmazsa bu əmr yerinə yetirilir
        }
    }
// 169-182-cü sətirlərdə nəticə ekrana çıxarılır
}

function newsLeft(){    //news bölməsində sol buttona basıldıqda işə düşən function
    newsTop+=360;
    newsSlideNumber-=1;
    if(newsSlideNumber<0){
        newsTop=0;
        newsSlideNumber=1;
    }
    for(var i=0;i<6;i++)
    document.getElementsByClassName("disast")[0].getElementsByTagName("li")[i].style.top=newsTop+"px";
}

function newsRight() {  //news bölməsində sağ buttona basıldıqda işə düşən function
    newsTop-=360;
    newsSlideNumber+=1;
    if(newsSlideNumber>1){
        newsTop=360;
        newsSlideNumber=0;
    }
    for(var i=0;i<6;i++)
    document.getElementsByClassName("disast")[0].getElementsByTagName("li")[i].style.top=newsTop+"px";
}

