window.jQuery = function(selectorOrArray) {
    let nodeLists
    if(typeof selectorOrArray === "string"){
        nodeLists = document.querySelectorAll(selectorOrArray)
    }else{
        nodeLists = selectorOrArray
    }
    return {
        find(selector){
            let array = []
            for (let i=0;i<nodeLists.length;i++){
                array = array.concat(Array.from(nodeLists[i].querySelectorAll(selector)))
            }
            array.oldApi = this 
            return jQuery(array)
        },
        each(fn){
            for(let i=0;i<nodeLists.length;i++){
                fn(nodeLists(i))
            }
            return this
        },
        oldApi: selectorOrArray.api,
        addClass(classname){
            for(let i=0; i<nodeLists.length; i++){
                nodeLists[i].classList.add(classname)
            }
            return api
        },
        end(){
            return this.oldApi
        }

    }
}