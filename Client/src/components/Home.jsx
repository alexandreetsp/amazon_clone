import React from 'react'
import {Products, ProductsA ,ProductsB , ProductsC} from './Products';


const home = () => {
  return (
    <div className='home '>
      <div className='home_container' >
        <img className='background_img' src="https://images-na.ssl-images-amazon.com/images/G/32/ConsumerElectronics/2022/GW/Camera/XCM_Manual_ORIGIN_1451576_2462152_4842360_3000x1200_2X_pt_BR._CB631381343_.jpg"/>
        <div className='products '>
            <div className='products_row'>
              <Products Price="$ 99,30" img = "https://images-na.ssl-images-amazon.com/images/G/32/br-crosscategory/2019/dashcard/ofertasdodia/377_Desktop_Dashcard_Deals_379x304._SY304_CB419532277_.jpg"/>
              <Products Price="$ 99,30" img = "https://images-na.ssl-images-amazon.com/images/G/32/br-crosscategory/2019/dashcard/ofertasdodia/377_Desktop_Dashcard_Deals_379x304._SY304_CB419532277_.jpg" />
              <ProductsC/>
              <div><Products Price="$ 99,30" text = "Descubra o que a Alexa pode fazer"/></div>
              </div> 
              <div className='products_slide'>
                  <ProductsA/>
              </div>
              <hr className='card_flow'/>
              <div className='products_row'>
                <ProductsB/>
                <ProductsC/>
              </div>
        </div>

      </div>
   

         
      
    </div>
  )
}

export default home;