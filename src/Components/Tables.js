import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    min-width: 1200px;
    margin: 0 auto;
`;

const Tr = styled.tr``;
const Th = styled.th`
    font-size: 20px;
    padding: 10px 30px;
`;
const Td = styled.td`
    text-align: center;
    padding: 10px 40px;
    border-top: 1px solid #e1e1e1;
`;

const Tables = ({ boxOffice = { dailyBoxOfficeList: [] } }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <Th>순위</Th>
                    <Th>제목</Th>
                    <Th>관람객 수</Th>
                    <Th>매출액</Th>
                    <Th>누적 관램객 수</Th>
                    <Th>누적 매출액</Th>
                </tr>
            </thead>
            <tbody>
                {boxOffice.dailyBoxOfficeList.map((item, index) => (
                    <Tr key={index}>
                        <Td>{item.rank}</Td>
                        <Td>{item.movieNm}</Td>
                        <Td>{Number(item.audiCnt).toLocaleString()} 명</Td>
                        <Td>{Number(item.salesAmt).toLocaleString()} 원</Td>
                        <Td>{Number(item.audiAcc).toLocaleString()} 명</Td>
                        <Td>{Number(item.salesAcc).toLocaleString()} 원</Td>
                    </Tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Tables;
