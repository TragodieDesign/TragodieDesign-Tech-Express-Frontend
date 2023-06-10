import styled from 'styled-components'

export const Section =styled.section`
    padding:${(props) => props.paddingLg ? '4rem 0 2rem 0'  : '2rem 0 1rem 0'};

    min-height: ${(props) => (props.minH ? '43rem' : '')};
    displays: ${(props) => (props.flex ? 'flex': '')};
    align-items: center;

    &.not-pd{
        padding:0;
    }

    &.xs{
        padding: 1.5rem 0 1rem 0;
    }
`