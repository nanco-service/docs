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

// コースナビゲーションコンポーネント
export function CourseNavigation({ currentCourse, currentLesson }) {
  // course-config.jsonを参照
  const courseConfig = {
    "courses": {
      "a": {
        "name": "Aコース",
        "description": "お手軽に始める",
        "color": "#4A90E2",
        "lessons": [
          { "id": "01-item-add-individual", "title": "個別アイテム追加" },
          { "id": "02-attribute-add", "title": "属性項目追加" },
          { "id": "03-item-add-bulk", "title": "一括アイテム追加" }
        ]
      },
      "b": {
        "name": "Bコース",
        "description": "棚卸効率重視",
        "color": "#7ED321",
        "lessons": [
          { "id": "01-item-add-individual", "title": "個別アイテム追加" },
          { "id": "02-attribute-add", "title": "属性項目追加" },
          { "id": "03-item-add-bulk", "title": "一括アイテム追加" },
          { "id": "04-member-add", "title": "メンバー追加" },
          { "id": "05-barcode-app", "title": "バーコードアプリ" }
        ]
      },
      "c": {
        "name": "Cコース",
        "description": "写真重視",
        "color": "#F5A623",
        "lessons": [
          { "id": "01-item-add-individual", "title": "個別アイテム追加" },
          { "id": "02-item-add-bulk", "title": "一括アイテム追加" },
          { "id": "03-member-add", "title": "メンバー追加" },
          { "id": "04-photo-app", "title": "写真アプリ" },
          { "id": "05-grid-view", "title": "グリッド表示" }
        ]
      }
    }
  };
  
  const courses = courseConfig.courses;
  const otherCourses = Object.keys(courses).filter(courseId => courseId !== currentCourse);
  
  return (
    <div style={{ 
      marginTop: '40px', 
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      borderRadius: '8px',
      border: '1px solid #e9ecef'
    }}>
      <h2 style={{ 
        marginTop: 0, 
        marginBottom: '20px', 
        fontSize: '18px', 
        color: '#495057',
        textAlign: 'center'
      }}>
        他のコースに移動
      </h2>
      
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        justifyContent: 'center', 
        flexWrap: 'wrap' 
      }}>
        {otherCourses.map(courseId => {
          const course = courses[courseId];
          return (
            <div key={courseId} style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              border: `2px solid ${course.color}`,
              minWidth: '200px',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                margin: '0 0 10px 0',
                color: course.color,
                fontSize: '16px',
                fontWeight: 'bold'
              }}>
                {course.name}
              </h3>
              
              <p style={{
                margin: '0 0 15px 0',
                fontSize: '14px',
                color: '#6c757d',
                lineHeight: '1.4'
              }}>
                {course.description}
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {course.lessons.map(lesson => (
                  <a key={lesson.id} href={`/quickstart-guide/course-${courseId}/${lesson.id}`} style={{
                    display: 'block',
                    padding: '8px 12px',
                    backgroundColor: course.color,
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '13px'
                  }}>
                    {lesson.title}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}