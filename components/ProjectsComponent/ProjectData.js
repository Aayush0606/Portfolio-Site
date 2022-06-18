const projectData = [
  {
    projectMedia: "/blog-hub.mp4",
    projectName: "Blog Hub",
    projectDescription: `Blog Hub made using **MERN** stack.
    \nThis web app allow users to perform all **CRUD** applications on their blogs and profiles.
    \nUsers can **signup** in app for writing blogs or can read them without signup. User can write **markdown** supported blogs and can add **thumbnails** to their blogs.**React** is used for frontend of this web app.
    \n**Node and express** are used for backend. Image uploading is handled using **[multer](https://github.com/expressjs/multer)**. Users credentials are stored in **hashed** format in database. **MongoDB** is used for the database of this web app.
    \nThe app have **dark** and **light** mode toggle
    \nThe application is styled using **TailwindCSS** and is fully responsive for all screen sizes.`,
    projectTags: [
      {
        logoURL: "/react.png",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "React Icon",
        logoNameProject: "React.js",
      },
      {
        logoURL: "/tailwindcss.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Tailwind Icon",
        logoNameProject: "TailwindCSS",
      },
      {
        logoURL: "/nodejs.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Node Icon",
        logoNameProject: "Node.js",
      },
      {
        logoURL: "/expressjs.png",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Express Icon",
        logoNameProject: "Express.js",
      },
      {
        logoURL: "/mongodb.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Mongo Icon",
        logoNameProject: "MongoDB",
      },
    ],
    projectSource: "https://github.com/Aayush0606/MERN_BLOG_FRONTEND",
  },
  {
    projectMedia: "/vote-hub.mkv",
    projectName: "Vote Hub",
    projectDescription: `Vote Hub made using **NextJS.**
    \nThis web app can be used to perform **peer-to-peer** **decentralized** voting.
    \nUser can participate in voting by uploading their image link and providing email and name.Admin can approve or remove a candidate request from **admin pannel.**
    \nUsers can view **realtime leaderboard** and vote their favourite candidate without registering.
    \n**[gunjs](https://gun.eco/)** is used for making this app p2p.GUN is a small, easy, and fast protocol for syncing data.
    \nThe application is styled using **TailwindCSS** and is fully responsive for all screen sizes.`,
    projectTags: [
      {
        logoURL: "/nextjs.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Next Icon",
        logoNameProject: "Next.js",
      },
      {
        logoURL: "/tailwindcss.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Tailwind Icon",
        logoNameProject: "TailwindCSS",
      },
      {
        logoURL: "/nodejs.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Node Icon",
        logoNameProject: "Node.js",
      },
      {
        logoURL: "/expressjs.png",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Express Icon",
        logoNameProject: "Express.js",
      },
      {
        logoURL: "/gunjs.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Gun Icon",
        logoNameProject: "Gun.js",
      },
    ],
    projectSource: "https://github.com/Aayush0606/p2p-voting",
  },
  {
    projectMedia: "/covid-tracker.mkv",
    projectName: "Covid Tracker",
    projectDescription: `Covid-19 tracker for India made using **React.**
    \nThis web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.
    \nThere is also a state-wise table of covid data which can be sorted by any column.
    \nThe application is styled using **material-ui** and is fully responsive for all screen sizes.`,
    projectTags: [
      {
        logoURL: "/react.png",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "React Icon",
        logoNameProject: "React.js",
      },
      {
        logoURL: "/materialui.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "materialui Icon",
        logoNameProject: "MaterialUI",
      },
    ],
    projectSource: "https://github.com/Aayush0606/CovidTracker",
  },
  {
    projectMedia: "/sort-visual.mkv",
    projectName: "Sort Visualizer",
    projectDescription: `This web app is built using **React** and is used to **visualize classic sorting algorithms**.
    \nSorting algorithms such as insertion sort, quick sort, merge sort,etc can be visualized.
    \nUser can change the **size** of array, **generate new** array and **speed** of sorting from the UI.
    \nThe app have **dark** and **light** mode toggle
    \nThe application is styled using **material-ui** and is fully responsive for all screen sizes.
    `,
    projectTags: [
      {
        logoURL: "/react.png",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "React Icon",
        logoNameProject: "React.js",
      },
      {
        logoURL: "/materialui.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "materialui Icon",
        logoNameProject: "MaterialUI",
      },
    ],
    projectSource: "https://github.com/Aayush0606/Sort-Visualizer",
  },
  {
    projectMedia: "/crypto-tracker.mp4",
    projectName: "Crypto Tracker",
    projectDescription: `Crypto Tracker made using **React Native.**
    \nThis **cross platform** app can be used to track the **price of top 50 crypto currencies.**
    \nUser can check the overall price or the price history from past.
    \nData is always up to date and is fetched from an **api**.
    \nThe application is styled using **React Native Component**.`,
    projectTags: [
      {
        logoURL: "/react.png",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "React Icon",
        logoNameProject: "React Native",
      },
    ],
    projectSource: "https://github.com/Aayush0606/CryptoTracker",
  },
  {
    projectMedia: "/chat-app.mp4",
    projectName: "Chat App",
    projectDescription: `Chap App made using **React Native.**
    \nThis **cross platform** app can be used as a **chat app**
    \nUser can create **profile and rooms** and can share room code to invite friends to chat in that room.
    \nData is stored on **firebase** and users crendentials are stored in **hashed** form.
    \nThe application is styled using **React Native Component**.`,
    projectTags: [
      {
        logoURL: "/react.png",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "React Icon",
        logoNameProject: "React Native",
      },
      {
        logoURL: "/redux.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Redux Icon",
        logoNameProject: "Redux",
      },
      {
        logoURL: "/firebase.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Firebase Icon",
        logoNameProject: "Firebase",
      },
    ],
    projectSource: "https://github.com/Aayush0606/ChatApp",
  },
  {
    projectMedia: "/meme-hub.mp4",
    projectName: "Meme Hub",
    projectDescription: `Meme App made using **React Native.**
    \nThis **cross platform** app can be used to **view, share and download** memes from **reddit**.
    \nUser can **search** any subreddit and **infinite scroll** through the latest post from that subreddit.
    \nUser can go to orignal post, share that post using different sharing methods or can even download the post on their local machine. 
    \nThe application is styled using **React Native Component**.`,
    projectTags: [
      {
        logoURL: "/react.png",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "React Icon",
        logoNameProject: "React Native",
      },
    ],
    projectSource: "https://github.com/Aayush0606/MemesFTW",
  },
  {
    projectMedia: "/discord-bot.mkv",
    projectName: "Discord Bot",
    projectDescription: `Discord Bot made using **Python.**
    \nThis **bot** can be used for **various** purposes in a server.
    \nUser can give commands to the bot for **sharing memes, greeting everyone in server, insulting someone**. The bot **automatically greet** someone who will join the server.
    \nPython package **[Discord.py](https://discordpy.readthedocs.io/en/stable/)** is used for development.`,
    projectTags: [
      {
        logoURL: "/python.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Python Icon",
        logoNameProject: "Python",
      },
    ],
    projectSource: "https://github.com/Aayush0606/DiscordBot",
  },
  {
    projectMedia: "/question-hub.mkv",
    projectName: "Question Hub",
    projectDescription: `Question Hub made using **React.**
    \nThis **web app** can be used for asking questions and getting answers. 
    \nUser can create **profile** and after that can **ask or answer** any question. User can **upvote or downvote** a question or answer based on it's quality and relevance.
    \nData is stored on **firebase** and users crendentials are stored in **hashed** form.
    \nThe application is styled using **Bootstrap** and is fully responsive for all screen sizes.`,
    projectTags: [
      {
        logoURL: "/react.png",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "React Icon",
        logoNameProject: "React.js",
      },
      {
        logoURL: "/redux.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Redux Icon",
        logoNameProject: "Redux",
      },
      {
        logoURL: "/bootstrap.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Bootstrap Icon",
        logoNameProject: "Bootstrap",
      },
      {
        logoURL: "/firebase.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Firebase Icon",
        logoNameProject: "Firebase",
      },
    ],
    projectSource: "https://github.com/Aayush0606/QuestionBank",
  },
  {
    projectMedia: "/quote-hub.mp4",
    projectName: "Quote Hub",
    projectDescription: `Quote Hub made using **React.**
    \nThis **web app** can be used for **searching and saving** quotes from anime or by characters of any anime. 
    \nUser can create **profile** and after that they can **search quotes** from any anime or by a specific character of that anime. If user want they can even **save quotes** in their profile saved section and can **remove saved quotes** if needed.
    \nData is stored on **MongoDB** database and users crendentials are stored in **hashed** form.
    \nThe application is styled using **Bootstrap** and is fully responsive for all screen sizes.`,
    projectTags: [
      {
        logoURL: "/react.png",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "React Icon",
        logoNameProject: "React.js",
      },
      {
        logoURL: "/bootstrap.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Bootstrap Icon",
        logoNameProject: "Bootstrap",
      },
      {
        logoURL: "/nodejs.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Node Icon",
        logoNameProject: "Node.js",
      },
      {
        logoURL: "/expressjs.png",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Express Icon",
        logoNameProject: "Express.js",
      },
      {
        logoURL: "/mongodb.svg",
        logoHeight: 60,
        logoWidth: 60,
        logoAlt: "Mongo Icon",
        logoNameProject: "MongoDB",
      },
    ],
    projectSource: "https://github.com/Aayush0606/QuotesHub",
  },
];
export default projectData;
