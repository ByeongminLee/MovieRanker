import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 400px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(100, 100, 100, 0.2);
    padding: 30px 50px;
`;
const Ranking = styled.h2`
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 20px;
    text-align: center;
`;
const Title = styled.h3`
    font-weight: bold;
    font-size: 18px;
    height: 30px;
`;
const Description = styled.p`
    padding-bottom: 10px;
`;
const Card = ({ cardData, number }) => {
    return (
        <CardContainer>
            {cardData ? (
                <>
                    <Ranking>박스 오피스 순위 : {number + 1} 위</Ranking>
                    <Title>영화제목</Title>
                    <Description>
                        {cardData.title.substring(3, cardData.title.length - 4)}
                    </Description>
                    <Title>감독</Title>
                    <Description>{cardData.director.split('|')}</Description>
                    <Title>배우</Title>
                    <Description>{cardData.actor.split('|')}</Description>
                    <Title>평점</Title>
                    <Description>{cardData.userRating}</Description>
                </>
            ) : (
                <></>
            )}
        </CardContainer>
    );
};

export default Card;
