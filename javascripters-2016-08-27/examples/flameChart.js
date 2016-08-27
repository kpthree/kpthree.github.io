var c = 0;
function createChild() {
    ele = document.createElement("div");
    ele.appendChild(document.createTextNode("Child " + c++))
    ele.innerHTML = (new Array(1E5).join("#JwJS "));
    return ele;
}
function tree() {
    var parent = document.getElementById("parent")
    for(var i = 0; i < 10; i++) {
        var ele = document.createElement("div");
        ele.appendChild(createChild())
        parent.appendChild(ele);
    }
}
