(function () {
  const $5e242911c6cb14dea85857ba73cc487c$var$$siteList = $('.siteList');
  const $5e242911c6cb14dea85857ba73cc487c$var$$lastLi = $5e242911c6cb14dea85857ba73cc487c$var$$siteList.find('li.last');
  const $5e242911c6cb14dea85857ba73cc487c$var$x = localStorage.getItem('x');
  const $5e242911c6cb14dea85857ba73cc487c$var$xObject = JSON.parse($5e242911c6cb14dea85857ba73cc487c$var$x);
  const $5e242911c6cb14dea85857ba73cc487c$var$hashMap = $5e242911c6cb14dea85857ba73cc487c$var$xObject || [{
    logo: 'A',
    url: 'https://www.acfun.cn'
  }, {
    logo: 'B',
    url: 'https://www.bilibili.com'
  }];
  const $5e242911c6cb14dea85857ba73cc487c$var$simplifyUrl = url => {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '');
  };
  const $5e242911c6cb14dea85857ba73cc487c$var$render = () => {
    $5e242911c6cb14dea85857ba73cc487c$var$$siteList.find('li:not(.last)').remove();
    $5e242911c6cb14dea85857ba73cc487c$var$hashMap.forEach((node, index) => {
      const $li = $(`<li>
      <div class="site">
        <div class="logo">${node.logo}</div>
        <div class="link">${$5e242911c6cb14dea85857ba73cc487c$var$simplifyUrl(node.url)}</div>
        <div class="close">
          <svg class="icon">
            <use xlink:href="#icon-close"></use>
          </svg>
        </div>
      </div>
    </li>`).insertBefore($5e242911c6cb14dea85857ba73cc487c$var$$lastLi);
      $li.on('click', () => {
        window.open(node.url);
      });
      $li.on('click', '.close', e => {
        e.stopPropagation();
        // 阻止冒泡
        $5e242911c6cb14dea85857ba73cc487c$var$hashMap.splice(index, 1);
        $5e242911c6cb14dea85857ba73cc487c$var$render();
      });
    });
  };
  $5e242911c6cb14dea85857ba73cc487c$var$render();
  $('.addButton').on('click', () => {
    let url = window.prompt('请问你要添加的网址是啥？');
    if (url.indexOf('http') !== 0) {
      url = 'https://' + url;
    }
    console.log(url);
    $5e242911c6cb14dea85857ba73cc487c$var$hashMap.push({
      logo: $5e242911c6cb14dea85857ba73cc487c$var$simplifyUrl(url)[0].toUpperCase(),
      url: url
    });
    $5e242911c6cb14dea85857ba73cc487c$var$render();
  });
  window.onbeforeunload = () => {
    const string = JSON.stringify($5e242911c6cb14dea85857ba73cc487c$var$hashMap);
    localStorage.setItem('x', string);
  };
  $(document).on('keypress', e => {
    const {key} = e;
    for (let i = 0; i < $5e242911c6cb14dea85857ba73cc487c$var$hashMap.length; i++) {
      if ($5e242911c6cb14dea85857ba73cc487c$var$hashMap[i].logo.toLowerCase() === key) {
        window.open($5e242911c6cb14dea85857ba73cc487c$var$hashMap[i].url);
      }
    }
  });
})();

//# sourceMappingURL=index.ad0935c5.js.map
