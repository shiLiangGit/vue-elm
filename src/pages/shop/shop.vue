<template>
    <section class="animate-test">
        <button @click="showMenu" class="btn">{{text}}</button>
        <transition name="move">
            <div class="menu" v-show="show">
                <div class="inner inner-1">1</div>
                <div class="inner inner-2">2</div>
                <div class="inner inner-3">3</div>
            </div>
        </transition>
        <button class="tiao" @click="showBall">跳</button>
        <transition name="tiao">
            <div class="ball" v-show="ballShow">
                <div class="ball-inner"></div>
            </div>
        </transition>
    </section>
</template>

<script>
    export default {
        name: "shop",
        data(){
            return {
                show:false,
                ballShow:false,
                lists:[
                    "new todo list1",
                    "new todo list2",
                    "new todo list3",
                    "new todo list4",
                    "new todo list5",
                    "new todo list6",
                ]
            }
        },
        methods:{
            showMenu(){
                this.show = !this.show;
            },
            showBall(){
                this.ballShow = !this.ballShow;
            }

        },
        computed:{
            text(){
                return this.show ? "收" : "开";
            }
        }
    }
</script>

<style scoped lang="scss">
    .btn{
        position:fixed;
        top:100px;
        left:100px;
        border-radius: 50%;
        width:40px;
        height: 40px;
        background:blue;
        z-index: 100;
        color:#fff;
    }
    .menu{
        position: fixed;
        top: 100px;
        left: 100px;
        transition: all .7s ease-in;
        &.move-enter-active{
            .inner{
                transform: translate3d(0, 0, 0);
                transition-timing-function: cubic-bezier(0,.57,.44,1.97);
            }
            .inner-1{
                transition-delay: .1s;
            }
            .inner-2{
                transition-delay: .2s;
            }
            .inner-3{
                transition-delay: .3s;
            }
        }
        &.move-enter,&.move-leave-to{
            .inner{
                transition-timing-function:ease-in-out;
            }
            .inner-1{
                transform: translate3d(0, 60px, 0);
                transition-delay: .3s;
            }
            .inner-2{
                transform: translate3d(40px, 40px, 0);
                transition-delay: .2s;
            }
            .inner-3{
                transform: translate3d(60px, 0, 0);
                transition-delay: .1s;
            }
        }
        .inner{
            width:30px;
            height: 30px;
            border-radius: 50%;
            background:red;
            position: absolute;
            text-align: center;
            z-index: 99;
            color:#fff;
            transition: all .4s
        }
        .inner-1{
            top: -50px;
            left: 10px
        }
        .inner-2{
            top: -30px;
            left: -30px;
        }
        .inner-3{
            left: -50px;
            top: 10px;

        }
    }
    .tiao{
        position:fixed;
        top:150px;
        left:100px;
        border-radius: 50%;
        width:40px;
        height: 40px;
        background:blue;
        z-index: 100;
        color:#fff;
    }
    @keyframes shape-change {
        0%,100%{
            border-radius: 50%;
            background:red;
        }
        50%{
            border-radius:0;
            background: blue;
        }
    }
    @keyframes moveBall-in {
        0% {
            transform: translate3d(300px,-200px,0)
        }
        50% {
            transform: translate3d(100px,-400px,0)
        }
        100% {
            transform: translate3d(0,0,0)
        }
    }
    @keyframes moveBall-out {
        0% {
            transform: translate3d(0,0,0)
        }
        50% {
            transform: translate3d(100px,-400px,0)
        }
        100% {
            transform: translate3d(300px,-200px,0)
        }
    }
    .ball{
        position:fixed;
        top:500px;
        left:100px;
        width:40px;
        height: 40px;
        z-index: 100;
        transition: all 1s cubic-bezier(.22,-0.86,.97,.58);
        &.tiao-enter-active{
            opacity: 1;
            animation: moveBall-in 1s;
            .ball-inner{
                animation: shape-change 1s;
            }
        }
        &.tiao-leave-active{
            opacity: .8;
            animation: moveBall-out 1s;
            .ball-inner{
                animation: shape-change 1s;
            }
        }
    }
    .ball-inner{
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: red;
        transition: all 1s linear
    }

</style>