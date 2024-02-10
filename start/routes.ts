import router from '@adonisjs/core/services/router'
const HomeController = () => import('#controllers/home_controller')

router.get('/', [HomeController, 'index'])
router.get('/create', [HomeController, 'create'])
router.get('/search', [HomeController, 'search'])

