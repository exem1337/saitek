<template>
  <!-- <div class="bg-image"></div> -->
  <app-header/>
   <!-- <transition name="bounce"> -->
  <router-view></router-view>
  <!-- </transition> -->
</template>

<script>
import 'materialize-css'
import AppHeader from '@/components/header'
import Auth from '@/components/auth'
import Footer from '@/components/myFooter'
export default {
  name: 'App',
  components: {
    AppHeader, Auth, Footer
  },
  data() {
    return {
    }
  }
}
</script>


<style lang="scss">


  body{
    background-color: #f3ebe2 ;

    .bg-image{
        //background-image: url('../src/img/bg.png');
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100vw;
        height: 100%;
        filter: blur(18px);
        -webkit-filter: blur(18px);
        transition: 1000ms linear all;
    }
  }

// ::-webkit-scrollbar {
//   width: .5em;
// }

// ::-webkit-scrollbar-track {
//     margin: 0 30px;
// }

// ::-webkit-scrollbar-thumb {
//   background-color: darkgrey;
//   transition: .3s ease;
//   &:hover {
//     background-color: #80cbc4 ;

//   }

//   //outline: 1px solid slategrey;

//   border-radius: 5px;

//   // background: red;
//   // border-right: 4px white solid;
//   // background-clip: padding-box;

// }

// ::-webkit-scrollbar-corner,
//     ::-webkit-resizer {background:inherit;
//     border-right:8px solid rgba(255,255,255,.2); //optional
//     border-bottom:8px solid rgba(255,255,255,.2); //optional
// }

// ::-webkit-scrollbar-track:vertical {
//     border-right:8px solid rgba(0,0,0,.2);
// }
// ::-webkit-scrollbar-thumb:vertical {
//     border-right:8px solid rgba(255,255,255,.2);
// }


::-webkit-scrollbar {
    width: 14px;
    height: 18px;
}
::-webkit-scrollbar-thumb {
    height: 6px;
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 7px;
    -webkit-border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.15);
    //-webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);
    box-shadow: inset -122px -10px 0px rgba(0, 0, 0, 0.05), inset 1px 10px 220px rgba(0, 0, 0, 0.05);
}
::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
}
::-webkit-scrollbar-corner {
    background-color: transparent;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}


</style>
