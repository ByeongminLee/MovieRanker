import { useNavigate } from 'react-router-dom';

import Table from 'Components/Tables';
import styled from 'styled-components';
import Slide from 'Components/Slide';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRank } from 'slices/MovieRankSlice';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

const Wrapper = styled.div`
    width: 100%;
`;

const Container = styled.div`
    margin: 0 auto;
    width: 1200px;
    min-width: 1200px;
`;

const Calendar = styled.input`
    width: 150px;
    float: right;
    margin-bottom: 20px;
    &:after {
        clear: both;
    }
`;
const SelectDate = styled.div`
    width: 100%
    float: left;
    font-size: 15px;
    padding: 5px;

    h1{
        font-size: 30px;
        padding: 5px 0;
    }
    hr{
        width: 300px;
        float: left;
        margin-bottom: 30px;
    }

    &:after{
        clear: both;
    }
`;

const Main = () => {
    let { targetDate } = useParams();
    const { rt, rtmsg, item, loading } = useSelector((state) => state.movieRank);

    const [boxOffice, setBoxOffice] = useState();
    const [query, setQuery] = useState([]);
    const [date, setDate] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRank(targetDate));
        if (targetDate) {
            setDate(
                `${targetDate.substring(0, 4)}년 ${targetDate.substring(
                    5,
                    7
                )}월 ${targetDate.substring(8, 10)}일`
            );
        }
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
                {targetDate ? (
                    <SelectDate>
                        <p>{date}</p>
                        <h1>박스 오피스 순위</h1>
                        <hr />
                    </SelectDate>
                ) : (
                    <SelectDate>
                        <p>{dayjs().add(-1, 'd').format('YYYY년 MM월 DD일')}</p>
                        <h1>박스 오피스 순위</h1>
                        <hr />
                    </SelectDate>
                )}

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
