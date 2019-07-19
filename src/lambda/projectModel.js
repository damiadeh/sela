import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, 'Name field is required'],
        max: 50
    },
    city: {
        type: String,
        required: [true, 'City field is required'],
        max: 15
    },
    state: {
        type: String,
        required: [true, 'State field is required'],
        max: 15
    },
    projectImageUrl: {
        type: String,
    },
    contractorImageUrl1: {
        type: String,
    },
    contractorImageUrl2: {
        type: String,
    },
    contractorImageUrl3: {
        type: String,
    },
    details: {
        type: String,
        required: [true, 'Please provide project details'],
    },
    status: {
        type: Number,
        required: [true, 'Status field is required(0-100%)'],
        max: 100
    },
    budget: {
        type: Number,
        required: [true, 'Budget field is required']
    }
}),
Project = mongoose.model('project', schema);

export default Project;