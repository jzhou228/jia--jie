import Vue from 'vue'
import utils from '../utils/utils'
import Router from 'vue-router'
import store from '../vuex/store'
import axios from '../http'
//import index from '@/pages/index'
//import main from '@/page/main'
//import header from '@/page/index/header'
//import left from '@/page/index/left'

//主体路由
//logo登陆注册
import forget from '@/page/login/forget'
import share from '@/page/pages/share'

//servicesDetails服务详情
import services_details from '@/page/servicesDetails/services_details'

//releaseService发布服务
import release_service from '@/page/releaseService/release_service'
import release_category from '@/page/releaseService/release_category'
import release_rele from '@/page/releaseService/release_rele'

//releaseDemand发布需求
import release_demand from '@/page/releaseDemand/release_demand'
import release_dem_category from '@/page/releaseDemand/release_dem_category'
import release_dem_rele from '@/page/releaseDemand/release_dem_rele'
import payments from '@/page/releaseDemand/payments'

//home 首页
//import home from '@/page/home/home'
//import message from '@/page/home/message'
import search from '@/page/home/search'

//findServices找服务
import find_services from '@/page/findServices/find_service'
import findsub from '@/page/findServices/findsub'

//findJob找活干
import find_job from '@/page/findJob/find_job'
//服务详情
//import details from '@/page/pages/details'
import evaluate from '@/page/pages/evaluate'
import placeOrder from '@/page/pages/placeOrder'

//Mem会员中心
//import member from '@/page/mem/member'
//import about from '@/page/mem/about'
//import editadd from '@/page/mem/editadd' //编辑地址
//import receadd from '@/page/mem/receadd' //收货地址
//import pers from '@/page/mem/pers' //换头像
//import balance from '@/page/mem/balance' //我的余额
//import balance_more from '@/page/mem/balance_more' //余额明细
//import recharge from '@/page/mem/recharge' //余额充值
//import credit from '@/page/mem/credit' //我的积分
//import myColl from '@/page/myColl/myColl' //我的收藏
//import credit_more from '@/page/mem/credit_more' //积分明细
//import creditExplain from '@/page/mem/creditExplain' //积分说明
//import orders from '@/page/mem/orders' //订单
//import menvaluate from '@/page/mem/evaluate' //评价
//import orderDetails from '@/page/mem/orderDetails' //订单详情
//import myfb from '@/page/mem/myfb' //我的发布
//import service from '@/page/mem/service' //联系客服
//import myeval from '@/page/mem/myeval' //我的评论
//import inviting from '@/page/mem/inviting' //邀请好友
//import closeOrder from '@/page/mem/closeOrder' //关闭订单

//import setup from '@/page/setting/setup' //设置
//import setlogin from '@/page/setting/setlogin' //设置登录密码
//import setpay from '@/page/setting/setpay' //设置支付密码
//
//import balance_cash from '@/page/cash/balance_cash' //余额提现\积分提现
//import setCash from '@/page/cash/setCash' //管理账户余额
//import binding from '@/page/cash/binding' //验证安全
//import binding_next from '@/page/cash/binding_next' //绑定

//******************************店铺 ******************************
//import storeMain from '@/page/store/storeMain' //店铺主体
//import upStore from '@/page/store/upStore' //开店
//import myStore from '@/page/store/myStore' //我的店铺
//import shop from '@/page/store/store' //我的店铺
//import storeDeal from '@/page/store/storeDeal' //今日交易额
//import serverList from '@/page/store/serverList' //服务列表
//import commentAdmin from '@/page/store/commentAdmin' //评论管理
//import storeOrders from '@/page/store/storeOrders' //我的订单
//import storeApply from '@/page/store/storeApply' //申请开店
//import store_orders from '@/page/store/store_orders' //接到的单列表
//import storeProfit from '@/page/store/storeProfit' //店铺收益
//import orderDetails_x from '@/page/store/orderDetails_x' //订单详情
//import storeSet from '@/page/store/storeSet' //店铺设置
//import store_staff from '@/page/store/store_staff' //员工管理
//import staff from '@/page/store/staff' //员工详情
//
//import store_orders_x from '@/page/store/store_orders_x' //员工服务记录

