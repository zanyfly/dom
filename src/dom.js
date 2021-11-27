window.dom = {
    create(string) {
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSlibling)
    },
    append(parent, node){
        parent.appendChild(node)
    },
    wrap(node, parent){
        dom.before(node, parent)
        dom.append(parent, node)
    },

    /*
    Element.children includes only element nodes. To get all child nodes, including non-element nodes like text and comment nodes, use Node.childNodes.
    */
    children(node){
        return node.children
    },

    // selector: a valid css selector string. eg: p, div.note, #test
    // 
    find(selector, scope){
        return (scope || document).querySelectorAll(selector)
    },
    // set  name: border, value: "1px solid red"
    //      name: {border: "1px solid red"}
    // get  name: border
    style(node, name, value){
        if(arguments.length === 3){
            node.style[name] = value
        }else if(arguments.length === 2){
            if(typeof name === 'string'){
                return node.style[name]
            }else if(name instanceof Object){
                for(let key in name){
                    node.style[key] = name[key]
                }
            }
        }

    },
    
    each(nodeList, fn){
        for(let i=0;i<nodeList.length; i++){
            fn.call(null, nodeList[i])
        }
    }
}