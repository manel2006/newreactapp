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
        _id: new mongoose.Types.ObjectId('682b370181bd7b1a3b88a734'),
        profilePicture: '1000378831-1747772542419-217706825.jpg',
        coverPicture: '1000378828-1747772563987-917720357.jpg',
        followers: [
          new mongoose.Types.ObjectId('682b376081bd7b1a3b88a736'),
          new mongoose.Types.ObjectId('682b389981bd7b1a3b88a73c')
        ],
        followings: [
          new mongoose.Types.ObjectId('682b376081bd7b1a3b88a736'),
          new mongoose.Types.ObjectId('682b389981bd7b1a3b88a73c'),
          new mongoose.Types.ObjectId('682b380681bd7b1a3b88a739')
        ],
        isAdmin: false,
        username: 'raouf',
        email: 'raouf@exemple.com',
        password: '$2b$10$P9y9dke.yO9s626eK.tPW./AsJy6QHCyTgcPT76bOalHFoTVY9mUq',
        createdAt: new Date('2025-05-19T13:49:53.356Z'),
        updatedAt: new Date('2025-05-20T20:28:35.224Z'),
        __v: 15
      },
      {
        _id: new mongoose.Types.ObjectId('682b376081bd7b1a3b88a736'),
        profilePicture: 'photo2025-05-0503-48-14-1747772147732-892431155.jpg',
        coverPicture: '',
        followers: [
          new mongoose.Types.ObjectId('682b370181bd7b1a3b88a734'),
          new mongoose.Types.ObjectId('682b389981bd7b1a3b88a73c'),
          new mongoose.Types.ObjectId('682b380681bd7b1a3b88a739')
        ],
        followings: [
          new mongoose.Types.ObjectId('682b389981bd7b1a3b88a73c'),
          new mongoose.Types.ObjectId('682b370181bd7b1a3b88a734'),
          new mongoose.Types.ObjectId('682b380681bd7b1a3b88a739')
        ],
        isAdmin: false,
        username: 'cerine',
        email: 'cerine@exemple.com',
        password: '$2b$10$VNhVw7XbxROdGOuMBPGdUOuDG/74Nwt64m.sujJKVwhRo0mAyI79a',
        createdAt: new Date('2025-05-19T13:51:28.853Z'),
        updatedAt: new Date('2025-05-20T20:31:36.871Z'),
        __v: 13,
        city: '',
        from: '',
        relationship: 1
      },
      {
        _id: new mongoose.Types.ObjectId('682b380681bd7b1a3b88a739'),
        profilePicture: '1000378829-1747772711191-696377240.jpg',
        coverPicture: '1000378826-1747772729563-788412538.jpg',
        followers: [
          new mongoose.Types.ObjectId('682b389981bd7b1a3b88a73c'),
          new mongoose.Types.ObjectId('682b370181bd7b1a3b88a734'),
          new mongoose.Types.ObjectId('682b376081bd7b1a3b88a736')
        ],
        followings: [
          new mongoose.Types.ObjectId('682b389981bd7b1a3b88a73c'),
          new mongoose.Types.ObjectId('682b376081bd7b1a3b88a736')
        ],
        isAdmin: false,
        username: 'manal',
        email: 'manal@exemple.com',
        password: '$2b$10$eTfPP6COEDO0gpIJ3AL0Ve7fv1.sDmRoBIi6CExI/PeygAhtE1Tc.',
        createdAt: new Date('2025-05-19T13:54:14.828Z'),
        updatedAt: new Date('2025-05-20T20:31:36.865Z'),
        __v: 13
      },
      {
        _id: new mongoose.Types.ObjectId('682b389981bd7b1a3b88a73c'),
        profilePicture: '1000378832-1747772619050-225159843.jpg',
        coverPicture: '1000378830-1747772631054-592307103.jpg',
        followers: [
          new mongoose.Types.ObjectId('682b376081bd7b1a3b88a736'),
          new mongoose.Types.ObjectId('682b370181bd7b1a3b88a734'),
          new mongoose.Types.ObjectId('682b380681bd7b1a3b88a739')
        ],
        followings: [
          new mongoose.Types.ObjectId('682b376081bd7b1a3b88a736'),
          new mongoose.Types.ObjectId('682b370181bd7b1a3b88a734'),
          new mongoose.Types.ObjectId('682b380681bd7b1a3b88a739')
        ],
        isAdmin: false,
        username: 'adel',
        email: 'adel@exemple.com',
        password: '$2b$10$IWg.8gj2us7xSV4MF7YjKu4pTmbz59QE1NQlNWK34Gr1bmR6c1pru',
        createdAt: new Date('2025-05-19T13:56:41.311Z'),
        updatedAt: new Date('2025-05-20T20:28:44.048Z'),
        __v: 13
      },
      {
        _id: new mongoose.Types.ObjectId('682cda2137ba83126427c36b'),
        profilePicture: '1000378827-1747772986808-73947676.jpg',
        coverPicture: '',
        followers: [],
        followings: [],
        isAdmin: false,
        username: 'maissa',
        email: 'maissa@exemple.com',
        password: '$2b$10$obITIrB3ZaQEfVPZvOvApeifgJkeMRZ1WXEt6LCgOY0lokvVB5GQO',
        createdAt: new Date('2025-05-20T19:38:09.961Z'),
        updatedAt: new Date('2025-05-20T20:29:46.832Z'),
        __v: 0
      }
    ];
    await User.insertMany(users);
    console.log("✅ Utilisateurs insérés");
  }

  if (postCount === 0) {
    console.log("📥 Insertion des posts...");
    const posts = [
      {
        _id: new mongoose.Types.ObjectId('682cd88137ba83126427c367'),
        likes: [],
        userId: '682b370181bd7b1a3b88a734',
        desc: '',
        img: 'img6393-1747769473482-648056170.jpeg',
        createdAt: new Date('2025-05-20T19:31:13.539Z'),
        updatedAt: new Date('2025-05-20T19:31:13.539Z'),
        __v: 0
      },
      {
        _id: new mongoose.Types.ObjectId('682cd93937ba83126427c368'),
        likes: [],
        userId: '682b376081bd7b1a3b88a736',
        desc: '',
        img: 'img6395-1747769657541-595121968.jpeg',
        createdAt: new Date('2025-05-20T19:34:17.582Z'),
        updatedAt: new Date('2025-05-20T19:34:17.582Z'),
        __v: 0
      },
      {
        _id: new mongoose.Types.ObjectId('682cd99437ba83126427c369'),
        likes: [],
        userId: '682b380681bd7b1a3b88a739',
        desc: '',
        img: 'img6396-1747769748827-54984711.jpeg',
        createdAt: new Date('2025-05-20T19:35:48.854Z'),
        updatedAt: new Date('2025-05-20T19:35:48.854Z'),
        __v: 0
      },
      {
        _id: new mongoose.Types.ObjectId('682cd9d637ba83126427c36a'),
        likes: [],
        userId: '682b389981bd7b1a3b88a73c',
        desc: '',
        img: 'img6397-1747769814696-333970899.jpeg',
        createdAt: new Date('2025-05-20T19:36:54.735Z'),
        updatedAt: new Date('2025-05-20T19:36:54.735Z'),
        __v: 0
      },
      {
        _id: new mongoose.Types.ObjectId('682cda5237ba83126427c36c'),
        likes: [],
        userId: '682cda2137ba83126427c36b',
        desc: '',
        img: 'img6398-1747769938351-650997749.jpeg',
        createdAt: new Date('2025-05-20T19:38:58.396Z'),
        updatedAt: new Date('2025-05-20T19:38:58.396Z'),
        __v: 0
      },
      {
        _id: new mongoose.Types.ObjectId('682ce49437ba83126427c36e'),
        likes: [],
        userId: '682b370181bd7b1a3b88a734',
        desc: '',
        img: '1000378828-1747772563987-917720357.jpg',
        createdAt: new Date('2025-05-20T20:22:44.017Z'),
        updatedAt: new Date('2025-05-20T20:22:44.017Z'),
        __v: 0
      },
      {
        _id: new mongoose.Types.ObjectId('682ce4d737ba83126427c36f'),
        likes: [],
        userId: '682b389981bd7b1a3b88a73c',
        desc: '',
        img: '1000378830-1747772631054-592307103.jpg',
        createdAt: new Date('2025-05-20T20:23:51.082Z'),
        updatedAt: new Date('2025-05-20T20:23:51.082Z'),
        __v: 0
      },
      {
        _id: new mongoose.Types.ObjectId('682ce53937ba83126427c370'),
        likes: [],
        userId: '682b380681bd7b1a3b88a739',
        desc: '',
        img: '1000378826-1747772729563-788412538.jpg',
        createdAt: new Date('2025-05-20T20:25:29.594Z'),
        updatedAt: new Date('2025-05-20T20:25:29.594Z'),
        __v: 0
      }
    ];
    await Post.insertMany(posts);
    console.log("✅ Posts insérés");
  }
};

module.exports = seedDatabase;