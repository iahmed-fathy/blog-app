import React, { useState, type Dispatch, type SetStateAction } from "react";
import { createContext } from "react";

type Props = {
  children: React.ReactNode;
};

type ValueType = {
  articles: ArticlesType[];
  filterData: ArticlesType[];
  setFilterData: Dispatch<SetStateAction<ArticlesType[]>>;
};

type contentType = {
  type: string;
  src?: string;
  alt?: string;
  text?: string;
  link?: string;
};

export type ArticlesType = {
  id: string;
  author: string;
  title: string;
  urlToImage: string;
  publishedAt: string;
  content: contentType[];
  category: string;
  publisherImage: string;
};

const articles: ArticlesType[] = [
  {
    id: "Art1",
    author: "Tracy Wilson",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    urlToImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    publishedAt: "2023-08-20",
    category: "Technology",
    publisherImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://cdn-icons-png.flaticon.com/512/906/906324.png",
    content: [
      {
        type: "paragraph",
        text: "Technology has become a central driver of change in the modern workplace. From artificial intelligence to automation, new tools are reshaping how we work, collaborate, and communicate.",
      },
      {
        type: "heading",
        text: "Automation and Efficiency",
      },
      {
        type: "paragraph",
        text: "One of the biggest impacts of technology is the automation of repetitive tasks. This allows employees to focus on more strategic and creative work, improving productivity and efficiency.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        alt: "Team collaborating with technology",
      },
      {
        type: "quote",
        text: "Automation does not replace humans, it empowers them to do more valuable work.",
      },
      {
        type: "heading",
        text: "Remote Work and Collaboration",
      },
      {
        type: "paragraph",
        text: "Cloud platforms and communication tools have enabled remote work on a global scale. Teams can collaborate across continents in real time, breaking geographical barriers.",
      },
    ],
  },
  {
    id: "Art2",
    author: "Sarah Ahmed",
    title: "Healthy Living in the Modern World: Balancing Work and Wellness",
    urlToImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    publishedAt: "2023-09-10",
    category: "Health",
    publisherImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://cdn-icons-png.flaticon.com/512/2966/2966489.png",
    content: [
      {
        type: "paragraph",
        text: "Modern lifestyles often demand a fast-paced routine, leaving little time for wellness. However, health should be at the forefront of our priorities.",
      },
      {
        type: "heading",
        text: "The Role of Nutrition",
      },
      {
        type: "paragraph",
        text: "A balanced diet is the cornerstone of healthy living. Fresh fruits, vegetables, and whole grains can significantly boost energy and immunity.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1506089676908-3592f7389d4d",
        alt: "Healthy food on a plate",
      },
      {
        type: "quote",
        text: "Your diet is a bank account. Good food choices are good investments.",
      },
      {
        type: "heading",
        text: "Exercise and Mental Health",
      },
      {
        type: "paragraph",
        text: "Regular physical activity not only strengthens the body but also helps relieve stress and improve mental well-being.",
      },
    ],
  },
  {
    id: "Art3",
    author: "James Carter",
    title: "Travel Smart: Tips for Exploring the World Safely and Efficiently",
    urlToImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    publishedAt: "2023-10-05",
    category: "Travel",
    publisherImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    content: [
      {
        type: "paragraph",
        text: "Traveling opens doors to new cultures, experiences, and perspectives. But to make the most of your journey, preparation is essential.",
      },
      {
        type: "heading",
        text: "Plan Ahead",
      },
      {
        type: "paragraph",
        text: "Research your destination thoroughly to understand the local culture, laws, and safety considerations.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
        alt: "Traveler with backpack exploring mountains",
      },
      {
        type: "quote",
        text: "To travel is to live, but to plan is to travel wisely.",
      },
      {
        type: "heading",
        text: "Stay Connected",
      },
      {
        type: "paragraph",
        text: "Having access to reliable communication tools ensures safety and helps you navigate unfamiliar places.",
      },
    ],
  },
  {
    id: "Art4",
    author: "Laura Johnson",
    title: "Business in the Digital Age: Adapting to Rapid Change",
    urlToImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    publishedAt: "2023-11-15",
    category: "Business",
    publisherImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    content: [
      {
        type: "paragraph",
        text: "The business landscape has transformed dramatically with the rise of digital technologies. Companies must adapt quickly to stay competitive.",
      },
      {
        type: "heading",
        text: "E-Commerce Growth",
      },
      {
        type: "paragraph",
        text: "Online shopping has become the norm for millions of consumers worldwide. Businesses that fail to embrace e-commerce risk falling behind.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1542744094-24638eff58bb",
        alt: "E-commerce concept on laptop",
      },
      {
        type: "quote",
        text: "In the digital age, adaptability is the key to survival.",
      },
      {
        type: "heading",
        text: "Remote Workforce",
      },
      {
        type: "paragraph",
        text: "Companies are increasingly adopting remote work policies, leveraging technology to boost flexibility and attract top talent.",
      },
    ],
  },
  {
    id: "Art5",
    author: "Dr. Michael Lee",
    title: "Exploring the Frontiers of Space Science",
    urlToImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    publishedAt: "2023-12-01",
    category: "Science",
    publisherImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://cdn-icons-png.flaticon.com/512/3212/3212608.png",
    content: [
      {
        type: "paragraph",
        text: "Space exploration continues to push the boundaries of human knowledge. From Mars missions to deep space telescopes, science is unlocking the secrets of the universe.",
      },
      {
        type: "heading",
        text: "Mars Exploration",
      },
      {
        type: "paragraph",
        text: "Rovers and orbiters are studying the Red Planet, searching for signs of past water and the potential for future human settlement.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://imageio.forbes.com/specials-images/imageserve/637d5415b2b26d8a7b588249/opportunity-rover-illustration-han-24-2004-by-NASA-AP/0x0.jpg?format=jpg&crop=1500,1500,x161,y0,safe&height=1500&width=1500",
        alt: "Mars surface with rover",
      },
      {
        type: "quote",
        text: "Exploration is really the essence of the human spirit.",
      },
      {
        type: "heading",
        text: "Telescopes of Tomorrow",
      },
      {
        type: "paragraph",
        text: "Next-generation telescopes like the James Webb Space Telescope are helping scientists look deeper into space and further back in time.",
      },
    ],
  },
  {
    id: "Art6",
    author: "Emily Davis",
    title: "Living a Minimalist Lifestyle in a Busy World",
    urlToImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    publishedAt: "2024-01-10",
    category: "Lifestyle",
    publisherImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
    content: [
      {
        type: "paragraph",
        text: "Minimalism has become a growing trend as people seek to simplify their lives and focus on what truly matters.",
      },
      {
        type: "heading",
        text: "Decluttering Your Space",
      },
      {
        type: "paragraph",
        text: "A clutter-free environment reduces stress and increases productivity. Start small by removing items you no longer use.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        alt: "Minimalist clean room",
      },
      {
        type: "quote",
        text: "The more you own, the more it owns you.",
      },
      {
        type: "heading",
        text: "Mindful Consumption",
      },
      {
        type: "paragraph",
        text: "Minimalism is not just about physical possessions, but also about being mindful of how you spend your time and energy.",
      },
    ],
  },
  {
    id: "Art7",
    author: "Emily Johnson",
    title:
      "The Future of Education: How Digital Learning is Transforming Classrooms",
    urlToImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWR1Y2F0aW9ufGVufDB8fDB8fHww",
    publishedAt: "2023-11-12",
    category: "Education",
    publisherImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
    content: [
      {
        type: "paragraph",
        text: "Digital learning tools are revolutionizing education by making resources more accessible and interactive than ever before.",
      },
      {
        type: "heading",
        text: "E-Learning Platforms",
      },
      {
        type: "paragraph",
        text: "Platforms like Coursera and Khan Academy have made high-quality education available to millions worldwide.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://distance-educator.com/wp-content/uploads/Virtual_School_Learner.png",
        alt: "Students learning online",
      },
      {
        type: "quote",
        text: "Education is no longer confined to the classroom walls.",
      },
      {
        type: "heading",
        text: "Personalized Learning",
      },
      {
        type: "paragraph",
        text: "AI-driven tools are enabling teachers to customize learning experiences for every student.",
      },
    ],
  },
  {
    id: "Art8",
    author: "Michael Lee",
    title: "Smart Finance: Managing Money in the Age of Digital Banking",
    urlToImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1567427017947-545c5f8d16ad",
    publishedAt: "2023-11-20",
    category: "Finance",
    publisherImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    content: [
      {
        type: "paragraph",
        text: "Digital banking and fintech apps are transforming how individuals save, invest, and manage their finances.",
      },
      {
        type: "heading",
        text: "Rise of Fintech",
      },
      {
        type: "paragraph",
        text: "Apps like Revolut and PayPal offer seamless global payments and currency exchange.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1",
        alt: "Mobile banking app interface",
      },
      {
        type: "quote",
        text: "Your smartphone is now your bank.",
      },
      {
        type: "heading",
        text: "Investment Simplified",
      },
      {
        type: "paragraph",
        text: "Platforms like Robinhood and eToro make investing accessible to beginners.",
      },
    ],
  },
  {
    id: "Art9",
    author: "Sophia Martinez",
    title: "Minimalist Lifestyle: Finding Joy in Simplicity",
    urlToImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    publishedAt: "2023-12-01",
    category: "Lifestyle",
    publisherImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
    content: [
      {
        type: "paragraph",
        text: "Minimalism is more than decluttering; it’s a mindset focused on intentional living.",
      },
      {
        type: "heading",
        text: "Decluttering Spaces",
      },
      {
        type: "paragraph",
        text: "Organizing homes and removing unnecessary items can lead to mental clarity.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        alt: "Minimalist home interior",
      },
      {
        type: "quote",
        text: "Less is more.",
      },
      {
        type: "heading",
        text: "Intentional Living",
      },
      {
        type: "paragraph",
        text: "Focusing on meaningful experiences brings more satisfaction than material possessions.",
      },
    ],
  },
  {
    id: "Art10",
    author: "David Green",
    title: "Protecting Our Planet: Small Steps for a Greener Future",
    urlToImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1625947647211-761a47a7a24e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFByb3RlY3RpbmclMjBPdXIlMjBQbGFuZXQlM0ElMjBTbWFsbCUyMFN0ZXBzfGVufDB8fDB8fHww",
    publishedAt: "2023-12-15",
    category: "Environment",
    publisherImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://cdn-icons-png.flaticon.com/512/4149/4149670.png",
    content: [
      {
        type: "paragraph",
        text: "Climate change is one of the biggest challenges facing humanity today.",
      },
      {
        type: "heading",
        text: "Sustainable Choices",
      },
      {
        type: "paragraph",
        text: "Using renewable energy and reducing waste are key steps toward a sustainable lifestyle.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
        alt: "Solar panels in a field",
      },
      {
        type: "quote",
        text: "Every small step counts when protecting the planet.",
      },
      {
        type: "heading",
        text: "Global Action",
      },
      {
        type: "paragraph",
        text: "Governments and businesses must work together to implement greener policies.",
      },
    ],
  },
  {
    id: "Art11",
    author: "Chris Taylor",
    title: "Sports Science: How Technology is Enhancing Athlete Performance",
    urlToImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1597007519573-0575fd4cc96b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BvcnRzJTIwU2NpZW5jZSUzQSUyMEhvdyUyMFRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    publishedAt: "2024-01-05",
    category: "Sports",
    publisherImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://cdn-icons-png.flaticon.com/512/1041/1041150.png",
    content: [
      {
        type: "paragraph",
        text: "From wearable trackers to AI-based training programs, technology is revolutionizing sports.",
      },
      {
        type: "heading",
        text: "Wearable Technology",
      },
      {
        type: "paragraph",
        text: "Devices monitor heart rate, sleep, and performance metrics in real time.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1517649763962-0c623066013b",
        alt: "Athlete training with smartwatch",
      },
      {
        type: "quote",
        text: "Data is the new coach.",
      },
      {
        type: "heading",
        text: "Injury Prevention",
      },
      {
        type: "paragraph",
        text: "AI predicts risks and helps athletes avoid injuries before they happen.",
      },
    ],
  },
  {
    id: "Art12",
    author: "Laura Chen",
    title: "Exploring the Universe: New Discoveries in Space Science",
    urlToImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    publishedAt: "2024-01-18",
    category: "Science",
    publisherImage:
      "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://cdn-icons-png.flaticon.com/512/201/201623.png",
    content: [
      {
        type: "paragraph",
        text: "Space exploration is entering a new era with groundbreaking discoveries and missions.",
      },
      {
        type: "heading",
        text: "Mars Missions",
      },
      {
        type: "paragraph",
        text: "Rovers and satellites continue to collect data, bringing us closer to potential human settlement.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr0ouqv0y/image/fetch/w_800,q_auto,f_auto/https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
        alt: "Galaxy and stars view",
      },
      {
        type: "quote",
        text: "The universe is full of mysteries waiting to be uncovered.",
      },
      {
        type: "heading",
        text: "Space Technology",
      },
      {
        type: "paragraph",
        text: "New propulsion systems and telescopes are expanding our capabilities to explore space.",
      },
    ],
  },
];

export const AppContext = createContext<ValueType | null>(null);

export default function ArticlesProvider({ children }: Props) {
  const [filterData, setFilterData] = useState(articles);

  const value: ValueType = {
    articles,
    filterData,
    setFilterData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
