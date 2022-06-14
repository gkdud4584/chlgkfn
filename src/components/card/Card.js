import React from 'react'
import CardItem from './Carditem';
import  './Card.css';

function Cards() {
    return (
        <div className='cards'>                           
            <h1 className='title'>DAMITO가 바꿀 데이터</h1>
            <h3 className='subtitle'>지적 생산의 알맞은 대가를 만들고자 합니다</h3>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                         src = "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?cs=srgb&dl=pexels-pixabay-265087.jpg&fm=jpg"
                         text = "안정적입니다."
                         label = 'Stable'
                         alt="page1"
                        />    
                        <CardItem 
                         src = "https://images.pexels.com/photos/3943746/pexels-photo-3943746.jpeg?cs=srgb&dl=pexels-cottonbro-3943746.jpg&fm=jpg"
                         text = "정당한 대가를 받을 수 있습니다. "
                         label = 'Cost'
                         alt="page2"

                        />                                                    
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                         src = "https://images.pexels.com/photos/2928232/pexels-photo-2928232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                         text = "유의미한 데이터가 지속적으로 쌓일 수 있습니다."
                         label = 'Significance'
                         alt="page3"
                        />    
                        <CardItem 
                         src = "https://images.pexels.com/photos/8293717/pexels-photo-8293717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                         text = "데이터의 소유권을 주장할 수 있습니다."
                         label = 'Ownership'
                         alt="page4"
                        />                                                    
                    </ul>                              
                </div>
            </div>
        
        </div>
    );
}

export default Cards;