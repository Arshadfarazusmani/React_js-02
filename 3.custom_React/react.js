
const customRender= function (element , container) {
    const domElement= document.createElement(element.type)
    domElement.innerHTML=element.children
    domElement.setAttribute ('herf',element.props.herf
        
    )
    domElement.setAttribute ('target',element.props.target

    )

    container.appendChild(domElement

    )

    
}

const reactElement= {
    type:'a',
    props :{
        herf:'https://vite.dev/guide/',
        target:"_blank"
    },
    children:"click me "
}

const maincontainer = document.getElementById('root')


customRender(reactElement,maincontainer)
