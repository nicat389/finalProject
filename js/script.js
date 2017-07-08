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

var doctorNames=[
    "Dr. Anakha Mathew",
    "Dr. Suzanne Holroyd",
    "Dr. George Beller",
    "Dr. John DiMarco",
    "Dr. Mary Lee Vance",
    "Dr. Katie Hullfish",
    "Dr. Richard Pearson",
    "Dr. Alan Dalkin",
    "Dr. Mary Jensen",
    "Dr. Catherine Appleton",
    "Dr. Paul Diamond",
    "Dr. Muhammad T. Al-Lozi"
];

var doctorProfessions=[
    "Specializes in Dental",
    "Geriatric psychiatry",
    "Cardiology",
    "Cardiac electrophysiology",
    "Endocrinology, diabetes and",
    "Specializes in Obstetrics",
    "Infectious diseases",
    "Endocrinology, diabetes and metabolism",
    "Neuroradiology",
    "MD - Radiology",
    "Physical medicine and rehabilitation",
    "MD - Neurology"
];

var doctorPictures=[
    "img/doctor2-1.png",
    "img/doctor2-2.png",
    "img/doctor2-3.png",
    "img/doctor2-4.png",
    "img/doctor2-1.png",
    "img/doctor2-2.png",
    "img/doctor2-3.png",
    "img/doctor2-4.png",
    "img/doctor2-1.png",
    "img/doctor2-2.png",
    "img/doctor2-3.png",
    "img/doctor2-4.png"
];

var doctorSocialMedia=[
    "facebook.com/amathew",
    "twitter.com/amathew",
    "plus.google.com/+amathew",
    "facebook.com/sholroyd",
    "twitter.com/sholroyd",
    "plus.google.com/+sholroyd",
    "facebook.com/gBeller",
    "twitter.com/gBeller",
    "plus.google.com/+gBeller",
    "facebook.com/jdimarco",
    "twitter.com/jdimarco",
    "plus.google.com/+jdimarco",
    "facebook.com/maryvance",
    "twitter.com/maryvance",
    "plus.google.com/+maryvance",
    "facebook.com/khullfish",
    "twitter.com/khullfish",
    "plus.google.com/+khullfish",
    "facebook.com/pearson",
    "twitter.com/pearson",
    "plus.google.com/+pearson",
    "facebook.com/adalkin",
    "twitter.com/adalkin",
    "plus.google.com/+adalkin",
    "facebook.com/mjensen",
    "twitter.com/mjensen",
    "plus.google.com/+mjensen",
    "facebook.com/cappleton",
    "twitter.com/cappleton",
    "plus.google.com/+cappleton",
    "facebook.com/pdiamond",
    "twitter.com/pdiamond",
    "plus.google.com/+pdiamond",
    "facebook.com/Muhammadlozi",
    "twitter.com/Muhammadlozi",
    "plus.google.com/+Muhammadlozi"
];

var doctorSocialMediaIcons=[
    "img/face.png",
    "img/twitter.png",
    "img/google.png"
];

var accordionHeading=[
"Dental Clinic",
"Medicine Department",
"Pregnancy Center"
];

var accordionIcon=[
    "img/dent.png",
    "img/med.png",
    "img/pre.png"
];

var accordionPics=[
    "img/accordian2.jpg",
    "img/accordian3.jpg",
    "img/accordian4.jpg"
];

var accordionText=[
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
];


newsTop=360; //newsTop dəyişəni news bölməsində slider istifadə olunarsa aşağı-yuxarı hərəkət üçün dəyişən
newsSlideNumber=0;   //newsSlideNumber dəyişəni slider istifadə olunduğu zaman xəbərləri üç-üç qruplaşdırmaqla onların sayını bildirir
docLeft=0;
docSlideNumber=0;

