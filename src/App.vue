<template>
<div id="app">
    <div class="page-wrapper home-1" :style="{ backgroundImage: `url(${require('@/assets/img/bg/page-bg-1.jpg')})` }">

        <!-- PRELOADER -->
        <!-- <div id="preloader">
                <div class="loader_line"></div>
            </div> -->
        <!-- /PRELOADER -->

        <!-- header-start -->
        <div class="bostami-header-area mb-30 z-index-5">
            <div class="container">
                <div class="bostami-header-wrap">
                    <div class="row align-items-center">

                        <!-- logo -->
                        <div class="col-6">
                            <div class="bostami-header-logo">
                                <!-- <a class="site-logo" href="https://bostami-bootstrap.ibthemespro.com/index.html"> -->
                                    <!-- <img :src="require('@/assets/img/logo/logo-2.png')" alt=""> -->
                                     <!-- <h1 style="color: #007bff;">Deep</h1> -->
                                <!-- </a> -->
                            </div>
                        </div>

                        <!-- menu btn -->
                        <div class="col-6">
                            <div class="bostami-header-menu-btn text-right">
                                <div class="menu-btn toggle_menu" @click="toggleMobileMenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- mobile menu -->
                <div class="mobile-menu-wrap" v-if="isMobileMenuOpen">
                    <div class="mobile-menu mobile_menu mean-container active">
                        <div class="mean-bar">
                            <a href="#nav" class="meanmenu-reveal" @click="toggleMobileMenu">
                                <span><span><span></span></span></span>
                            </a>
                            <nav class="mean-nav">
                                <ul>
                                    <li :class="{ 'active': $route.path === '/about' }">
                                        <router-link to="/about" custom v-slot="{ navigate }">
                                            <a @click="navigate(); toggleMobileMenu()">
                                                <span>
                                                    <i class="fa-light fa-address-card"></i>
                                                </span>
                                                About
                                            </a>
                                        </router-link>
                                    </li>
                                    <li :class="{ 'active': $route.path === '/resume' }">
                                        <router-link to="/resume" custom v-slot="{ navigate }">
                                            <a @click="navigate(); toggleMobileMenu()">
                                                <span>
                                                    <i class="fa-light fa-file-user"></i>
                                                </span>
                                                Resume
                                            </a>
                                        </router-link>
                                    </li>
                                    <li :class="{ 'active': $route.path === '/works' }">
                                        <router-link to="/works" custom v-slot="{ navigate }">
                                            <a @click="navigate(); toggleMobileMenu()">
                                                <span>
                                                    <i class="fa-light fa-briefcase"></i>
                                                </span>
                                                Works
                                            </a>
                                        </router-link>
                                    </li>
                                    <li :class="{ 'active': $route.path === '/contact' }" class="mean-last">
                                        <router-link to="/contact" custom v-slot="{ navigate }">
                                            <a @click="navigate(); toggleMobileMenu()">
                                                <span>
                                                    <i class="fa-light fa-address-book"></i>
                                                </span>
                                                Contact
                                            </a>
                                        </router-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- header-end -->

        <div class="container z-index-3">
            <div class="row">

                <PersonalInfo />
                <router-view />

                <MainMenu />

            </div>
        </div>

    </div>
</div>
</template>

<script>
import PersonalInfo from './components/PersonalInfo.vue';
import MainMenu from './components/MainMenu.vue';

export default {
    name: 'App',
    components: {
        PersonalInfo,
        MainMenu,
    },
    data() {
        return {
            isMobileMenuOpen: false,
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },
    },
};
</script>

<style>
@import url('assets/css/bootstrap.min.css');
@import url('assets/css/animate.min.css');
@import url('assets/css/fontawesome.min.css');
@import url('assets/css/all.min.css');
@import url('assets/css/odometer.min.css');
@import url('assets/css/meanmenu.css');
@import url('assets/css/swipper.css');
@import url('assets/css/main.css');
</style>
<style scoped>
.mean-nav .active a {
    color: #ffffff;
}

.mean-nav .active .fa-light {
    color: #ffffff;
}
</style>
