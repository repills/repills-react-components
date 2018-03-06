import React from 'react';
import Base from '../Base';

const ArticleIcon = options => {
  return (
    <Base
      path="M21.42,96A19.44,19.44,0,0,1,2,76.54V15.29A11.26,11.26,0,0,1,13.25,4H66.33A11.26,11.26,0,0,1,77.58,15.29V69.38H94.92A3.09,3.09,0,0,1,98,72.46v4.08A19.44,19.44,0,0,1,78.58,96ZM40.83,76.54a19.31,19.31,0,0,1-4,11.64l-1.24,1.61h43A13.27,13.27,0,0,0,91.83,76.54v-1h-51ZM13.25,10.21a5.09,5.09,0,0,0-5.08,5.08V76.54a13.25,13.25,0,0,0,26.5,0V72.46a3.09,3.09,0,0,1,3.08-3.08H71.42V15.29a5.09,5.09,0,0,0-5.08-5.08Zm8.17,49a3.08,3.08,0,0,1,0-6.17H58.17a3.08,3.08,0,0,1,0,6.17Zm0-16.33a3.08,3.08,0,0,1,0-6.17H58.17a3.08,3.08,0,0,1,0,6.17Zm0-16.33a3.08,3.08,0,0,1,0-6.17H58.17a3.08,3.08,0,0,1,0,6.17Z"
      {...options}
    />
  );
};

export default ArticleIcon;
