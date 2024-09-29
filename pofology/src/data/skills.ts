import { Skill } from '@/types';


export const skills: Skill[] = [
  {
    id: 1,
    title: 'Python',
    publishedAt: '7 April 2022',
    thumbnailUrl: '/images/skill/python_icon_image.png',
    imageUrl: '/images/skill/python_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Traffic Management System',
      'Blind Person Guide',
      'Futops surveillance system',
      'Panorama Generation',
      'Rope Jump Counter App',
      'Farmer Product Selling App'
    ],
    experience: '3 years',
    versionlist: [
      '3.7',
      '3.8',
      '3.9',
      '3.10',
      '3.11',
      '3.12',
    ],
    featureslist: [
      'Numpy',
      'Pandas',
      'OpenCV',
      'Pytorch',
      'Keras',
      'Onnx'
    ],
    summary: 'Experienced in Python, proficient in multiple programming paradigms \
    such as object-oriented, procedural, and functional programming. Skilled in developing \
    efficient solutions for tasks involving web development, data analysis, machine learning, \
    and automation. Expertise in optimizing performance through libraries and frameworks, \
    while ensuring cross-platform compatibility. Strong ability to utilize Python ecosystem \
    for enhancing code efficiency and scalability across a broad range of applications.',
    content: '',
  },
  {
    id: 2,
    title: 'C++',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/cpp_icon_image.png',
    imageUrl: '/images/skill/cpp_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Futops surveillance system',
      'Panorama Generation'
    ],
    experience: '2 years',
    versionlist: [
      "11",
      "17"
    ],
    featureslist: [
      'Standard Template Library',
      'Input/Output Streams',
      'String',
      'OpenCV',
      'nlohmann/json'
    ],
    summary: 'Skilled in C++, with experience in object-oriented programming, memory management, \
    and algorithm optimization. Experience includes developing efficient code for \
    performance-critical, real-time systems, working with data structures, multi-threading, \
    and hardware-level programming. Also proficient in optimizing computer vision algorithms for \
    speed and accuracy using C++.',
    content: '',
  },
  {
    id: 3,
    title: 'Linux',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/linux_icon_image.png',
    imageUrl: '/images/skill/linux_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Traffic Management System',
      'Blind Person Guide',
      'Futops surveillance system',
      'Panorama Generation'
    ],
    experience: '3 years',
    versionlist: [
      "Linux_6",
      "Linux_5"
    ],
    featureslist: [
      'Ubuntu 20.4, 22.4'
    ],
    summary: 'Experienced in Linux, proficient in system administration, shell scripting,\
     and process management. Skilled in managing file systems, user permissions, and network \
     configurations. Expertise includes optimizing system performance, automating tasks, and \
     working with Linux-based servers for deployment and monitoring of applications. Familiar \
     with Linux tools and utilities to enhance productivity and streamline system operations.',
    content: '',
  },
  {
    id: 4,
    title: 'Docker',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/docker_icon_image.png',
    imageUrl: '/images/skill/docker_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Traffic Management System',
      'Futops surveillance system',
      'Panorama Generation'
    ],
    experience: '2 years',
    versionlist: [
      "27.3",
      "23.0"
    ],
    featureslist: [
      'Build',
      'Compose',
      'Networking',
      'Image',
      'Containers'

    ],
    summary: 'Proficient in creating multiple containers from a single image to \
    optimize resource usage and streamline deployment. Strong understanding of \
    Docker networking, enabling seamless communication between containers and external \
    systems. Skilled in Docker volume management for persistent data storage and \
    efficient resource utilization. Experience in ensuring scalability and flexibility \
    of containerized applications, enhancing system performance while maintaining isolated, \
    secure environments.',
    content: '',
  },
  {
    id: 5,
    title: 'ZeroMQ',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/zeromq_icon_image.png',
    imageUrl: '/images/skill/zeromq_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Traffic Management System',
      'Futops surveillance system',
      'Panorama Generation'
    ],
    experience: '2 years',
    versionlist: [
      "4.3.5"
    ],
    featureslist: [
      'pyzmq | Python',
      'zmqpp | C++',
      'REQ-REP',
      'PUB-SUB',
      'PUSH-PULL',
      'Bind-Connect'
    ],
    summary: 'Experienced in ZeroMQ (ZMQ) for building scalable, high-performance \
    distributed applications. Proficient in implementing communication patterns \
    such as publish-subscribe and request-reply for asynchronous messaging. Skilled \
    in enabling Docker-to-Docker communication using ZMQ sockets, ensuring low-latency, \
    fault-tolerant systems. Expertise in optimizing message queuing and load balancing \
    to facilitate high-throughput data transfer in real-time applications',
    content: '',
  },
  {
    id: 6,
    title: 'AWS Rekognition',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/aws_rekognition_icon_image.png',
    imageUrl: '/images/skill/aws_rekognition_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Blind Person Guide'
    ],
    experience: '1 years',
    versionlist: [
      "2024"
    ],
    featureslist: [
      'Label Detection',
      'Custom Labels',
      'Image annotation',
    ],
    summary: 'Proficient in AWS Rekognition, with experience in custom image annotation \
    and training custom models for specific use cases. Skilled in utilizing the AWS \
    Rekognition Custom Labels feature to enhance object and scene detection tailored \
    to unique requirements. Experienced in managing data preparation, model training,\
     and performance evaluation, ensuring high accuracy and relevance in image analysis \
     applications.',
    content: '',
  },
  {
    id: 7,
    title: 'AWS Sagemaker',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/aws_sagemaker_icon_image.png',
    imageUrl: '/images/skill/aws_sagemaker_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Blind Person Guide'
    ],
    experience: '1 years',
    versionlist: [
      "8/31/2023"
    ],
    featureslist: [
      'Jupyter Notebooks',
      'Model Training',
      'Data Labeling'
    ],
    summary: 'Proficient in Jupyter Notebooks for interactive data analysis and visualization, \
    facilitating model development and experimentation. Experienced in model training, utilizing \
    various algorithms and frameworks to optimize performance and accuracy. Skilled in data \
    labeling to create high-quality training datasets, ensuring effective model learning and \
    reliable outcomes in machine learning projects.',
    content: '',
  },
  {
    id: 8,
    title: 'AWS S3 Bucket',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/aws_s3_bucket_icon_image.png',
    imageUrl: '/images/skill/aws_s3_bucket_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Blind Person Guide'
    ],
    experience: '1 years',
    versionlist: [
      "April 2023"
    ],
    featureslist: [
      'Read Operations',
      'Write Operations'
    ],
    summary: 'Experienced in Amazon S3 for managing read and write operations effectively. \
    Proficient in optimizing read operations for quick data retrieval and efficient data \
    access patterns. Skilled in handling write operations, ensuring data integrity and \
    consistency while managing bulk uploads and updates. Expertise includes utilizing S3 \
    features such as multipart uploads and versioning to enhance performance and reliability \
    in cloud-based data storage solutions.',
    content: '',
  },
  {
    id: 9,
    title: 'AWS EC2 instance',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/aws_ec2_instance_icon_image.png',
    imageUrl: '/images/skill/aws_ec2_instance_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Blind Person Guide'
    ],
    experience: '1 years',
    versionlist: [
      "Ubuntu 22.04",
      "Nvidia A10"
    ],
    featureslist: [
      'Storage-optimized',
      'Elastic IP Addresses',
      'Amazon EBS ',
      'Integration with Other AWS Services: AWS Rekognition'
    ],
    summary: 'Proficient in AWS EC2 instances, particularly in configuring storage-optimized \
    instances for high-performance data processing and analysis. Experienced in managing \
    Elastic IP addresses for stable and reliable network connectivity. Skilled in utilizing \
    Amazon EBS for persistent block storage, ensuring data durability and availability. \
    Expertise includes integrating EC2 instances with other AWS services, such as \
    AWS Rekognition, to create scalable and efficient machine learning solutions for image \
    and video analysis.',
    content: '',
  },
  {
    id: 10,
    title: 'Pytorch',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/pytorch_icon_image.png',
    imageUrl: '/images/skill/pytorch_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Traffic Management System',
      'Futops surveillance system',
    ],
    experience: '3 years',
    versionlist: [
      "1.5",
      "1.9",
      "1.13",
      "2.2"
    ],
    featureslist: [
      'CUDA',
      'ONNX Export',
      'Distributed Training',
      'Interoperability',
      'Loss Functions',
      'Optimizers',
      'Esy to use',
      'Pre-trained Models'
    ],
    summary: 'Proficient in PyTorch and CUDA for developing deep learning models and \
    leveraging GPU acceleration for high-performance training. Experienced in building \
    and training neural networks using PyTorch dynamic computation graph for flexibility \
    and ease of debugging. Skilled in optimizing model performance through techniques \
    like transfer learning and hyperparameter tuning, while utilizing CUDA for efficient \
    computation. Expertise includes implementing custom loss functions and layers, as well \
    as applying PyTorch in various applications, including computer vision and natural language \
    processing.',
    content: '',
  },
  {
    id: 11,
    title: 'Tensorflow',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/tensorflow_icon_image.png',
    imageUrl: '/images/skill/tensorflow_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Rope Jump Counter App',
      'Farmer Product Selling App'
    ],
    experience: '1 years',
    versionlist: [
      "2.1",
      "2.13"
    ],
    featureslist: [
      'TensorFlow Lite',
      'TensorFlow Serving'
    ],
    summary: 'Proficient in TensorFlow Lite for optimizing and deploying machine \
    learning models on mobile and edge devices. Experienced in using TensorFlow Serving \
    for managing and serving production-ready models, ensuring efficient inference and \
    scalability in deployment. Skilled in converting models for both TensorFlow Lite and \
    TensorFlow Serving, facilitating seamless integration into applications and enhancing \
    performance in real-time environments.',
    content: '',
  },
  {
    id: 12,
    title: 'Keras',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/keras_icon_image.png',
    imageUrl: '/images/skill/keras_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Rope Jump Counter App',
      'Farmer Product Selling App'
    ],
    experience: '2 years',
    versionlist: [
      "2.6",
      "2.10"
    ],
    featureslist: [
      'User-Friendly API',
      'Support for Multiple Backends',
      'Training and Evaluation Utilities',
      'Integration with TensorFlow',
      'Multi-GPU Support',
      'Model Serialization'
    ],
    summary: 'Proficient in Keras, utilizing its user-friendly API for building and training \
    deep learning models efficiently. Experienced in leveraging Keras support for multiple \
    backends, allowing flexibility in model execution. Skilled in utilizing training and \
    evaluation utilities to streamline the model development process. Expertise includes \
    seamless integration with TensorFlow for enhanced capabilities and performance. \
    Familiar with implementing multi-GPU support for accelerated training, as well \
    as model serialization for easy saving and loading of trained models.',
    content: '',
  },
  {
    id: 13,
    title: 'YOLO',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/yolo_icon_image.png',
    imageUrl: '/images/skill/yolo_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Traffic Management System',
      'Futops surveillance system',
    ],
    experience: '2 years',
    versionlist: [
      "YOLOv5",
      "YOLOv8"
    ],
    featureslist: [
      'Real-Time Detection',
      'Anchor Boxes',
      'Higher Accuracy',
      'Real-Time Performance',
      'Support for PyTorch',
      'Simplified Training Process',
      'Pre-trained Models'
    ],
    summary: 'Proficient in YOLO (You Only Look Once) for real-time object detection applications. \
    Experienced in utilizing anchor boxes to improve detection accuracy across various object sizes. \
    Skilled in achieving higher accuracy and real-time performance, making YOLO suitable for \
    time-sensitive applications. Expertise includes support for PyTorch, enabling flexible model \
    development and customization. Familiar with the simplified training process for fine-tuning \
    models on specific datasets and utilizing pre-trained models to accelerate development and \
    improve performance in object detection tasks.',
    content: '',
  },
  {
    id: 14,
    title: 'ONNX',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/onnx_icon_image.png',
    imageUrl: '/images/skill/onnx_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Traffic Management System',
      'Futops surveillance system'
    ],
    experience: '2 years',
    versionlist: [
      "ONNX 1.12",
      "ONNX 1.14"
    ],
    featureslist: [
      'Model Exchange',
      'Standardized Operators',
      'Hardware Optimization',
      'Deployment Flexibility'
    ],
    summary: 'Proficient in ONNX (Open Neural Network Exchange) for facilitating model exchange \
    between different deep learning frameworks. Experienced in utilizing standardized operators \
    to ensure compatibility and efficiency across platforms. Skilled in optimizing models for \
    various hardware configurations, enhancing performance in deployment. Expertise includes \
    leveraging ONNX for deployment flexibility, enabling seamless integration of models into \
    diverse applications and environments, ensuring scalability and adaptability in production.',
    content: '',
  },
  {
    id: 15,
    title: 'OpenVino',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/openvino_icon_image.png',
    imageUrl: '/images/skill/openvino_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Traffic Management System',
      'Futops surveillance system'
    ],
    experience: '2 years',
    versionlist: [
      "OpenVINO 2022.3",
      "OpenVINO 2024.4"
    ],
    featureslist: [
      'Model Optimization',
      'Cross-Platform Deployment',
      'Inference Engine',
      'Pre-trained Models',
      'Real-time Performance'
    ],
    summary: 'Proficient in OpenVINO for model optimization, enhancing the performance of deep \
    learning models for Intel hardware. Experienced in cross-platform deployment, ensuring models \
    run efficiently across various environments. Skilled in utilizing the OpenVINO inference engine \
    for low-latency, high-throughput inference, making it suitable for real-time applications. \
    Familiar with leveraging pre-trained models to accelerate development and implementation while \
    maintaining accuracy in computer vision tasks. Expertise includes optimizing models for \
    real-time performance in edge and IoT solutions.',
    content: '',
  },
  {
    id: 16,
    title: 'OpenCV',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/skill/opencv_icon_image.png',
    imageUrl: '/images/skill/opencv_page_image.png',
    authorName: 'John Doe',
    library: '',
    projectlist: [
      'Traffic Management System',
      'Blind Person Guide',
      'Futops surveillance system',
      'Panorama Generation',
      'Rope Jump Counter App'
    ],
    experience: '3 years',
    versionlist: [
      "OpenCV 4.5.0 ",
      "OpenCV 4.7.0 ",
      "OpenCV 4.10.0 "
    ],
    featureslist: [
      'OpenCV DNN | Python, C++',
      'Image Processing',
      'Feature Detection and Description',
      'Object Detection',
      'Real-Time Capabilities',
      'Image write',
      'Image Read',
      'Image reshape',
      'Image puttext',
      'Image cropped'
    ],
    summary: 'Proficient in OpenCV, particularly in utilizing OpenCV DNN for deep \
    learning-based object detection and recognition. Experienced in various image \
    processing techniques, including feature detection and description for tasks \
    like keypoint matching. Skilled in real-time object detection and leveraging \
    OpenCV real-time capabilities for time-sensitive applications. Expertise \
    includes image read, write, reshaping, cropping, and adding text using putText \
    to enhance and manipulate images effectively for different computer vision tasks.',
    content: '',
  }
];
