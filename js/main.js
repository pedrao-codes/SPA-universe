import { Router } from './router.js'

const router = new Router()
router.add('/', './pages/home.html')
router.add('/about-exploration', './pages/about-exploration.html')
router.add('/about-universe', './pages/about-universe.html')
router.add(404, './pages/404.html')

router.handle()

// serve para mudar a rota quando o usuário avançar/voltar a página (na esquerda do link)
window.onpopstate = () => router.handle()

window.route = () => router.route()