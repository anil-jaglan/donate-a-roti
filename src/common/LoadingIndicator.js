import React from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default class LoadingIndicator extends React.Component {

   render() {
      return (
         <div style={{
            position: 'fixed',
            top: '0px', left: '0px',
            bottom: '0px',
            right: '0px',
            display: 'flex',
            alignItems: 'center',
            overflow: 'auto'
         }}>
            <div style={{ margin: "auto", maxHeight: "100%" }}>
               <Loader
                  type="RevolvingDot"
                  color="#e91e63"
                  height={100}
                  width={100}
               />
            </div>
         </div>
      );
   }
}