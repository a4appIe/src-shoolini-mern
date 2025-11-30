const dummyEvents = [
  {
    _id: "1",
    slug: "ai-machine-learning-workshop-2025",
    title: "AI & Machine Learning Workshop",
    agenda: "Hands-on workshop on neural networks and deep learning",
    description: "Join us for an intensive hands-on workshop covering the fundamentals of artificial intelligence and machine learning.",
    date: "2025-12-15T10:00:00Z",
    time: "10:00 AM - 4:00 PM",
    venue: "Research Lab, Block A",
    desc: "This comprehensive workshop is designed for students and researchers interested in artificial intelligence and machine learning. Participants will gain practical experience in building neural networks, understanding deep learning architectures, and implementing AI solutions.",
    visibility: "upcoming",
    cover_image: {
      imageUrl: "https://plus.unsplash.com/premium_photo-1661856767121-703740e85af9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageId: "ai-workshop-cover"
    },
    speakers: [
      {
        _id: "s1",
        name: "Dr. Rajesh Kumar",
        designation: "AI Research Lead, Tech Corp",
        image: {
          imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
          imageId: "speaker-rajesh"
        }
      },
      {
        _id: "s2",
        name: "Prof. Anita Desai",
        designation: "Head of ML Department, IIT",
        image: {
          imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
          imageId: "speaker-anita"
        }
      }
    ]
  },
  {
    _id: "2",
    slug: "startup-pitch-competition-2025",
    title: "Startup Pitch Competition 2025",
    agenda: "Present your innovative startup ideas to investors",
    description: "An exciting opportunity to pitch your startup ideas to leading investors and industry experts.",
    date: "2025-11-30T14:00:00Z",
    time: "2:00 PM - 6:00 PM",
    venue: "Innovation Hub Auditorium",
    desc: "The Startup Pitch Competition provides a platform for aspiring entrepreneurs to present their innovative business ideas to a panel of experienced investors, venture capitalists, and industry leaders.",
    visibility: "ongoing",
    cover_image: {
      imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200",
      imageId: "pitch-competition-cover"
    },
    speakers: [
      {
        _id: "s3",
        name: "Mr. Vikram Malhotra",
        designation: "Angel Investor & Serial Entrepreneur",
        image: {
          imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
          imageId: "speaker-vikram"
        }
      }
    ]
  },
  {
    _id: "3",
    slug: "research-paper-writing-seminar",
    title: "Research Paper Writing Seminar",
    agenda: "Master the art of academic writing and publication",
    description: "Learn how to structure, write, and publish high-impact research papers.",
    date: "2025-12-20T11:00:00Z",
    time: "11:00 AM - 1:00 PM",
    venue: "Library Conference Room",
    desc: "This seminar is designed to help researchers and students master the art of academic writing. Topics include paper structuring, literature review techniques, and effective data presentation.",
    visibility: "upcoming",
    cover_image: {
      imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200",
      imageId: "research-writing-cover"
    },
    speakers: [
      {
        _id: "s6",
        name: "Prof. Sarah Johnson",
        designation: "Published Author, 100+ Papers",
        image: {
          imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
          imageId: "speaker-sarah"
        }
      }
    ]
  },
  {
    _id: "4",
    slug: "blockchain-technology-summit",
    title: "Blockchain Technology Summit",
    agenda: "Explore blockchain, crypto, and decentralized apps",
    description: "Deep dive into blockchain technology and cryptocurrencies.",
    date: "2025-11-20T09:00:00Z",
    time: "9:00 AM - 5:00 PM",
    venue: "Tech Park Convention Center",
    desc: "Join us for a comprehensive summit on blockchain technology and its applications. This full-day event covers cryptocurrency fundamentals, smart contracts, DeFi protocols, and NFTs.",
    visibility: "past",
    cover_image: {
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200",
      imageId: "blockchain-summit-cover"
    },
    speakers: [
      {
        _id: "s7",
        name: "Alex Chen",
        designation: "Blockchain Architect, CryptoLab",
        image: {
          imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
          imageId: "speaker-alex"
        }
      }
    ]
  },
  {
    _id: "5",
    slug: "quantum-computing-fundamentals",
    title: "Quantum Computing Fundamentals",
    agenda: "Introduction to quantum algorithms and applications",
    description: "Learn about quantum computing principles and their potential.",
    date: "2025-12-05T15:00:00Z",
    time: "3:00 PM - 5:00 PM",
    venue: "Online (Zoom)",
    desc: "This online seminar introduces the fascinating world of quantum computing. Learn about qubits, quantum gates, superposition, and entanglement.",
    visibility: "upcoming",
    cover_image: {
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200",
      imageId: "quantum-computing-cover"
    },
    speakers: [
      {
        _id: "s9",
        name: "Dr. James Wilson",
        designation: "Quantum Physicist, Research Institute",
        image: {
          imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400",
          imageId: "speaker-james"
        }
      }
    ]
  },
  {
    _id: "6",
    slug: "innovation-hackathon-2025",
    title: "Innovation Hackathon 2025",
    agenda: "48-hour coding marathon to solve real-world problems",
    description: "Build innovative solutions and compete for exciting prizes.",
    date: "2025-11-28T09:00:00Z",
    time: "9:00 AM (48 Hours)",
    venue: "Computer Science Building",
    desc: "Our flagship hackathon brings together the brightest minds to tackle real-world challenges through innovative technology solutions.",
    visibility: "ongoing",
    cover_image: {
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
      imageId: "hackathon-cover"
    },
    speakers: [
      {
        _id: "s10",
        name: "Rohan Verma",
        designation: "CTO, TechStart India",
        image: {
          imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
          imageId: "speaker-rohan"
        }
      }
    ]
  },
  {
    _id: "7",
    slug: "research-funding-workshop",
    title: "Research Funding Workshop",
    agenda: "Learn to secure grants and research funding",
    description: "Expert guidance on proposal writing and navigating funding agencies.",
    date: "2025-10-15T14:00:00Z",
    time: "2:00 PM - 4:00 PM",
    venue: "Administration Building",
    desc: "This workshop provides comprehensive guidance on securing research funding from various sources including government agencies and private foundations.",
    visibility: "past",
    cover_image: {
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
      imageId: "funding-workshop-cover"
    },
    speakers: [
      {
        _id: "s12",
        name: "Dr. Kavita Reddy",
        designation: "Grant Writing Expert",
        image: {
          imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
          imageId: "speaker-kavita"
        }
      }
    ]
  },
  {
    _id: "8",
    slug: "biotech-innovation-symposium",
    title: "Biotech Innovation Symposium",
    agenda: "Cutting-edge developments in biotechnology",
    description: "Discover the latest in genetic engineering and pharmaceutical research.",
    date: "2025-12-10T10:00:00Z",
    time: "10:00 AM - 3:00 PM",
    venue: "Biotech Research Center",
    desc: "Join leading scientists and researchers for a day of cutting-edge biotechnology presentations covering CRISPR, personalized medicine, and synthetic biology.",
    visibility: "upcoming",
    cover_image: {
      imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200",
      imageId: "biotech-symposium-cover"
    },
    speakers: [
      {
        _id: "s13",
        name: "Dr. Anjali Nair",
        designation: "Geneticist, BioResearch Lab",
        image: {
          imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
          imageId: "speaker-anjali"
        }
      }
    ]
  }
];

export default dummyEvents;