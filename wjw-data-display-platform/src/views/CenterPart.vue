<template>
  <div class="container">
  	<!--头部-->
  	<div class="head">
  		<span class="bgTitle">
  			{{headName}}
  		</span>
  	</div>
	<!--运营大厅-->
	<div class="operateWrap">
	    <h1>运营大厅</h1>
	    <div class="operateBox">
	      <div v-for="(item,index) in sumData" :key="item.id" class="operateItem"  :class="item.className">
	        <div :class="getClass(index)" ></div>    
	        <div class="data num">{{ item.num }}</div>
	        <div class="data txt">{{ item.txt }}</div>
	      </div>
	    </div>
    </div>
    <!--地图模块-->
    <div class="map">
    	<!--网络安全指数-->
    	<div class="yw-target-wrap">
			<span class="yw-target-lable" data-type="homeIndex">网络安全总指数</span>
			<div class="yw-target-img">
				<i class="iconImg icon3" style="left: 85%;">
					<span class="target-img-txt">78</span>
				</i>
				<ul>
					<li>差</li>
					<li>中</li>
					<li>良</li>
					<li>优</li>
				</ul>
				<div class="scale">
					<span>0</span>
					<span>60</span>
					<span>80</span>
					<span>90</span>
					<span>100</span>
				</div>
			</div>
		</div>
    </div>
  </div>
</template>

<script>
  import PropertyTitle from '@/components/PropertyTitle';
  import ModuleCenterTitle from "@/components/ModuleCenterTitle";
  import "../../public/css/aim.css";  

  export default {
    name: 'Property',
    components: { PropertyTitle, ModuleCenterTitle },
    data() {
      return {
      	//头部名称
      	headName:'健康大脑云网中心',
      	
        //运营大厅 
        sumData: [
          { id: '1', txt: '事件总数', num: '1230',className:"color-1" },
          { id: '2', txt: '未处理', num: '21763',className:"color-2"},
          { id: '3', txt: '处理中', num: '346',className:"color-3"},
          { id: '4', txt: '处理完成', num: '387',className:"color-4"},
          { id: '5', txt: '隐患总数', num: '5120',className:"color-1"},
          { id: '6', txt: '未处理', num: '1230',className:"color-2"},
          { id: '7', txt: '处理中', num: '21763',className:"color-3"},
          { id: '8', txt: '处理完成', num: '346',className:"color-4"},
          { id: '9', txt: '通报总数', num: '387',className:"color-1"},
          { id: '10', txt: '未处理', num: '5120',className:"color-2"},
          { id: '11', txt: '处理中', num: '1230',className:"color-3"},
          { id: '12', txt: '处理完成', num: '21763',className:"color-4"},
        ],
      };
    },
   computed:{
	   	getClass(){
	   		const arr = [1,5,9];
	   		return function(index){
	   			return Boolean(arr.find(item=>item===index+1))?'aim-one':'img';
	// 			return index %4===0?'aim-one':'img';
	// 			return 'aim-one';
	   		}
	   	},
   }
  };
