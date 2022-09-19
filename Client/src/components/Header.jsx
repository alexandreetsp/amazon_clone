import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>
      <nav className='container_logo'>
        <div className='logo'>
          <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        </div>
        <div className='endereco'>
        <span className='Ola'>Olá</span>
        <div className='negrito'>
            <IconButton>      
                <LocationOnIcon fontSize='medium' className='
                icon_locatition'/>
            </IconButton>
              Selecione o endereço</div> 
            </div>
        <div className='search'>
            <input className='inputsearch'></input>
            <SearchIcon className='button_icon'/>
        </div>
        <div className='container_side'>
            <div className='login'>
               <div>Olá, Faça seu login</div>
               <div className='negrito'>Contas e Listas</div> 
            </div>
            <div className='pedidos'>
                <div>Devoluções</div>
                <div className='negrito'> e Pedido</div>
            </div>
            <div className='carrinho'>
              <IconButton>      
                <ShoppingCartIcon fontSize='medium' className='cart_button'/>
              </IconButton>
            </div>
            <div className='cart_name'>Carrinho</div>
        </div>
      </nav>

      <div className='sub_header'>
          <div className='sub_container'>
              <ul className='menu'>
                <a><li>Todos</li></a>
                <a><li>Ofertas do Dia</li></a>
                <a><li>Atendimento ao Cliente</li></a>
                <a><li>Vales-presente</li></a>
                <a><li>Minhas listas</li></a>
                <a><li>Vender</li></a>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Header