//******************************1.0以上******************************

//****************************** 2.0  *******************************************************************************
//首页
//import home from '@/pages/home/home'
//import fastReservation from '@/pages/home/fastReservation'
//import service_list from '@/pages/home/service_list' //服务列表
//import service_details from '@/pages/home/service_details' //服务详情
//import onshop from '@/pages/home/shop' //服务详情
//import sub_evaluate from '@/pages/home/sub_evaluate' //评价


//我的
//import member from '@/pages/my/my_memder'
//import about from '@/pages/my/about'
//import editadd from '@/pages/my/editadd' //编辑地址
//import receadd from '@/pages/my/receadd' //收货地址
//import pers from '@/pages/my/pers' //换头像
//import balance from '@/pages/my/balance' //我的余额
//import balance_more from '@/pages/my/balance_more' //余额明细
//import recharge from '@/pages/my/recharge' //余额充值
//import credit from '@/pages/my/credit' //我的积分
//import myColl from '@/pages/my/myColl' //我的收藏
//import creditExplain from '@/pages/my/creditExplain' //积分说明
//import credit_more from '@/pages/my/credit_more' //积分明细
//import orders from '@/pages/my/orders' //订单
//import menvaluate from '@/pages/my/evaluate' //评价
//import orderDetails from '@/pages/my/orderDetails' //订单详情
//import myfb from '@/pages/my/myfb' //我的发布
//import service from '@/pages/my/service' //联系客服
//import myeval from '@/pages/my/myeval' //我的评论
//import inviting from '@/pages/my/inviting' //邀请好友
//import closeOrder from '@/pages/my/closeOrder' //关闭订单
//import setup from '@/pages/setting/setup' //设置
//import setlogin from '@/pages/setting/setlogin' //设置登录密码
//import setpay from '@/pages/setting/setpay' //设置支付密码

//import balance_cash from '@/pages/cash/balance_cash' //余额提现\积分提现
//import setCash from '@/pages/cash/setCash' //管理账户余额
//import binding from '@/pages/cash/binding' //验证安全
//import binding_next from '@/pages/cash/binding_next' //绑定

//******************************店铺 ******************************
//import storeMain from '@/pages/store/storeMain' //店铺主体
//import upStore from '@/pages/store/upStore' //开店
//import myStore from '@/pages/store/myStore' //我的店铺
//import shop from '@/pages/store/store' //我的店铺
//import storeDeal from '@/pages/store/storeDeal' //今日交易额
//import serverList from '@/pages/store/serverList' //服务列表
//import commentAdmin from '@/pages/store/commentAdmin' //评论管理
//import storeOrders from '@/pages/store/storeOrders' //我的订单
//import storeApply from '@/pages/store/storeApply' //申请开店
//import store_orders from '@/pages/store/store_orders' //接到的单列表
//import storeProfit from '@/pages/store/storeProfit' //店铺收益
//import orderDetails_x from '@/pages/store/orderDetails_x' //订单详情
//import storeSet from '@/pages/store/storeSet' //店铺设置
//import storeStaff from '@/pages/store/storeStaff' //员工管理
//import staff from '@/pages/store/staff' //员工详情
//import store_orders_x from '@/pages/store/store_orders_x' //员工服务记录






//赚钱
//import makemoney from '@/pages/makemoneys/makemoney'
//赚钱需求详情
//import detailDem from '@/pages/makemoneys/detailDem'
//消息
//import mymess from '@/pages/information/mymess'
//import notice from '@/pages/information/notice'
//import mymess from '@/pages/reservation/mymess'
//订单
//import bespeak_order from '@/pages/reservation/bespeak_order' //预约订单
//import reservation_second from '@/pages/reservation/reservation_second' //次
//import reservation_week from '@/pages/reservation/reservation_week' //周
//import ten_about from '@/pages/reservation/ten_about'

