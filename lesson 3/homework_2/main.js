const user = {
    banks: [
      {
        address: {
            city: "Batumi"
          }
      },
      {
        address: {
            city: "qutaisi"
          }
      },
      {
        address: {
          city: "Tbilisi"
        }
      }
    ]
  };


  const func = ({banks:[,, {address : {city} = {} } = {} ]} ) =>{
    console.log(city)
  }

  func(user)