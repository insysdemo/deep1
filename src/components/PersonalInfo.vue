<template>
<div class="col-xxl-3 col-xl-3">
    <div class="bostami-parsonal-info-area">
        <div class="bostami-parsonal-info-wrap">

            <!-- img -->
            <div class="bostami-parsonal-info-img">
                <img :src="require('@/assets/img/parsonal-info/deep-img-1.png')" alt="avatar">
            </div>

            <!-- name -->
            <h4 class="bostami-parsonal-info-name">
                <a href="#">Deep Detroja</a>
            </h4>
            <span class="bostami-parsonal-info-bio mb-15">Web Developer/PHP Developer</span>

            <!-- socail link -->
            <ul class="bostami-parsonal-info-social-link mb-30">
                <li>
                    <a href="#" class="facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="twitter">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <!-- <a href="https://www.linkedin.com/in/deep-detroja-b48600171?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="linkedin">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a> -->
               
                    <a href="https://www.linkedin.com/in/deep-detroja-b48600171?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="linkedin" target="_blank">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
             

                </li>
            </ul>

            <!-- contact -->
            <div class="bostami-parsonal-info-contact mb-30">
                <div class="bostami-parsonal-info-contact-item phone">
                    <div class="icon">
                        <i class="fa-solid fa-mobile-screen-button"></i>
                    </div>
                    <div class="text">
                        <span>Phone</span>
                        <p>+91 8460436383</p>
                    </div>
                </div>

                <div class="bostami-parsonal-info-contact-item email">
                    <div class="icon">
                        <i class="fa-regular fa-envelope-open-text"></i>
                    </div>
                    <div class="text">
                        <span>Email</span>
                        <p>deepdetroja532@gmail.com</p>
                    </div>
                </div>

                <div class="bostami-parsonal-info-contact-item location">
                    <div class="icon">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div class="text">
                        <span>Location</span>
                        <p>Surat</p>
                    </div>
                </div>

                <div class="bostami-parsonal-info-contact-item calendar">
                    <div class="icon">
                        <i class="fa-light fa-calendar-days"></i>
                    </div>
                    <div class="text">
                        <span>Birthday</span>
                        <!-- <p>November 11th,1997</p> -->
                        <p>Nov 11th , 1997</p>
                    </div>
                </div>
            </div>

            <!-- cv button -->
            <div class="bostami-parsonal-info-btn">
                <a class="btn-1" href="/deep.pdf" download>
                    <span class="icon">
                        <i class="fa-regular fa-download"></i>
                    </span>
                    download cv
                </a>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            //   profileImage: require('@/assets/profile-pic.jpg')
        };
    }
};
</script>

<style scoped>

</style>