(function mainFunc(){
var li, newsDateDiv,span,newsDayMonth,newsTextDiv,heading,text, doctorsLi,doctors,whiteBox,doctorImage,docNameDiv,docName,docProfession,docSocialMedia,docMedia,mediaIcons;
var a=0;

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


    for(var i=0;i<doctorNames.length/4;i++){
        doctorsLi=document.createElement("li");
        document.getElementsByClassName("docSlide")[0].appendChild(doctorsLi);

        for(var j=0;j<4;j++){
            doctors=document.createElement("div");
            doctors.setAttribute("class","col-sm-6");
            doctorsLi.appendChild(doctors);

            whiteBox=document.createElement("div");
            whiteBox.setAttribute("class","whiteBox");
            doctors.appendChild(whiteBox);

            doctorImage=document.createElement("img");
            doctorImage.setAttribute("src",doctorPictures[a+j]);
            doctorImage.setAttribute("class","docPics");
            whiteBox.appendChild(doctorImage);

            docNameDiv=document.createElement("div");
            docNameDiv.setAttribute("class","docName");
            whiteBox.appendChild(docNameDiv);

            docName=document.createElement("h2");
            docProfession=document.createElement("span");
            docProfession.innerHTML=doctorProfessions[a+j];
            docName.innerHTML+=doctorNames[a+j]+"<br>";
            
            docNameDiv.appendChild(docName);
            docName.appendChild(docProfession);

            docSocialMedia=document.createElement("div");
            docSocialMedia.setAttribute("class","docSocialMedia");
            whiteBox.appendChild(docSocialMedia);

                for(var z=0;z<4;z++){
                    docMedia=document.createElement("a");
                    docSocialMedia.appendChild(docMedia);
                    if(z<3){
                        docMedia.setAttribute("href","#");
                        mediaIcons=document.createElement("img");
                        mediaIcons.setAttribute("src",doctorSocialMediaIcons[z]);
                        docMedia.appendChild(mediaIcons);
                    }
                    else{
                        docMedia.setAttribute("href","#");
                        docMedia.innerHTML="More";
                    }
                }

        }
        a=a+4;
    }


    for(var i=0;i<accordionHeading.length;i++){
        accordion=document.createElement("li");
        document.getElementsByClassName("depAccordion")[0].appendChild(accordion);
        
        acHeading=document.createElement("h3");
        acHeading.onclick=accordionFunction;
        
        acIcon=document.createElement("img");
        acIcon.setAttribute("src",accordionIcon[i]);
        
        acHeadingText=document.createElement("span");
        acHeadingText.innerHTML=accordionHeading[i];

        acHeading.appendChild(acIcon);
        acHeading.appendChild(acHeadingText);
        accordion.appendChild(acHeading);

        acContent=document.createElement("div");
        accordion.appendChild(acContent);

        if(i==0){
            acHeading.setAttribute("class","minus");
            acContent.setAttribute("id","panel1");
        }
        else{
            acHeading.setAttribute("class","plus");
            acContent.setAttribute("id","panel2");
        }

        acImage=document.createElement("img");
        acImage.setAttribute("src",accordionPics[i]);
        acContent.appendChild(acImage);

        acText=document.createElement("p");
        acText.innerHTML=accordionText[i];
        acContent.appendChild(acText);

    }



    docSlideTimer=setInterval(function() {
        doctorsLeftFunction();
    }, 3000);


    

}());

// window.onclick=function(event) {
//     if(event.target!=menuTarget){
//        menuTarget.getElementsByTagName("a")[0].style.color="#91a8ae"
//     }
// }

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
    console.log(document.getElementsByClassName("disast")[0].getElementsByTagName("li")[0].style.top);
    
}

function newsRight() {  //news bölməsində sağ buttona basıldıqda işə düşən function
    newsTop-=360;
    newsSlideNumber+=1;
    if(newsSlideNumber>1){
        newsTop=360;
        newsSlideNumber=0;
    }
    
    for(var i=0;i<6;i++){
    document.getElementsByClassName("disast")[0].getElementsByTagName("li")[i].style.top=newsTop+"px";
    }
}

function doctorsSlideRight(){
    clearInterval(docSlideTimer);
    doctorsRightFunction();    
}

function doctorsSlideLeft(){
    clearInterval(docSlideTimer);
    doctorsLeftFunction();
}

function doctorsLeftFunction(){
    docSlideNumber-=1;
    docLeft+=750;
    if(docSlideNumber<0){
        docSlideNumber=doctorNames.length/4-1;
        docLeft=-750*(doctorNames.length/4-1);
    }

    for(var i=0;i<doctorNames.length/4;i++){
        document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[i].style.left=docLeft+"px";
    }
}

function doctorsRightFunction(){
    docSlideNumber+=1;
    docLeft-=750;
    if(docSlideNumber>doctorNames.length/4-1){
        docSlideNumber=0;
        docLeft=0;
    }

    for(var i=0;i<doctorNames.length/4;i++){
        document.getElementsByClassName("docSlide")[0].getElementsByTagName("li")[i].style.left=docLeft+"px";
    }
}



function accordionFunction(){
    var k=this;
    l=k.parentNode.getElementsByTagName("div")[0].style;


if(k.getAttribute("class")=="minus"){
    l.height=0;
    l.paddingTop=0;
    l.paddingBottom=0;
    l.borderColor="transparent";
    k.classList.remove("minus");
    k.classList.add("plus");
}

else if(k.getAttribute("class")=="plus"){
    for(var i=0;i<accordionHeading.length;i++){
        k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("div")[0].style.height=0;
        k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("div")[0].style.paddingTop=0;
        k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("div")[0].style.paddingBottom=0;
        k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("div")[0].style.borderColor="transparent";

        if(k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("h3")[0].classList.contains("minus")){
            k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("h3")[0].classList.remove("minus");
            k.parentNode.parentNode.getElementsByTagName("li")[i].getElementsByTagName("h3")[0].classList.add("plus");
        }
}

    l.height="161px";
    l.paddingTop="28px";
    l.paddingBottom="28px";
    l.borderColor="#dceaf6";
    k.classList.remove("plus");
    k.classList.add("minus");
}

    
}



