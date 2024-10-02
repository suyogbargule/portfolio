import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'Traffic Management System',
    category: 'Computer Vision',
    thumbnailUrl: 'https://suyogbargule.github.io/portfolio/images/works/traffic_management_system.png',
    description: `A Traffic Management System helps cities monitor and control traffic in 
    real-time. Using data from cameras and sensors, it adjusts traffic lights and signs to 
    reduce congestion and improve safety. The system also provides drivers with real-time 
    updates, quickly detects incidents, and continuously optimizes traffic flow. TMS is 
    essential for creating safer, more efficient, and sustainable urban transportation.`,
    publishedAt: '01 July 2024',
    images: ['https://suyogbargule.github.io/portfolio/images/works/traffic_management_system.png'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      "85% Accuracy",
      "Under 1 second alert raised",
      "No-helmet detection",
      "Tribal rider detection",
      "Speed detection",
      "Red light violation",
      "Number plate detection",
      "Detection of objects: Car, truck, bicycle, motorcycle, pedestrian",
    ],
    attributes: [
      {
        name: 'Client',
        value: 'Greater Visakhapatnam Municipal Corporation',
      },
      {
        name: 'Start Date',
        value: '1 July 2024',
      },
      {
        name: 'End Date',
        value: 'Working',
      },
      {
        name: 'Category',
        value: 'Computer vision',
      },
      {
        name: 'Skills',
        value: 'OpenCV, OpenCVDNN, pytorch, OpenVino, Python, Onnx'
      },
      {
        name: 'Current Version',
        value: '1.0.0',
      },
    ],
  },

  {
    id: 2,
    title: 'Blind Person Guide',
    category: 'Amazon Web Services and Machine Learning',
    thumbnailUrl: 'https://suyogbargule.github.io/portfolio/images/works/blind_person_guide_image.png',
    description: `A blind person's stick or shirt has an attached camera that sends 
    images to Amazon Web Services, which returns instructions via headphones.`,
    publishedAt: '01 Mar 202',
    images: ['https://suyogbargule.github.io/portfolio/images/works/blind_person_guide_image.png'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      '90% accuracy for identifying a person.',
      'Multiple objects detected.',
      'Find the distance from the detected object to the blind person.'
    ],
    attributes: [
      {
        name: 'Client',
        value: 'japanese company',
      },
      {
        name: 'Start Date',
        value: '01 Mar 2024',
      },
      {
        name: 'End Date',
        value: '15 July 2024',
      },
      {
        name: 'Category',
        value: 'Amazon Web Services and Machine Learning',
      },
      {
        name: 'Skills',
        value: 'AWS Resignation, AWS Sagemaker, Image Segmentation, Vision Transformer',
      },
      {
        name: 'Current Version',
        value: '1.0.0',
      },
    ],
  },
  {
    id: 3,
    title: 'Futops surveillance system',
    category: 'Computer Vision',
    thumbnailUrl: 'https://suyogbargule.github.io/portfolio/images/works/futops_surveillance_system_icon_image.png',
    description: `A surveillance system is a network of cameras used to monitor and record activities in a specific area. 
    The system captures video or images, detects motion, and can store or transmit data for real-time
    analysis, often used for security in homes, businesses, and public spaces.per person `,
    publishedAt: '01 July 2022',
    images: ['https://suyogbargule.github.io/portfolio/images/works/futops_surveillance_system_page_image.png'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      'Person face detection.',
      'Determine the person age and gender.',
      'Detect whether the person face is masked or not.',
      'Person face recognition.',
      'Detect car license plates.',
      'Identify listed persons or cars and raise an alert or send a notification.',
      'Respond in under half a second in real-time.',
      'Detect entry into unwanted areas by any person and trigger an alert.',
      'Used in homes, malls, offices, and other places.',
      'Each person face is detected in under 40 milliseconds.'
    ],
    attributes: [
      {
        name: 'Client',
        value: 'Futops Company product',
      },
      {
        name: 'Start Date',
        value: '01 Mar 2023',
      },
      {
        name: 'End Date',
        value: '15 October 2023',
      },
      {
        name: 'Category',
        value: 'Computer vision',
      },
      {
        name: 'Skills',
        value: 'OpenCV, OpenCV DNN, PyTorch, TensorFlow, OpenVINO, C++ deploy model, ONNX.',
      },
      {
        name: 'Current Version',
        value: '1.0.0',
      },
    ],
  },

  {
    id: 4,
    title: 'Panorama Generation',
    category: 'Image Processing',
    thumbnailUrl: 'https://suyogbargule.github.io/portfolio/images/works/panorama_generation_icon_image.png',
    description: `River water coming from his area is very difficult to observe. 
    He deployed a 360-degree camera, but the problem is that capturing all views 
    in one image results in a panorama.The camera rotates 360 degrees and stops every 
    20 degrees to take a snapshot. These snapshots are then stitched together using the OpenCV Stitcher.
    he stitches using image features and a homography matrix, but it doesn’t work correctly at night. 
    he decided to use the OpenCV Stitcher model, studied various stitching models, and found that some 
    values are constant in both day and night, making it work properly.`,
    publishedAt: '20 Oct 2022',
    images: ['https://suyogbargule.github.io/portfolio/images/works/panorama_generation_page_image.png'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      'Panorama generated accurately',
      'Works properly both day and night',
      'Deployed on 64 cameras',
      'Also supports PTZ cameras.'
    ],
    attributes: [
      {
        name: 'Client',
        value: 'Japan city municipal corporation',
      },
      {
        name: 'Start Date',
        value: '20 Oct 2022',
      },
      {
        name: 'End Date',
        value: '01 Mar 2023',
      },
      {
        name: 'Category',
        value: 'Image processing',
      },
      {
        name: 'Skills',
        value: 'Python, OpenCV Stitcher model, C++.',
      },
      {
        name: 'Current Version',
        value: '1.0.0 , 2.0.0',
      },
    ],
  },

  {
    id: 5,
    title: 'Rope Jump Counter App',
    category: 'Image Processing',
    thumbnailUrl: 'https://suyogbargule.github.io/portfolio/images/works/rope_jump_counter_app_icon_image.png',
    description: `The person stands on his mobile and opens the Rope Jump Counter app.
     The app detects the person's position, visualizes the rope, and starts counting jumps. 
     It all relies on image processing.`,
    publishedAt: '15 Dec 2021',
    images: ['https://suyogbargule.github.io/portfolio/images/works/rope_jump_counter_app_page_image.png'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      'Without a rope, a person can still jump',
      '70% accuracy in counting jumps',
      'Can be used at any time and in any place.'
    ],
    attributes: [
      {
        name: 'AI4SEE Company product',
        value: '',
      },
      {
        name: 'Start Date',
        value: '15 Dec 2021',
      },
      {
        name: 'End Date',
        value: '01 May 2022',
      },
      {
        name: 'Category',
        value: 'Image processing',
      },
      {
        name: 'Skills',
        value: 'Fluter, Tensorflove lite, Firebase',
      },
      {
        name: 'Current Version',
        value: '1.0.0',
      },
    ],
  },
  {
    id: 6,
    title: 'Farmer Product Selling App',
    category: 'Data Science',
    thumbnailUrl: 'https://suyogbargule.github.io/portfolio/images/works/farmer_product_selling_app_icon_image.png',
    description: `This app allows farmers to sell their products directly to end customers, 
    setting their own prices. The Karnataka government has decided to support direct selling to 
    customers. Selling price forecasting is done using previous data.`,
    publishedAt: '10 July 2021',
    images: ['https://suyogbargule.github.io/portfolio/images/works/farmer_product_selling_app_page_image.png'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
     'Forecasting for 4 to 5 days',
     'Sales constant.'
    ],
    attributes: [
      {
        name: 'Client',
        value: 'AI4SEE Company product',
      },
      {
        name: 'Start Date',
        value: '10 July 2021',
      },
      {
        name: 'End Date',
        value: '10 Nov 2022',
      },
      {
        name: 'Category',
        value: 'Image processing',
      },
      {
        name: 'Skills',
        value: 'Fluter, Tensorflove lite, Firebase',
      },
      {
        name: 'Current Version',
        value: '1.0.0',
      },
    ],
  },
];
