import React from 'react';

const Brand = ({title, subTitle, details}) => {
  return <div className="bg-brand text-center w-full">
    <div className="brand_content w-full">
      <p className="title">{title}</p>
      <p className="subTitle">{subTitle}</p>
      <p className="details">{details}</p>
    </div>
</div>
}

export default Brand;