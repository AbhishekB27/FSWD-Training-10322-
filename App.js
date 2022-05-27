const url = 'https://dummyjson.com/products/';
const response = fetch(url)
                      .then((data)=>{
                          console.log(data)
                          return data.json()
                      }).then((result)=>{
                          console.log(result)
                      }).catch(error=>console.log(error))