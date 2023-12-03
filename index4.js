const dataMariusz = {
	firstName: "Mariusz",
	lastName: "Glu",
	age: 42,
	job: "front-end-developer",
	hobby: ["books", "swimming", "running"],
};

console.log(dataMariusz.firstName);


   const interestedIn = prompt(
        "What do you want to know about Mariusz? Choose between firstName, lastName,age,job, hobby"
    );




if(dataMariusz[interestedIn]){
    console.log(`${dataMariusz[interestedIn]}`)
}
else{
    console.log("Wrong value")
    
}