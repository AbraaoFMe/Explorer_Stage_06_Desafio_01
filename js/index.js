import { Router } from "./router.js"

const router = new Router()

router.addRoute("/", "./pages/home.html", "Home", "home")
router.addRoute("/universe", "./pages/universe.html", "Universe", "universe")
router.addRoute("/explore", "./pages/explore.html", "Explore", "explore")
router.addRoute(404, "./pages/404.html", "Not Found", "not-found")

router.handle()

window.router = () => router()
window.onpopstate = () => handle()