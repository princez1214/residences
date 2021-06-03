import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Brand from '../component/Brand';

const Residences = () => {
  const [data, setData] = useState()

  useEffect( () => {
    Axios.get('/api/residences')
    .then(res => {
      return setData(res.data)
    })
    .catch(err => console.log(err, "-- error --"))
  }, [])

  return data ? <div>
    <div className="header">
      <img className="w-full" src = {data.header.image} />
      <p className="absolute" style={{top: 0}} >{data.header.text}</p>
    </div>
    <div className="container w-full">
      <Brand 
        title={data.carousel.text.title}
        subTitle={data.carousel.text.subTitle}
        details={data.carousel.text.details} 
      />
      <div>
        <img className="w-full" src={data.carousel.image[0]} />
      </div>
    </div>
    <div className="container w-full">
      <Brand 
        title={data.comehome.title}
        subTitle={data.comehome.subTitle}
        details={data.comehome.details} 
      />
      <div>
        <img className="w-full" src={data.comehome.image} />
      </div>
    </div>
    <div className="container w-full flex">
      <div className="w-full items-center flex">
        <div className="text-center w-full">
          <img className="logo w-full" src={data.toinside.logo} />
          <p className="subTitle">{data.toinside.subTitle}</p>
          <p className="asdf">{data.toinside.subTitle}</p>
        </div>
      </div>
      <div className="w-full">
        <img className="w-full" src={data.toinside.image} />
      </div>
    </div>
    <div className="container">
      <Brand 
        title={data.residences.title}
        subTitle={data.residences.subTitle}
        details={data.residences.details} 
      />
      <img className="w-full" src={data.residences.image} />
    </div>
  </div>:
  <div></div>
}

export default Residences