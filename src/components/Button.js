import styled from 'styled-components'
import {isValidElement} from 'react'

const ButtonStyled= styled.button`
font: var(--button);
    display: inline-flex;
    padding-block: .25rem;
    background: var(--buttonBG);
    min-inline-size: 135px;
    color: var(--white);
    gap: .5rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none !important;
    border: 1px solid var(--grey);
    border-radius: .5rem;
    &:hover{
        background: var(--white);
        color: var(--button);
    }
`

const Button = ({text, link,className,icon}) => {
   const component= link ?  "a" : "button"
    let IconComponent = null
    if(icon){
        if(isValidElement(icon)){
            IconComponent = icon
        }
    }

  return (
    <ButtonStyled as={component} href={link} className={className}>
        {IconComponent}
        {text}
    </ButtonStyled>
  )
}

export const ButtonContrast=styled(Button)`
    background: var(--white);
    color:var(--buttonBG);
    &:hover{
        background: var(--buttonBG);
        color: var(--white);
    }
`
export const ButtonRounded = styled(Button)`
    border: 2px solid var(--grey-1) ;
    min-inline-size: initial;
    border-radius: 50%;
    padding: .75rem;
    &:hover{
        background: var(--buttonBG);
        transform: scale(1.1);
    }
`
export default Button