import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import '../box.css';


function BoxProduct() {
  return (
    <div className='Box_Container'>
        <div className='Box'>
            <div>
                <img src='https://m.media-amazon.com/images/I/61Ntvorkf5L._MCnd_AC_UL320_.jpg'></img>
            </div>
            <div className='text_area'>
                <div>
                Zalalus Vestido feminino de verão sexy de um ombro só franzido bodycon sem mangas fenda
                </div>
                <div className='stars'>
                        <Stack>
                            <Rating name="size-small" defaultValue={2} size="small"></Rating>
                        </Stack>
                </div>
                <div className='price_box'>
                    <span>US$39,99</span>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default BoxProduct