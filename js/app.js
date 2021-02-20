if(/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){  
  $("video[class='v-bg']").css('display','none')
  $("img[class='v-bg']").css('display','')
  console.log($('.v-bg'))
}else if(/iPad/i.test(navigator.userAgent)){ // ipad
  $("img[class='v-bg']").css('display','none')
  $("video[class='v-bg']").css('display','')
}else {
  $("img[class='v-bg']").css('display','none')
  $("video[class='v-bg']").css('display','')
}
$('.otherLink>.row').delegate('.col', 'click', function () {
  const name = $(this).text().trim()
  switch (name) {
    case "博客":
      window.open('https://nciao.gitee.io/myblog/');
      break;
    case "作品":
      window.open('http://dms.nciao.cn');
      break;
    // case "关于":
    //   $(location).attr('href', 'https://nciao.gitee.io/myblog/');
    //   break;
    default:
      break;
  }
})
$('.contact>.row>.col').click(function () {
  // console.log($(this).index())
  const i = $(this).index()
  switch (i) {
    case 0:
      window.open('https://github.com/Ciao-yay');
      break;
    case 1:
      window.open('http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=-pCRiJvQzs__j4-QnZGT');
      break;
    case 2:
      window.open('https://www.twitter.com/Nove68818473');
      break;
    case 3:
      window.open('https://www.instagram.com/truthy50/');
      break;
    case 4:
      window.open('https://qm.qq.com/cgi-bin/qm/qr?k=gqPFb0jkuFoEkHjfUK8noYVb4WrAjenA&noverify=0');
      break;
    case 5:
      // $(location).attr('href', 'https://weibo.com/Nove01');
      window.open('https://weibo.com/Nove01')
      break;
    default:
      break;
  }
})