//登录
//import login from '@/pages/login/index'
//import login_bymobile from '@/pages/login/loginByMobile'

//发布服务
//import releaseService from '@/pages/service/releaseService'
//import releaseDemand from '@/pages/demand/releaseDemand'

Vue.use(Router)
const routes = [
	//	路由加在这里

	//登陆重定向，
	{
		path: '/',
		name: 'main',
		component: resolve => require(['@/page/main'],resolve),
		redirect: {
			name: 'home'
		},
		children: [{
				path: '/index',
				name: 'index',
				component: resolve => require(['@/pages/index'],resolve),
				children: [
					//  主体路由
					//pagse 首页
					{
						path: '/home',
						name: 'home',
						component: resolve => require(['@/pages/home/home'],resolve)
					},
					//赚钱
					{
						path: '/makemoney',
						name: 'makemoney',
						component: resolve => require(['@/pages/makemoneys/makemoney'],resolve)
					},
					//消息
					{
						path: '/mymess',
						name: 'mymess',
						component: resolve => require(['@/pages/information/mymess'],resolve)
					},
					//订单
					{
						path: '/ten_about',
						name: 'ten_about',
						component: resolve => require(['@/pages/reservation/ten_about'],resolve)
					},
					//Mem会员中心
					{
						path: '/member',
						name: 'member',
						component: resolve =>require(['@/pages/my/my_memder'],resolve)
					},
				]
			},
			//**********登录*************
			{
				path: '/login',
				name: 'login',
				component: resolve => require(['@/pages/login/index'],resolve)
			},
			{
				path: '/loginByMobile',
				name: 'loginByMobile',
				component: resolve => require(['@/pages/login/loginByMobile'],resolve)
			},

			//***********home***************
			//快速预约
			{
				path: '/fastReservation',
				name: 'fastReservation',
				component: resolve => require(['@/pages/home/fastReservation'],resolve)
			},
			{
				path: '/releaseService',
				name: 'releaseService',
				component: resolve => require(['@/pages/service/releaseService'],resolve)
			},
			{
				path: '/releaseDemand',
				name: 'releaseDemand',
				component: resolve => require(['@/pages/demand/releaseDemand'],resolve)
			},
			//    //需求详情
		      {
		        path: '/detailDem',
		        name: 'detailDem',
		        component: resolve => require(['@/pages/makemoneys/detailDem'],resolve)
		      },
			//服务列表
			{
				path: '/service_list',
				name: 'service_list',
				component: resolve => require(['@/pages/home/service_list'],resolve)
			},
			{ //服务详情
				path: '/service_details',
				name: 'service_details',
				component: resolve => require(['@/pages/home/service_details'],resolve)
			},
			{ //评价
				path: '/sub_evaluate',
				name: 'sub_evaluate',
				component: resolve => require(['@/pages/home/sub_evaluate'],resolve)
			},

			//选择服务型
			{
				path: '/bespeak_order',
				name: 'bespeak_order',
				component: resolve => require(['@/pages/reservation/bespeak_order'],resolve)
			},
//			提交订单次
			{
				path: '/reservation_second',
				name: 'reservation_second',
				component: resolve => require(['@/pages/reservation/reservation_second'],resolve)
			},
			//周
				{
				path: '/reservation_week',
				name: 'reservation_week',
				component: resolve => require(['@/pages/reservation/reservation_week'],resolve)
			},
			//进店看那
			{
				path: '/onshop',
				name: 'onshop',
				component: resolve => require(['@/pages/home/shop'],resolve)
			},
			{
				path: 'storeOrders',
				name: 'storeOrders',
				component: resolve =>require(['@/pages/store/storeOrders'],resolve)
			},
			   //首頁搜一搜
//    {
//      path: '/message',
//      name: 'message',
//      component: resolve =>require(['@/pages/home/message'],resolve)
//	      meta: {
//	        auth: true // 如果此路由需要微信授权请设置为true,默认为false
//	      }
//    },
			//********************我的会员中心
			{
				path: '/about',
				name: 'about',
				component: resolve => require(['@/pages/my/about'],resolve)
			},
			//我的发布
			{
				path: '/myfb',
				name: 'myfb',
				component: resolve => require(['@/pages/my/myfb'],resolve)
			},
			//我的发布 详情 （区分订单的详情数据）
			{
				path: '/myfb_details',
				name: 'myfb_details',
				component: resolve => require(['@/pages/my/myfb_details'],resolve)
			},

			{
				path: '/pers',
				name: 'pers',
				component: resolve => require(['@/pages/my/pers'],resolve)
			},
			{ //邀请好友
				path: '/inviting',
				name: 'inviting',
				component: resolve => require(['@/pages/my/inviting'],resolve)
			},
			{
				path: '/service',
				name: 'service',
				component: resolve => require(['@/pages/my/service'],resolve)
			},
			{
				path: '/myeval',
				name: 'myeval',
				component: resolve => require(['@/pages/my/myeval'],resolve)
			},
			//    //editadd编辑地址
		      {
		        path: '/editadd',
		        name: 'editadd',
		        component: resolve => require(['@/pages/my/editadd'],resolve)
		      },
			//			//设置
			{
				path: '/receadd',
				name: 'receadd',
				component: resolve => require(['@/pages/my/receadd'],resolve)
			},
			  //订单
      {
        path: 'orders',
        name: 'orders',
        component: resolve => require(['@/pages/my/orders'],resolve)
      },
      //    //订单详情
      {
        path: 'orderDetails',
        name: 'orderDetails',
        component: resolve => require(['@/pages/my/orderDetails'],resolve)
      },
      //评价
      {
        path: 'menvaluate',
        name: 'menvaluate',
        component: resolve => require(['@/pages/my/evaluate'],resolve)
      },
          //设置
      {
        path: '/setup',
        name: 'setup',
        component: resolve => require(['@/pages/setting/setup'],resolve)
      },
          {//修改登录密码
        path: '/setlogin',
        name: 'setlogin',
        component: resolve => require(['@/pages/setting/setlogin'],resolve)
      },
      {//修改支付密码
        path: '/setpay',
        name: 'setpay',
        component: resolve => require(['@/pages/setting/setpay'],resolve)
      },
         //我的余额
      {
        path: '/balance',
        name: 'balance',
        component: resolve => require(['@/pages/my/balance'],resolve)
      },
        //余额明细
      {
        path: '/balance_more',
        name: 'balance_more',
        component: resolve => require(['@/pages/my/balance_more'],resolve)
      },
      //余额充值
      {
        path: '/recharge',
        name: 'recharge',
        component: resolve => require(['@/pages/my/recharge'],resolve)
      },
      //    //我的积分
      {
        path: '/credit',
        name: 'credit',
        component: resolve => require(['@/pages/my/credit'],resolve)
      },
      //    //积分明细
      {
        path: '/credit_more',
        name: 'credit_more',
        component: resolve => require(['@/pages/my/credit_more'],resolve)
      },
          //提现
      {
        path: 'balance_cash',
        name: 'balance_cash',
        component: resolve => require(['@/pages/cash/balance_cash'],resolve)
      },
      {
        path: '/myColl',
        name: 'myColl',
        component: resolve => require(['@/pages/my/myColl'],resolve)
      },
       //店铺
      {
        path: 'storeMain',
        name: 'storeMain',
        component: resolve => require(['@/pages/store/storeMain'],resolve)
      },
      {
        path: 'upStore',
        name: 'upStore',
        component: resolve => require(['@/pages/store/upStore'],resolve)
      },
      {
        path: 'myStore',
        name: 'myStore',
        component: resolve => require(['@/pages/store/myStore'],resolve)
      },
      {
        path: 'storeDeal',
        name: 'storeDeal',
        component: resolve => require(['@/pages/store/storeDeal'],resolve)
      },
      {
        path: 'serverList',
        name: 'serverList',
        component: resolve => require(['@/pages/store/serverList'],resolve)
      },
      {
        path: 'commentAdmin',
        name: 'commentAdmin',
        component: resolve => require(['@/pages/store/commentAdmin'],resolve)
      },
      {
        path: 'storeApply',
        name: 'storeApply',
        component: resolve => require(['@/pages/store/storeApply'],resolve)
      },
      {
        path: 'store_orders',
        name: 'store_orders',
        component: resolve => require(['@/pages/store/store_orders'],resolve)
      },
      {
        path: 'storeProfit',
        name: 'storeProfit',
        component: resolve => require(['@/pages/store/storeProfit'],resolve)
      },
      {
        path: 'orderDetails_x',
        name: 'orderDetails_x',
        component: resolve => require(['@/pages/store/orderDetails_x'],resolve)
      },
      {
        path: 'store_orders_x',
        name: 'store_orders_x',
        component: resolve => require(['@/pages/store/store_orders_x'],resolve)
      },
      {
        path: 'storeSet',
        name: 'storeSet',
        component: resolve => require(['@/pages/store/storeSet'],resolve)
      },
      {
        path: 'storeStaff',
        name: 'storeStaff',
        component: resolve => require(['@/pages/store/storeStaff'],resolve)
      },
      {
        path: 'staff',
        name: 'staff',
        component: resolve => require(['@/pages/store/staff'],resolve)
      },

//
            {
        path: '/findsub',
        name: 'findsub',
        component: resolve => require(['@/page/findServices/findsub'],resolve)
      },

      //服务详情
      {
        path: '/details',
        name: 'details',
        component: resolve => require(['@/page/pages/details'],resolve)
      },
      //*********************消息

		{
			path: '/notice',
			name: 'notice',
			component: resolve => require(['@/pages/information/notice'],resolve)
		},
      	{
      		path: '/order_error',
      		name: 'order_error',
      		component: resolve => require(['@/pages/order/order_error'],resolve)
      	},
      	{
      		path: '/setCash',
      		name :'setCash',
      		component: resolve =>require(['@/pages/cash/setCash'],resolve)
      	},
      	{
      		path: '/binding',
      		name :'binding',
      		component: resolve =>require(['@/pages/cash/binding'],resolve)
      	},
      	{
      		path: '/binding_next',
      		name :'binding_next',
      		component: resolve =>require(['@/pages/cash/binding_next'],resolve)
      	},
      	{
      		path: '/share',
      		name :'share',
      		component: resolve =>require(['@/pages/my/share'],resolve)
      	},
		]
	}
]

