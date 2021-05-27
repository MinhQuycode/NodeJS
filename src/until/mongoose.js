//xử lý vấn đề handleBar
module.exports = {
    mutipleMongooseToObject: function (mongoosesArr) {
        return mongoosesArr.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
