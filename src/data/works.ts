import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'Chatbot',
    category: 'Generative AI',
    thumbnailUrl: 'https://suyogbargule.github.io/portfolio/images/works/chatbot_image.png',
    description: `Designed and implemented a RAG-Powered Chatbot tailored for UAE institutes.
      Leveraged LangFlow to build a native Retrieval-Augmented Generation pipeline.
      Integrated institutional data sources for accurate and up-to-date information retrieval.
      Enabled contextual understanding to provide precise, student-specific answers.
      Delivered real-time responses for queries related to courses, faculty, and institute details.
      Improved student–institute communication by reducing response delays.
      Enhanced student experience through personalized, conversational support.
      Strengthened institute engagement by making information more accessible and interactive.`,
    publishedAt: '01 July 2024',
    images: ['https://suyogbargule.github.io/portfolio/images/works/chatbot_image.png'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      "Implemented a chatbot system for all universities in the UAE to provide centralized information.",
      "Integrated the chatbot into the university website for easy student access.",
      "Enabled users to collect information about courses, scholarships, and admission details.",
      "Designed the chatbot to enhance student–university interaction through real-time responses.",
      "Improved the overall user experience by simplifying information discovery.",
    ],
    contribution: [
      "All data from the SQL database is stored in the Qdrant vector database using a combined SQL query\
       this pipeline has been implemented successfully.",
      "A RAG-based chatbot workflow has been implemented using LangFlow to interact with users.",
      "The chatbot controls the access to limited data and manages multiple user requests efficiently.",
      "The system ensures accurate and organized information delivery while handling diverse user \
      requirements.",
    ],
    attributes: [
      {
        name: 'Client',
        value: 'Greater Visakhapatnam Municipal Corporation',
      },
      {
        name: 'Start Date',
        value: '25 Aug 2025',
      },
      {
        name: 'End Date',
        value: 'Working',
      },
      {
        name: 'Category',
        value: 'Generative AI',
      },
      {
        name: 'Skills',
       value: 'LangChain, LangFlow, LangGraph, LangSmith, LLM API Models, Vector database, FastAPI, Python'
      },
      {
        name: 'Current Version',
        value: '1.0.0',
      },
    ],
  },
  {
    id: 2,
    title: 'Lead Generation',
    category: 'Generative AI',
    thumbnailUrl: 'https://suyogbargule.github.io/portfolio/images/works/lead_generation_image.png',
    description: `Developed an AI-Powered Lead Generation Agent to automate the entire prospecting workflow.
      Integrated n8n workflows to orchestrate data collection, processing, and outreach tasks seamlessly.
      Connected Apollo AI, Afify Scraper, and LinkedIn data to gather accurate company and prospect information.
      Enriched lead profiles with company insights, decision-maker roles, and verified contact details.
      Implemented AI-based analysis to score and qualify leads automatically based on relevance and potential.
      Generated personalized outreach messages and follow-up emails using LLM-powered content creation.
      Reduced manual prospecting workload by 80%, freeing teams to focus on closing deals.
      Achieved higher conversion rates, improving both lead quality and overall sales pipeline efficiency.`,
    publishedAt: '22 Jun 2024',
    images: ['https://suyogbargule.github.io/portfolio/images/works/lead_generation_image.png'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      "Define user requirements such as target industry, company name, company size, and specific employee roles or job titles.",
      "Classify company size based on employee count to filter the right prospects.",
      "Automatically discover leads using LinkedIn data, company websites, and official LinkedIn company pages.",
      "Track and analyze lead data to ensure it matches the defined requirements.",
      "Rank leads by compatibility with the company’s product or service.",
      "Automatically generate personalized outreach emails for the selected leads.",
      "Send follow-up emails automatically, customized for engagement and timing.",
      "Track and analyze email responses to measure engagement and refine outreach strategy.",
    ],
    contribution: [
      "Rank leads by compatibility with the company’s product or service.",
      "Automatically generate personalized outreach emails for the selected leads.",
      "Send follow-up emails automatically, customized for engagement and timing.",
      "Track and analyze email responses to measure engagement and refine outreach strategy.",
    ],
    attributes: [
      {
        name: 'Client',
        value: 'The company’s own product',
      },
      {
        name: 'Start Date',
        value: '22 Jan 2025',
      },
      {
        name: 'End Date',
        value: '05 Aug 2025',
      },
      {
        name: 'Category',
        value: 'Generative AI',
      },
      {
        name: 'Skills',
        value: 'Langchine, LLM API Models, Apollo, Apify, Tavily, Firecrawl, n8n workflow, FASTAPI, Python'
     },
      {
        name: 'Current Version',
        value: '1.0.0',
      },
    ],
  },
  {
    id: 3,
    title: 'Traffic Management System',
    category: 'Computer Vision',
    thumbnailUrl: 'https://suyogbargule.github.io/portfolio/images/works/traffic_management_system.png',
    description: `A Traffic Management System (TMS) helps cities manage traffic in real-time
    by using data from cameras and sensors. It adjusts traffic lights and signs to reduce
    congestion and enhance safety. The system provides drivers with real-time updates and
    quickly detects incidents. It monitors key violations, including helmet use, triple 
    riding, speed limits, wrong-way driving, traffic jams, stopped vehicles, 
    traffic pulse, route deviations, no-entry violations, and parking infractions.
    TMS is crucial for safer, more efficient, and sustainable urban transportation.`,
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
      "The YOLOv8 model is implemented for intrusion detection.",
    ],
    contribution: [
      "Red light violation, No-Helmet and triple rider detection end-to-end pipeline.",
      "Implemented best snapshot algorithm.",
      "Improve performance",
      "Training the relevant models and improving their accuracy.",
      "Object detection results after post-processing",
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
        value: '2 Jan 2025',
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
    id: 4,
    title: 'Blind Person Guide',
    category: 'Amazon Web Services and Machine Learning',
    thumbnailUrl: 'https://suyogbargule.github.io/portfolio/images/works/blind_person_guide_image.png',
    description: `A blind person's stick or shirt is equipped with a camera that captures images and
    sends them to Amazon Web Services (AWS). In AWS, the system detects objects and calculates their 
    distance from the camera. This information is then relayed in voice format to the headphones 
    attached to the person, providing them with instructions based on their surroundings.`,
    publishedAt: '01 Mar 202',
    images: ['https://suyogbargule.github.io/portfolio/images/works/blind_person_guide_page_image.png'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      '90% accuracy for identifying a person.',
      'Multiple objects detected.',
      'Find the distance from the detected object to the blind person.'
    ],
    contribution: [
      "Annotated more images.",
      "Improve performance",
      "Training the relevant models and improving their accuracy.",
      "Object detection results after post-processing",
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
    id: 5,
    title: 'Futops surveillance system',
    category: 'Computer Vision',
    thumbnailUrl: 'https://suyogbargule.github.io/portfolio/images/works/futops_surveillance_system_icon_image.png',
    description: `A surveillance system is a network of cameras used to monitor and record activities in a specific area. 
    The system captures video or images, detects motion, and can store or transmit data for real-time
    analysis, often used for security in homes, businesses, and public spaces per person `,
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
    contribution: [
      "Face detection, recognition, age-gender prediction, and masked detection end-to-end pipeline.",
      "Deploy face detection models with a response time of 30 to 35 milliseconds per face using c++.",
      "Improve performance",
      "Training the relevant models and improving their accuracy.",
      "Object detection results after post-processing",
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
    id: 6,
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
    contribution: [
      "Camera controlling to capture snapshots.",
      "Creating a panorama image using snapshots.",
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
    id: 7,
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
    contribution: [
      "Collect data from websites and other sources.",
      "Training model using TensorFlow.",
      "Create a mobile app using Flutter",
    ],
    attributes: [
      {
        name: 'Client',
        value: 'AI4SEE Company product',
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
    id: 8,
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
    contribution: [
      "Collect data from websites and other sources.",
      "Training model using ARIMA time series model.",
      "Create a mobile app using Flutter",
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
