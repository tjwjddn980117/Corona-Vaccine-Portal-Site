import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './pages/MainPage.vue'
import LoginPage from './pages/LoginPage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import IdSearchPage from './pages/IdSearchPage.vue'
import MapPage from './pages/MapPage.vue'
import NewsPage from './pages/NewsPage.vue'
import CovidVaccinationPage from './pages/CovidVaccinationPage.vue'
import CovidVaccineReviewPage from './pages/CovidVaccineReviewPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/Login',
            component: LoginPage
        },
        {
            path: '/Register',
            component: RegisterPage
        },
        {
            path: '/Search',
            component: IdSearchPage
        },
        {
            path: '/CovidMap',
            component: MapPage
        },
        {
            path: '/News',
            component: NewsPage
        },
        {
            path: '/CovidVaccination',
            component: CovidVaccinationPage
        },
        {
            path: '/CovidVaccineReview',
            component: CovidVaccineReviewPage
        },
    ]
})