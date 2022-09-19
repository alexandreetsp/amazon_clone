import React from 'react'
import '../products.css';
import { Slide } from 'react-slideshow-image';
import {Link} from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'


const Products = (props) => { 

const renderImg = () => {

  if (props.img) {
    return <img className='img_container' src={props.img}/>
  }
  else {
    return <span className='text_t'>{props.text}</span>
  }
};
  return ( <>
    <div className='product'>
        <div className='products_container'>
          <div className='title_container'>
            <h2 className='title_text'>Navegue por loja</h2>
          </div>
            <div className='img_container1'>
              {renderImg()}
            </div>
          <div className='price_descrition'>
            <div className='link_seemore'>
              <Link to="/selection">Veja todas as ofertas</Link>
            </div>
          </div>
        </div>
    </div></>
  )
}
function ProductsA (props) {

  return (
    <>
    <div className='product_slide'>
        <div className='products_container2'>
            <div className='title_Slide'>
            <h3>Confira Dispositivos Amazon</h3>
            </div>
            <div className='slide'>
              <Slide slidesToScroll={3} slidesToShow={5}>
                    <div className='slide_imgs'>
                    <img src='https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SY200_.jpg'/>
                    </div>
                    <div className='slide_imgs'>
                    <img src='https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SY200_.jpg'/>
                    </div>
                    <div className='slide_imgs'>
                    <img src='https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SY200_.jpg'/>
                    </div>
                    <div className='slide_imgs'>
                    <img src='https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SY200_.jpg'/>
                    </div>
              </Slide>
            </div>
        </div>
    </div>
      
    </>
  )
}
function ProductsB(props) {

  return (
    <>
      <div className='product'>
        <div className='products_container'>
          <div className='title_container'>
            <h2 className='title_text'>Navegue por loja</h2>
          </div>
            <div className='img_block'>
              <img src='https://m.media-amazon.com/images/I/31-6cLfKDtL._AC_SY230_.jpg'></img>
            </div>
          <div className='price_descrition'>
            <div className='price_section'>
              <div>R$59,90</div>
            </div>
            <div className='title_product'>
              <span>Kit 2 Camisetas UV Protection Masculina UV50</span>
            </div>
            <div className='link_seemore'>
              <a href="">Veja todas as ofertas</a>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}


function ProductsC(props) {
  return (
    <>
    <div className='product'>
        <div className='products_container'>
          <div className='title_container'>
            <h2 className='title_text'>Até R$200 off em Echo e Fire TV com Alexa</h2>
          </div>
            <div className='container_products'>  
                <div className='products_flex'>
                  <div>
                    <div><img className='img_flex' src='https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2022/FathersDay/Extra/UD/CARDS/br-FathersLD-quad_card_d-bo_blk-186x116._SY116_CB630946031_.jpg'></img></div>
                    <div><span className = 'text_img_flex'>Echo Dot 4ª Geração</span></div>
                  </div>
                  <div>
                    <div><img className='img_flex' src='https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2022/FathersDay/Extra/UD/CARDS/br-FathersLD-quad_card_d-bo_blk-186x116._SY116_CB630946031_.jpg'></img></div>
                    <div><span className = 'text_img_flex'>Echo Dot 4ª Geração</span></div>
                  </div>
                  <div>
                    <div><img className='img_flex' src='https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2022/FathersDay/Extra/UD/CARDS/br-FathersLD-quad_card_d-bo_blk-186x116._SY116_CB630946031_.jpg'></img></div>
                    <div><span className = 'text_img_flex'>Echo Dot 4ª Geração</span></div>
                  </div>
                  <div>
                    <div><img className='img_flex' src='https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2022/FathersDay/Extra/UD/CARDS/br-FathersLD-quad_card_d-bo_blk-186x116._SY116_CB630946031_.jpg'></img></div>
                    <div><span className = 'text_img_flex'>Echo Dot 4ª Geração</span></div>
                  </div>
            
            
                </div>
            </div>
          <div className='price_descrition'>
            <div className='link_seemore'>
              <a href="">Veja todas as ofertas</a>
            </div>
          </div>
        </div>
    </div> </>
  )
};



export {Products, ProductsA, ProductsB, ProductsC};