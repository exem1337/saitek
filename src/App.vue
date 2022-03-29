<template>
  <!-- <div class="bg-image"></div> -->
  <app-header/>
   <!-- <transition name="bounce"> -->
  <router-view></router-view>
   <!-- </transition> -->
  <!-- <i class="material-icons bgicon icon1">filter_none</i> -->
  <!-- <Chart/> -->
</template>

<script>

import 'materialize-css'
import AppHeader from '@/components/headerNav'
import Auth from '@/views/auth'
import Chart from "@/components/chart";
export default {
  name: 'App',
  components: {
    AppHeader, Auth, Chart
  },
  data() {
    return {
    }
  }
}
</script>


<style lang="scss">
  .flex-wrapper {
    display: flex;
    justify-content: space-between;
    
  }

  .fixed-right-bottom {
    position: fixed;
    bottom: 25px;
    right: 25px;
  }

  $main-color : #8f99a3;
  .bgicon{
    font-size: 25em;
    opacity: 3%;

    .icon1 {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  body{
    //background-color: #f3ebe2 ;
    background-color: lighten(#2f79ee, 50%);

    .bg-image{
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1016%26quot%3b)' fill='none'%3e%3cpath d='M890.4226347741676 398.0106607606706L780.9254823140514 411.45522054560433 794.3700420989852 520.9523730057206 903.8671945591013 507.5078132207868z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1127.845552039088 484.4307261614897L1123.2078406325425 395.9379208949599 992.7874884360206 447.14089063804295z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M81.919%2c187.49C115.272%2c187.219%2c147.513%2c175.605%2c166.648%2c148.285C189.27%2c115.986%2c204.724%2c73.993%2c185.542%2c39.54C166.015%2c4.468%2c121.912%2c-7.353%2c81.919%2c-3.897C47.488%2c-0.922%2c22.329%2c25.059%2c5.273%2c55.116C-11.504%2c84.681%2c-22.264%2c120.264%2c-5.231%2c149.682C11.775%2c179.053%2c47.981%2c187.766%2c81.919%2c187.49' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1436.878%2c414.528C1484.319%2c413.171%2c1526.69%2c384.067%2c1547.929%2c341.625C1567.223%2c303.07%2c1556.087%2c258.439%2c1533.302%2c221.839C1511.998%2c187.618%2c1477.058%2c166.489%2c1436.878%2c163.244C1389.142%2c159.389%2c1335.542%2c163.808%2c1309.088%2c203.73C1280.537%2c246.816%2c1287.45%2c304.112%2c1314.245%2c348.312C1340.057%2c390.89%2c1387.107%2c415.952%2c1436.878%2c414.528' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1457.82%2c304.334C1514.706%2c308.057%2c1566.018%2c271.916%2c1594.999%2c222.824C1624.501%2c172.849%2c1630.015%2c111.211%2c1601.747%2c60.528C1572.777%2c8.585%2c1517.106%2c-27.879%2c1457.82%2c-23.135C1404.223%2c-18.846%2c1372.017%2c32.197%2c1348.934%2c80.758C1329.618%2c121.395%2c1328.871%2c166.246%2c1348.572%2c206.698C1371.492%2c253.759%2c1405.586%2c300.916%2c1457.82%2c304.334' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1152.3703778860568 569.838303343364L1223.8286094558125 455.4812279780726 1109.4715340905211 384.0229964083168 1038.0133025207654 498.3800717736083z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M129.549%2c182.749C164.441%2c183.87%2c203.092%2c174.51%2c219.007%2c143.439C234.124%2c113.926%2c214.148%2c81.153%2c195.701%2c53.599C179.934%2c30.048%2c157.837%2c11.554%2c129.549%2c9.817C97.832%2c7.869%2c64.477%2c17.55%2c47.648%2c44.505C29.955%2c72.843%2c32.492%2c109.254%2c49.52%2c137.996C66.218%2c166.18%2c96.807%2c181.697%2c129.549%2c182.749' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M13.608592070114643 124.27828106228111L-38.8304045883231 150.99728440570846 27.467598756036793 216.2962777216514z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M979.04%2c554.176C1025.067%2c552.669%2c1056.542%2c511.801%2c1077.218%2c470.651C1095.5%2c434.265%2c1096.36%2c393.16%2c1078.273%2c356.676C1057.635%2c315.048%2c1025.367%2c276.168%2c979.04%2c272.616C927.142%2c268.637%2c874.04%2c293.274%2c849.419%2c339.132C825.806%2c383.112%2c843.286%2c434.716%2c869.055%2c477.468C893.786%2c518.498%2c931.159%2c555.744%2c979.04%2c554.176' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M248.0419147960687 59.63364342149882L193.20164099294755 188.82923220300424 322.39722977445297 243.6695060061254 377.2375035775741 114.47391722461998z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1016'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: .15;
        filter: blur(5px);
        -webkit-filter: blur(5px);
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
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.big-font{
  font-size: 1.5em;
}

.btn {
  font-size: 15px;
}

textarea {
  font-size: 20px !important;
}

.browser-default {
  font-size: 20px !important;
}
</style>
