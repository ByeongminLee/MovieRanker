import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from 'Components/Card';
import noImg from 'imgs/noImg.png';
import { useDispatch, useSelector } from 'react-redux';
import { getSearch } from 'slices/MovieSearchSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
    width: 100%;
    background: linear-gradient(to right, #111, #d3d3d3 50%, #111 100%);
    margin-bottom: 50px;
    min-width: 1200px;
`;

const Container = styled.div`
    margin: 0 auto;
    width: 1200px;
    height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
const PosterBox = styled.div`
    width: 400px;
    height: 400px;
    margin-right: 220px;
`;

const Poster = styled.img`
    max-width: 400px;
    height: 400px;
    width: auto;
`;
const LeftButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 200px;
    left: 0;
    color: #e3e3e3;
    font-size: 80px;
    &:hover {
        color: #fff;
    }
`;
const RightButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 200px;
    right: 0;
    color: #e3e3e3;
    font-size: 80px;
    &:hover {
        color: #fff;
    }
`;

const Slide = ({ query, targetDate }) => {
    const dispatch = useDispatch();
    const { rt, rtmsg, item, loading } = useSelector((state) => state.movieSearch);
    const [searchData, setSearchData] = useState([]);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        dispatch(getSearch(query[number]));
        setNumber(0);
    }, []);

    useEffect(() => {
        console.log('1,..', query);
        if (query.length > 9 && searchData.length < 10) {
            dispatch(getSearch(query[number]));
        }
    }, [query, number]);

    useEffect(() => {
        console.log('333333', query);
        setSearchData([]);
        setNumber(0);
    }, [targetDate]);

    useEffect(() => {
        if (rt === 200 && searchData.length < 10) {
            setSearchData((prev) => [...prev, item.items[0]]);
        }
    }, [item]);

    const onClickLeft = () => {
        if (number !== 0) {
            setNumber(number - 1);
        } else if (number === 0) {
            setNumber(9);
        }
    };
    const onClickRight = () => {
        if (number !== 9) {
            setNumber(number + 1);
        } else if (number === 9) {
            setNumber(0);
        }
    };

    return (
        <Wrapper>
            <Container>
                <LeftButton>
                    {number !== 0 ? (
                        <FontAwesomeIcon icon={faAngleLeft} onClick={onClickLeft} />
                    ) : (
                        <></>
                    )}
                </LeftButton>
                {searchData.length > number ? (
                    <>
                        <PosterBox>
                            <Poster alt={searchData[number].title} src={searchData[number].image} />
                        </PosterBox>
                        <Card cardData={searchData[number]} number={number} />
                    </>
                ) : (
                    <>
                        <PosterBox>
                            <Poster alt="test" src={noImg} />
                        </PosterBox>
                        <Card />
                    </>
                )}
                <RightButton>
                    <FontAwesomeIcon icon={faAngleRight} onClick={onClickRight} />
                </RightButton>
            </Container>
        </Wrapper>
    );
};

export default Slide;
