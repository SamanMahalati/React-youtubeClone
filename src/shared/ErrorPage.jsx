import React from 'react';
import styled from 'styled-components';

//images
import Error from "../images/Error.png"

//Styles
const Container = styled.section`
    background-color: #404040;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    overflow: hidden;
    gap: 4rem;
    padding: 0 4rem;
    margin: 0 0 6rem 0;

    img {
        border-radius: 1rem;
    }
`
const ErrorText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5rem;
    h1 {
        color: #DC2626;
        font-size: 80px;
        font-weight: 700;
    }
    h3 {
        font-size: 50px;
        color: #F59E0B;
        font-weight: 400;
    }
    h5 {
        color: #fff;
        font-size: 20px;
        width: 40rem;
        line-height: 2.4rem;
    }
`

const ErrorPage = () => {
    return (
        <Container>
            <ErrorText>
                <div>
                    <h1>SORRY !!!</h1>
                    <h3>PAGE NOT FOUND</h3>
                </div>
                <h5>The link you follow probabley broken , or search something wrong , or the page has been removed.</h5>
            </ErrorText>
            <img src={Error} alt="Error" />
        </Container>
    );
};

export default ErrorPage;