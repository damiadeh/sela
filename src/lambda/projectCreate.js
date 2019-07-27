import mongoose from 'mongoose';
import db from './server';
import Project from './projectModel';

exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false

    try {
        const data = JSON.parse(event.body),
            name = data.name,
            city = data.city,
            state = data.state,
            details = data.details,
            status = parseInt(data.status),
            budget = parseInt(data.budget),
            id = mongoose.Types.ObjectId(),
            project = {
                _id: id,
                name: name,
                city: city,
                state: state,
                details: details,
                status: status,
                budget: budget,
                __v: 0
            },
            project2 = {
                budget: "20000000",
                city: "Ikeja",
                details: "lorem ipsam jyul.bIt helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render iLorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or compreh",
                name: "New construction",
                state: "Kaduna",
                status: "34",
            }
        response = {
            msg: "Project successfully created",
            data: project,
        }

        await Project.create(project2);
        return {
            statusCode: 201,
            body: JSON.stringify({
                msg: "Project successfully created",
                data: project,
            }),
            // body: JSON.stringify({msg :"Hello nigga"})
        }
    } catch (err) {
        console.log('project.create', err)
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message })
            // body: JSON.stringify({msg :"Hello nigga"})
        }
    }
}