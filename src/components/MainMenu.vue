<template>
<div class="col-xxl-1 d-xxl-block d-none">
    <div class="bostami-main-menu-wrap">
        <nav class="bastami-main-menu main_menu">
            <ul>
                <li class="active">
                    <router-link to="/about">
                        <span>
                            <i class="fa-light fa-address-card"></i>
                        </span>
                        about
                    </router-link>
                </li>
                <li>
                    <router-link to="/resume">
                        <span>
                            <i class="fa-light fa-file-user"></i>
                        </span>
                        Resume
                    </router-link>
                </li>
                <li>
                    <router-link to="/works">
                        <span>
                            <i class="fa-light fa-briefcase"></i>
                        </span>
                        Works
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact">
                        <span>
                            <i class="fa-light fa-address-book"></i>
                        </span>
                        contact
                    </router-link>
                </li>

                <!-- <li>
                    <a href="blog.html">
                        <span>
                            <i class="fa-light fa-newspaper"></i>
                        </span>
                        Blogs
                    </a>
                </li> -->
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

</style>
