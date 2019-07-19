import mongoose from 'mongoose';
import db from './db';
import Project from '../models/project.model';

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    const projects = await Project.find(),
          response = {
            msg: "Projects successfully found",
            data: projects
          }
    
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
    
  } catch (err) {
    console.log('product.read',err) 
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}