// File that contains list of all the projects

export const projects = [
    { 
        name: "Stamina Sense",
        description: "<p><strong>StaminaSense</strong> is a wearable system that uses machine learning on biometric data like heart rate, movement, and temperature to give personalized training and recovery recommendations, helping coaches reduce injuries and boost performance! 🤖🏃‍♂️</p>",
        languages: ["Python", "Hugging Face", "TypeScript", "React Native", "Node.js", "JavaScript", "HTML", "CSS"],
        image: "staminasense-screenshot.png",
        link: "",
        live: "",
        progress: true,
    },
    {
      name: "Budget Buddy",
      description: "<p><strong>BudgetBuddy</strong> is an AI-powered budgeting app that uses receipt scanning (OCR API) and <strong>Gemini</strong> to parse and categorize transactions, helping users track spending and manage budgets efficiently across categories and time periods. 🤖💰</p>",
      languages: ["Java", "Spring Boot", "React Native", "TypeScript", "OCR", "LLM", "HTML", "CSS"],
      image: "",
      link: "",
      live: "",
      progress: true,
    },
    {
        name: "Rendezvous Radar",
        description: "<p><strong>Rendezvous Radar</strong> is a web app which lets users search for activities by selecting categories or entering a text prompt, which is analyzed by a large language model to generate relevant results. 🔍🤖</p>",
        languages: ["React", "Django", "JavaScript", "TypeScript", "Python", "PyTorch", "Pandas", "DistilGPT"],
        image: "rendezvousradar.png",
        link: "https://github.com/rendezvous-radar/RendezvousRadar",
        live: ""
    },

    {
        name: "Basketball Court Finder",
        description: "<p><strong>Basketball Court Finder</strong> is a web app that helps users locate basketball courts near them using interactive maps. It allows users to search for courts based on location, view court details, leave reviews, and edit court information, making it easy to find and explore local basketball courts! 🏀</p>",
        languages: ["React", "TypeScript", "SpringBoot", "Java", "MySQL", "HTML", "CSS"],
        image: "basketballcourtfinder-screenshot.png",
        link: "https://github.com/JinhaKimGH/Basketball-Court-Finder",
        live: "" // https://jinhakimgh.github.io/Basketball-Court-Finder/
    },

    {
        name: "Fakebook",
        description: "<p>A <strong>Facebook clone</strong> that allows users to connect, personalize profiles, share updates, interact with posts, and receive friend suggestions. It also integrates third-party Facebook login for seamless access. This app recreates the social networking experience! 📱</p>",
        languages: ["React", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS", "Express.js", "MongoDB"],
        image: "fakebook-screenshot.png",
        link: "https://github.com/JinhaKimGH/Fakebook-App",
        live: "https://jinhakimgh.github.io/Fakebook-Frontend/"
    },
    {
        name: "Real-Time OS",
        description: "<p>A lightweight <strong>operating system</strong> on a <strong>STM32 Nucleo board</strong>. This OS features <strong>context switching</strong>, <strong>inter-process communication</strong>, and <strong>Earliest Deadline First scheduling</strong>. Optimized for accurate timing and efficient resource utilization in time-sensitive applications.</p>",
        languages: ["C", "ARM", "RTOS"],
        image: "",
        link: "",
        live: ""
    },
    {
      name: "VHDL Compiler",
      description: "<p>This tool offers a robust solution for transforming <strong>VHDL</strong> equations into <strong>Java</strong> executables. It employs <strong>recursive descent parsing</strong> for accurate syntax analysis, utilizes hash-based symbol management for performance, and adopts the <strong>Visitor Pattern</strong> to ensure modularity and ease of maintenance in the code generation process.</p>",
      languages: ["Compiler", "Java"],
      image: "",
      link: "",
      live: ""
    },
    {
      name: "Network Simulation Tool",
      description: "<p>Built a suite of network simulations featuring web servers capable of handling <strong>HTTP requests</strong>, queue-based traffic models, and an authoritative <strong>DNS</strong> server. The <strong>DNS server</strong> was implemented using <strong>UDP sockets</strong> to construct and interpret <strong>DNS messages</strong>, accurately simulating real-world server-client communication.</p>",
      languages: ["Python", "Networking", "Http", "DNS", "Queuing Theory"],
      image: "",
      link: "",
      live: ""
    },
    {
      name: "Music Generation with RNNs",
      description: "<p>Implemented a <strong>Recurrent Neural Network (RNN)</strong> model in <strong>Python</strong> using <strong>TensorFlow/Keras</strong> to generate Irish folk music. Trained on a dataset of MIDI files, the model learned temporal dependencies in musical structure and produced unique melodies.</p>",
      languages: ["Python", "TensorFlow", "Keras", "RNNs", "Deep Learning"],
      image: "",
      link: "",
      live: ""
    },
    {
      name: "VAE for Anime Face Generation",
      description: "<p>Designed and trained a <strong>Variational Autoencoder (VAE)</strong> using <strong>TensorFlow/Keras</strong> to reconstruct and generate <strong>anime face images</strong>. Implemented the encoder–decoder architecture, optimized the evidence lower bound (ELBO), and evaluated reconstruction quality alongside generative performance.</p>",
      languages: ["Python", "TensorFlow", "Keras", "Variational Autoencoders", "Deep Learning"],
      image: "",
      link: "",
      live: ""
    },
    {
      name: "Stroke Prediction Project",
      description: "<p>Built a complete <strong>machine learning pipeline</strong> to predict <strong>stroke probability</strong> from health data using <strong>Python</strong> and <strong>Scikit-learn</strong>. Performed exploratory data analysis, feature engineering, and model training with advanced ensemble methods such as <strong>gradient boosting</strong> and <strong>XGBoost</strong>. Evaluated models using <strong>AUC-ROC</strong>, producing calibrated probability outputs for accurate risk prediction.</p>",
      languages: ["Python", "XGBoost", "Scikit-Learn", "Pipeline"],
      image: "",
      link: "",
      live: ""
    },
    {
      name: "MLB Hall of Fame Classifier",
      description: "<p>Developed a high-accuracy (<strong>96%</strong>) Decision Tree classifier to predict Baseball Hall of Fame inductions using the Lahman Database (1871–2023). Leveraging <strong>Python</strong>, <strong>MySQL</strong>, and <strong>scikit-learn</strong>, I performed extensive data cleaning and feature engineering with <strong>pandas</strong and SQL queries. Through iterative optimization of features and model tuning, the classifier achieved 95% accuracy in predicting HOF inductees.</p>",
      languages: ["Python", "Scikit-Learn", "Machine Learning", "MySQL", "Pandas"],
      image: "",
      link: "",
      live: ""
    },
    {
      name: "Movie Similarity Project",
      description: "<p>Implemented large-scale data processing workflows using <strong>Apache Spark</strong> to compute <strong>movie similarity scores</strong> across a dataset. Designed Spark applications that leverage parallel processing to efficiently generate pairwise similarity metrics and output results in a distributed, fault-tolerant manner.</p>",
      languages: ["Scala", "Apache Spark", "Distributed Computing", "Fault Tolerance"],
      image: "",
      link: "",
      live: ""
    },
    {
      name: "Distributed Password Hashing Service",
      description: "<p>Developed a <strong>Remote Procedure Call (RPC)</strong> system using <strong>Apache Thrift</strong> and <strong>Java</strong> to implement a distributed <strong>bcrypt password hashing service</strong>. Built front-end and back-end nodes that handle client requests, perform secure password hashing, and coordinate across multiple processes.</p>",
      languages: ["Java", "Apache Thrift", "RPC", "Distributed Computing", "Client-Server Communication"],
      image: "",
      link: "",
      live: ""
    },
    {
      name: "Fault-Tolerant Key-Value Store",
      description: "<p>Implemented a fault-tolerant <strong>key-value store</strong> in <strong>Java</strong> with <strong>primary–backup replication</strong>, using <strong>Apache ZooKeeper</strong> and Curator for coordination. Designed mechanisms for <strong>leader election</strong> and <strong>failure detection</strong>, ensuring consistency and reliability under replica crashes. Applied distributed coordination primitives including ephemeral and sequential znodes, watches, and client-server communication via <strong>Thrift</strong>.</p>",
      languages: ["Java", "Apache ZooKeeper", "Curator", "Distributed Computing", "Client-Server Communication"],
      image: "",
      link: "",
      live: ""
    },
    {
      name: "Parallel Matrix Multiplication",
      description: "<p>Developed a distributed <strong>matrix multiplication</strong> system using <strong>MPI</strong>, enabling multiple processes to compute large square matrix products in parallel. The solution partitions input matrices across processes, performs concurrent computation, and combines partial results into the final output, demonstrating scalable high-performance computing.</p>",
      languages: ["C", "MPI", "Parallel Computing"],
      image: "",
      link: "",
      live: ""
    }
]