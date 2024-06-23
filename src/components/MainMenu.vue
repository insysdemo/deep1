<template>
<div class="col-xxl-1 d-xxl-block d-none">
    <div class="bostami-main-menu-wrap">
        <nav class="bastami-main-menu main_menu">
            <ul>
                <li :class="{ 'active-li': $route.path === '/' }">
                    <router-link to="/" active-class="active-link">
                        <span>
                            <i class="fa-light fa-address-card"></i>
                        </span>
                        about
                    </router-link>
                </li>   
                <li :class="{ 'active-li': $route.path === '/resume' }">
                    <router-link to="/resume" active-class="active-link">
                        <span>
                            <i class="fa-light fa-file-user"></i>
                        </span>
                        Resume
                    </router-link>
                </li>
                <li :class="{ 'active-li': $route.path === '/works' }">
                    <router-link to="/works" active-class="active-link">
                        <span>
                            <i class="fa-light fa-briefcase"></i>
                        </span>
                        Works
                    </router-link>
                </li>
                <li :class="{ 'active-li': $route.path === '/contact' }">
                    <router-link to="/contact" active-class="active-link">
                        <span>
                            <i class="fa-light fa-address-book"></i>
                        </span>
                        contact
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</div>
<!-- main-menu-end -->
</template>

<script>
export default {
    name: 'MainMenu'
};
</script>

<style scoped>
.active-link {
    /* Define your active link styles here */
    color: #007bff; /* Blue color for the text */
    font-weight: bold;
}

.active-li {
    background-color: #1b74e4; /* Red background color for the active <li> */
}

/* Icon color and text color when active */
.active-li .fa-light {
    color: white; /* White color for the icon */
}

.active-li a {
    color: white !important; /* White color for the text */
}
</style>
