const uname = document.getElementById('name');
const password = document.getElementById('password');
const email = document.getElementById('email');
const DBURL = "https://67bef506b2320ee05012153e.mockapi.io/sslib";
async function register() {
    const details = {
        Name: uname.value,
        Password: password.value,
        Email: email.value
    }
    const pst = {
        method: 'post',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(details)
    }
    await fetch(DBURL, pst);
    alert("Done");
}

async function login() {
    const name = document.getElementById('name');  
    const password = document.getElementById('password')
    const dbfile = await fetch(DBURL);
    const val = await dbfile.json();
    // console.log(val);
    
 await check(name.value,password.value,val) 
  
}
function check(n,p,val) {
    const dbnames = val.map((x)=>x.Name)
    const dbpassword = val.map((x)=>x.Password)
    const l = dbnames.length;

    for(let i=0;i<l;i++){
        if(n==dbnames[i] && p==dbpassword[i]){
             window.location.href = './registerpg.html'
        }
        else if(n!=dbnames[i] && p==dbpassword[i]){
console.log("UserName is Wrong!")
        }
        else if(n==dbnames[i] && p!=dbpassword[i]){
console.log("Password is Wrong!")
        }
    }
    // console.log(n,dbnames,p,dbpassword);   
    console.log("Something Went Wrong,Check UserName and Password ");   
 }
