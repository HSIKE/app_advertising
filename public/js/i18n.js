(function() {
  /* Detect the system's language and set the text should be displayed */
  const isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/);
  window.isIOS = isIOS;
  const store = isIOS ? 'App Store' : 'Google Play';
  
  function getLocaleText(language) {
    const  lang = language.toLowerCase();
    if (['zh-cn', 'zh'].includes(lang)) {
      document.title = '为交易者而生，极致体验的交易App';
      return [
        '源于效率,不止交易',
        '为交易者而生',
        store,
        isIOS ? 'iOS内测版' :'本地下载',
        '专注于\n数字货币衍生品领域',
        '优势介绍',
        '价格提醒推送',
        '绝不错失每一次行情',
        '一键止盈止损',
        '下单即可设置，便捷操作提升效率',
        '多维度分享',
        '实时收益及历史收益，战绩展示更丰富',
        '双套价格机制',
        '智能、公平、透明的价格算法，杜绝恶意“插针”',
        '更多优势，下载体验',
        '高可用撮合引擎',
        '冷钱包体系',
        '零成本开仓',
        '人性化体验',
        '高级交易功能',
        '下载Bybit App',
        '推荐',
      ];
    }
    if (['zh-tw', 'zh-hk'].includes(lang)) {
      document.title = '交易者而生，極致體驗的交易App';
      return [
        '源於效率,不止交易',
        '為交易者而生',
        store,
        isIOS ? 'iOS内測版' : '本地下載',
        '專注於\n數字貨幣衍生品領域',
        '優勢介紹',
        '價格提醒推送',
        '絕不錯失每一次行情',
        '一鍵止盈止損',
        '下單即可設置，便捷操作提升效率',
        '多維度分享',
        '即時收益及歷史收益，戰績展示更豐富',
        '雙套價格機制',
        '智能、公平、透明的價格演算法，杜絕惡意“插針”',
        '更多優勢，下載體驗',
        '高可用撮合引擎',
        '冷錢包體系',
        '零成本開倉',
        '人性化體驗',
        '高級交易功能',
        '下載Bybit App',
        '推薦',
      ];
    }
    if (['ja-jp', 'ja'].includes(lang)) {
      document.title = '取引は一つのアプリで完結';
      return [
        'トレーダーのために',
        '構築されたアプリ',
        store,
        isIOS ? 'iOSベータ版' :'ダウンロード',
        '仮想通貨\nデリバティブに特化',
        '選ばれる理由',
        'リアルタイム価格通知',
        '外出先でも価格通知を受信可能',
        '利食/損切注文の設定',
        'ポジション決済機能で取引がより簡単',
        '損益率シェア',
        'リアルタイム収益や歴史収益がシェアできる',
        '二重価格メカニズム',
        '市場操作による強制決済からトレーダーを守る',
        '今すぐダウンロード',
        '10万TPS高速エンジン',
        'コールドウォレット',
        '参入コストなし',
        '使いやすさ',
        '高性能な取引機能',
        'ダウンロード',
        'オススメ',
      ];
    }
    if (['ko-kr', 'ko'].includes(lang)) {
      document.title = '트레이더를 위한 완벽한 App';
      return [
        '안전하고 효율적인 트레이딩',
        '트레이더를 위한 플랫폼',
        store,
        isIOS ? 'iOS Beta' : '파일 다운로드',
        '암호화폐 파생상품\n전문 거래소',
        '주요 기능',
        '실시간 가격 알림',
        '시세 변화를 놓치지 않고 최적의 시기에 투자 가능',
        '간편한 TP/SL 설정',
        '다양한 청산 전략을 더욱 간편하게 사용 가능',
        '실시간 수익 현황 확인',
        '실시간 수익과 거래 내역 정보 확인 및 공유 가능',
        '이중 가격 시스템',
        '공정하고 투명한 이중 가격 시스템 제공',
        '지금 바로 체험해보세요',
        '우수한 매칭엔진',
        '콜드월렛 시스템',
        '포지션 오픈 시제로 수수료',
        '24시간 한국어\n고객센터',
        '고급 거래 기능',
        'Bybit App 다운로드',
        '추천',
      ];
    }
    if (['ru-ru', 'ru'].includes(lang)) {
      document.title = 'Лучшее торговое приложение';
      return [
        'Криптовалютная биржа',
        'сделано трейдерами',
        store,
        isIOS ? 'iOS бета-версия' : 'Загрузка на ПК',
        'С фокусом на криптодеривативы',
        'Преимущества',
        'Уведомления о ценах',
        'Получай уведомления о движении цен',
        'Тейк профит и стоп лосс в один клик',
        'Установить в один клик из окна подтверждения ордера',
        'Функция поделиться торгами',
        'Делись своим торговым экраном с друзьями с функцией "поделиться PnL"',
        'Без перегрузок',
        '99,99% доступность платформы без простоев',
        'Скачай и торгуй на ходу ',
        'Современное ядро',
        'Холодный кошелёк',
        'Позиции без затрат',
        'Для людей',
        'Продвинутые функции',
        'Скачать приложение',
        'Премиум',
      ];
    }
    document.title = 'The Perfect App for Traders';
    return [
      'Your Trusted Crypto\nTrading Platform',
      'Designed for Traders\nby Traders',
      store,
      isIOS ? 'iOS Beta' : 'Direct Download',
      'Focused on\nCryptocurrency Derivatives',
      'Advantages',
      'Price Alert Notifications',
      'Never miss any market movements',
      'One-Click Take Profit & Stop Loss',
      'Just one click to execute TP & SL orders right from the order window ',
      'Sharing Your P&L',
      'Share real time trades with your friends',
      'No Overloads ',
      '99.99% Platform Availability & No Downtimes',
      'Get Our App & Trade Crypto On The Go',
      'Advanced Matching Engine',
      'Cold Wallet System',
      'Zero-cost Open Positions',
      'We Listen, Care, Improve',
      'Advanced Trading Functions',
      'Download Bybit App',
      'Premier'
    ];
  }
  window.i18n = getLocaleText(navigator.language);
})();
