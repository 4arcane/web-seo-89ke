<script setup>
let nav_open = false;

// functions
function navBarToggle() {
  if (nav_open) {
    nav_open = false;
    document.getElementById("tt_ct_nav").classList.remove("tt_open");
    document.getElementById("overlay").classList.remove("active");
  } else {
    nav_open = true;
    document.getElementById("tt_ct_nav").classList.add("tt_open");
    document.getElementById("overlay").classList.add("active");
  }
}

</script>

<template>
  <div class="tt-l tt-full head_mc">
    <!-- <a id="install_m" class="tt_l logo_m install_m" href="#" onclick="install_app()"><img width="800" height="220"
        onclick="install_app()" src="../../head-download.png">
    </a><a id="install_m_close_btn" href="#" @click="closeapp()" class="team-popup-close logo_m install_m">×</a> -->

    <div class="tt_l h-linem">
      <a href="https://line.me/R/ti/p/@505cfgdl?ts=05091211&oat_content=url" target="_blank"><img width="140" height="46"
          src="/public/img/button-lineadd.jpg"></a>
    </div>
  </div>
  <div class="tt-l tt-full">
    <div class="tt_l tt_full header_bg">
      <div class="tt_l tt_full m_pc">
        <div class="tt_l tt_full header_top">
          <div class="tt_r tt_head_r">
            <div class="wrapper">
              <div class="tt_l btn_main_menu_l" @click="navBarToggle">
                <div class="nav_b">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <a class="tt_l ht_b2" href="/"><img src="/public/img/Logo_01.png"></a>
              <div id="tt_ct_nav" class="tt_ct_nav">
                <!-- <div class="tt_ct_nav tt_open"> -->
                <span class="tx_nav2">
                  <img src="/public/img/Logo_01.png">
                  <i class="fa fa-times-circle" @click="navBarToggle"></i>
                </span>
                <div class="tt_head_left">
                  <div class="menu-menu-left-container">
                    <ul id="menu-menu-left" class="nav">
                      <li id="menu-item-178"
                        class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-178 wp-menu-img wp-menu-img-before">
                        <a href="/" aria-current="page">
                          <img src="/public/img/p4-150x150-1.png" alt="p4-150x150-1.png" heigth="25px" width="25px">
                          <span>หน้าหลัก</span>
                        </a>
                      </li>
                      <li id="menu-item-162"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-162 wp-menu-img wp-menu-img-before">
                        <a
                          href="/คาสิโนออนไลน์">
                          <img src="/public/img/i3.png" alt="i3.png" heigth="25px" width="25px">
                          <span>คาสิโน</span>
                        </a>
                      </li>
                      <li id="menu-item-163"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-163 wp-menu-img wp-menu-img-before">
                        <a
                          href="/แทงบอลออนไลน์">
                          <img src="/public/img/i2.png" alt="i2.png" heigth="25px" width="25px">
                          <span>แทงบอล</span>
                        </a>
                      </li>
                      <li id="menu-item-177"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-177 wp-menu-img wp-menu-img-before">
                        <a href="/บาคาร่า">
                          <img src="/public/img/i4.png" alt="i4.png" heigth="25px" width="25px">
                          <span>บาคาร่า</span>
                        </a>
                      </li>
                      <li id="menu-item-174"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-174 wp-menu-img wp-menu-img-before">
                        <a
                          href="/เกมพนันออนไลน์">
                          <img src="/public/img/i8.png" alt="i8.png" heigth="25px" width="25px">
                          <span>เกมพนันออนไลน์</span>
                        </a>
                      </li>
                      <li id="menu-item-176"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-176 wp-menu-img wp-menu-img-before">
                        <a
                          href="/สล็อตออนไลน์">
                          <img src="/public/img/i5.png" alt="i5.png" heigth="25px" width="25px">
                          <span>สล็อตออนไลน์</span>
                        </a>
                      </li>
                      <li id="menu-item-175"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-175 wp-menu-img wp-menu-img-before">
                        <a href="/ยิงปลา">
                          <img src="/public/img/i6.png" alt="i6.png" heigth="25px" width="25px">
                          <span>ยิงปลา</span>
                        </a>
                      </li>
                      <li id="menu-item-1111"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1111 wp-menu-img wp-menu-img-before">
                        <a href="/โปรโมชั่น">
                          <img src="/public/img/promotion.png" alt="promotion.png" heigth="25px" width="25px">
                          <span>โปรโมชั่น</span>
                        </a>
                      </li>
                      <li id="menu-item-1114"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1114 wp-menu-img wp-menu-img-before">
                        <a href="/ดูบอลออนไลน์">
                          <img src="/public/img/tv.png" alt="tv.png" heigth="25px" width="25px">
                          <span>ดูบอลออนไลน์ ไฮไลท์ฟุตบอล ดูผลบอลสดที่ 89KE</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="tt_r b-main_menu">
                <div class="tt_r btn_main_menu">
                  <div class="nav_b">
                    <a title="เข้าสู่ระบบ" href="https://app.123dic.link/89ke1/login?openExternalBrowser=1">เข้าสู่ระบบ</a></div>
                </div>
                <a class="tt_r b_regis" title="สมัครสมาชิก" href="https://aff.89ke.net/aff/shhj6139n4/signup">
                  สมัครสมาชิก </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <HeadCarousel />

  <div class="tt_l tt_full bg_menu_center">
    <div class="wrapper-c">
      <div class="tt_l tt_full menu_center">
        <div class="menu-menu-h-container">
          <ul id="menu-menu-h" class="nav">
            <li id="menu-item-16"
              class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-16 wp-menu-img wp-menu-img-before">
              <a href="/">หน้าหลัก</a>
            </li>
            <li id="menu-item-23"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23 wp-menu-img wp-menu-img-before">
              <a href="/คาสิโนออนไลน์">คาสิโนออนไลน์</a>
            </li>
            <li id="menu-item-37"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-37 wp-menu-img wp-menu-img-before">
              <a href="/แทงบอลออนไลน์">แทงบอลออนไลน์</a>
            </li>
            <li id="menu-item-38"
              class="ico-register menu-item menu-item-type-post_type menu-item-object-page menu-item-38 wp-menu-img wp-menu-img-before">
              <a href="https://aff.89ke.net/aff/shhj6139n4/signup">สมัครสมาชิก</a>
            </li>
            <li id="menu-item-36"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-36 wp-menu-img wp-menu-img-before">
              <a href="/โปรโมชั่น">โปรโมชั่น</a>
            </li>
            <li id="menu-item-35"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35 wp-menu-img wp-menu-img-before">
              <a href="/ติดต่อเรา">ติดต่อเรา</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<style type="text/css" scoped>
.blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0.3;
  }
}

.team-popup-close {
  color: #fff;
  width: 30px;
  font-size: 30px;
  position: absolute;
  z-index: 999;
  top: 0px;
  right: 0px;

}

.slide_mobile {
  display: none;
}

@media screen and (max-width:800px) {
  .slide_mobile {
    display: block;
  }

  .slide_pc {
    display: none;
  }
}

.team-popup-close {
  color: #fff;
  width: 30px;
  font-size: 30px;
  position: absolute;
  z-index: 999;
  top: 0px;
  right: 0px;

}
</style>

<script>
import HeadCarousel from './HeadCarousel.vue';


export default {
  components: {
    HeadCarousel,
  },

  emits: ["link-clicked"],

  methods: {
    closeapp() {
      document.getElementById("install_m").style.display = "none";
      document.getElementById("install_m_close_btn").style.display = "none";
      // document.getElementById("sidebar-backdrop").style.display = "none";
    },
  },
};
</script>
