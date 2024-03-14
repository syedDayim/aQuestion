const URL = "https://jsonplaceholder.typicode.com/todos/"

fetch(URL)
    
.then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error("Custom Error");
        }
    })
.then(data =>{
        setInterval(() => {
            const index = Math.floor(Math.random() * 100);
            console.log(data[index].userId ,data[index].title)
        }, 10);
    })

    .catch( error => {
        console.log(error)
    })

