<template>
<!-- resume-page-start -->
<div class="col-xxl-8 col-xl-9">
    <div class="bostami-page-content-wrap">

        <!-- page title -->
        <div class="section-wrapper pl-60 pr-60 pt-60">
            <div class="bostami-page-title-wrap mb-15">
                <h2 class="page-title">Portfolio</h2>
            </div>
        </div>

        <div class="section-wrapper pr-60 pl-60 mb-60">
            <div class="row">
                <!-- New project item with image and link -->
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                    <div class="bostami-what-do-item bg-catkrill">
                        <div class="text">
                            <div class="image">
                                <a href="https://edulab.com" target="_blank"><img src="https://edulab.com/wp-content/themes/tyxan/assets/images/EduLab logo.svg"></a>
                            </div>
                            <h4 class="title">Edulab</h4>
                            <p>in this application there is admin pannel of education system.</p>
                            <a href="https://edulab.com/" target="_blank">Visit Project</a>
                        </div>
                    </div>
                </div>

                <!-- New project item with image and link -->
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                    <div class="bostami-what-do-item bg-prink ">

                        <div class="text">
                            <div class="image">
                                <!-- <a href="https://edulab.com"><img src="https://edulab.com/wp-content/themes/tyxan/assets/images/EduLab logo.svg"></a> -->
                            </div>
                            <h4 class="title">Customer Consumer Application</h4>
                            <p>in this application there is product retails flow where customer can buy and sell products.</p>
                            <a href="https://example.com" target="_blank">Visit Project</a>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-6 col-xl-6 col-lg-6">
                    <div class="bostami-what-do-item bg-prink">
                        <div class="icon">
                        </div>
                        <div class="text">
                            <div class="image">
                                <a href="https://allclonescript.com" target="_blank"><img src="https://allclonescript.com/assets/images/clone-development/logo.svg" alt="Logo"></a>
                            </div>
                            <h4 class="title">Crypto based </h4>
                            <p>in this project the product purchased flow is based on crypto currencies and redeem functionality is also.</p>
                            <a href="https://allclonescript.com/" target="_blank">Visit Project</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- footer copyright -->
        <div class="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
            <!-- <span>© 2024 All Rights Reserved by <a href="https://themeforest.net/user/elite-themes24"
                                    target="_blank" rel="noopener noreferrer">elite-themes24</a>.</span> -->
        </div>

    </div>
</div>
<!-- resume-page-end -->
</template>

<script>
export default {
    // name: 'PortfolioSection'
};
</script>

<style scoped>
.image {
    margin: 16px;
}

a {
    box-shadow: inset 0 0 0 0 #54b3d6;
    color: #54b3d6;
    padding: 0 .25rem;
    margin: 0 -.25rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}

a:hover {
    color: #fff;
    box-shadow: inset 200px 0 0 0 #54b3d6;
    ;
}

/* Presentational styles */
a {
    color: #54b3d6;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.5;
    text-decoration: none;
}

body {
    display: grid;
    height: 100vh;
    place-items: center;
}
</style>
