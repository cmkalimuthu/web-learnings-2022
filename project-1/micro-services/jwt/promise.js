//normal implemention returns undefined since its async
// function getAllUsers(){
//     let users;
//     setTimeout(()=>{
//         users=[{name:"kali",email:"cmkali@gmail"}];
//     },3000);

//     return users;
// }

// function getUser(username){
//     const allUsers=getAllUsers();
//     if(allUsers !== undefined)
//     allUsers.find(u=>u.username == username);

//     return user;

// }

// console.log(getUser("kali"))

//promise call to make its a sync

// function getAllUsers() {
//   return new Promise((resolve, reject) => {
//     let users;
//     setTimeout(() => {
//       users = [{ name: "kali", email: "cmkali@gmail" }];
//       if (users) {
//         resolve(users);
//       } else reject({ err: "err msg" });
//     }, 3000);
//   });
// }

// function getUser(username) {
//   const allUsers = getAllUsers()
//     .then((users) => {
//       if (users !== undefined) {
//         let user = users.find((u) => u.name == username);
//         console.log(user);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// getUser("kali");

//using callback
// function getAllUsers(callback) {
//   setTimeout(() => {
//     callback([{ name: "kali", email: "cmkali@gmail" }]);
//   }, 3000);

// }

// function getUser(username,callback) {
//   getAllUsers((allUsers) => {
//     let user=allUsers.find((u) => u.username == username);
//     callback(user);
//   });

// }

// getUser("kali",console.log)

//async await just sugar coating of promise .async always return promise.await stops the program then execute next
// async function getName(){
//     return ("kali")
// }

// (async()=>{
// console.log("before")
// await getName().then(console.log)
// console.log("after")
// })()

//================ calculate service cost API using async/await =========================
/*
get user from db 
get services subscribed by user
find total cost of user for service 
*/

//get user from db
async function getUser(id) {
  return new Promise((resolve, reject) => {
    const users = [
      { id: 100, name: "kali" },
      { id: 200, name: "kumar" },
    ];
    setTimeout(() => {
      let user = users.find((u) => u.id == id);
      if (user) resolve(user);
      reject({ message: "No user Found !" });
    }, 1000);
  });
}

//get service for the user from service api
async function getService(user) {
  return new Promise((resolve, reject) => {
    const services = [
      { services: ["JIO", "Airtel"], user: "kali" },
      { services: ["Airtel", "JIO", "Vi"], user: "kumar" },
    ];
    setTimeout(() => {
      let service = services.find((s) => s.user == user.name);
      if (service && service.user && service.services)
        resolve(service.services);
      reject({ message: "No services Found for user !" });
    }, 2 * 1000);
  });
}

//get cost for the user service
async function getCost(service) {
  return new Promise((resolve, reject) => {
    let serviceCost = 0;
    service.forEach((service) => {
      switch (service) {
        case "JIO":
          serviceCost += 1;
          break;
        case "Airtel":
          serviceCost += 2;
          break;
        case "Vi":
          serviceCost += 3;
          break;
        default:
          serviceCost = 0;
      }
    });
    if (serviceCost != 0) resolve(serviceCost * 1000);
    reject({ message: "somehing went wrong in calculation" });
  });
}

//main call to find cost using async/await coating
// (async () => {
//   try {
//     const user = await getUser(100); //get user from db
//     const service = await getService(user); //get service for user
//     const totalCost = await getCost(service); //get total cost for user service
//     console.log(totalCost);
//   } catch (err) {
//     console.log(err.message);
//   }
// })();

//main call async without await async coating.ca remove async and await
// (async () => {
//     try {
//       const user = getUser(100).then(user=>{
//         const service = getService(user).then(service=>{
//             const totalCost = getCost(service).then(totalCost=>{
//                 console.log(totalCost);
//             }).catch(err=>{
//                 console.log("err while service cost api "+err.message);
//             })
//         }).catch(err=>{
//             console.log("err while calling service api "+err.message);
//         })
//       }).catch(err=>{
//         console.log("err while calling user api "+err.message);
//       })
            
//     } catch (err) {
//       console.log(err.message);
//     }
//   })();
//promise chaining
(async () => {
  try {
    const user = getUser(100).then(getService).then(getCost).then(console.log).catch(console.log); //get user from db
  } catch (err) {
    console.log(err.message);
  }
})();
