<script setup>
let topbar_open = true;

// functions
function open_close() {
  if (topbar_open) {
    topbar_open = false;
    document.getElementById("close_topbar_r").style.display = "none";
    document.getElementById("open_topbar_r").style.display = "block";

    document.getElementById("lineadd").style.display = "none";
  } else {
    topbar_open = true;
    document.getElementById("close_topbar_r").style.display = "block";
    document.getElementById("open_topbar_r").style.display = "none";

    document.getElementById("lineadd").style.display = "block";
  }
}

</script>

<template>
  <div id="topbar" class="fxx" style="position: fixed; top: 65px;">
    <div id="close_topbar_r" class="tt_btn_close" @click="open_close"><i class="fa fa-times"></i></div>
    <div id="open_topbar_r" class="tt_btn_open" @click="open_close"><i class="fa fa-plus"></i></div>
    <a id="lineadd" class="tt_img_fixed" href="https://line.me/R/ti/p/@505cfgdl?ts=05091211&oat_content=url">
      <img src="/public/img/QR_89KE.png">
      <span class="tt_tx_line">LINE : @89kev3</span>
    </a>
  </div>
</template>