//	    {
//	      path: '/login',
//	      name: 'login',
//	      component: login
//	    },
//    {
//      path: '/forget',
//      name: 'forget',
//      component: forget
//    },
//    {
//    	path:'/loginByMobile',
//    	name:'loginByMobile',
//    	component:login_bymobile
//    },
//
//    //首頁搜一搜
//    {
//      path: '/message',
//      name: 'message',
//      component: message,
//	      meta: {
//	        auth: true // 如果此路由需要微信授权请设置为true,默认为false
//	      }
//    },
//    {
//      path: '/search',
//      name: 'search',
//      component: search
//    },
//    //分享
//    {
//      path: '/share',
//      name: 'share',
//      component: share
//    },
//
//    //releaseService发布服务
//    {
//      path: '/release_service',
//      name: 'release_service',
//      component: release_service
//    },
//    {
//      path: '/release_rele',
//      name: 'release_rele',
//      component: release_rele
//    },
//    //类型
//    {
//      path: '/release_category',
//      name: 'release_category',
//      component: release_category
//    },
//    //需求酬金
//    {
//      path: '/release_dem_rele',
//      name: 'release_dem_rele',
//      component: release_dem_rele,
//      meta: { keepAlive: true },//当前的.vue文件需要缓存
//    },
//
//    //需求类别
//    {
//      path: '/release_dem_category',
//      name: 'release_dem_category',
//      component: release_dem_category
//    },
//    //需求类别
//    {
//      path: '/release_dem_category',
//      name: 'release_dem_category',
//      component: release_dem_category
//    },
////releaseDemand发布需求
//    {
//      path: '/release_demand',
//      name: 'release_demand',
//      component: release_demand
//    },
//    //发布需求支付页
//    {
//      path: '/payments',
//      name: 'payments',
//      component: payments
//    },
//

