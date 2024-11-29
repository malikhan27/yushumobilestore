var brandselection="";
var selectedmodel=""
var branddiv=  document.getElementById("brand")
var modeldiv=document.getElementById("model")

var mobileCompanies = {
    Apple: {
      iPhone15Pro: {
        model: "iPhone 15 Pro",
        image: "	https://images.priceoye.pk/apple-iphone-15-pro-pakistan-priceoye-x8agp-500x500.webp",
        chip: "A17 Pro chip",
        mainCamera: "48MP main camera",
        display: "6.1-inch display",
        ram: "6GB RAM",
        battery: "3200mAh battery",
        protection: "Ceramic Shield front cover",
        security: "Face ID",
        os: "iOS 17",
        connectivity: "5G capable"
      },
      iPhone14:{
        model: "iPhone 14 Pro",
        image: "https://images.priceoye.pk/iphone-14-pro-pakistan-priceoye-sibh5-500x500.webp",
        chip: "A15 Bionic chip",
        mainCamera: "12MP Dual rear cameras",
        display: "6.1-inch Super Retina XDR display",
        ram: "6GB RAM",
        battery: "3279mAh battery",
        protection: "Ceramic Shield front cover",
        security: "Face ID",
        os: "iOS 16",
        connectivity: "5G capable"
      },
      iPhone13Pro: {
        model: "iPhone 13 Pro",
        image: "https://images.priceoye.pk/apple-iphone-13-pro-pakistan-priceoye-qvjw4-500x500.webp",
        chip: "A15 Bionic chip",
        mainCamera: "Triple 12MP camera system",
        display: "ProMotion 120Hz display",
        ram: "6GB RAM",
        battery: "3095mAh battery",
        protection: "Ceramic Shield front cover",
        security: "Face ID",
        os: "iOS 15",
        connectivity: "5G capable"
      },
      iPhoneSE2022: {
        model: "iPhone SE (2022)",
        image: "	https://images.priceoye.pk/apple-i-phone-se-pakistan-priceoye-k0u7a-500x500.webp",
        chip: "A15 Bionic chip",
        mainCamera: "12MP single rear camera",
        display: "4.7-inch Retina HD display",
        ram: "4GB RAM",
        battery: "2018mAh battery",
        protection: "Water and dust resistant",
        security: "Touch ID",
        os: "iOS 15",
        connectivity: "4G LTE"
      },
      iPhone12: {
        model: "iPhone 12",
        image: "https://images.priceoye.pk/apple-iphone-12-pro-pakistan-priceoye-p7548.jpg",
        chip: "A14 Bionic chip",
        mainCamera: "Dual 12MP cameras",
        display: "6.1-inch Super Retina XDR display",
        ram: "4GB RAM",
        battery: "2815mAh battery",
        protection: "Ceramic Shield front cover",
        security: "Face ID",
        os: "iOS 14",
        connectivity: "5G capable"
      }
    },
    Samsung: {
      GalaxyS23Ultra: {
        model: "Galaxy S23 Ultra",
        image: "https://images.priceoye.pk/samsung-galaxy-s23-ultra-pakistan-priceoye-s4z8j.jpg",
        chip: "Snapdragon 8 Gen 2",
        mainCamera: "200MP main camera",
        display: "6.8-inch Dynamic AMOLED 2X",
        ram: "12GB RAM",
        battery: "5000mAh battery",
        protection: "Corning Gorilla Glass Victus 2",
        security: "In-display Fingerprint Scanner",
        os: "Android 13, One UI 5.1",
        connectivity: "5G capable"
      },
      GalaxyZFlip5: {
        model: "Galaxy Z Flip 5",
        image: "https://images.priceoye.pk/samsung-galaxy-z-flip-5-pakistan-priceoye-daxtl-500x500.webp",
        chip: "Snapdragon 8 Gen 2",
        mainCamera: "50MP Triple camera",
        display: "Foldable Dynamic AMOLED 2X",
        ram: "12GB RAM",
        battery: "4400mAh battery",
        protection: "Corning Gorilla Glass Victus 2",
        security: "Under-display fingerprint scanner",
        os: "Android 13, One UI 5.1",
        connectivity: "5G capable"
      },
      GalaxyA54: {
        model: "Galaxy A54",
        image: "https://images.priceoye.pk/samsung-galaxy-a54-5g-pakistan-priceoye-wmmpy.jpg",
        chip: "Exynos 1380 chip",
        mainCamera: "50MP triple camera",
        display: "6.4-inch Super AMOLED",
        ram: "6GB RAM",
        battery: "5000mAh battery",
        protection: "Corning Gorilla Glass 5",
        security: "Fingerprint sensor",
        os: "Android 13, One UI 5.1",
        connectivity: "5G capable"
      },
      GalaxyS22: {
        model: "Galaxy S22",
        image: "https://images.priceoye.pk/samsung-galaxy-s22-ultra-pakistan-priceoye-w11tk.jpg",
        chip: "Snapdragon 8 Gen 1",
        mainCamera: "50MP main camera",
        display: "Dynamic AMOLED 2X",
        ram: "8GB RAM",
        battery: "3700mAh battery",
        protection: "Corning Gorilla Glass Victus",
        security: "Fingerprint sensor",
        os: "Android 12, One UI 4.1",
        connectivity: "5G capable"
      },
      GalaxyNote20Ultra: {
        model: "Galaxy Note 20 Ultra",
        image: "https://images.priceoye.pk/samsung-galaxy-s20-ultra-pakistan-priceoye-p1elp.jpg",
        chip: "Snapdragon 865+ chip",
        mainCamera: "108MP camera",
        display: "120Hz display",
        ram: "8GB RAM",
        battery: "4500mAh battery",
        protection: "Corning Gorilla Glass",
        security: "Fingerprint scanner",
        os: "Android 10, One UI 2.5",
        connectivity: "5G capable"
      }
    },
    Google: {
      Pixel8Pro: {
        model: "Pixel 8 Pro",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQLbs4IagpQ63IUH1ipNO90m5KF7-kwETet0IuqqfZUm6nITpm_KIn5vVmQJba8YZcGkADxLa-s40xkBgTPS-RTGAZLcyA4Cyapct4e3iLDjBUpLRMTGb2Q&usqp=CAE",
        chip: "Google Tensor G3",
        mainCamera: "50MP rear camera",
        display: "6.7-inch LTPO OLED",
        ram: "12GB RAM",
        battery: "5000mAh battery",
        protection: "Gorilla Glass Victus",
        security: "In-display Fingerprint Scanner",
        os: "Android 14",
        connectivity: "5G capable"
      },
      Pixel7: {
        model: "Pixel 7",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSkH6b1UpvGnKFzJaTPEb5Ut904Tks8_mX1TUH2fiERaDQnQPtwUg5oFCYuoknNQhbuAQl2QlK_TkWJbfT5jTJeom8p5tpoMHS7m5aR2dDGVOC16tNa4pMxag&usqp=CAE",
        chip: "Google Tensor G2",
        mainCamera: "50MP rear camera",
        display: "6.3-inch OLED",
        ram: "8GB RAM",
        battery: "4300mAh battery",
        protection: "Gorilla Glass Victus",
        security: "Fingerprint sensor",
        os: "Android 13",
        connectivity: "5G capable"
      },
      Pixel7Pro: {
        model: "Pixel 7 Pro",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSM9NsNsOTkczzAdDotjmUilDQKuXnVFU3VOhqmnms78lhLx3Lle8-bnMh5XNVm9NadJzBEHBNLSZuVOJ-v9eko1FkHeHQTyjh089qzvs8STMTDLNylDqdXOw&usqp=CAE",
        chip: "Google Tensor G2",
        mainCamera: "48MP triple camera",
        display: "6.7-inch OLED display",
        ram: "12GB RAM",
        battery: "5000mAh battery",
        protection: "Gorilla Glass Victus",
        security: "Fingerprint sensor",
        os: "Android 13",
        connectivity: "5G capable"
      },
      Pixel6a: {
        model: "Pixel 6a",
        image: "https://images.priceoye.pk/google-pixel-6-pro-pakistan-priceoye-lan48-500x500.webp",
        chip: "Google Tensor chip",
        mainCamera: "12MP dual camera",
        display: "6.1-inch OLED",
        ram: "6GB RAM",
        battery: "4410mAh battery",
        protection: "Gorilla Glass 3",
        security: "Fingerprint sensor",
        os: "Android 12",
        connectivity: "5G capable"
      },
      Pixel5: {
        model: "Pixel 5",
        image: "https://images.priceoye.pk/google-pixel-5-pakistan-priceoye-40tej-500x500.webp",
        chip: "Qualcomm Snapdragon 765G",
        mainCamera: "12.2MP dual camera",
        display: "6-inch OLED",
        ram: "8GB RAM",
        battery: "4080mAh battery",
        protection: "Gorilla Glass 6",
        security: "Fingerprint sensor",
        os: "Android 10",
        connectivity: "5G capable"
      }
    },
    OnePlus: {
      OnePlus11: {
        model: "OnePlus 11",
        image: "https://images.priceoye.pk/oneplus-10-ultra-pakistan-priceoye-mgl6q-500x500.webp",
        chip: "Snapdragon 8 Gen 2",
        mainCamera: "50MP triple camera",
        display: "6.7-inch AMOLED",
        ram: "16GB RAM",
        battery: "5000mAh battery",
        protection: "Corning Gorilla Glass Victus",
        security: "In-display Fingerprint Scanner",
        os: "Android 13, OxygenOS",
        connectivity: "5G capable"
      },
      OnePlus10Pro: {
        model: "OnePlus 10 Pro",
        image: "https://images.priceoye.pk/oneplus-10r-pakistan-priceoye-p8k70-500x500.webp",
        chip: "Snapdragon 8 Gen 1",
        mainCamera: "48MP triple camera",
        display: "6.7-inch Fluid AMOLED",
        ram: "12GB RAM",
        battery: "5000mAh battery",
        protection: "Corning Gorilla Glass",
        security: "Fingerprint sensor",
        os: "Android 12, OxygenOS",
        connectivity: "5G capable"
      },
      OnePlusNord2: {
        model: "OnePlus Nord 200",
        image: "https://images.priceoye.pk/oneplus-nord-n200-5g-pakistan-priceoye-e3shf-500x500.webp",
        chip: "MediaTek Dimensity 1200",
        mainCamera: "50MP dual camera",
        display: "6.43-inch AMOLED",
        ram: "8GB RAM",
        battery: "4500mAh battery",
        protection: "Corning Gorilla Glass",
        security: "Fingerprint sensor",
        os: "Android 11, OxygenOS",
        connectivity: "5G capable"
      },
      OnePlus9Pro: {
        model: "OnePlus 9 Pro",
        image: "https://images.priceoye.pk/oneplus-9rt-pakistan-priceoye-t13lk-500x500.webp",
        chip: "Snapdragon 888",
        mainCamera: "48MP quad camera",
        display: "6.7-inch Fluid AMOLED",
        ram: "12GB RAM",
        battery: "4500mAh battery",
        protection: "Corning Gorilla Glass",
        security: "Fingerprint sensor",
        os: "Android 11, OxygenOS",
        connectivity: "5G capable"
      },
      OnePlus8T: {
        model: "OnePlus 8T",
        image: "https://images.priceoye.pk/oneplus-8t-pakistan-priceoye-fumi1.jpg",
        chip: "Snapdragon 865",
        mainCamera: "48MP quad camera",
        display: "6.55-inch Fluid AMOLED",
        ram: "12GB RAM",
        battery: "4500mAh battery",
        protection: "Corning Gorilla Glass",
        security: "Fingerprint sensor",
        os: "Android 10, OxygenOS",
        connectivity: "5G capable"
      }
    }
    ,
    Infinix: {
        InfinixZero30: {
          model: "Infinix Zero 30",
          image: "https://images.priceoye.pk/infinix-zero-30-4g-pakistan-priceoye-zwh1e.jpg",
          chip: "MediaTek Dimensity 8020",
          mainCamera: "108MP Triple Camera",
          display: "6.7-inch AMOLED",
          ram: "8GB RAM",
          battery: "5000mAh battery",
          protection: "Corning Gorilla Glass 5",
          security: "Fingerprint sensor",
          os: "XOS 13, Android 13",
          connectivity: "5G capable"
        },
        InfinixNote30Pro: {
          model: "Infinix Note 30 Pro",
          image: "https://images.priceoye.pk/infinix-note-30-pro-pakistan-priceoye-k8gda.jpg",
          chip: "MediaTek Helio G99",
          mainCamera: "108MP Quad camera",
          display: "6.78-inch AMOLED",
          ram: "8GB RAM",
          battery: "5000mAh battery",
          protection: "Corning Gorilla Glass",
          security: "Fingerprint sensor",
          os: "XOS 13, Android 13",
          connectivity: "4G LTE"
        },
        InfinixHot20: {
          model: "Infinix Hot 20",
          image: "https://images.priceoye.pk/infinix-hot-20s-pakistan-priceoye-wu3zx-500x500.webp",
          chip: "MediaTek Helio G85",
          mainCamera: "50MP Dual camera",
          display: "6.82-inch IPS LCD",
          ram: "4GB RAM",
          battery: "5000mAh battery",
          protection: "None",
          security: "Fingerprint sensor",
          os: "XOS 10.6, Android 12",
          connectivity: "4G LTE"
        },
        InfinixZeroX: {
          model: "Infinix Zero X",
          image: "https://images.priceoye.pk/infinix-zero-x-neo-pakistan-priceoye-1ox1u.jpg",
          chip: "MediaTek Helio G96",
          mainCamera: "108MP Triple camera",
          display: "6.7-inch AMOLED",
          ram: "8GB RAM",
          battery: "4500mAh battery",
          protection: "Corning Gorilla Glass 5",
          security: "Fingerprint sensor",
          os: "XOS 12, Android 12",
          connectivity: "4G LTE"
        },
        InfinixNote12:{
          model: "Infinix Note 12",
          image: "https://images.priceoye.pk/infinix-note-12-pro-pakistan-priceoye-m42se-500x500.webp",
          chip: "MediaTek Helio G88",
          mainCamera: "50MP Triple camera",
          display: "6.7-inch AMOLED",
          ram: "6GB RAM",
          battery: "5000mAh battery",
          protection: "Corning Gorilla Glass",
          security: "Fingerprint sensor",
          os: "XOS 10, Android 11",
          connectivity: "4G LTE"
        }
      },
      Realme: {
        RealmeGT2Pro: {
          model: "Realme GT 2 Pro",
          image: "https://images.priceoye.pk/realme-gt2-pro-pakistan-priceoye-xq5em-500x500.webp",
          chip: "Snapdragon 8 Gen 1",
          mainCamera: "50MP Triple camera",
          display: "6.7-inch AMOLED",
          ram: "12GB RAM",
          battery: "5000mAh battery",
          protection: "Corning Gorilla Glass",
          security: "In-display Fingerprint Scanner",
          os: "Realme UI 3.0, Android 12",
          connectivity: "5G capable"
        },
        Realme10Pro: {
          model: "Realme 10 Pro",
          image: "https://images.priceoye.pk/realme-10-pakistan-priceoye-y2fl6-500x500.webp",
          chip: "Snapdragon 695 5G",
          mainCamera: "108MP Dual camera",
          display: "6.72-inch AMOLED",
          ram: "8GB RAM",
          battery: "5000mAh battery",
          protection: "Corning Gorilla Glass",
          security: "Fingerprint sensor",
          os: "Realme UI 4.0, Android 13",
          connectivity: "5G capable"
        },
        RealmeNarzo605G: {
          model: "Realme Narzo 60 5G",
          image: "https://images.priceoye.pk/realme-narzo-60-pro-pakistan-priceoye-v24cy-500x500.webp",
          chip: "Dimensity 6020",
          mainCamera: "50MP Dual camera",
          display: "6.72-inch Super AMOLED",
          ram: "6GB RAM",
          battery: "5000mAh battery",
          protection: "Corning Gorilla Glass",
          security: "Fingerprint sensor",
          os: "Realme UI 4.0, Android 13",
          connectivity: "5G capable"
        },
        Realme9Pro5G: {
          model: "Realme 9 Pro+ 5G",
          image: "https://images.priceoye.pk/realme-9-4g-pakistan-priceoye-hlqon.jpg",
          chip: "Dimensity 920 5G",
          mainCamera: "50MP Triple camera",
          display: "6.4-inch Super AMOLED",
          ram: "8GB RAM",
          battery: "4500mAh battery",
          protection: "Corning Gorilla Glass",
          security: "Fingerprint sensor",
          os: "Realme UI 3.0, Android 12",
          connectivity: "5G capable"
        },
        RealmeC35: {
          model: "Realme C35",
          image: "		https://images.priceoye.pk/realme-c35-pakistan-priceoye-ppml9.jpg",
          chip: "Unisoc T616",
          mainCamera: "50MP Triple camera",
          display: "6.6-inch LCD",
          ram: "4GB RAM",
          battery: "5000mAh battery",
          protection: "None",
          security: "Fingerprint sensor",
          os: "Realme UI 2.0, Android 11",
          connectivity: "4G LTE"
        }
      },
      Oppo: {
        OppoFindX5Pro: {
          model: "Oppo Find X5 Pro",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQB--SGMAvKT4MjBOkv1IEPEv-9THqHzlRGQ3ZsNqxId6ench1EOOv9D02k8Xog4tuD_OKeQbG61jWhHB0LDX3QmJJN3ymmd4kOopcfqgVTBRXugjVBopMs&usqp=CAE",
          chip: "Snapdragon 8 Gen 1",
          mainCamera: "50MP Triple camera",
          display: "6.7-inch AMOLED",
          ram: "12GB RAM",
          battery: "5000mAh battery",
          protection: "Corning Gorilla Glass Victus",
          security: "Fingerprint sensor",
          os: "ColorOS 12, Android 12",
          connectivity: "5G capable"
        },
        OppoReno8Pro: {
          model: "Oppo Reno 8 Pro",
          image: "https://images.priceoye.pk/oppo-reno-8-pakistan-priceoye-ztqir-500x500.webp",
          chip: "Dimensity 8100",
          mainCamera: "50MP Triple camera",
          display: "6.7-inch AMOLED",
          ram: "12GB RAM",
          battery: "4500mAh battery",
          protection: "Corning Gorilla Glass",
          security: "Fingerprint sensor",
          os: "ColorOS 12, Android 12",
          connectivity: "5G capable"
        },
        OppoF21Pro5G: {
          model: "Oppo F21 Pro 5G",
          image: "https://images.priceoye.pk/oppo-f21-pro-5g-pakistan-priceoye-mgwq4.jpg",
          chip: "Snapdragon 695",
          mainCamera: "64MP Triple camera",
          display: "6.43-inch AMOLED",
          ram: "8GB RAM",
          battery: "4500mAh battery",
          protection: "Corning Gorilla Glass",
          security: "Fingerprint sensor",
          os: "ColorOS 12, Android 12",
          connectivity: "5G capable"
        },
        OppoA745G:{
          model: "Oppo A74 5G",
          image: "https://images.priceoye.pk/oppo-a74-pakistan-priceoye-q4vmd-500x500.webp",
          chip: "Snapdragon 480",
          mainCamera: "48MP Triple camera",
          display: "6.49-inch IPS LCD",
          ram: "6GB RAM",
          battery: "5000mAh battery",
          protection: "Corning Gorilla Glass",
          security: "Fingerprint sensor",
          os: "ColorOS 11, Android 11",
          connectivity: "5G capable"
        },
        OppoA54: {
          model: "Oppo A54",
          image: "https://images.priceoye.pk/oppo-a54-activated-pakistan-priceoye-4jnlv.jpg",
          chip: "MediaTek Helio P35",
          mainCamera: "13MP Triple camera",
          display: "6.51-inch IPS LCD",
          ram: "4GB RAM",
          battery: "5000mAh battery",
          protection: "Corning Gorilla Glass",
          security: "Fingerprint sensor",
          os: "ColorOS 11, Android 10",
          connectivity: "4G LTE"
        }
      }
    };


    for(brands in mobileCompanies){
      branddiv.innerHTML+=`
        <option value="${brands}">${brands}</option>
        `};

    for (brands in mobileCompanies) {
          for (keys in mobileCompanies[brands]) {
            document.getElementById("card-sec").innerHTML += `
          <div class="col-12 col-md-4" onclick="divcall()">
            <div class="d-flex justify-content-center">
              <div class="card" style="width: 18rem; height:400px; background:transparent !important; " id="mobile">
                <img onclick="imagetodiv()" src="${mobileCompanies[brands][keys].image}"
                  class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4>${mobileCompanies[brands][keys].model}</h4>
                </div>
              </div>
            </div>

          </div>
            `;
          }
    }
        




 function brandchosen(){
  brandselection= event.target.value;
  modeldiv.innerHTML=`<option disabled selected value="">Select the Model</option>`
  for(models in mobileCompanies[brandselection]){
   modeldiv.innerHTML+=
    `
    <option value="${mobileCompanies[brandselection][models].model}">${mobileCompanies[brandselection][models].model}</option>
    `

  }

 }

 function chosenmodel(){
  selectedmodel=event.target.value
  console.log(selectedmodel)
 }

