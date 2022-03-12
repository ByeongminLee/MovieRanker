import { useNavigate } from 'react-router-dom';

import Table from 'Components/Tables';
import styled from 'styled-components';
import Slide from 'Components/Slide';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRank } from 'slices/MovieRankSlice';
import { getSearch } from 'slices/MovieSearchSlice';
import { useParams } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
`;

const Container = styled.div`
    margin: 0 auto;
    width: 1200px;
    min-width: 1200px;
    border: 1px solid red;
`;

const Calendar = styled.input`
    width: 150px;
`;

const Main = () => {
    let { targetDate } = useParams();
    const { rt, rtmsg, item, loading } = useSelector((state) => state.movieRank);

    const [boxOffice, setBoxOffice] = useState();
    const [query, setQuery] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRank(targetDate));
    }, [dispatch, targetDate]);

    useEffect(() => {
        if (rt === 200) {
            setBoxOffice(item.boxOfficeResult);
        }
    }, [item]);

    useEffect(() => {
        if (boxOffice) {
            setQuery([]);
            boxOffice.dailyBoxOfficeList.map((value, index) => {
                setQuery((prev) => [...prev, value.movieNm]);
            });
        }
    }, [boxOffice]);

    const navigate = useNavigate();

    /** 날짜의 선택 값이 변경된 경우 호출될 이벤트 핸들러 */
    const onDateChange = (e) => {
        e.preventDefault();
        navigate('/' + e.currentTarget.value);
    };

    return (
        <Wrapper>
            <Slide query={query} targetDate={targetDate} />

            <Container>
                <Calendar
                    type="date"
                    className="form-control"
                    placeholder="날짜 선택"
                    defaultValue={targetDate}
                    onChange={onDateChange}
                />
                <Table boxOffice={boxOffice} />
            </Container>
        </Wrapper>
    );
};

export default Main;