//
//    //服务详情
//    {
//      path: '/details',
//      name: 'details',
//      component: details
//    },
//    //更多评论
//    {
//      path: '/evaluate',
//      name: 'evaluate',
//      component: evaluate
//    },
//    //下单
//    {
//      path: '/placeOrder',
//      name: 'placeOrder',
//      component: placeOrder
//    },

//    {
//      path: '/receadd',
//      name: 'receadd',
//      component: receadd
//    },
//    //会员中心about
//    {
//      path: '/about',
//      name: 'about',
//      component: about
//    },
//    {
//      path: '/pers',
//      name: 'pers',
//      component: pers
//    },
//    //设置
//    {
//      path: '/setup',
//      name: 'setup',
//      component: setup
//    },
//    {//修改登录密码
//      path: '/setlogin',
//      name: 'setlogin',
//      component: setlogin
//    },
//    {//修改支付密码
//      path: '/setpay',
//      name: 'setpay',
//      component: setpay
//    },
//    {//邀请好友
//      path: '/inviting',
//      name: 'inviting',
//      component: inviting
//    },

//    {
//      path: '/myeval',
//      name: 'myeval',
//      component: myeval
//    },
//    //我的余额
//    {
//      path: '/balance',
//      name: 'balance',
//      component: balance
//    },
//    //余额明细
//    {
//      path: '/balance_more',
//      name: 'balance_more',
//      component: balance_more
//    },
//    //余额充值
//    {
//      path: '/recharge',
//      name: 'recharge',
//      component: recharge
//    },
//    //我的积分
//    {
//      path: '/credit',
//      name: 'credit',
//      component: credit
//    },
//    {
//      path: '/myColl',
//      name: 'myColl',
//      component: myColl
//    },

