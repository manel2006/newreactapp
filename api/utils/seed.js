// utils/seed.js
const User = require("../models/User");
const Post = require("../models/Post");

const mongoose = require("mongoose");

const seedDatabase = async () => {
  const userCount = await User.countDocuments();
  const postCount = await Post.countDocuments();

  if (userCount === 0) {
    console.log("📥 Insertion des utilisateurs...");
    const users = [
      {
        _id: new mongoose.Types.ObjectId("682b370181bd7b1a3b88a734"),
        profilePicture: "tlchargement-1747662631666-382651592.jpeg",
        coverPicture: "tlchargement-4-1747662641491-835358813.jpeg",
        followers: [],
        followings: [
          new mongoose.Types.ObjectId("682b389981bd7b1a3b88a73c"),
          new mongoose.Types.ObjectId("682b376081bd7b1a3b88a736")
        ],
        isAdmin: false,
        username: "raouf",
        email: "raouf@exemple.com",
        password: "$2b$10$P9y9dke.yO9s626eK.tPW./AsJy6QHCyTgcPT76bOalHFoTVY9mUq",
        createdAt: new Date("2025-05-19T13:49:53.356Z"),
        updatedAt: new Date("2025-05-19T14:01:11.301Z"),
      },
      {
        _id: new mongoose.Types.ObjectId("682b376081bd7b1a3b88a736"),
        profilePicture: "tlchargement-1-1747662787574-900367919.jpeg",
        coverPicture: "tlchargement-5-1747662802325-713545474.jpeg",
        followers: [new mongoose.Types.ObjectId("682b370181bd7b1a3b88a734")],
        followings: [],
        isAdmin: false,
        username: "cerine",
        email: "cerine.@exemple.com",
        password: "$2b$10$VNhVw7XbxROdGOuMBPGdUOuDG/74Nwt64m.sujJKVwhRo0mAyI79a",
        createdAt: new Date("2025-05-19T13:51:28.853Z"),
        updatedAt: new Date("2025-05-19T14:01:11.292Z"),
      },
      {
        _id: new mongoose.Types.ObjectId("682b380681bd7b1a3b88a739"),
        profilePicture: "tlchargement-2-1747662935918-992278837.jpeg",
        coverPicture: "tlchargement-6-1747662961378-101619571.jpeg",
        followers: [],
        followings: [],
        isAdmin: false,
        username: "manal",
        email: "manal@exemple.com",
        password: "$2b$10$eTfPP6COEDO0gpIJ3AL0Ve7fv1.sDmRoBIi6CExI/PeygAhtE1Tc.",
        createdAt: new Date("2025-05-19T13:54:14.828Z"),
        updatedAt: new Date("2025-05-19T13:56:01.386Z"),
      },
      {
        _id: new mongoose.Types.ObjectId("682b389981bd7b1a3b88a73c"),
        profilePicture: "tlchargement-3-1747663046342-636392022.jpeg",
        coverPicture: "tlchargement-7-1747663078854-471037234.jpeg",
        followers: [new mongoose.Types.ObjectId("682b370181bd7b1a3b88a734")],
        followings: [],
        isAdmin: false,
        username: "adel",
        email: "adel@exemple.com",
        password: "$2b$10$IWg.8gj2us7xSV4MF7YjKu4pTmbz59QE1NQlNWK34Gr1bmR6c1pru",
        createdAt: new Date("2025-05-19T13:56:41.311Z"),
        updatedAt: new Date("2025-05-19T14:00:02.896Z"),
      }
    ];

    await User.insertMany(users);
    console.log("✅ Utilisateurs insérés");
  }

  if (postCount === 0) {
    console.log("📥 Insertion des posts...");
    const posts = [
      {
        _id: new mongoose.Types.ObjectId("682b373181bd7b1a3b88a735"),
        userId: "682b370181bd7b1a3b88a734",
        desc: "",
        img: "tlchargement-4-1747662641491-835358813.jpeg",
        likes: [],
        createdAt: new Date("2025-05-19T13:50:41.523Z"),
        updatedAt: new Date("2025-05-19T13:50:41.523Z"),
      },
      {
        _id: new mongoose.Types.ObjectId("682b37d281bd7b1a3b88a737"),
        userId: "682b376081bd7b1a3b88a736",
        desc: "",
        img: "tlchargement-5-1747662802325-713545474.jpeg",
        likes: [],
        createdAt: new Date("2025-05-19T13:53:22.360Z"),
        updatedAt: new Date("2025-05-19T13:53:22.360Z"),
      },
      {
        _id: new mongoose.Types.ObjectId("682b37da81bd7b1a3b88a738"),
        userId: "682b376081bd7b1a3b88a736",
        desc: "hello gays",
        likes: [],
        createdAt: new Date("2025-05-19T13:53:30.566Z"),
        updatedAt: new Date("2025-05-19T13:53:30.566Z"),
      },
      {
        _id: new mongoose.Types.ObjectId("682b386581bd7b1a3b88a73a"),
        userId: "682b380681bd7b1a3b88a739",
        desc: "salut  cava les gars",
        likes: [],
        createdAt: new Date("2025-05-19T13:55:49.938Z"),
        updatedAt: new Date("2025-05-19T13:55:49.938Z"),
      },
      {
        _id: new mongoose.Types.ObjectId("682b387181bd7b1a3b88a73b"),
        userId: "682b380681bd7b1a3b88a739",
        desc: "",
        img: "tlchargement-6-1747662961378-101619571.jpeg",
        likes: [],
        createdAt: new Date("2025-05-19T13:56:01.442Z"),
        updatedAt: new Date("2025-05-19T13:56:01.442Z"),
      },
      {
        _id: new mongoose.Types.ObjectId("682b38d481bd7b1a3b88a73d"),
        userId: "682b389981bd7b1a3b88a73c",
        desc: "gamiing haha",
        likes: [],
        createdAt: new Date("2025-05-19T13:57:40.381Z"),
        updatedAt: new Date("2025-05-19T13:57:40.381Z"),
      },
      {
        _id: new mongoose.Types.ObjectId("682b38e681bd7b1a3b88a73e"),
        userId: "682b389981bd7b1a3b88a73c",
        desc: "",
        img: "tlchargement-7-1747663078854-471037234.jpeg",
        likes: [],
        createdAt: new Date("2025-05-19T13:57:58.913Z"),
        updatedAt: new Date("2025-05-19T13:57:58.913Z"),
      }
    ];

    await Post.insertMany(posts);
    console.log("✅ Posts insérés");
  }
};

module.exports = seedDatabase;
