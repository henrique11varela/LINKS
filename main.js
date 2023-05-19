const container = document.querySelector(".container")

const aaaaaaa = getComputedStyle(document.documentElement).getPropertyValue("--num-apps")
function createLinkListIcon(linkArray) {
    const numApps = linkArray.length    
    const listWrapper = document.createElement("div")
    listWrapper.classList.add("icon-list")
    linkArray.forEach(function (item) {
        const emMax = 16
        //<a></a>
        const button = document.createElement("a")
        button.classList.add("app")
        const emValue = 200 / numApps
        button.style.fontSize = `${emValue < emMax ? emValue : emMax}px`
        console.log(button.style.fontSize)
        button.href = item.url
        button.target = "_blank"
        //<div></div>
        const buttonTop = document.createElement("div")
        buttonTop.textContent = item.text
        buttonTop.classList.add("app_top")
        //img
        const img = document.createElement("img")
        img.src = item.img
        //appends
        buttonTop.appendChild(img)
        button.appendChild(buttonTop)
        listWrapper.appendChild(button)
    })
    return listWrapper
}

function createLinkList(title, linkArray) {
    const listWrapper = document.createElement("div")
    listWrapper.classList.add("link-list")
    //title
    const listTitle = document.createElement("h2")
    listTitle.textContent = title
    // listTitle.classList.add("list-title")
    //ul
    const ul = document.createElement("ul")
    linkArray.forEach(function (item) {
        //li
        const li = document.createElement("li")
        //a
        const a = document.createElement("a")
        a.textContent = item.text
        a.href = item.url
        a.target = "_blank"
        //appends
        li.appendChild(a)
        ul.appendChild(li)
    })
    listWrapper.appendChild(listTitle)
    listWrapper.appendChild(ul)
    return listWrapper
}

const lists = fetch("links.json")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        container.appendChild(createLinkListIcon(data.apps))
        const section = document.createElement("section")
        section.classList.add("list-section")
        data.other.forEach(function (list) {
            section.appendChild(createLinkList(list.title, list.links))
        })
        container.appendChild(section)
    })
