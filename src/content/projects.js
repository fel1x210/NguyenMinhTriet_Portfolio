export const projects = [
  {
    title: "QuietSpace",
    description:
      "A cross-platform mobile app to help users discover and navigate to quiet environments for focused studying. Features real-time location tracking, social community, and seamless backend performance.",
    tech: [
      "React Native",
      "Swift",
      "Kotlin",
      "Supabase",
      "Google Maps API",
      "REST APIs",
    ],
    liveUrl: "",
    repoUrl: "",
    hasDetails: true,
    details: {
      demo: "/quietspace-demo-web.mp4",
      summary:
        "QuietSpace is a cross-platform mobile application built with React Native and Expo, designed to help users discover and navigate to quiet, peaceful environments for focused studying and work. The app integrates Google Maps for real-time location tracking, Supabase for backend services, and Google Gemini AI for intelligent location validation. Users can search nearby quiet spots (libraries, cafes, parks, coworking spaces, museums), save favorites, check in, share community posts, and get directions -- all in a beautiful, modern interface.",

      vision:
        "Our vision is to create the go-to platform for people seeking peaceful environments in busy urban settings. In a world where distraction is constant, QuietSpace empowers students, remote workers, and anyone in need of focus by curating a network of verified quiet locations. We aim to foster a community-driven ecosystem where users actively contribute, review, and share their favorite spots, making productive environments accessible to everyone regardless of where they live.",

      requirements: [
        "User authentication with email/password (sign up, log in, profile management) via Supabase Auth.",
        "Interactive map view with real-time GPS location and nearby quiet places powered by Google Places API.",
        "Category-based filtering: Libraries, Cafes, Parks, Coworking Spaces, Museums, Study Spots.",
        "Place detail screens with quiet score, rating, address, phone, website, and opening hours.",
        "Favorites system allowing users to save and manage preferred locations.",
        "Social community feed with post creation (image + caption), likes, and comments.",
        "User-submitted location proposals with AI-powered validation via Google Gemini.",
        "Admin dashboard for reviewing, approving, and managing user-submitted locations.",
        "Push notifications for community interactions and location updates.",
        "Offline-capable caching system for performance and low-connectivity scenarios.",
        "Cross-platform compatibility (iOS, Android, Web) from a single codebase.",
      ],

      plan: [
        "Phase 1 - Core Infrastructure: Set up Expo project, Supabase backend, authentication flow, and navigation architecture (Auth stack + Main tab navigator).",
        "Phase 2 - Map & Discovery: Integrate Google Maps, Google Places API, and build the HomeScreen with interactive map, search bar, and category filters.",
        "Phase 3 - Place Details & Favorites: Build PlaceDetailsScreen with full info display, directions integration, and favorites CRUD via Supabase.",
        "Phase 4 - Community Features: Implement social feed (CommunityScreen), post creation with image picker, comments, likes with optimistic updates.",
        "Phase 5 - User Submissions & AI: Build location submission flow, integrate Gemini AI validation service, and admin review dashboard.",
        "Phase 6 - Polish & Optimization: Add caching (CacheManager), push notifications, profile settings, and performance tuning.",
      ],

      design:
        "The app follows a layered architecture: Contexts (AuthContext, LocationContext) provide global state; Services (SupabaseService, GooglePlacesService, GeminiAIService, CacheManager) encapsulate all external API interactions; Models (Place, User, CommunityPost, LocationSubmission) define data contracts with helper methods; Components (Button, Input, PlaceCard, CategoryChip, MapMarkers) are reusable UI primitives; Screens compose components into full pages; Navigation (AuthNavigator, MainNavigator) manages routing. The theme system provides a consistent color palette (primary teal #48C9B0), typography scale, and spacing tokens. Data flows unidirectionally from Supabase through services into contexts and down to components.",

      wireframes: [
        "Welcome / Login / Register screens with app branding and gradient backgrounds.",
        "Home screen with full-screen interactive map, floating search bar, horizontal category chips, and bottom sheet with nearby places list.",
        "Search screen with text input, recent search history, and category grid layout.",
        "Place Detail screen with hero map section, quiet score (leaf icons), star rating, info rows (address, phone, website, hours), and action buttons (favorite, directions, call).",
        "Community feed with card-based posts showing user avatar, image, caption, like/comment counts, and timestamp.",
        "Profile screen with avatar initials, display name, quick actions grid, recent activity, and settings toggles.",
        "Admin dashboard with submission review cards showing AI validation score and approve/reject actions.",
      ],

      statusReports: [
        "Sprint 1 (Complete): Project scaffolding, Supabase integration, authentication flow fully operational with sign up, login, and session persistence.",
        "Sprint 2 (Complete): Google Maps integration, Places API search, category filtering, and HomeScreen with interactive map and nearby places list.",
        "Sprint 3 (Complete): PlaceDetailsScreen with full info display, favorites system, directions API integration, and deep linking.",
        "Sprint 4 (Complete): Community social feed, post creation with Expo Image Picker, comments and likes system with optimistic updates.",
        "Sprint 5 (Complete): User location submissions, Gemini AI validation pipeline, admin review dashboard, and push notification service.",
        "Sprint 6 (Complete): Caching layer (CacheManager), performance optimization, profile settings, and final UI polish across all screens.",
      ],

      implementation:
        "The system is implemented as a React Native / Expo application (~50.0.0) using JavaScript. Navigation uses React Navigation with a Bottom Tab Navigator (5 tabs: Home, Search, Community, Favorites, Profile) and a Native Stack Navigator for auth. Backend services run on Supabase (Postgres DB + Row Level Security + Auth). The Google Places API handles location discovery with proximity-based search and place detail retrieval. Google Directions API provides routing with distance, duration, and polyline data. Google Gemini AI validates user-submitted locations by analyzing them for legitimacy and appropriateness, returning confidence scores. Local caching via AsyncStorage ensures offline resilience. The codebase includes 80+ source files organized across components, config, contexts, graphql, models, navigation, screens (auth, main, admin, community, details, settings, checkin, notifications, intro), services, theme, and utils directories.",
    },
  },
  {
    title: "Real-Time Chat App",
    description:
      "A full-stack real-time messaging application with instant message delivery, user authentication, online status indicators, and a modern responsive UI.",
    tech: [
      "React",
      "Tailwind CSS",
      "Socket.IO",
      "Express",
      "Node.js",
      "MongoDB",
      "JWT",
    ],
    liveUrl: "",
    repoUrl: "",
    hasDetails: false,
    details: null,
  },
  {
    title: "Storage Management System",
    description:
      "A robust web-based system enabling users to digitally catalog, track, and manage inventory with search filtering and real-time updates.",
    tech: [".NET", "SQL Server", "React"],
    liveUrl: "",
    repoUrl: "",
    hasDetails: false,
    details: null,
  },
  {
    title: "Stock Trading Platform",
    description:
      "A dynamic trading platform providing a simulated environment to execute real-time trades with live market data, stock quotes, and pricing charts.",
    tech: [".NET", "SQL", "External Financial APIs"],
    liveUrl: "",
    repoUrl: "",
    hasDetails: false,
    details: null,
  },
];
