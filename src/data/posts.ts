import { Post } from '@/types';

export const posts: Post[] = [
  {
    id: 1,
    title: 'Hand Pose Estimation Using Mobile Cameras',
    publishedAt: 'Jan 2, 2022',
    thumbnailUrl: 'https://suyogbargule.github.io/portfolio/images/posts/hand_pose_estimation_using_mobile_cameras.png',
    imageUrl: 'https://suyogbargule.github.io/portfolio/images/posts/hand_pose_estimation_using_mobile_cameras.png',
    authorName: 'Suyog Bargule',
    content: `
    <p>
         </p>`,
    mediumUrl: 'https://medium.com/@suyogb8392/hand-pose-estimation-using-mobile-cameras-f7dc3dcd197c'
  },
  {
  id: 2,
  title: 'Building a Lightweight Facial Recognition Web App',
  publishedAt: 'Jan 17, 2026',
  thumbnailUrl: 'https://suyogbargule.github.io/portfolio/images/posts/face.png',
  imageUrl: 'https://suyogbargule.github.io/portfolio/images/posts/face.png',
  authorName: 'Suyog Bargule',
  mediumUrl:
    'https://medium.com/@suyogb8392/building-a-lightweight-facial-recognition-web-app-with-streamlit-scrfd-and-arcface-cb36579b4373',
  content: `
    <p>
      This project demonstrates a lightweight, privacy-first facial recognition
      web application built using Streamlit, SCRFD for face detection, and ArcFace
      for embedding extraction. The system runs entirely locally and follows a
      clean, modular pipeline: detection, alignment, embedding, and similarity
      matching.
    </p>
    <p>
      The app supports face registration via webcam or image upload, real-time
      identification, and similarity scoring using cosine distance. All face
      embeddings are stored locally in a simple CSV-based store, making the system
      transparent and easy to audit.
    </p>
  `
},

];
