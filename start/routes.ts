/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import UsersController from '#controllers/UsersController'
import router from '@adonisjs/core/services/router'

const UsersController = () => import('#controllers/users_controller')

router.on('/').render('pages/home')
router.get('/test', [UsersController, 'index'])