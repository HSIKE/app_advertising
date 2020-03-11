(function() {
  /* Detect the system's language and set the text should be displayed */
  const isIOS = navigator.userAgent.match(/iPhone/);
  window.isIOS = isIOS;
  const store = isIOS ? 'App Store' : 'Google Play';

  function getLocaleText(lang) {
    switch (lang.toLowerCase()) {
      case 'zh-cn':
        return [
          '源于效率,不止交易', '为交易者而生', store, '下载', '本地下载', '专注于\n数字货币衍生品领域', '价格提醒推送', '绝不错失每一次行情',
          '一键止盈止损', '下单即可设置，便捷操作提升效率', '多维度分享', '实时收益及历史收益，战绩展示更丰富', '百万美金市场深度',
          '$6点差内超过600万美金深度（BTC/USD），杜绝滑点', '高可用撮合引擎', '每秒100,000笔单一合约撮合，绝无Overload', '更多优势，下载体验',
          '双套价格机制', '智能、公平、透明的价格算法，杜绝恶意“插针”', '冷钱包体系', '分层确定性冷钱包体系，全方位保障账户', '零成本开仓',
          '新用户领取90美元体验金，盈利即可提现', '穿仓不分摊，杜绝社会化分摊损失', '人性化体验', '7*24小时多语言在线客服', '便捷的订单修改，移动K线即调整',
          '交易动态实时提醒，洞悉仓位变化', '高级交易功能', '支持币币兑换，一币玩转全平台', '限价单、市价单、条件单、追踪止损', '只减仓、触发后平仓、GTC、FOK、IOC',
        ];
      case 'zh-hk':
      case 'zh-tw':
        return [
          '源於效率,不止交易', '為交易者而生', store, '下載', '本地下載', '專注於\n數字貨幣衍生品領域', '價格提醒推送', '絕不錯失每一次行情',
          '一鍵止盈止損', '下單即可設置，便捷操作提升效率', '多維度分享', '即時收益及歷史收益，戰績展示更豐富', '百萬美金市場深度',
          '$6點差內超過600萬美金深度（BTC/USD），杜絕滑點', '高可用撮合引擎', '每秒100,000筆單一合約撮合，絕無Overload', '更多優勢，下載體驗',
          '雙套價格機制', '智能、公平、透明的價格演算法，杜絕惡意“插針”', '冷錢包體系', '分層確定性冷錢包體系，全方位保障帳戶', '零成本開倉',
          '新用戶領取90美元體驗金，盈利即可提現', '穿倉不分攤，杜絕社會化分攤損失', '人性化體驗', '7*24小時多語言線上客服', '便捷的訂單修改，移動K線即調整',
          '交易動態即時提醒，洞悉倉位變化', '高級交易功能', '支持幣幣兌換，一幣玩轉全平臺', '限價單、市價單、條件單、追蹤止損', '只減倉、觸發後平倉、GTC、FOK、IOC',
        ];
      default:
        return [
          'A Safe, Efficient Cryptocurrency Trading Platform', 'Designed for Traders by Traders', store, 'Download',
          'Desktop Download', 'Focused on\nCryptocurrency Derivatives',
          'Price Alert Notifications', 'Never miss any market price movements', 'One Click Take Profit and Stop Loss',
          'Set in one click from the order confirmation window', 'Profit and Loss Sharing Feature',
          'Share the ups and downs of trading with your friends on social media with the profit and loss sharing feature',
          'Multi-Million Dollar Market Depth',
          'Over 6 million US dollars in depth within 6 pips (BTC / USD), eliminating slippage',
          'Advanced Matching Engine', '100,000 contracts TPS, no overload', ''
        ];
    }
  }
  window.i18n = getLocaleText(navigator.language);
})();