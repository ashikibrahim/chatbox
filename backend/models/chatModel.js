const mongoose = require('mongoose')
const chatModel = mongoose.Schema(
    {
        chatName : { type:String,trim: true},
        isGroupChat : {type:Boolean, default: false},
        users:[{
            // reference to the particular user
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],
    // latest message is for displaying last message when we open and list users. 
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
    },
    groupAdmin: {
        type:mongoose.Schema.Types.ObjectId,
         ref:"User",
        },
    }
    ,{
        timeStamps: true,
    }
);

const Chat = mongoose.model("Chat",chatModel);

module.exports = Chat;