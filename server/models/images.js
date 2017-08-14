// 필요한 것 로딩
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// image 모델의 스키마 정의
var imageSchema = mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	imageName: {
		type: String
	},
	user:{
		type: Schema.ObjectId,
		ref: 'User'
	}
});

// image 모델을 생성하고 앱에 공개
module.exports = mongoose.model('Images', imageSchema);
