let georgia = {
    name: "Georgia",
    capital: "Tbilisi",
    population: 3720400,
    region: "Caucasus",
    languages: ["Georgian"],
    currency: {
      name: "Georgian Lari",
      code: "GEL",
      symbol: "₾"
    },
    president: {
      name: "Salome Zurabishvili",
      birthDate: "March 18, 1952",
      nationality: "Georgian"
    }
  };

  const createnew = (info) =>{
    let newobject = {...info , 
        languages : [...info.languages ] ,
        currency : {
        ...info.currency, },
        president : { ...info.president} ,
    }
    return newobject
    
  }

  const past = createnew(georgia)

  
console.log(past)
 



  