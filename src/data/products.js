import aiPoweredRover from "../../public/products/aiPoweredRover.jpeg";
import precisionSoilSensor from "../../public/products/precisionSoilSensor.jpeg";
import automaticIrrigationSystem from "../../public/products/automaticIrrigationSystem.jpg";
import dataCollection from "../../public/products/dataCollection.png";
import smartFarmingApp from "../../public/products/smartFarmingApp.jpg";
import weatherInsights from "../../public/products/weatherInsights.png";
import aiCropPrediction from "../../public/products/aiCropPrediction.png";
import cloudBasedAnalytics from "../../public/products/cloudBasedAnalytics.png";

export const products = [
  {
    name: "AI-Powered Rover",
    slug: "ai-powered-rover",
    image: aiPoweredRover,
    short_description:
      "An autonomous AI-driven rover designed for real-time farm monitoring and intelligent decision-making.",
    description:
      "The AI-Powered Smart Rover is an advanced agricultural rover equipped with intelligent sensors, machine learning capabilities, and autonomous navigation. It continuously scans the farm environment, collects real-time data, and delivers actionable insights to help farmers make faster, smarter, and more accurate decisions. Built for all terrains and weather conditions, the rover operates day and night—reducing manual labor and improving overall farm efficiency.",
    features: [
      "Autonomous field navigation using GPS, obstacle detection, and AI-based path planning",
      "Multi-sensor integration for soil, crop, and climate analysis",
      "Solar-assisted charging with long-lasting battery backup",
      "AI-powered crop health monitoring with early detection of stress and diseases",
      "Mobile app integration for real-time data and alerts",
      "All-terrain durable build suitable for diverse farm conditions",
    ],
    benefits: [
      "Reduced manual scouting and field visits",
      "Early detection of crop issues",
      "Improved yield forecasting",
      "Optimized fertilizer and water usage",
      "Lower labor and operational costs",
    ],
    ideal_for: [
      "Precision farming",
      "Large and mid-size farms",
      "Soil and crop monitoring",
      "Pest and disease early detection",
      "Data-driven decision-making",
    ],
  },
  {
    name: "Precision Soil Sensor",
    slug: "precision-soil-sensor",
    image: precisionSoilSensor,
    short_description:
      "A smart, high-accuracy soil analysis device designed for real-time monitoring and precision farming.",
    description:
      "The Precision Soil Sensor is an advanced field sensor engineered to deliver real-time, accurate measurements of essential soil parameters. Using intelligent micro-sensing technology and wireless data connectivity, it helps farmers understand soil conditions at a granular level—unlocking smarter decisions for irrigation, fertilization, and crop management. This rugged and weather-resistant sensor stays active throughout the season, continuously monitoring soil health and sending insights directly to a mobile or web dashboard. It reduces guesswork and enables precision-based farming practices that improve yield and resource efficiency.",
    features: [
      "Multi-parameter soil monitoring for moisture, temperature, pH, EC, and nutrient indicators",
      "Real-time wireless data sync to mobile or cloud dashboard",
      "Low-power, long-life operation for multi-month deployment",
      "GPS-enabled placement tracking for zone-based soil analysis",
      "Weather-resistant and durable IP-rated body",
      "App and dashboard integration for trends, alerts, and recommendations",
    ],
    benefits: [
      "Improved irrigation decisions",
      "Reduced fertilizer wastage",
      "Higher crop uniformity and yield",
      "Early detection of soil imbalances",
      "Optimized use of resources and inputs",
    ],
    ideal_for: [
      "Precision agriculture",
      "Open field cultivation",
      "Greenhouses and polyhouses",
      "Smart irrigation systems",
      "Soil mapping and zone-based farming",
    ],
  },
  {
    name: "Automated Irrigation System",
    slug: "automated-irrigation-system",
    image: automaticIrrigationSystem,
    short_description:
      "A smart, sensor-driven irrigation system that automatically delivers the right amount of water at the right time.",
    description:
      "The Automated Irrigation System is an intelligent water management solution designed to optimize irrigation with minimal human intervention. Using real-time soil moisture data, weather inputs, and crop requirements, the system determines the ideal watering schedule and quantity for each field. Equipped with advanced controllers and wireless connectivity, it ensures precise water distribution while reducing waste, saving energy, and improving crop performance. Built for farms of all sizes, the system supports both drip and sprinkler setups and can be fully managed from a mobile or web dashboard.",
    features: [
      "Real-time irrigation control based on soil moisture, weather, and crop needs",
      "Automated scheduling with customizable water cycles",
      "Integration with soil sensors and weather forecast APIs",
      "Remote control through mobile and web dashboard",
      "Supports drip, sprinkler, and hybrid irrigation systems",
      "Low-power controllers with long-range connectivity",
      "Leak detection, valve monitoring, and flow-rate tracking",
    ],
    benefits: [
      "Up to 30–50% water savings compared to manual irrigation",
      "More uniform crop growth and improved yield",
      "Reduced labor and operational effort",
      "Prevents overwatering and underwatering",
      "Enhances fertilizer efficiency in drip fertigation setups",
      "Lower pumping costs and optimized resource usage",
    ],
    ideal_for: [
      "Large and small farms",
      "Greenhouses and polyhouses",
      "Fruit orchards and vineyards",
      "Drip and sprinkler irrigation networks",
      "Water-scarce farming regions",
      "Precision agriculture setups",
    ],
  },
  {
    name: "Real-time Data Collection",
    slug: "real-time-data-collection",
    image: dataCollection,
    description:
      "A smart data acquisition system that continuously collects and streams accurate field information to support timely and informed farm decisions.",
    features: [
      "Live monitoring of soil, crop, and climate parameters",
      "Instant alerts for anomalies and threshold breaches",
      "Automatic data logging and cloud syncing",
      "High-accuracy sensor integration",
      "Data-ready dashboards for quick insights",
    ],
    content: {
      overview:
        "The Real-time Data Collection system enables farmers to track essential field parameters as they occur. With seamless sensor connectivity and automatic cloud updates, it empowers farm owners to take proactive decisions backed by live information.",
      benefits: [
        "Improves decision-making with accurate, instant field data",
        "Reduces manual scouting efforts and operational delays",
        "Enables early detection of issues such as pests, water stress, and nutrient imbalance",
        "Supports automation in irrigation, fertilization, and crop monitoring",
        "Enhances overall farm productivity and sustainability",
      ],
      applications: [
        "Smart farming and precision agriculture",
        "Soil moisture and nutrient level tracking",
        "Crop growth and health monitoring",
        "Climate and micro-weather observation",
        "Automated irrigation and fertigation",
      ],
    },
  },
  {
    name: "Smart Farm Management App",
    slug: "smart-farm-management-app",
    type: "software",
    image: smartFarmingApp,
    shortDescription:
      "A mobile-only app that helps farmers monitor their fields, manage daily activities, and make data-driven decisions from their smartphone.",
    description:
      "The Smart Farm Management App is designed exclusively for mobile devices, giving farmers complete control over their fields from anywhere. The app consolidates vital farm information, crop updates, irrigation alerts, and AI-driven insights into an easy-to-use interface. With real-time notifications and offline accessibility, the app helps farmers stay informed and efficient even in remote areas.",
    features: [
      "Real-time field monitoring directly on your phone",
      "Daily task management and activity planning",
      "AI-driven crop health guidance",
      "Irrigation monitoring and water usage tracking",
      "Location-based weather alerts",
      "Automated farm reports",
      "Offline functionality for low-connectivity regions",
    ],
    benefits: [
      "Gives farmers full control using just a smartphone",
      "Improves decision-making with timely insights",
      "Reduces effort by organizing daily farm activities",
      "Helps save water and resources through smart tracking",
      "Boosts productivity with scheduled workflows and reminders",
    ],
    specifications: [
      "Android & iOS application",
      "Lightweight app optimized for low-end devices",
      "Secure cloud sync when online",
      "Multilingual support",
      "Works offline with automatic data sync",
    ],
  },
  {
    name: "AI Crop Prediction",
    slug: "ai-crop-prediction",
    type: "software",
    image: aiCropPrediction,
    shortDescription:
      "A mobile app that predicts crop yields, growth patterns, and potential issues using AI-driven analysis.",
    description:
      "The AI Crop Prediction App uses machine learning and real-time agricultural data to help farmers forecast crop performance with high accuracy. Designed for mobile devices, the app provides clear predictions about expected yields, growth stages, and possible risks such as pests, weather impacts, or nutrient deficiencies. With easy-to-read insights and timely alerts, farmers can plan smarter and take preventive action before problems occur.",
    features: [
      "AI-powered yield predictions based on field conditions",
      "Growth stage forecasting and crop health indicators",
      "Detection of potential risks like pests or nutrient issues",
      "Weather impact predictions for the upcoming days",
      "Smart recommendations tailored to each crop",
      "Easy-to-understand visual insights",
      "Real-time alerts on mobile",
    ],
    benefits: [
      "Helps farmers plan for harvests with better accuracy",
      "Reduces crop loss by predicting risks early",
      "Improves resource usage and field decision-making",
      "Supports sustainable farming through data-backed insights",
      "Boosts farm profitability with smarter planning",
    ],
    specifications: [
      "Android & iOS mobile application",
      "AI and machine learning-based prediction models",
      "Optimized for low-network regions",
      "Lightweight mobile performance",
      "Supports multiple crop types and locations",
    ],
  },
  {
    name: "Weather Insights Dashboard",
    slug: "weather-insights-dashboard",
    type: "software",
    image: weatherInsights,
    shortDescription:
      "A mobile app that delivers hyper-local weather forecasts, alerts, and climate insights designed specifically for farmers.",
    description:
      "The Weather Insights Dashboard is a mobile-first application that provides farmers with accurate, location-based weather updates and climate intelligence. It includes real-time forecasts, rainfall predictions, temperature trends, wind patterns, and extreme weather alerts. With an easy-to-read dashboard, the app helps farmers plan irrigation, crop protection, harvesting, and daily field activities with confidence.",
    features: [
      "Hyper-local weather forecasts for your farm location",
      "Wind speed and direction insights for spraying activities",
      "Rainfall probability and temperature trend analysis",
      "Storm, heatwave, and frost alerts",
      "7-day and 14-day forecast views",
      "Seasonal climate trend monitoring",
      "Push notifications for sudden weather changes",
    ],
    benefits: [
      "Improves planning for irrigation and field operations",
      "Helps prevent losses from unexpected weather events",
      "Enhances crop protection timing with clear forecasts",
      "Saves resources by aligning activities with weather patterns",
      "Supports long-term decision-making with climate insights",
    ],
    specifications: [
      "Android & iOS mobile application",
      "Real-time weather API integration",
      "Lightweight and optimized for low bandwidth",
      "Interactive dashboard UI",
      "Offline access for previously loaded forecasts",
    ],
  },
  {
    name: "Cloud-based Analytics",
    slug: "cloud-based-analytics",
    type: "software",
    image: cloudBasedAnalytics,
    shortDescription:
      "A powerful mobile analytics app that centralizes farm data in the cloud and delivers real-time insights to support smarter decision-making.",
    description:
      "The Cloud-based Analytics App gives farmers instant access to all their farm data through secure cloud storage. Designed for mobile devices, the app collects information from sensors, field devices, and farm activities to generate meaningful insights. Its intuitive dashboards help farmers monitor trends, compare performance, track resources, and make informed decisions using real-time analytical data.",
    features: [
      "Centralized cloud storage for all farm data",
      "Real-time dashboards with easy visualizations",
      "Resource usage insights for water, energy, and fertilizers",
      "Trend analysis based on historical and current data",
      "Performance tracking across crops and fields",
      "Automatic reports generated in the cloud",
      "Secure data backup with cross-device sync",
    ],
    benefits: [
      "Improves farm planning using accurate data insights",
      "Reduces resource waste with better tracking",
      "Protects farm information with secure cloud backups",
      "Gives farmers full visibility across all farm operations",
      "Supports long-term strategy with trend-based analytics",
    ],
    specifications: [
      "Android & iOS mobile application",
      "Cloud-powered analytics engine",
      "Real-time sync across devices",
      "Optimized for low bandwidth connectivity",
      "User-friendly charts and performance dashboards",
    ],
  },
];