</script>
<style lang="less" scoped>
  @font-face {
    font-family: "DIGITAL REGULAR";
    src: url('../../public/font/DIGITAL REGULAR.TTF') format('truetype'),
  }

  @font-face {
    font-family: "优设标题黑";
    src: url('../../public/font/优设标题黑.ttf') format('truetype'),
  }
  @font-face {
    font-family: "演示斜黑体";
    src: url('../../public/font/演示斜黑体.otf') format('truetype'),
  }
  
 .container {
  	@imgUrl: "../../public/images";
  	
  	position: relative;
    text-align: left;
    /*padding: 0 15px;*/
    width: 652px;
    box-sizing:border-box;
    z-index: 10;
    ul{
  		padding-inline-start: 0;
  		margin-block-start: 0;
		margin-block-end: 0;
		li{
			list-style: none;
		}
  	}
    /*head 头部*/
    .head{
    	position: absolute;
    	top: -2px;
    	left: calc((100% - 691px)/2);
        background: url('@{imgUrl}/operate-bt.png') no-repeat;
        background-size: 100% 100%;
        width:691px;
        height:65px;
        display: flex;
    	.bgTitle{
    		width: 100%; 
    		text-align: center;
    		font-size:36px;
    		line-height: 43px;
		    font-family: "演示斜黑体";
		    color: #e6fcff;
    	}
    }
	/*运营大厅*/
	.operateWrap{
		width: 100%;
	    h1 { 
		    margin-top: 42px;
		    text-indent: 30px;
	    	padding: 0;
	    	width: 100%;
	    	font-size: 26px;
	    	color: #59b7ff; 
	    	font-family: "优设标题黑";
	    	font-weight: normal;
	    	margin-block-end: 5px;
	    	zoom: 1;
	    }
	    .operateBox {
	    	width: 100%;
	      	display: flex;
	      	flex-wrap: wrap;
	      	.operateItem {
		        position: relative;
		        width: 25%;
		        height: 53px;
		        margin-bottom: 10px;
		        display: flex;
		        flex-direction: column;
		        align-items: center;
		        .color(@bgColor){
		        	.data.num {
		            background-image: -webkit-linear-gradient(bottom, @bgColor, #fff);
		          	}
		        }
				&.color{
					&-1{
						.color(#ebbc72);
					}
					&-2{
						.color(#ffa694);
					}
					&-3{
						.color(#94d8ff);
					}
					&-4{
						.color(#84ffa4);
					}
				}
		        .img {
			        position: absolute;
			        top: 15px;
			        width: 97px;
			        height: 51px;
			        display: inline-block;
			        background: url("@{imgUrl}/operate-19.png") no-repeat;
			        z-index: 0;
			        
		        }
		        .aim-one{
		        	position: absolute;
			        top: -25px;
			        width: 97px;
			        height: 80px;
			        display: inline-block;
			        z-index: 0;
		        }
		        
		        .data {
					display: inline-flex;
					justify-content: center;
					font-weight: bold;
					color: white;
					/* //background-image: -webkit-linear-gradient(bottom,#ebbc72,#fff); */
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					z-index: 1;
		        }
	
		        .num {
		          font-size: 26px;
		          line-height: 33px;
		          font-family: "DIGITAL REGULAR";
		        }
	
		        .txt {
		          font-size: 14px;
		          font-family: "微软雅黑";
		          font-weight: bold;
		          background-image: -webkit-linear-gradient(bottom, #63dfff, #fff);
		          -webkit-background-clip: text;
		          -webkit-text-fill-color: transparent;
		        }
	      	}
	    }
    }
    /* 地图 */
    .map {
      position: relative;
      width: 100%;
      height: 500px;
      display: block;
      /*网络安全指数*/
		.yw-target{
		    @mapUrl1: @imgUrl;
		    @defaultFontSize: 12px;  
		    &-wrap{
		        position: absolute; 
		        top: 25px;
		        right: 25px;
		        z-index: 10;
		        + .yw-homePage-mapLegend{
		            padding-top: 56px !important;
		        } 
		    }
		    &-lable{
		        float: left;
		        text-align: center;
		        padding: 0 13px;
		        font-size: @defaultFontSize;
		        color: #fff; 
		    }
		    &-img{ 
		        position: relative;
		        margin: auto;
		        background: url('@{mapUrl1}/zs.png') no-repeat;
		        background-size: 100% 100%;
		        width:126px;
		        height:16px;
		        display: inline-block;
		        /*刻度*/
		        .scale{
		            position: relative;
		            width: 100%;
		            span{
		                float: left;
		                text-align: left;
		                font-size: @defaultFontSize - 3;
		                line-height: 20px;
		                color: white;
		               /* font-family: "微软雅黑";*/
		                &:nth-child(1){
		                    width: 35%; 
		                    position: relative;
		                    left: -5px; 
		                }
		                &:nth-child(2){ 
		                    width: 21%;
		                }
		                &:nth-child(3){
		                    width: 20%;
		                }
		                &:nth-child(4){
		                    /*width: 5%;*/
		                }
		                &:last-child{
		                    position: absolute;
		                    right: -13px;
		                    text-align: right;
		                    top: 15px;
		                }
		            }
		        }
		        .iconImg {
		            width: 19px;
		            height: 16px;
		            top: -20px;
		            position: absolute;
		            text-align: center;
		            margin-left: -20px;
		            color: white;
		            /*//差*/
		            &.icon1 {
		                background: url('@{mapUrl1}/zs-4.png') no-repeat;
		                background-size: 100%;
		            }
		            /*//中*/
		            &.icon2 {
		                background: url('@{mapUrl1}/zs-3.png') no-repeat;
		                background-size: 100%;
		            }
		            /*//良*/
		            &.icon3 {
		                background: url('@{mapUrl1}/zs-2.png') no-repeat;
		                background-size: 100%;
		            }
		            /*//优*/
		            &.icon4 {
		                background: url('@{mapUrl1}/zs-1.png') no-repeat;
		                background-size: 100%;
		            }
		        }
		        .target-img-txt{
		            font-size: @defaultFontSize;
		            display: inline-block;
		        }
		        ul {
		            width: 100%;
		            li {
		                float: left;
		                text-align: center;
		                font-size: @defaultFontSize;
		                /*line-height: 24px;*/
		                color: white;
		                &:nth-child(1) {
		                    width: 40%;
		                }
		                &:nth-child(2) {
		                    width: 20%;
		                }
		                &:nth-child(3) {
		                    width: 24%;
		                }
		                &:nth-child(4) {
		                    width: 15%;
		                }
		            }
		        }
		    } 
		}
    }
  }
</style>