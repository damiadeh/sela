import mongoose from 'mongoose';
import db from './server';
import Project from './projectModel';

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    const projects = await Project.find().sort({ budget: -1 }),
          response = {
            msg: "Projects successfully found",
            data: projects
          }
    
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
    
  } catch (err) {
    console.log('product.Sort Descending',err) 
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}