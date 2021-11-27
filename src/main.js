const p = dom.find("p")

const div = dom.find("#style")[0]
dom.style(div, "color", "red")
const color = dom.style(div, "color")
console.log(color)

const each = dom.find("#each")[0]
console.log(dom.children(each))
dom.each(dom.children(each), (node)=>{
    dom.style(node, "color", "red")
})