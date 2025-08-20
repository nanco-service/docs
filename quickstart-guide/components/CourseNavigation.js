import React from 'react';
import courseConfig from '../course-config.json';

export function CourseNavigation({ currentCourse, currentLesson }) {
  const courses = courseConfig.courses;
  
  // 現在のコース以外のコースを取得
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
                  <a
                    key={lesson.id}
                    href={`/quickstart-guide/course-${courseId}/${lesson.id}`}
                    style={{
                      display: 'block',
                      padding: '8px 12px',
                      backgroundColor: course.color,
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      fontSize: '13px',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = course.color + 'DD';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = course.color;
                    }}
                  >
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
