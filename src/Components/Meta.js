import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset="utf-8" />
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta property="og:type" content={'website'} />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:image" content={props.image} />
                <meta property="og:url" content={props.url} />
            </Helmet>
        </HelmetProvider>
    );
};

Meta.defaultProps = {
    title: '영화 박스 오피스',
    description: '영화진흥원 & 네이버 OpenAPI를 활용한 박스 오피스',
    keywords: 'React, MovieBoxOffice, OpenAPI',
    author: '이병민',
    image:
        window.location.protocol +
        '//' +
        window.location.hostname +
        ':' +
        window.location.port +
        '/Logo.png',
    url: window.location.href,
};

export default Meta;
