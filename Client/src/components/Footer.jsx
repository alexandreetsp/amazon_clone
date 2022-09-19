import React from 'react';
import '../footer.css'

const Footer = () => {
    return (
        <div className='Footer_container'>
            <div className='button_start'>Voltar ao início</div>
            <div className='container'>
                <div className='col_flex'>
                       <div className='cols_1'>
                            <h4>Conheça-nos</h4>
                            <ul>
                                <li>Informações corporativas</li>
                                <li>Carreiras</li>
                                <li>Comunicados à imprensa</li>
                                <li>Comunidade</li>
                                <li>Acessibilidade</li>
                                <li>Amazon Science</li>
                            </ul>
                       </div>
                       <div className='cols_1'>
                            <h4>Ganhe dinheiro conosco</h4>
                            <ul>
                                <li>Venda na Amazon</li>
                                <li>Seja um associado</li>
                                <li>Anuncie seus produtos</li>
                            
                            
                            </ul>
                       </div>
                       <div className='cols_1'>
                            <h4>Pagamento</h4>
                            <ul>
                                <li>Cartões de crédito</li>
                                <li>Cartões de débito</li>
                                <li>Boleto e Pix</li>
                               
                            </ul>
                       </div>
                       <div className='cols_1'>
                            <h4>Deixe-nos ajudar você</h4>
                            <ul>
                                <li>Amazon e COVID-19</li>
                                <li>Sua conta</li>
                                <li>Frete e prazo de entrega</li>
                                <li>Devoluções e reembolsos</li>
                                <li>Gerencie seu conteúdo e dispositivos</li>
                                <li>Ajuda</li>
                            </ul>
                       </div>
                </div>
            </div>
            <hr className='line'></hr>
        </div>
    );
}

export default Footer;
