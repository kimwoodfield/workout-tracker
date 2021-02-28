import styled from 'styled-components'

const PageTitleContainer = styled.div`
    // border: 1px dashed black;
    display: flex;
    align-items: flex-start;
    height: 4.5rem;
    width: 100%;
`

const PageTitleText = styled.h2`
    // border: 1px dashed black;
    font-size: 2.5rem;
    padding: 0;
    margin: 0;
    padding-left: 1.25rem;
`

export default function PageTitle(props) {
    return (
        <PageTitleContainer>
            <PageTitleText>{props.name}</PageTitleText>
        </PageTitleContainer>
    )
}