//    //积分说明
//    {
//      path: '/creditExplain',
//      name: 'creditExplain',
//      component: creditExplain
//    },
//    //提现
//    {
//      path: 'balance_cash',
//      name: 'balance_cash',
//      component: balance_cash
//    },
//
//    //我的发布
//    {
//      path: 'myfb',
//      name: 'myfb',
//      component: myfb
//    },
//
//    //订单详情
//    {
//      path: 'orderDetails',
//      name: 'orderDetails',
//      component: orderDetails
//    },
//    {
//      path: 'setCash',
//      name: 'setCash',
//      component: setCash
//    },
//
//    //提现绑定
//    {
//      path: 'binding',
//      name: 'binding',
//      component: binding
//    },
//    {
//      path: 'binding_next',
//      name: 'binding_next',
//      component: binding_next
//    },
//    //店铺
//    {
//      path: 'storeMain',
//      name: 'storeMain',
//      component: storeMain
//    },
//    {
//      path: 'upStore',
//      name: 'upStore',
//      component: upStore
//    },
//    {
//      path: 'myStore',
//      name: 'myStore',
//      component: myStore
//    },
//    {
//      path: 'shop',
//      name: 'shop',
//      component: shop
//    },
//    {
//      path: 'storeDeal',
//      name: 'storeDeal',
//      component: storeDeal
//    },
//    {
//      path: 'serverList',
//      name: 'serverList',
//      component: serverList
//    },
//    {
//      path: 'commentAdmin',
//      name: 'commentAdmin',
//      component: commentAdmin
//    },
//    {
//      path: 'storeOrders',
//      name: 'storeOrders',
//      component: storeOrders
//    },
//    {
//      path: 'storeApply',
//      name: 'storeApply',
//      component: storeApply
//    },
//    {
//      path: 'store_orders',
//      name: 'store_orders',
//      component: store_orders
//    },
//    {
//      path: 'storeProfit',
//      name: 'storeProfit',
//      component: storeProfit
//    },
//    {
//      path: 'orderDetails_x',
//      name: 'orderDetails_x',
//      component: orderDetails_x
//    },
//    {
//      path: 'store_orders_x',
//      name: 'store_orders_x',
//      component: store_orders_x
//    },
//    {
//      path: 'storeSet',
//      name: 'storeSet',
//      component: storeSet
//    },
//    {
//      path: 'store_staff',
//      name: 'store_staff',
//      component: store_staff
//    },
//    {
//      path: 'staff',
//      name: 'staff',
//      component: staff
//    },
//    //s服务列表
//    {
//      path: '/findsub',
//      name: 'findsub',
//      component: findsub
//    },
//    //servicesDetails服务详情
//    {
//      path: '/services_details',
//      name: 'services_details',
//      component: services_details
//    },
//    {
//      path: '/closeOrder',
//      name: 'closeOrder',
//      component: closeOrder
//    },

