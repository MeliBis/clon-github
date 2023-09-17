import styled from 'styled-components'

const SelectoresStyled = styled.select`
    border: none ;
    background: var(--button-BG);
    color: var(--white);
    padding-inline: 1rem;
`

function Selectores({children}) {
    return (
        <SelectoresStyled>
            {children}
        </SelectoresStyled>
    )
}

export default Selectores
