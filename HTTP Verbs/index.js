let url = "https://api.github.com/users/harsh-sangwan2003";

// Create
let xhr = new XMLHttpRequest();

// Configure
xhr.open('GET', url);

// Send
xhr.send();

//
xhr.addEventListener("load", (res) => {

    console.log(xhr.status);
})

// Fetch
fetch(url)
    .then((res) => {
        console.log(res);
        return res.text();
    }).then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })

// Axios
axios.get(url)
.then(res=>{

    console.log(res.status);
    console.log(res.data);
})