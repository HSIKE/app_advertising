(function() {
  /* Detect the system's language and set the text should be displayed */
  const isIOS = navigator.userAgent.match(/iPhone/);
  window.isIOS = isIOS;
  const store = isIOS ? 'App Store' : 'Google Play';

  function getLocaleText(lang) {
    switch (lang.toLowerCase()) {
      case 'zh-cn':
        return [
          '源于效率，不止交易',
          '为交易者而生',
          `${store} 下载`,
          '本地下载',
          '专注于\n数字货币衍生品领域',
          '优势介绍',
          '价格提醒推送',
          '绝不错失每一次行情',
          '一键止盈止损',
          '下单即可设置，便捷操作提升效率',
          '多维度分享',
          '实时收益及历史收益，战绩展示更丰富',
          // '百万美金市场深度',
          // '$6点差内超过600万美金深度（BTC/USD），杜绝滑点',
          // '高可用撮合引擎',
          // '每秒100,000笔单一合约撮合，绝无Overload',
          '双套价格机制',
          '智能、公平、透明的价格算法，杜绝恶意“插针”',
          '更多优势，下载体验',
          '双套价格机制',
          '冷钱包体系',
          '零成本开仓',
          '人性化体验',
          '高级交易功能'
        ];
      case 'zh-hk':
      case 'zh-tw':
        return [
          '源於效率,不止交易',
          '為交易者而生',
          `${store} 下載`,
          '本地下載',
          '專注於\n數字貨幣衍生品領域',
          '優勢介紹',
          '價格提醒推送',
          '絕不錯失每一次行情',
          '一鍵止盈止損',
          '下單即可設置，便捷操作提升效率',
          '多維度分享',
          '即時收益及歷史收益，戰績展示更豐富',
          // '百萬美金市場深度',
          // '$6點差內超過600萬美金深度（BTC/USD），杜絕滑點',
          // '高可用撮合引擎',
          // '每秒100,000筆單一合約撮合，絕無Overload',
          '雙套價格機制',
          '智能、公平、透明的價格演算法，杜絕惡意“插針”',
          '更多優勢，下載體驗',
          '雙套價格機制',
          '冷錢包體系',
          '零成本開倉',
          '人性化體驗',
          '高級交易功能'
        ];
      case 'ja-jp':
        return [
          'トレーダーのために',
          '構築されたアプリ',
          `${store} へ`,
          'ダウンロード',
          '仮想通貨\nデリバティブに特化',
          '長所',
          'リアルタイム価格通知',
          '外出先でも価格通知を受信可能',
          '利食/損切注文が設定',
          'ポジション決済機能で取引がより簡単',
          'お友達とシェア',
          'リアルタイム収益、歴史収益など；他人に多様な内容がシェアできる',
          // '百万ドル 市場の厚み',
          // '$6以内、BTC/USDの注文量が600万以上；スプレッド最安',
          // '高速TPSエンジン',
          // '10万TPSの高速エンジン；注文拒否なし、いつもサクサク通る',
          '二重価格メカニズム',
          'スマート、公平、透明な計算方法；非倫理的な市場操作を途絶させる',
          '今すぐダウンロード',
          '二重価格メカニズム',
          'コールドウォレット',
          'ポジション設定コストなし',
          '使いやすさ',
          'ハイレベルな取引機能'
        ];
      case 'ko-kr':
        return [
          '효율적인 트레이딩',
          '트레이더를 위해\n디자인된 플랫폼',
          `${store} 다운로드`,
          '파일 다운로드',
          '암호화폐 파생상품\n전문 거래소',
          '장점',
          '실시간 가격 알림',
          '시세 변화를 놓치지 않고 최적의 시기에 투자 가능',
          '원 터치로 목표가 손절가 설정',
          '주문 후 다양한 청산 전략 설정으로 더욱 쉽고 높은 수익 창출',
          '다양한 쉐어링 페이지',
          '실시간 수익과 이전 거래 내역 등 다양한 디스플레이 제공',
          // '백만달러의 마켓뎁스',
          // '$6달러 내의 BTC/USD 600만달러 이상의 마켓뎁스, 적은 슬리피지',
          // '업계 최고 수준의 매칭엔진',
          // '100,000 TPS  매칭엔진, 오버로드와 없는 거래환경',
          '듀얼-가격 메커니즘',
          '스마트하고, 공평하고 투명한 가격 시스템 제공',
          '더 많은 기능을 다운로드 후 바로 체험해 보세요',
          '듀얼-가격 메커니즘',
          '콜드웰렛 시스템',
          '리스크 없이 거래하기',
          '고객 맞춤 서비스',
          '고급 거래 기능'
        ];
      case 'ru-ru':
        return [
          'Безопасная и эффективная платформа для торговли криптовалютой',
          'Создана трейдерами для трейдеров',
          `Загрузить с ${store}`,
          'Загрузка на ПК',
          'Ориентирована на\nкриптовалютные деривативы',
          'Преимущества Введение',
          'Уведомления о цене',
          'Никогда не пропускайте движения цены',
          'Тейк профит и стоп лосс в один клик',
          'Установить в один клик из окна подтверждения ордера',
          'Функция поделиться профитом и потерями',
          'Делитесь удачными и неудачными сделками в социальных сетях с функцией поделиться профитом и потерями',
          // 'Глубина рынка в миллионы долларов',
          // 'Глубина более 6 миллионов долларов США на 6 пунктов (BTC/USD), устраняющая проскальзывания',
          // 'Современное ядро',
          // '100 000 контрактов в секунду, без перегрузок',
          'Индекс Спотовых Цен и Система Ценовой Маркировки',
          'Вас никогда не ликвидирует несправедливо',
          'Скачать сейчас, чтобы торговать криптовалютами на ходу',
          'Индекс Спотовых Цен и Система Ценовой Маркировки',
          'Система холодных кошельков',
          'Открывайте позиции без затрат ',
          'Человечность',
          'Расширенные торговые функции'
        ];
      default:
        return [
          'A Safe, Efficient Cryptocurrency Trading Platform',
          'Designed for Traders by Traders', `${store} Download`,
          'Desktop Download',
          'Focused on\nCryptocurrency Derivatives',
          'Advantages',
          'Price Alert Notifications',
          'Never miss any market price movements',
          'One Click Take Profit and Stop Loss',
          'Set in one click from the order confirmation window',
          'Profit and Loss Sharing Feature',
          'Share the ups and downs of trading with your friends on social media with the profit and loss sharing feature',
          // 'Multi-Million Dollar Market Depth',
          // 'Over 6 million US dollars in depth within 6 pips (BTC / USD), eliminating slippage',
          // 'Advanced Matching Engine',
          // '100,000 contracts TPS, no overload',
          'Spot Price Index and Mark Price System',
          'Never get your position liquidated unfairly',
          'Download Now to Trade in Cryptocurrency on the Go',
          'Spot Price Index and Mark Price System',
          'Cold Wallet System',
          'Open Positions for no Cost',
          'The Human Touch',
          'Advanced Trading Functions'
        ];
    }
  }
  window.i18n = getLocaleText(navigator.language);
})();