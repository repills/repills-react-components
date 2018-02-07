import React from 'react';
import Base from '../Base';

const ArticleIcon = options => {
  return (
    <Base
      path="M62.7,1H22.79a7.28,7.28,0,0,0-7.27,7.29V91.71A7.26,7.26,0,0,0,22.77,99H77.23a7.25,7.25,0,0,0,7.25-7.23V26.41Zm0,5.44,17.06,20H66.32a3.65,3.65,0,0,1-3.62-3.66ZM80.85,91.76a3.62,3.62,0,0,1-3.63,3.61H22.78a3.64,3.64,0,0,1-3.63-3.61V8.24a3.64,3.64,0,0,1,3.61-3.61H59.07V22.76A7.24,7.24,0,0,0,66.33,30H80.85ZM26.41,59.07H73.59V62.7H26.41Zm0-21.78H73.59v3.63H26.41Zm0,10.89H73.59v3.63H26.41Zm3.63-29H26.41V11.89H44.56v7.26H40.93V15.52H37.3V30H33.67V15.52H30ZM26.41,70H73.59v3.63H26.41Zm0,10.89H73.59v3.63H26.41Z"
      {...options}
    />
  );
};

export default ArticleIcon;
