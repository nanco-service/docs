import React from 'react';

// 大きな再生ボタン付き動画コンポーネント
export function VideoWithBigPlayButton({ src, alt, className }) {
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', maxWidth: '100%' }}>
      <video 
        ref={videoRef}
        controls={isPlaying}
        loop 
        muted 
        className={className}
        style={{ 
          maxWidth: '100%', 
          height: 'auto',
          display: 'block'
        }}
        onEnded={handleVideoEnded}
      >
        <source src={src} type="video/webm" />
        {alt || 'お使いのブラウザは動画の再生に対応していません。'}
      </video>
      
      {!isPlaying && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            zIndex: 10
          }}
          onClick={handlePlay}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid white',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '20px solid white',
                borderTop: '12px solid transparent',
                borderBottom: '12px solid transparent',
                marginLeft: '4px'
              }}
            />
          </div>
          <div
            style={{
              color: 'white',
              textAlign: 'center',
              marginTop: '10px',
              fontSize: '14px',
              fontWeight: 'bold',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
            }}
          >
            クリックして再生
          </div>
        </div>
      )}
    </div>
  );
}

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