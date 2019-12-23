const fetch = require('node-fetch');
const fs = require('fs');

const makeid = (length) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const makeNum = (length) => {
  var result           = '';
  var characters       = '123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const getStatusVoc = () => {
  const ngeRandom = makeid(3)
  const ngeNum = makeNum(1)
  const KodePromo = `SHELL100${ngeNum}${ngeRandom}`
  const headers = {
    "content-type": "application/json",
    "cookie": `DID=e66ad260bb445d9511b828ffd2b6e0c33eab1791c355f82f6e1ff6e8aa5d3249fcd4368925483d8d0f2bd5024a0b84a1; _abck=5195F521FF9C04A8BDB2DDE4E525121F~0~YAAQMaIAF04b135uAQAAM2rLMAN0D/ujs7oXzXecH/4Bu+WKCdKefzuUAPfbZOYW1HsGPX4a0eGhj/hxMxbbMU46xGHg++/QGhNilYA8DmHgFsZwWBpCYJ9v3CxnheRIS7uOT+1oKjRq5mcd6wZZM5YuKxK4AFzwEGGRcNjPuOU5F9dOQ7m10hj6jCrg6+2fxQOU8o2VF/v2ayVbW1I2WUVC0oIJY3MSKpKB4TrqSsAjABcWLQCdaX4kiDuZX7m4Id3hg+q39yFcla5rhGgi63Xw9k+/XwR5Lu4Q7xk5dxJ3TyZgaFlJFXY72d91r0WmN1JF4Cf6M4aaVg==~-1~-1~-1; _gcl_au=1.1.1874622611.1577071636; __auc=7f87fc0516f30cb6e3ab025cc32; _ga=GA1.2.302989949.1577071636; _gid=GA1.2.443598882.1577071636; _fbp=fb.1.1577071638345.1011796171; cto_lwid=720419a0-e95c-4042-8d07-21fd94660f8c; _hjid=869efb42-5faa-4180-93e6-5895460d82b7; lang=id; S_L_22913f292be7e37354acb175d8522645=4cf5746b981503337c9264e97087e436~20200322102738; zarget_visitor_info=%7B%7D; _ID_autocomplete_=073541776fd82682eeb0cb40bc2ef316; _BID_TOKOPEDIA_=ad08e84d069ce98f8d33e2ca132886b7; shipping_notif=0; _SID_Tokopedia_=KRW-pzaALsE3jc0g_OXkOe4sB9ZP15Rx6rt9QfyCZF-Y-SKZMsuY3gWDpUUpmYHESvtxrQEgTU3uamvXBiLMKLAcb9vxUagrxFlzUNz3Dx5hBG_sttWtd_lmCB1CyGXn; g_yolo_production=1; CSHLD_SID=3ba31a14edd66c1ddf51635657e58d143fc1a9cc6afc284fac7e981e255b20ee; S_L_37a5c8003425cea2c0f9a85b74a17972=fef0963c30c7a7a120fb9a65819b1346~20200322113236; l=1; lasty=8; tuid=84470659; TOPATK=GCWJbgsASemT08rMkIQPRw; TOPRTK=qh9mCtQORyqt0mQbAclrZQ; aus=1; isWebpSupport=true; RT="sl=1&ss=1577075556675&tt=10386&obo=0&sh=1577075567088%3D1%3A0%3A10386&dm=tokopedia.com&si=91df6a18-a761-40b1-96b9-46e79001f947&bcn=%2F%2F684d0d3e.akstat.io%2F&r=https%3A%2F%2Fwww.tokopedia.com%2Fveringameshop%2Fnintendo-switch-online-12-month-membership-for-usa-account&ul=1577075582940&hd=1577075583426"; bm_sz=68946EF1ABEB5CBE75E4F685E8327FAE~YAAQMaIAF3zs2X5uAQAACzqrMQZNo5Itat61q952r5U4keL0cJfAVvqOn+WtjvK/Z3J/cRDCgIH9pCYsWZGKLnGLQaZL80P+RaPJtxo6BqD8DJ17VWk25huR2//aB1wtD0Y8hHFYKmbe4SZCNR7N5rcoaufz7yFqmCeS9Z3098IGESYgaLJ2p4AArdngoDLr52SF; ak_bmsc=8DF9D668909F82E87350973A363AEB4D1700A231630700005E6D005ED2E5B76E~ploNvXiJin+8G+7Tfr7UvczpRv7kUN0EvDwQg56pawC/ay+Z9IRjXvAEBvo0xpz5cElQfS+B6G3welO3cdV18keAyAYbjug+3jBvIZyN/6jPrmcBNzWEs45Q5pAhqx+scc1EwJieCcFxTBQPNScwmDyyYfIOrfDDEIZ/s79paJh5ANV2f4pwLkyte2wVf1tFmhFD8Ghx8fUjy9Djz4lZXhYGwjDLPl9CO3xn+SaiJtmBYn331N27jAhLYSiCqqAcjm; __asc=d789c48616f31ab430b38129dbc; bm_sv=FFCDB0A529365076BF12EE4F9A24A6A7~U7vs+qhQ0+hMOOWSuLRi7a/QnnPB1gHdwo48Sh5gX9291SuDLkacNYCq7Q5EwbHTytSrEee2FoqcuxSxXbsg5Ypb3STw0YabEuNOanxtct+hc7m2zVp7ODPWMEj2eSkm054FfpWG51z/ab2yP+d540TPx8iQm0tpmoQ8xt3MUzg=; _dc_gtm_UA-9801603-1=1; _gat_UA-9801603-1=1`,
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
  }
  
  const body = [ 
    { 
       "operationName":"get_promo_stack_first",
       "variables":{ 
          "params":{ 
             "promo":{ 
                "codes":[ 
                  KodePromo
                ],
                "orders":[ 
                   { 
                      "shop_id":1590759,
                      "unique_id":"1590759-0-13563",
                      "product_details":[ 
                        {product_id: 526049368, quantity: 1}
                      ],
                      "codes":[  ]
                   }
                ],
                "skip_apply":0,
                "is_suggested":0,
                "cart_type":"default",
                "state":"cart",
                "current_apply_code":{ 
                   "code":KodePromo,
                   "type":"global"
                }
             }
          }
       },
       "query":"mutation get_promo_stack_first($params: PromoStackRequest) {\n  get_promo_stack_first(params: $params) {\n    status\n    data {\n      global_success\n      message {\n        state\n        color\n        text\n        __typename\n      }\n      success\n      promo_code_id\n      title_description\n      discount_amount\n      cashback_wallet_amount\n      cashback_advocate_referral_amount\n      cashback_voucher_description\n      invoice_description\n      gateway_id\n      is_coupon\n      coupon_description\n      voucher_orders {\n        code\n        success\n        unique_id\n        cart_id\n        type\n        cashback_wallet_amount\n        discount_amount\n        invoice_description\n        title_description\n        message {\n          state\n          color\n          text\n          __typename\n        }\n        __typename\n      }\n      benefit_summary_info {\n        final_benefit_text\n        final_benefit_amount\n        summaries {\n          description\n          type\n          amount_str\n          amount\n          __typename\n        }\n        __typename\n      }\n      clashing_info_detail {\n        clash_message\n        clash_reason\n        is_clashed_promos\n        options {\n          voucher_orders {\n            cart_id\n            code\n            shop_name\n            potential_benefit\n            promo_name\n            unique_id\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      tracking_details {\n        product_id\n        promo_codes_tracking\n        promo_details_tracking\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
    }
  ]
  
  fetch('https://gql.tokopedia.com/', {
    method: 'post',
      body: JSON.stringify(body),
      headers: headers
    })
    .then(res => res.json())
    .then(json => {
      const valid = "Promo ini hanya dapat digunakan di aplikasi Android dan aplikasi iOS"
      if (json[0].data.get_promo_stack_first.data.message.text === valid){
        console.log(KodePromo+' '+json[0].data.get_promo_stack_first.data.title_description)
        fs.appendFile('kodeValid.txt', KodePromo+'\r\n',
          err => {
            if (err) throw err;
            console.log("Tersimpan di kodevalid.txt");
        })
      } else {
        console.log(KodePromo+" "+json[0].data.get_promo_stack_first.data.message.text)
      }
    })
    .catch(err => {
      console.log(err)
    })
}

setInterval(() => {
  getStatusVoc()
}, 100)