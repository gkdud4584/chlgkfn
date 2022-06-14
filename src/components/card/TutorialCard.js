import React from 'react'
import CardItem from './TutorialCardItem';
import  './Card.css';

function TutorialCards() {
    return (
        <div className='cards'>                           
          <h1>DAMITO 튜토리얼 페이지</h1>
          <div className="cards_container">
                <div>
            <ul className='cards__items'>
                    <CardItem
                        src='https://github.com/minislively/opensourceproject/blob/master/src/images/img1.png?raw=true'
                        text='회원가입 페이지'
                        label='Mystery'
                        alt="page1"
                        path='/register'
                        />
                        <CardItem
                        src='https://github.com/minislively/opensourceproject/blob/master/src/images/img2.png?raw=true'
                        text='로그인 페이지'
                        label='Adventure'
                        alt="page2"
                        path='/login'
                        />
                        
                    </ul>
                    <ul className='cards__items'>
  
                        <CardItem
                        src='https://github.com/minislively/opensourceproject/blob/master/src/images/img4.png?raw=true'
                        text='데이터 저장하기'
                        label='Mystery'
                        alt="page3"
                        path='/dashboard/add'
                        />
                    </ul>
                    </div>
                    </div>                                    
            </div>
    );
}

export default TutorialCards;