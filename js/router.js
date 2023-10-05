import * as updates from "./updates.js"

export class Router {
    
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
        this.handle()

        updates.updateDisplay(event.target)
    }
    
    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        updates.updateBackground(pathname)

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('main').innerHTML = html
        })
    }
}