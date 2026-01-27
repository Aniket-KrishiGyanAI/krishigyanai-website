import agriSoftware from "../../public/services/agri-softwares.png";
import aiWeeder from "../../public/services/ai-weeder.png";
import farmAutomation from "../../public/services/farm-automation.png";
import irrigationSystem from "../../public/services/irrigation-system.png";
import smartDrone from "../../public/services/smart-drone.png";
import aiRover from "../../public/services/yield-ai-rover.png";

export const services = [
  {
    name: "Smart Irrigation System",
    description:
      "An AI-powered solution that optimizes water usage by monitoring soil moisture, weather conditions, and crop needs, ensuring efficient irrigation and healthier crops.",
    image: irrigationSystem,
  },
  {
    name: "Farm Automation",
    description:
      "Integrating AI, robotics, and smart technologies to automate farming tasks like planting, watering, weeding, and harvesting, boosting efficiency, reducing labor, and increasing productivity.",
    image: farmAutomation,
  },
  {
    name: "AI-Powered Smart Drone Spraying",
    description:
      "Autonomous drones equipped with AI to precisely spray fertilizers, pesticides, and nutrients, reducing chemical use, saving time, and improving crop health.",
    image: smartDrone,
  },
  {
    name: "AI weeder",
    description:
      "An intelligent farming solution that uses computer vision and machine learning to automatically detect and remove weeds, enhancing crop yield and reducing manual labor.",
    image: aiWeeder,
  },
  {
    name: "Agricultural Software and solutions",
    description:
      "Innovative digital tools and AI-powered systems designed to optimize farm management, monitor crops, automate tasks, and improve productivity for modern agriculture.",
    image: agriSoftware,
  },
  {
    name: "Yield AI Rover",
    description:
      "An AI-driven autonomous rover designed for orchards to monitor tree health, detect fruit count, assess yield, and provide data-driven insights for better orchard management.",
    image: aiRover,
  },
];
