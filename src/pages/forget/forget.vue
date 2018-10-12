<template>
    <div class="restContainer">
        <Head :headTitle="'重置密码'" goBack="true"></Head>
        <form class="restForm">
            <section class="input_container phone_number">
                <input type="text" placeholder="账号" name="phone" maxlength="11" v-model="phone">
            </section>
            <section class="input_container">
                <input type="text" placeholder="旧密码" name="oldPassWord" v-model="oldPassWord">
            </section>
            <section class="input_container">
                <input type="text" placeholder="请输入新密码" name="newPassWord" v-model="newPassWord">
            </section>
            <section class="input_container captcha_code_container">
                <input type="text" placeholder="请确认密码" name="confirmPassWord" v-model="confirmPassWord">
                <div class="img_change_img">
                    <img :src="captchaCodeImg" v-show="captchaCodeImg" alt="">
                    <div class="change_img" @click="getCapchaCode">
                        <p>看不清</p>
                        <p>换一张</p>
                    </div>
                </div>
            </section>
        </form>
        <div class="login_container" @click="resetButton">确认修改</div>
        <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </div>
</template>

<script>
    import Head from "../../components/header/head";
    import AlertTip from "../../components/common/alertTip";

    export default {
        components:{
          Head,
          AlertTip
        },
        data(){
            return {
                newPassWord: null,
                oldPassWord: null,
                confirmPassWord: null,
                captchaCodeImg: null,
                showAlert: false,
                alertText: null
            }
        },
        methods:{
            getCapchaCode(){

            },
            resetButton(){
                this.alertText= "修改成功！";
                this.showAlert = true;
            },
            closeTip(){
                this.showAlert = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    .restContainer{
        padding-top: 1.95rem;
    }
    .restForm{
        background-color: #fff;
        margin-top: .6rem;
        .input_container{
            display: flex;
            justify-content: space-between;
            padding: .6rem .8rem;
            border-bottom: 1px solid #f1f1f1;
            input{
                @include sc(.7rem, #666);
            }
            button{
                @include sc(.65rem, #fff);
                font-family: Helvetica Neue,Tahoma,Arial;
                padding: .28rem .4rem;
                border: 1px;
                border-radius: 0.15rem;
            }
            .right_phone_number{
                background-color: #4cd964;
            }
        }
        .phone_number{
            padding: .3rem .8rem;
        }
        .captcha_code_container{
            height: 2.2rem;
            .img_change_img{
                display: flex;
                align-items: center;
                img{
                    @include wh(3.5rem, 1.5rem);
                    margin-right: .2rem;
                }
                .change_img{
                    display: flex;
                    flex-direction: 'column';
                    flex-wrap: wrap;
                    width: 2rem;
                    justify-content: center;
                    p{
                        @include sc(.55rem, #666);
                    }
                    p:nth-of-type(2){
                        color: #3b95e9;
                        margin-top: .2rem;
                    }
                }
            }
        }
    }
    .captcha_code_container{
        height: 2.2rem;
        .img_change_img{
            display: flex;
            align-items: center;
            img{
                @include wh(3.5rem, 1.5rem);
                margin-right: .2rem;
            }
            .change_img{
                display: flex;
                flex-direction: 'column';
                flex-wrap: wrap;
                width: 2rem;
                justify-content: center;
                p{
                    @include sc(.55rem, #666);
                }
                p:nth-of-type(2){
                    color: #3b95e9;
                    margin-top: .2rem;
                }
            }
        }
    }
    .login_container{
        margin: 1rem .5rem;
        @include sc(.7rem, #fff);
        background-color: #4cd964;
        padding: .5rem 0;
        border: 1px;
        border-radius: 0.15rem;
        text-align: center;
    }
</style>