var maindiv1 = document.getElementById('main-div')
function submit(){
window.location.href="#"
var mydate= new Date().toUTCString()
 if(brandselection!==""){
  if(selectedmodel!==""){
 for(keys in mobileCompanies[brandselection]){
  if(mobileCompanies[brandselection][keys].model===selectedmodel){
    maindiv1.innerHTML=`<div class="h-100 card-div w-100 d-flex d-flex flex-column align-items-center justify-content-center" 
    style="margin: 15% 0 !important">
      <div class="h-100 w-100 d-flex flex-column flex-md-row gap-4 gap-md-0 justify-content-around align-items-center">
        <img class="image-fluid" src="${mobileCompanies[brandselection][keys].image}" alt="">
        <div class="d-flex flex-column justify-content-center align-items-center gap-3">
          <h1>${mobileCompanies[brandselection][keys].model}</h1>
          <div class="ms-2">
           <h5>FEATURES</h5>
            <p>${mobileCompanies[brandselection][keys].chip}</p>
            <p>${mobileCompanies[brandselection][keys].mainCamera}</p>
            <p>${mobileCompanies[brandselection][keys].display}</p>
            <p>${mobileCompanies[brandselection][keys].ram}</p>
            <p>${mobileCompanies[brandselection][keys].battery}</p>
            <p>${mobileCompanies[brandselection][keys].protection}</p>
            <p>${mobileCompanies[brandselection][keys].security}</p>
            <p>${mobileCompanies[brandselection][keys].os}</p>
            <p>${mobileCompanies[brandselection][keys].connectivity}</p>
          </div>
          <div>
          <a class="btn btn-success" href="index.html">Back to main</a>
          </div>
        </div>
      </div>
    </div>
`}
}
}else{
  Swal.fire({
    icon: "error",
    title: "ERROR",
    text: "Select the Model Please!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
}
 }
else{
  Swal.fire({
    icon: "error",
    title: "ERROR",
    text: "Select the Brand and Model Please!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
}
}


var newvalue
function divcall(){
  window.location.href="#"
  newvalue=event.target.innerText
  for(brand in mobileCompanies){
    for(keys in mobileCompanies[brand]){
      if(newvalue===mobileCompanies[brand][keys].model){
        maindiv1.innerHTML=`<div class="h-100 card-div w-100 d-flex d-flex flex-column align-items-center justify-content-center" 
        style="margin: 15% 0 !important">
          <div class="h-100 w-100 d-flex flex-column flex-md-row gap-4 gap-md-0 justify-content-around align-items-center">
            <img class="image-fluid" src="${mobileCompanies[brand][keys].image}" alt="">
            <div class="d-flex flex-column justify-content-center align-items-center gap-3">
              <h1>${mobileCompanies[brand][keys].model}</h1>
              <div class="ms-2">
               <h5>FEATURES</h5>
                <p>${mobileCompanies[brand][keys].chip}</p>
                <p>${mobileCompanies[brand][keys].mainCamera}</p>
                <p>${mobileCompanies[brand][keys].display}</p>
                <p>${mobileCompanies[brand][keys].ram}</p>
                <p>${mobileCompanies[brand][keys].battery}</p>
                <p>${mobileCompanies[brand][keys].protection}</p>
                <p>${mobileCompanies[brand][keys].security}</p>
                <p>${mobileCompanies[brand][keys].os}</p>
                <p>${mobileCompanies[brand][keys].connectivity}</p>
              </div>
              <div>
              <a class="btn btn-success" href="index.html">Back to main</a>
              </div>
            </div>
          </div>
        </div>
    `
    
          
          
        
      }
    }
  
}
}

var imagetext
function imagetodiv(){
  window.location.href="#"
  imagetext=event.target.nextElementSibling.innerText
  console.log(imagetext)
  for(brand in mobileCompanies){
    for(keys in mobileCompanies[brand]){
      if(imagetext===mobileCompanies[brand][keys].model){
        maindiv1.innerHTML=`<div class="h-100 card-div w-100 d-flex d-flex flex-column align-items-center justify-content-center" 
        style="margin: 15% 0 !important">
          <div class="h-100 w-100 d-flex flex-column flex-md-row gap-4 gap-md-0 justify-content-around align-items-center">
            <img style="width=300px" src="${mobileCompanies[brand][keys].image}" alt="">
            <div class="d-flex flex-column justify-content-center align-items-center gap-3">
              <h1>${mobileCompanies[brand][keys].model}</h1>
              <div class="ms-2">
               <h5>FEATURES</h5>
                <p>${mobileCompanies[brand][keys].chip}</p>
                <p>${mobileCompanies[brand][keys].mainCamera}</p>
                <p>${mobileCompanies[brand][keys].display}</p>
                <p>${mobileCompanies[brand][keys].ram}</p>
                <p>${mobileCompanies[brand][keys].battery}</p>
                <p>${mobileCompanies[brand][keys].protection}</p>
                <p>${mobileCompanies[brand][keys].security}</p>
                <p>${mobileCompanies[brand][keys].os}</p>
                <p>${mobileCompanies[brand][keys].connectivity}</p>
              </div>
              <div>
              <a class="btn btn-success" href="index.html">Back to main</a>
              </div>
            </div>
          </div>
        </div>
    `}
    }
  
}

}


var username = document.getElementById ('name');
var userfathername = document.getElementById ('father-name');
var email = document.getElementById ('email');
var number = document.getElementById ('number');


function formsubmit(){

  if (username.value.trim () !== '') {
    if (userfathername.value.trim () !== '') {
      if (email.value.trim () !== '') {
        if (number.value !== '' && number.value.length >= 11){

        }else{
          Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "fill the number field properly!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
} else{ Swal.fire({
  icon: "error",
  title: "ERROR",
  text: "fill the email field!",
  footer: '<a href="#">Why do I have this issue?</a>'
});

}
} else{ Swal.fire({
  icon: "error",
  title: "ERROR",
  text: "Enter your Father name!",
  footer: '<a href="#">Why do I have this issue?</a>'
});

}
}else{
  Swal.fire({
    icon: "error",
    title: "ERROR",
    text: "Enter your name please!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
}
}