//  ]
//},

//]
// 页面刷新，重新给 token 赋值
if(window.localStorage.getItem('token')) {
	store.commit('login', window.localStorage.getItem('token'));
}

var router = new Router({
	routes,
	//  mode: 'history',
	//  打包后打开页面刷新当前页面会404 HTML5 History 模式
	//  	 routes: [shop
	//  	 { path: '*', component: NotFoundComponent }
	//  	 ]
});

function getToken() {
	return localStorage.getItem('token');
	// check_token().then(() => {
	//   return true
	// }).catch(() => {
	//   return false
	// })
}

function check_token() {
	const _fetch = axios({
		url: '/user.check.token',
		method: 'post',
		data: {}
	});
	return new Promise((resolve, reject) => {
		_fetch.then(rs => {
			if(rs.data.error == 0) {
				return resolve()
			} else {
				return reject()
			}
		}).catch(() => {
			return reject()
		})
	})
}

// if(store.state.token) {
// 	next();
// } else {
// 	next({
// 		path: '/home',
// 		//  query: {redirect: to.fullPath}
// 	})
// }

const homePage = ['/home', '/makemoney', '/mymess', '/member', '/ten_about'] // 最顶层的页面
const tokenPage = ['/member','/setup']
router.beforeEach((to, from, next) => {
	store.commit('path', {
		to: to.path,
		from: from.path
	});
	if(utils.is_android_app()) {
		const indexOf = homePage.indexOf(to.path)
		let json = {
			isArrowFinish: indexOf > -1
		};
		android.androidFinish(JSON.stringify(json));
	}
	if (getToken()) {
        axios({
            url: 'message.unread',
            data: {},
            method: 'POST'
        }).then(rs => {
            store.commit('SET_UNREAD_MESSAGE', rs.data.data.unread)
		})
	}
	if(!getToken() && (tokenPage.indexOf(to.path) > -1)) { // 判断是否有token并需要登录
		next({
			path: '/login'
		});
	}
	next();
	/* else {
	    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
	      next()
	    } else {
	      next('/login') // 否则全部重定向到登录页
	      NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
	    }
	  }*/

})
//	if(to.matched.some(r => r.meta.requireAuth)) {
//		if(store.state.token) {
//
//			next();
//		} else {
//			next({
//				path: '/home',
//				//  query: {redirect: to.fullPath}
//			})
//		}
//	} else {
//		next();
//	}

export default router;
