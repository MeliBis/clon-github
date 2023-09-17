import React,{ useRef} from "react"
import { useNavigate } from "react-router";
import Overlay from "./Overlay";
import styled from "styled-components";
import {ButtonContrast} from './Button'
import InputText from "./Input-text";
import ReactDom from 'react-dom'

const modalRoot=document.getElementById('portal')
//ReactDom.createPortal()

class ModalPortal extends React.Component{
    constructor(props){
        super(props)
       this.el= document.createElement('div')
    }

/*     componentDidUpdate(){
        console.log('el componente se actualizo');
    } */
    componentWillUnmount(){ //se llama cuando el componente se va a ir
        modalRoot.removeChild(this.el)
    }
    componentDidMount(){
        modalRoot.appendChild(this.el)
    }
    render(){
        return ReactDom.createPortal(this.props.children, this.el)
    }
}
export default function Modal({isActive, setModal}){
    if(isActive){
        return (
            <ModalPortal>
                <ModalContent setModal={setModal}/>
            </ModalPortal>
        )
    }
    return null
}

const ModalContentStyled= styled.form`
    background: var(--bg);
    color: var(--white);
    padding: 1.5rem;
    position: fixed;
    inset-block-start: 50%;
    transform: translateY(-50%) translateX(-50%);
    inset-inline-start: 50%;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    inline-size: 24rem;
   .title{
    font:var()(--headline2-semi-bold);
    margin: 0;
   }
`
function ModalContent({setModal}){
    const form=useRef(null)
    const navigator = useNavigate()

    function handleSubmit(event){
        event.preventDefault()
        
        const formData= new FormData(form.current)
        navigator(`/${formData.get('username')}`)
        setModal(false)
    }
    return(
    <Overlay>
        <ModalContentStyled ref={form} action='' onSubmit={handleSubmit}>
            <h2 className="title">Busca a tu usuario favorito</h2>
            <InputText type='text'autoComplete="off" name='username' placeholder="Username"/>
            <ButtonContrast text='Buscar'/>
        </ModalContentStyled>
    </Overlay>
    )
}
