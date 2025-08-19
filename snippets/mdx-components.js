import React from 'react';

// アイテム追加の基本手順コンポーネント
export function ItemAddBasicSteps({ course }) {
  const content = require('./item-add-basic-steps.mdx').default;
  return React.createElement(content, { course });
}

// アイテム追加方法の説明コンポーネント
export function ItemAddMethodsIntro({ course }) {
  const content = require('./item-add-methods-intro.mdx').default;
  return React.createElement(content, { course });
}

// メンバー追加の手順コンポーネント
export function MemberAddSteps({ course }) {
  const content = require('./member-add-steps.mdx').default;
  return React.createElement(content, { course });
}

// スマートフォンアプリダウンロードコンポーネント
export function SmartphoneAppDownload() {
  const content = require('./smartphone-app-download.mdx').default;
  return React.createElement(content);
}

// 一括アイテム追加の手順コンポーネント
export function BulkItemAddSteps({ course }) {
  const content = require('./bulk-item-add-steps.mdx').default;
  return React.createElement(content, { course });
}

// 属性項目追加の手順コンポーネント
export function AttributeAddSteps({ course }) {
  const content = require('./attribute-add-steps.mdx').default;
  return React.createElement(content, { course });
}

// バーコード機能コンポーネント
export function BarcodeFunctionality({ course }) {
  const content = require('./barcode-functionality.mdx').default;
  return React.createElement(content, { course });
}

// 商品写真登録コンポーネント
export function PhotoRegistration({ course }) {
  const content = require('./photo-registration.mdx').default;
  return React.createElement(content, { course });
}

// グリッド表示の説明コンポーネント
export function GridViewExplanation() {
  const content = require('./grid-view-explanation.mdx').default;
  return React.createElement(content);
} 