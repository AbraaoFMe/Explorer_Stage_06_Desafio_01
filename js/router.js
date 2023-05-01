const navLinks = document.querySelectorAll("nav ul li a")

function setNav() {
    navLinks.forEach(link => {
        if (window.location != link.href) {
            link.classList.remove("selected")
        } else {
            link.classList.add("selected")
        }

    })
}

function setBackground(route) {
    document.body.classList = [route]
}

export class Router {
    routes = {}

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || routes[404]

        fetch(route.html)
            .then(data => data.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
            })

        document.title = route.title
        setBackground(route.style)
        setNav()
    }

    addRoute(endpoint, page_adress, title, style) {
        this.routes[endpoint] = {
            html: page_adress,
            title,
            style
        }
    }
}