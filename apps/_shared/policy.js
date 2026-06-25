// 共通プライバシーポリシー & サポート情報を生成する。
// 各アプリの index.html では window.APP_CONFIG を定義してから本スクリプトを読み込む。
//
// 例:
//   <script>
//     window.APP_CONFIG = {
//       name: "ITパスポート学習アプリ",
//       contactEmail: "your-email@example.com",
//       updatedAt: "2026年6月25日",
//       usesAdMob: true,
//       usesIpaContent: true,
//       extraNotes: "<p>追加で書きたいことがあればここに HTML で。</p>"
//     };
//   </script>
//   <script src="../_shared/policy.js"></script>

(function () {
  const cfg = window.APP_CONFIG || {};
  const name = cfg.name || "アプリ";
  const email = cfg.contactEmail || "your-email@example.com";
  const updated = cfg.updatedAt || "";

  document.title = `${name} - サポート / プライバシーポリシー`;

  const root = document.getElementById("policy-root");
  if (!root) return;

  const adMobSection = cfg.usesAdMob ? `
    <h3>2. 収集する情報</h3>
    <p>
      本アプリは広告配信のために Google AdMob を使用しており、以下の情報が収集される場合があります。
    </p>
    <ul>
      <li>デバイス識別子（広告ID / IDFA）</li>
      <li>おおよその位置情報（IPアドレスから推定される地域情報）</li>
      <li>アプリの利用状況（操作ログ、画面遷移）</li>
      <li>広告の表示・クリック履歴</li>
      <li>クラッシュ情報・パフォーマンス情報</li>
    </ul>
    <p>
      本アプリ自体は、個人を特定できる情報（氏名、メールアドレス等）を直接収集することはありません。
    </p>

    <h3>3. 情報の利用目的</h3>
    <ul>
      <li>パーソナライズされた広告の配信</li>
      <li>広告効果の測定</li>
      <li>アプリの品質改善・不具合修正</li>
    </ul>

    <h3>4. サードパーティサービス</h3>
    <p>本アプリは以下のサードパーティサービスを利用しています。</p>
    <ul>
      <li>
        Google AdMob -
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
          プライバシーポリシー
        </a>
      </li>
    </ul>

    <h3>5. トラッキングの停止</h3>
    <p>
      iOS の「設定」→「プライバシーとセキュリティ」→「トラッキング」から、
      本アプリによるトラッキングを無効にできます。
    </p>
    <p>
      また「設定」→「プライバシーとセキュリティ」→「Apple広告」から、
      パーソナライズされた広告を無効にすることもできます。
    </p>
  ` : `
    <h3>2. 収集する情報</h3>
    <p>
      本アプリは、個人を特定できる情報を収集しません。
      学習履歴等のデータは、お使いの端末内にのみ保存されます。
    </p>
  `;

  const ipaSection = cfg.usesIpaContent ? `
    <h3>6. 著作権・出典</h3>
    <p>
      本アプリで使用している試験問題は、独立行政法人情報処理推進機構（IPA）が公開している
      過去問題を出典としています。
    </p>
    <ul>
      <li>出典: 独立行政法人情報処理推進機構</li>
      <li>
        <a href="https://www.ipa.go.jp/shiken/mondai-kaiotu/about_use.html" target="_blank" rel="noopener">
          https://www.ipa.go.jp/shiken/mondai-kaiotu/about_use.html
        </a>
      </li>
    </ul>
  ` : "";

  const extra = cfg.extraNotes || "";

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="../">← アプリ一覧</a>
    </div>

    <h1>${name}</h1>

    <h2>お問い合わせ / サポート</h2>
    <p>ご質問・ご要望は以下までご連絡ください。</p>
    <ul>
      <li>メール: <a href="mailto:${email}">${email}</a></li>
      <li>返信目安: 3営業日以内（土日祝を除く）</li>
    </ul>

    <hr />

    <h2>プライバシーポリシー</h2>
    ${updated ? `<p class="updated">最終更新日: ${updated}</p>` : ""}

    <h3>1. はじめに</h3>
    <p>
      本プライバシーポリシーは、「${name}」（以下「本アプリ」）における
      ユーザー情報の取り扱いについて定めるものです。
    </p>

    ${adMobSection}
    ${ipaSection}
    ${extra}

    <h3>7. プライバシーポリシーの変更</h3>
    <p>
      本ポリシーは予告なく変更される場合があります。
      変更後のポリシーは本ページに掲載した時点で効力を生じます。
    </p>

    <h3>8. お問い合わせ</h3>
    <p>本ポリシーに関するご質問は以下までご連絡ください。</p>
    <ul>
      <li>メール: <a href="mailto:${email}">${email}</a></li>
    </ul>
  `;
})();
