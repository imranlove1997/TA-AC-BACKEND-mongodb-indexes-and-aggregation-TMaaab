var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema ({
    title: String,
    description: String,
    tags: [String]
});

articleSchema.index({ tags: 1 });
articleSchema.index({ $text: {title: 1}});

module.exports = mongoose.model('Article', articleSchema);