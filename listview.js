//My portfolio will have its own bootleg listview, and this is the code for it.
(() => {
    class listview {
        //target: the element to append a list item to
        //template: the element that represents the template
        //list: the list for the template
        constructor(target, template, list) {
            for(var i = 0; i < list.length; i++) {
                //create the list item's frame
                var div = document.createElement("div");
                div.className = template.getAttribute("class");
                div.id = list[i].id;
                for(var x = 0; x < template.getElementsByTagName("*").length; x++) {
                    var newChild = template.getElementsByTagName("*")[x].cloneNode(true);
                    var elementBinds = JSON.parse(template.getElementsByTagName("*")[x].getAttribute("bind").toString());
                    for(var u = 0; u < Object.keys(elementBinds).length; u++) {
                        var key = Object.keys(elementBinds)[u];
                        var value = elementBinds[key];
                        newChild[key]  = list[i][value];
                    }
                    div.appendChild(newChild);
                }
                target.appendChild(div);
            }
        }
    }
    window.listview = listview;
})();

(() => {
    var listInfo = [
        {
            id: "test",
            img: "https://th.bing.com/th/id/OIP.TUDe74-_OR6O3P4V-3_FYQHaE7?pid=ImgDet&rs=1",
            title: "New Title",
            desc: "New Desc",
        },
        {
            id: "test",
            img: "https://th.bing.com/th/id/OIP.TUDe74-_OR6O3P4V-3_FYQHaE7?pid=ImgDet&rs=1",
            title: "New Title",
            desc: "New Desc",
        },
        {
            id: "joey-terminal",
            img: "https://cdn.onlinewebfonts.com/svg/img_495982.png",
            title: "Joe's Terminal",
            desc: "An HTML console that uses modules.",
        }
    ]
    window.listInfo = listInfo;
    window.onload = function() {
        var newListView = new listview(document.getElementById("appHolder"), document.getElementById("app-template"), listInfo);
    }
})();