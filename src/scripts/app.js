const firebaseConfig = {
    apiKey: "AIzaSyCBeFJtPKEMURY-iUDUR4I6gWKjmlTk_3E",
    authDomain: "authdramaarena.firebaseapp.com",     
    databaseURL: "https://authdramaarena.firebaseio.com",
    projectId: "authdramaarena",                      
    storageBucket: "authdramaarena.appspot.com",      
    messagingSenderId: "348583435302",             
    appId: "1:348583435302:web:someUniqueWebId",    
    measurementId: "G-DGF0CP099H"                  
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const params = new URLSearchParams(window.location.search);
const userToken = params.get("session");
const serialKey = params.get("serial_key");

document.addEventListener("DOMContentLoaded", function(){
    auth.onAuthStateChanged((user) => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
        alert("Anda belum login. Silakan login terlebih dahulu.");
        window.location.href = "https://da5100.github.io/auth/";
        return;
    } else {
        console.log("User is logged in:", user.displayName); 
    
        const email = String(user.email);
        const keyRef = db.collection("lisensi").doc(serialKey);
        const emailmd5 = CryptoJS.MD5(email).toString();

        keyRef.get().then((doc) => {
        let getData = doc.data();
        const emailDatamd5 = CryptoJS.MD5(getData.email).toString();

        if(!userToken || !doc.exists) {
            alert("Token/Serial tidak ada!")
            window.location.href = "https://da5100.github.io/auth/"
        } else if(!serialKey){
            alert("Serial key tidak ada!")
            window.location.href = "https://da5100.github.io/auth/"
        }else if(emailDatamd5 !== emailmd5){
            alert("Sesi tidak sah! Coba login kembali menggunakan akun yang terdaftar!")
            window.location.href = "https://da5100.github.io/auth/"
        } else {
            console.log("Email: " + getData.email + " valid!, md5: " + emailDatamd5 + " | " + emailmd5);
    }
    });
    }
    
    
});
})
