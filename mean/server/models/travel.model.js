const mongoose = require("mongoose");

const tvSchema = mongoose.Schema(
    {
        tv: { type: Number, required: true },
        titletv: { type: String, required: true  },
        detail: { type: String, required: true },
        titleid: { type: String, required: true },
        createdAt: {type: Date,default: Date.now},
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("Tv", tvSchema);